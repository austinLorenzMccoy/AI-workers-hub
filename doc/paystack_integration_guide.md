# Paystack Integration Guide (Beginner-Friendly)

This guide walks through wiring up real Paystack payouts for this app,
assuming you've never touched Paystack before. It covers what's
already built in the codebase, what you still need to do by hand, and
what to watch out for before you send real money.

**Who this is for:** someone setting up Paystack for the first time on
this project — no prior Paystack experience assumed.

**Where the code lives**, so you can follow along:
- `frontend/lib/paystack.ts` — the Paystack API client (all requests go through here)
- `frontend/lib/crypto.ts` — encrypts the sensitive `paystack_recipient_code` field
- `frontend/app/api/payouts/process/route.ts` — settles referral commissions / worker early-pay requests
- `frontend/app/api/payments/process/route.ts` — settles month-end salary from an issued pay slip
- `frontend/app/admin/page.tsx` — Control Tower, where you paste a worker/referrer's Paystack recipient code
- `frontend/app/pay-slips/page.tsx` — where an admin/manager issues a pay slip and clicks "Mark Paid"
- `frontend/app/referrals/page.tsx` — where an admin clicks "Mark Paid" on a payout request

---

## 1. What Paystack does here, in plain terms

Paystack is a payment processor. This app uses only one part of it:
**Transfers** — sending money *out* from your Paystack balance to
someone's bank account. (It does not use Paystack to *collect*
payments from anyone.)

Two flows in this app use it:

1. **Month-end salary** — an admin/manager issues a pay slip, then
   later clicks "Mark Paid." The app tries to transfer the pay slip's
   `expected_amount_usd` to the worker's bank account via Paystack.
2. **Referral / early-pay payouts** — an admin approves a payout
   request, then clicks "Mark Paid." Same mechanism, different table.

Both flows are built to **never block an admin**: if Paystack isn't
set up yet, or the person has no bank details on file, the app just
lets the admin record the payment as settled manually (e.g. they paid
by bank transfer outside the app) instead of erroring out.

---

## 2. Key vocabulary (read this before anything else)

| Term | What it means here |
|---|---|
| **Secret key** | A password-like string (`sk_test_...` or `sk_live_...`) that lets your server talk to the Paystack API. Never expose this in frontend code — it only ever lives in `PAYSTACK_SECRET_KEY` on the server. |
| **Test mode vs Live mode** | Paystack gives you two separate sets of keys. Test mode simulates transfers with fake bank accounts — nothing real happens. Live mode moves real money. Always build and verify in test mode first. |
| **Transfer Recipient** | A saved "who to pay" record on Paystack's side — a bank account tied to a `recipient_code` (looks like `RCP_xxxxxxxxx`). You create one *per person* before you can pay them. |
| **`bank_code`** | Paystack's internal ID for a bank (e.g. Nigerian GTBank might be `058`). You look this up via Paystack's List Banks endpoint or dashboard — it's not something you invent. |
| **Minor units** | Paystack amounts are always in the smallest currency unit — kobo for NGN, cents for USD, pesewas for GHS. `100` in the API means "1 unit of currency," not "100 units." |
| **Transfer** | The actual money movement, sent to a recipient's `recipient_code` for a given amount. This is what `initiateTransfer()` in `lib/paystack.ts` calls. |

---

## 3. Step-by-step setup (test mode)

### Step 1 — Create a Paystack account

Go to [paystack.com](https://paystack.com) and sign up. You don't need
to complete business verification to use test mode.

### Step 2 — Grab your test secret key

In the Paystack Dashboard: **Settings → API Keys & Webhooks**. Copy the
key that starts with `sk_test_`. Keep this tab open — you'll need the
**Test Bank Account** numbers from Paystack's docs later (step 6).

### Step 3 — Set your environment variables

In `frontend/.env.local` (create it from `frontend/.env.example` if you
haven't already):

```bash
PAYSTACK_SECRET_KEY=sk_test_REPLACE_WITH_YOUR_PAYSTACK_KEY
FIELD_ENCRYPTION_KEY=any-long-random-string-you-make-up
```

- `PAYSTACK_SECRET_KEY` — the key from Step 2.
- `FIELD_ENCRYPTION_KEY` — this app encrypts `paystack_recipient_code`
  at rest before saving it to the database, so it's never stored as
  plain text. This can be any long random string — generate one with:
  ```bash
  openssl rand -base64 32
  ```

Restart your dev server after editing `.env.local` (Next.js only
reads env files at startup).

> **Note:** if you deploy this app (Vercel, Railway, etc.), you must
> also set these two variables in that platform's environment variable
> settings — `.env.local` only affects your own machine.

### Step 4 — Confirm it's picked up

`lib/paystack.ts` exports `isPaystackConfigured()`, which just checks
whether `PAYSTACK_SECRET_KEY` is set. You don't need to call this
yourself — every route that touches Paystack checks it first and
degrades gracefully if it's missing. If you see toast messages like
*"PAYSTACK_SECRET_KEY is not set..."* in the app, your env var isn't
loaded — double check the file name and restart the server.

### Step 5 — Create a Transfer Recipient for a test worker

This is the part that currently has **no UI** — you do it by hand,
once per person, using `curl` (or Postman) against Paystack's API
directly. Copy this, swap in your test key and details:

```bash
curl https://api.paystack.co/transferrecipient \
  -H "Authorization: Bearer sk_test_REPLACE_WITH_YOUR_PAYSTACK_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "nuban",
    "name": "Ada Okonkwo",
    "account_number": "0000000000",
    "bank_code": "058",
    "currency": "NGN"
  }'
```

- `account_number: "0000000000"` is one of Paystack's documented test
  account numbers (test mode only — see Paystack's
  [Test Cards & Accounts docs](https://paystack.com/docs/payments/test-payments/)
  for the current list; they occasionally change theirs).
- `bank_code` — look this up via
  `GET https://api.paystack.co/bank` (same Authorization header) to
  get the full list of banks and their codes for your country.
- `type` — `"nuban"` for Nigerian bank accounts. Paystack supports
  other types (`mobile_money`, `basa`, etc.) for other countries —
  check their docs for your recipient's country.

The response includes a `data.recipient_code` field, something like
`RCP_a1b2c3d4e5`. **Copy this value** — it's what you paste into the
app next.

> This exact request is also available as a typed helper in the
> codebase — `createTransferRecipient()` in `frontend/lib/paystack.ts`
> — but nothing calls it yet (see §5, gap #1). Doing it via `curl` for
> now gets you unblocked without writing code.

### Step 6 — Paste the recipient code into Control Tower

1. Log into the app as an admin.
2. Go to **Control Tower → Users & Roles**.
3. Click **Edit Role** on the worker/referrer you created a recipient
   for in Step 5.
4. Find the **Paystack Payout Code** field and paste the
   `recipient_code` (e.g. `RCP_a1b2c3d4e5`).
5. Click **Save**.

This gets encrypted and stored on that user's `app_users` row. Nobody
(including you, later, via the API) can read it back in plain text —
the UI only ever shows a masked placeholder once it's set. If you ever
need to change it, you type a new one; there's a **Clear** button next
to the field if you need to remove it entirely.

### Step 7 — Issue a pay slip and mark it paid

1. Go to **Pay Slips** (admin/manager).
2. Issue a pay slip for the worker from Step 6, with some
   `expected_amount_usd`.
3. Click **Mark Paid** on that pay slip's row.

What happens under the hood (`frontend/app/api/payments/process/route.ts`):
1. Checks `PAYSTACK_SECRET_KEY` is set → yes (you did Step 3).
2. Looks up the worker's `paystack_recipient_code`, decrypts it.
3. Calls `initiateTransfer()` with the amount and recipient.
4. On success, marks the pay slip `paid` in the database and shows
   "Payment sent via Paystack."

In test mode, this transfer is simulated — no real money moves, but
you'll see a real response object back from Paystack, and you can find
the transfer logged in your Paystack Dashboard under **Transfers**.

### Step 8 — Same flow for referral payouts

Identical mechanism, different page: **Referrals & Payouts → Mark Paid**
on a payout request, handled by
`frontend/app/api/payouts/process/route.ts`. If you've completed
Steps 1–6 for a referrer instead of a worker, this works the same way.

---

## 4. Going from test mode to live mode

1. Complete Paystack's business verification (Settings → Business,
   they'll ask for your business registration details — this can take
   a few days for approval).
2. Fund your Paystack balance — transfers pull from your available
   balance, not straight from a card. You top this up via bank
   transfer to your Paystack account.
3. Switch your dashboard to **Live mode** and copy the `sk_live_...`
   key.
4. Replace `PAYSTACK_SECRET_KEY` with the live key in your production
   environment (never commit it, never put it in `.env.example`).
5. Re-create each real worker/referrer's Transfer Recipient using
   their *real* bank details, in live mode (test-mode recipients don't
   carry over).
6. Do a small real transfer first (e.g. the minimum amount Paystack
   allows) before running full payroll through it.

---

## 5. Known gaps — read before paying anyone for real

These are real, unresolved limitations in the current implementation.
Don't skip this section if actual money is involved.

### Gap 1 — No in-app UI to create a Transfer Recipient

Right now, getting a `recipient_code` requires the manual `curl` step
in §3 Step 5. There's no form in the app that collects a worker's bank
account number and bank, and calls `createTransferRecipient()` (which
already exists in `lib/paystack.ts`, just isn't wired to anything).
Building this is the natural next step — it would live somewhere in
Control Tower or on the worker's own profile.

### Gap 2 — Currency mismatch (important)

The app tracks pay slip and payout amounts as plain `_usd` numbers
(`expected_amount_usd`, `amount_usd`). But `createTransferRecipient()`
defaults `currency` to `'NGN'`, and both processing routes do:

```ts
const amountMinorUnits = Math.round(Number(payout.amount_usd) * 100)
```

This takes the USD-labeled number and sends it to Paystack **as-is**,
with no currency conversion. If a pay slip says `expected_amount_usd:
500`, the transfer that actually goes out is **₦500.00** (or whatever
currency the recipient's account uses) — not $500 worth of that
currency. There is currently no exchange-rate step anywhere in the
code.

Before paying anyone for real, decide one of:
- **(a)** Treat the `_usd` fields as informal/display-only, and always
  type the real local-currency settlement amount directly (i.e. the
  number in the database *is* the NGN/GHS/ZAR amount, the "USD" label
  in the UI is just cosmetic and should be changed).
- **(b)** Add a real exchange-rate lookup (e.g. a daily rate from a
  currency API) and convert before calling `initiateTransfer()`.

Whichever you pick, it needs code changes to `lib/paystack.ts` and
both `.../process/route.ts` files — ask before assuming (a) is fine,
since it means relabeling UI text across several pages.

### Gap 3 — No webhook / final-status confirmation

`initiateTransfer()`'s response (`result.ok`) reflects that Paystack
*accepted* the transfer request — not that it has *finished
successfully*. Paystack transfers can be asynchronous: some require
OTP confirmation, or can fail/reverse after being accepted. The app
currently marks a pay slip/payout `paid` as soon as `result.ok` is
true, without checking final status via `verifyTransfer()` (which
exists in `lib/paystack.ts` but isn't called) or listening for
Paystack's `transfer.success` / `transfer.failed` webhook events (no
webhook endpoint exists in this app yet).

For low-stakes/test use this is fine. For production payroll, add a
webhook route (`/api/webhooks/paystack`, verifying Paystack's
signature header) that reconciles `payments`/`payout_requests` rows
when the async result comes back, rather than trusting the initial
response alone.

### Gap 4 — Duplicate-payment protection is partial

There's a database-level guard (`idx_payments_one_paid_per_slip`, a
unique index) that stops two "Mark Paid" clicks from *recording* two
paid rows for the same pay slip. But if two admins click "Mark Paid"
within the same instant, it's possible for **two real Paystack
transfers** to fire before either request reaches the database check
— the guard prevents the double *record*, not necessarily the double
*transfer*. In practice this is a narrow race window, but it's worth
knowing about if multiple admins/managers might act on the same pay
slip at once.

---

## 6. Troubleshooting

| Symptom | Likely cause |
|---|---|
| Toast says "PAYSTACK_SECRET_KEY is not set..." | Env var missing or dev server wasn't restarted after adding it. |
| Toast says "This worker has no Paystack recipient code on file yet" | You haven't done §3 Steps 5–6 for that person. |
| Paystack API returns `401 Unauthorized` | Wrong or expired secret key, or you're mixing test/live keys (e.g. using a live recipient_code with a test secret key, or vice versa). |
| Transfer request succeeds but money never "arrives" (test mode) | Expected — test mode never moves real money, it just simulates the API response. Check the Paystack Dashboard's Transfers log to confirm it registered. |
| "A payment for this pay slip was already recorded" | Someone already marked it paid — check the pay slip's Payment column, or the `payments` table, before retrying. |
| Bank code lookup returns unfamiliar codes | You're hitting the bank list for the wrong country — Paystack's `/bank` endpoint takes a `country` query param (defaults to Nigeria). |

---

## 7. Quick reference — file map

| File | Role |
|---|---|
| `frontend/lib/paystack.ts` | Low-level Paystack API client: `isPaystackConfigured`, `createTransferRecipient`, `initiateTransfer`, `verifyTransfer` |
| `frontend/lib/crypto.ts` | `encryptField` / `decryptField` / `getDecryptedRecipientCode` — encrypts `paystack_recipient_code` at rest |
| `frontend/app/api/payments/process/route.ts` | Settles month-end salary from a pay slip |
| `frontend/app/api/payouts/process/route.ts` | Settles referral commission / worker early-pay requests |
| `frontend/app/pay-slips/page.tsx` | Issue pay slips, "Mark Paid" button |
| `frontend/app/referrals/page.tsx` | Approve referrals, "Mark Paid" button on payout requests |
| `frontend/app/admin/page.tsx` | Set/clear a user's `paystack_recipient_code` |
| `frontend/.env.example` | Documents the required env vars |
