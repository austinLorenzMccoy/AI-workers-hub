# Maps Search Evaluation Guidelines

*March 2025*

> **Note on this conversion:** This Markdown version was generated from the original PDF. Screenshots and other images embedded in the source document are not reproduced here. Some example tables that combine screenshots with short data columns (Query/Result/Rating/Explanation, POI/Screenshot/Explanation, etc.) are kept in their original spaced-out layout rather than converted to Markdown tables, since the source's multi-column screenshot tables don't reliably extract into clean rows/columns as text.

## Table of Contents

- 1. Introduction
  - 1.1.The Rating Tool
  - 1.2.Rating Workflow
  - 1.3.Rating Interface
    - 1.3.1.Query-Level Navigational Result Question
    - 1.3.2.Result-Level Rating Checkboxes
    - 1.3.3.Result Relevance Rating
    - 1.3.4.Result Relevance Demotion Checkboxes
    - 1.3.5.Data Accuracy
    - 1.3.6.Comments
- 2. Understanding User Intent
  - 2.1.Query Types
    - 2.1.1.Research Expectation
  - 2.2.Result Types
  - 2.3.Location Intent
    - 2.3.1.Explicit Location
    - 2.3.2.Implicit Location
- 3. Rating the Query-Level Navigational Result Question
- 4. Rating Result-Level Issues
  - 4.1.Result Name/Title in Unexpected Language or Script
    - 4.1.1.Name of Business/POI Results
    - 4.1.2.Title of Address Results
  - 4.2.Business/POI is Closed or Does not Exist
    - 4.2.1.Closed/Does Not Exist vs. Inaccurate Name and Address
    - 4.2.2.Rating Relevance of Closed/Non-Existing Business/POI
  - 4.3.Business/POI Status is PERMANENT_CLOSURE
    - 4.3.1.No Status Shown
    - 4.3.2.Status Shown as PERMANENT_CLOSURE
- 5. Relevance
  - 5.1.Query-Result Connection
    - 5.1.1. General Connection
    - 5.1.2. Abbreviation/Alternate Name Connection
    - 5.1.3. Category Connection
    - 5.1.4. Spell Correction Connection
    - 5.1.5. Transit Intent Connection
    - 5.1.6. Special Character Connection
    - 5.1.7. Address-Result Connection
    - 5.1.8. Lack of Connection
  - 5.2. Satisfying User Intent
  - 5.3.Prominence
  - 5.4.Distance
  - 5.5.Distance vs. Prominence
  - 5.6.Many Possible Results
  - 5.7.Few Possible Results
  - 5.8.Few Possible Results and Greater Distance
  - 5.9.Rural Areas
  - 5.10.Location – User Intent Deviation
  - 5.11.Rating for User Inside and Outside Viewport
  - 5.12.Partial Address Does Not Exist
  - 5.13.City vs. Municipality
  - 5.14.Unexpected Results
  - 5.15. Multiple Transit POIs with the Same Name
  - 5.16.POIs and Transit Intent
    - 5.16.1.Transit Queries
    - 5.16.2.Stops vs. Stations
  - 5.17.Parking Intent
  - 5.18.Relevance: Service-Level Mismatch
  - 5.19.Rating Relevance When the Result Status is PERMANENT_CLOSURE
    - 5.19.1.Expected PERMANENT_CLOSURE Status
      - 5.19.1.1.Expected PERMANENT_CLOSURE Status: Navigational Query
      - 5.19.1.2.Expected PERMANENT_CLOSURE Status: All chains closed in area
    - 5.19.2.Unexpected PERMANENT_CLOSURE Status
      - 5.19.2.1.Unexpected PERMANENT_CLOSURE Status: Open Options are Nearby
- 6. Name and Category Accuracy
  - 6.1.Name Not Applicable (n/a)
  - 6.2.Result Names
    - 6.2.1. Correct Name
    - 6.2.2. Partially Correct Name
      - 6.2.2.1. Minor and Moderate Misspellings and Missing or Extra Words
      - 6.2.2.2. Service-Level Mismatch
      - 6.2.2.3. Holding Name and Corporate Structure
    - 6.2.3. Incorrect Name
  - 6.3 Result Category
    - 6.3.1. Correct Category
    - 6.3.2. Incorrect Category
  - 6.4. Can’t Verify
  - 6.5 Transit Names
  - 6.6. Parking Names
  - 6.7. Final Name and Category Accuracy Rating (Summary Table)
- 7. Address Accuracy: Components and Issues
  - 7.1.Address Components
    - 7.1.1.Street Number
    - 7.1.2.Unit/Apt
    - 7.1.3.Street Name
    - 7.1.4.Sub-Locality and Administrative Subdivisions
    - 7.1.5.Locality
    - 7.1.5.Region or State
    - 7.1.6.Postal Code
    - 7.1.7.Country
  - 7.2.Address Does Not Exist
  - 7.3.Language/Script Issue in Address
  - 7.4.Country-Specific Issue
    - 7.4.1.Country-Specific Issue vs. Correct with Formatting Issue
  - 7.5.Other Issue
  - 7.6.Correct with Formatting Issue
  - 7.7.Can’t Verify
    - 7.7.1.Can’t Verify for Street Number
    - 7.7.2.Can’t Verify for Street Name
- 8. Address Accuracy: Result Expectations
  - 8.1.Business/POI Result
    - 8.1.1.Business/POI Address Research and Resources
    - 8.1.2.Alternative Official Addresses
      - 8.1.2.1.Department Addresses
      - 8.1.2.2.Result Missing the Street Address
      - 8.1.2.3.P.O. Box, Mailing Addresses, and Management Offices
    - 8.1.3.Businesses/POI with Moving Locations
    - 8.1.4.Events
  - 8.2.Address Type Results
    - 8.2.1.Address Result
    - 8.2.2.Address Formats
    - 8.2.3.Street Result
    - 8.2.4.Locality Result
    - 8.2.5.Postal Code Result
    - 8.2.6.State/Region/Territory Result
    - 8.2.7.Country Result
  - 8.3.Features Without an Expected Address
    - 8.3.1.Natural Features
    - 8.3.2.POIs Without an Expected Address
      - 8.3.2.1.Minimum Address Component
      - 8.3.2.2.Official Address Present
      - 8.3.2.3.No Official Address
- 9. Pin Accuracy
  - 9.1.Pin Rating Options
    - 9.1.1.Perfect
      - 9.1.1.1. Does the available evidence indicate the result’s precise location?
    - 9.1.2.Approximate
    - 9.1.3.Next Door
    - 9.1.4. Wrong
    - 9.1.5. Can’t Verify (Smallest Identified Area)
  - 9.2. Research Expectations
    - 9.2.1. Research Resources
    - 9.2.2. Best Available Evidence
  - 9.3. Boundaries of the Feature
    - 9.3.1. Half ’n Half and Tennis Rules
    - 9.3.2. Boundaries in Shared Spaces
      - 9.3.2.1. No Next Door for Shared Spaces
    - 9.3.3. Map View Layers
      - 9.3.3.1. Satellite Imagery vs. Vector Map
    - 9.3.4. Pin Display Issues
      - 9.3.4.1. Leaning Buildings
      - 9.3.4.2. Pin Missing or Falls on 0,0
  - 9.4.Single Rooftop
    - 9.4.1.Residential Property with Multiple Buildings
  - 9.5.Multiple Rooftops
    - 9.5.1.Multiple-Rooftop Rating
    - 9.5.2.Campus Rating
      - 9.5.2.1.Single-Complex Campus
      - 9.5.2.2.Dispersed Campus
  - 9.6.Features Without a Rooftop
    - 9.6.1.Natural Features
    - 9.6.2.Administrative Divisions
    - 9.6.3.Streets
  - 9.7.Parking Lots and Structures
  - 9.8.Transit POIs
    - 9.8.1.Bus, Tram, and Streetcar Stops
    - 9.8.2.Transit POI with Multiple Rooftops/Platforms
    - 9.8.3.Transit POIs with a Single Rooftop
    - 9.8.4.Underground Transit Stations
      - 9.8.4.1.How to Establish an Entrance Polygon
      - 9.8.4.2.Examples
- 10.How to Rate Results
  - 10.1.Specific Address
  - 10.2.Non-Specific Address
  - 10.3.Query Address Does Not Exist
  - 10.4.Point of Interest
  - 10.5. Understanding Multiple Query Interpretations: Beyond Viewport and User Location
  - 10.6. Business Queries
    - 10.6.1. Non-Chain Businesses
    - 10.6.2. Chain Businesses
    - 10.6.3. Chain Business With Location Modifier
      - 10.6.3.1. General Location Modifier
      - 10.6.3.2. Specific Location Modifier
    - 10.6.4. Back Office and Businesses with No Physical Location
    - 10.6.5. Business/POI Does Not Exist
  - 10.7.Category Queries
    - 10.7.1.Demotion for Distance with User Inside Viewport
    - 10.7.2.Demotion for Distance with User Outside Viewport
    - 10.7.3.Demotion for Distance with Fewer Possible Results
    - 10.7.4.Category Queries and User Intent
    - 10.7.5.Category Queries and Prominence
    - 10.7.6.Category Query with Location Modifier
    - 10.7.7.Navigational Results for Category Queries
    - 10.7.8.Clear Categories
    - 10.7.9.Soft Categories
    - 10.7.10.Category Query: Parking
  - 10.8.Rating Results with PERMANENT_CLOSURE Status
    - 10.8.1.Expected PERMANENT_CLOSURE Status
    - 10.8.2.Unexpected PERMANENT_CLOSURE Status
  - 10.9.Other Query Types
    - 10.9.1.Routing Queries
    - 10.9.2.Coordinate and “My Location” Queries
  - 10.10.Unclear Results
- 11.Top Rating Tips
  - 11.1.What’s the relevance when query is business/POI name and address and the result is only the address?
  - 11.2.What’s the relevance when the query is a street name and the result is a single business on that street?
  - 11.3.How do I know what the location intent is when user is outside/inside a fresh viewport?
  - 11.4.How do I know what the location intent is when user is outside/inside a stale viewport?
  - 11.5.This full address result does not exist. How do I rate it?
- Appendix: Release Survey

---

# 1. Introduction

Welcome to Maps Search Evaluation. These guidelines will teach you how to use the evaluation tool and rate Maps Search results.

For each task, you will be presented with a search query and the results that are provided to Maps users. The goals of this task are:

- Search Relevance and Search 2.0: To determine how well the results satisfy the user's query (result relevance)
- Search 2.0 only: To check the data accuracy (name, address, and pin location) of the results

Note: Examples shown in this document reflected real locations at the time of creation. The examples continue to demonstrate the rating principles described even if a business or point of interest has changed.

## 1.1. The Rating Tool

This is the web-based rating tool used to rate Search 2.0 and Search Relevance queries.

**Anatomy of the Tool**

*(Note: the original document illustrates each item below with a tool screenshot; screenshots are not reproduced here.)*

- **Task Bar**: The task bar shows:
  - Task Type: The name of the task.
  - Task ID: A number that identifies the specific task item. Use this number whenever you communicate about a task or rating.
  - Request ID: A reference number for internal use only. Do not use this number to communicate about a task or rating.
  - Estimated Rating Time: Time to rate all results
- **Rating Guidelines**: The Rating Guidelines shortcut button opens the guidelines for this task.
- **Release Survey**: Allows you to skip a survey in rare cases where a technical or other issue prevents you from rating. See Appendix for complete instructions.
- **Show User**: Viewport shortcut buttons provide convenient controls to pan or zoom to common map viewport settings. Show User moves the result viewport to the user's location without changing the zoom level (map scale).
- **Show Viewport**: Show Viewport moves the result viewport to the center of the user viewport and zooms in on the viewport area.
- **Show All**: Use Show All to return from any zoom level to the initial display showing the user, the viewport, and all the results.
- **Query Header**: The query header shows:
  - Query: The term the user entered into the search bar.
  - Viewport Age: How long ago the user moved the viewport.
    - A fresh viewport is indicated by the word FRESH displayed in green text.
    - A stale viewport is indicated by the word STALE displayed in red text.
  - Locale: The country and language combination this query is for.
  - Country: Should match the country in the Locale field. If it does not, defer to the country found in the Locale field.
  - User Lat,Lng: The user's location.
- **Top-Level Question**: A top-level question that must be answered once for each query.
- **Result**: The result returned for a user query. The color of the result heading corresponds to the color of the pin on the map that marks that result's location (see Result Pin below). The result address, category, and status (if included) will be shown beneath the result name/title. You will evaluate the relevance of each individual result. If you are rating Search 2.0, you will also rate the name/address/pin accuracy for each result. Note: A query can generate more than one result.
- **Status**: A result may also display its status. If the status appears and is set to PERMANENT_CLOSURE, the result requires special treatment when rating relevance.
- **Result with no Rating Choices**: You may occasionally see one or more normal-looking or grayed-out results with no rating fields beneath them. No rating is required for these results. This is expected and is not a technical issue or a reason to release the survey.
- **User Viewport**: A transparent purple box centered over a device icon shows the user's viewport at the time the query was issued (if known). The user viewport represents the map area the user was looking at when making the query. The shape of the viewport may vary depending on the size and orientation of the device being used. Note: In some cases, the user viewport may be so small that it cannot be seen, but (if the viewport information is available) the device icon will always be visible, regardless of the map scale. Note: The viewports you see in the examples in these guidelines may be grey.
- **Device Icon**: This device icon shows the center of the user viewport at the time of the user query. The purpose of the device icon is to make it easier to find the user viewport. It does not indicate the user's location. This icon should not be used for measuring distance — to measure distance, start from the outer edge of the user viewport. This icon has no rating significance; its only purpose is to help you find the viewport on the map.
- **User Location**: A blue and white icon indicates the user location at the time of the query (if known). Note: Clicking on the icon reveals the coordinates (latitude/longitude) of the user's location.
- **Result Pin**: A pin indicates a result's location. The head of the pin is only an indicator; the tip marks the actual location. Each pin on the map has a unique number and color, which matches the number and color of its corresponding result heading (see Result, above). Note: The pins you see in the examples in these guidelines may look different from the pin shown in this chart and the ones in the tool.
- **Pop-up Information Box**: Clicking any individual result or pin causes a pop-up box to appear over the pin. The text within the box may show additional information and should only be used for research purposes to help understand the result:
  - Phone number (for research only, never call a business)
  - URL
  - Coordinates (latitude/longitude)

Note: Do not rate the information in the pop-up box. Rate only the information in the result.
- **Map Layer Selector**: Allows you to select which map layer is displayed.
- **Zoom Controller**: Allows zooming in and out on the map. Change the zoom level by clicking the + (zoom in) or – (zoom out) buttons.
- **Copy to Clipboard**: Click to copy information to a clipboard.
- **Drop Location Pin**: Click the pin icon at the top right of the map to place a pin anywhere on the map. A purple pin and a pop-up window showing the pin's address and latitude/longitude will appear.
- **Measure Distance**: To measure the distance, click the ruler icon at the top right of the map. You can now drop a start pin (green) and an end pin (red). The tool will display the distance between them.
- **Draw Tool**: Click to draw custom polygons.
- **Submit**: Click Submit to save your ratings and display the next available task.

## 1.2. Rating Workflow

Complete each step of the following workflow before you assign a rating.

Evaluate and rate each rating drop-down independently of the others. Rate result Relevance based on whether the result fits the query intent, even if the result is closed or does not exist or has incorrect Name, Address, or Pin data. If you are rating Search Relevance you will stop after you've rated result relevance. If you are rating Search 2.0, you will continue by rating Name and Category Accuracy, Address Accuracy, and Pin Accuracy individually.

Note: For any result in a Search 2.0 project, you may be asked to make all of the possible ratings, some of them, just one, or none. This is expected and not a reason to escalate or release a task.

Rate each result on its own merits. Do not demote duplicate or very similar results.

## 1.3. Rating Interface

Your ratings and comments will be collected in the rating interface shown below. You will first answer one top-level question about the query itself, then rate each individual result using the other checkboxes and drop-downs.

### 1.3.1. Query-Level Navigational Result Question

You will answer a top-level question for each query to indicate whether there are any results in the real world that would completely satisfy the user intent.

     Query-level question                    Explanation                            Notes
Is there a navigational result     Are there any results in the real   You will only need to answer
for this query?                    world that can completely           this question once for each
                                   satisfy the user intent?            query.

                                        Answer to Query-Level
              Query                                                              Explanation
                                             Question
[Eiffel Tower]                     Yes                                 There is only one result in the
                                                                       real world that can completely
                                                                       satisfy the user intent.
[Starbucks]                        No                                  There is not only one result in
                                                                       the real world that can satisfy
                                                                       the intent of this query.

Note: If you are presented with a query that has no results, you must still answer this question and submit your answer.

### 1.3.2. Result-Level Rating Checkboxes

For each result, you will be presented with two high-level questions. These will allow you to highlight any problems with the result.

   High-level
                               Explanation                                     Notes
   question
                  Result is not in the language of the     If you check this box, your rating for this
Result name/
                  query, the test locale, or the result    result will be complete (all other questions
title is in
                  region (the expected languages) or is    will be unavailable).
unexpected
                  in a mix of expected and unexpected
language or
                  languages (unless it is an official
script
                  company, chain, or brand name).

      High-level
                                Explanation                                      Notes
      question
                                                             If you check this box, only the relevance
                                                             needs to be rated.

Pay attention to the status of the POI. If the result's status is PERMANENT_CLOSURE, refer to 5.19 Rating Relevance when Status is set to PERMANENT_CLOSURE and 10.8 Permanently Closed Results for rating Business/POI Research shows that the business is instructions. is closed or closed or that no such business exists does not exist at the address listed in the result. If the status is blank or displays any other text, rate the relevance of the result as if it did exist.

Use thorough research and your best judgement to determine whether the result is closed, has never existed, or the result component(s) are incorrect.See Unclear Results for further guidance.

### 1.3.3. Result Relevance Rating

The relevance rating will take into consideration user intent as well as distance/prominence. Relevance is always rated independently of any data (name/category, address, or pin) inaccuracies. This means that when rating relevance we always assume that the result exists (even if research reveals the location is closed) and that the data presented is correct.

Always rate against the real world: If there is a better result available but it is not shown, demote the existing result(s) while considering the missing one(s).

     Relevance
                                      Explanation                                   Notes
      Rating

The most likely result implied by the user's query, location, and/or viewport that completely satisfies the user's distinct intent. A distinct user intent is defined by a         A rating of Navigational for one combination of the following                   result does not prevent other Navigational       characteristics:                               results from satisfying the query to
- Extreme prominence (e.g. Eiffel Tower)    a lesser degree.
- Uniqueness (e.g. complete address)
- Proximity (e.g. incomplete address that points to an unambiguous option that is is extremely close)

Highest possible initial rating for A high-quality result that clearly satisfies the ambiguous queries as well as for Excellent      user's intent. Multiple results can be queries that are not eligible for a considered high quality. Navigational rating. Only partially satisfies the user's intent due Good to relevance, prominence, or distance. Any relevance rating of Good or Technically satisfies the user's intent but        below requires an indication of the Acceptable does so poorly due to relevance or distance.       reason(s) for the demotion:
- User Intent Issue Does not satisfy the user's intent due to lack       • Distance/Prominence Issue Bad            of relevance or great distance (when closer satisfying results are available).

### 1.3.4. Result Relevance Demotion Checkboxes

If you give a result a Relevance rating of Good or below, you will be presented with two checkboxes. Use them to select the reason(s) for your rating:

- User Intent issue
- Distance/Prominence issue

You must also leave a comment explaining your rating.

  Checkbox                        Explanation                                     Notes
User Intent     Select when the demotion is due to a result only
issue           partially fulfilling the query intent.
           Select when the demotion is due to a distance
           issue based on the user or viewport location or          If both issues were reasons for
Distance/  when you demoted for a result that is less               your relevance rating, select both
Prominence prominent based on the initial query intent. You         checkboxes.
issue      can also select this option when the query asks
           for something at a specific location and the
           result is not at or near the requested location.

### 1.3.5. Data Accuracy

If you are rating Search 2.0, once you've rated relevance, you'll evaluate three result components for data accuracy: Name, Address, and Pin.

### 1.3.6. Comments

Comments are mandatory for any result relevance rating of Good or below and for any data issues not rated Correct/Perfect and should explain the reasons for all rating demotions. Be sure to:

- Include user intent: Indicate what you think the user intent is.
- Refer to the guidelines: If the demotion is due to a guideline instruction, note the guideline section you used to make your decision.
- Include sources: If you find incorrect information in a result, your comment should include the correct information and its source. Be sure that any links you include lead directly to the information you provide. If they don't, include a link to the source you used and explain how to get to the information from there.
- Use URL shorteners when inserting long links into your comments
- Be concise: Don't write elaborate comments. Be short and specific.
- Comment in English: Your comments will sometimes be reviewed or used by people who are not familiar with your test locale or its language. Comments in English can be understood by the widest possible audience.

Important: Information entered here may be used for AI/LLM processing, analysis, or model training. Please do not include any personally identifiable information (PII) or sensitive details, such as names, contact information, account numbers, or other private data.

Issue Expectations Example Rating and Comment The comment should explain the Relevance -> Good (Distance/ reasoning behind your rating. A demotion Prominence) Relevance may be due to distance from the user's Comment: Demoted -1 for a few closer Demotions location compared to similar results/ real world locations in the Middletown/ potential results, secondary intent, or Anchorage area other reasons. Address Accuracy -> Incorrect — Street Number Include a comment when you rate a Comment: Correct street number is: 332 Name, Address, or Pin something other W El Camino Real, Sunnyvale, CA 94087 than Correct or Perfect or you give a Data Issues as found on the official site: https:// rating of Closed/Does not Exist or www.patelco.org/locations/sunnyvale Unexpected Language. Pin Accuracy -> Wrong Comment: Wrong pin: correct location is: 52.368067, 4.895389

# 2. Understanding User Intent

Before evaluating any results, you'll need to understand what the user wanted to find when they typed in their query. To determine user intent, use a combination of your own research and local knowledge plus the information found in the rating interface, which includes:

- User location
- User viewport
- Viewport age

User intent refers to the interaction between query, user location, user viewport, and viewport age.

## 2.1. Query Types

The queries you are evaluating are real queries submitted by users. Because they are real, they can:

- Be misspelled
- Contain mistakes
- Be inconsistent
- Be ambiguous
- Be badly formatted
- Be, or contain, emojis
- Have no maps intent

The first step in the rating process is to make sure you understand the query.

If you see a foreign-language query, do not release the survey. Research the query or use an online translation tool to find out what it means, then rate it as usual.

You will see several types of queries, including:

Address queries

Address queries contain all or part of a complete address, including street number, street name, locality, state, country, and postal code.

        Query                                              Explanation
  [717 E El Camino
                         This is an address query in the form of a full address. It contains a street
  Real, Sunnyvale,
                         number, street name, locality, state and postal code.
     CA 94087]
   [Stevens Creek
                         This is an address query for a street. The user is looking for the location of
   Blvd, Cupertino
                         this particular street.
         CA]
                         This is an address query for a country. The user is looking for the location of
       [Ireland]
                         the country of Ireland.

This ambiguous query could refer to New York city or New York state. You [New York] will find more information on prominence, user location, and the viewport in the following sections to help you determine the intent of this query.

Point of Interest (POI) queries

A point of interest (POI) is a location that people find interesting or useful. POIs can be locally or internationally known. These guidelines use a very broad definition of POI in which businesses are also considered POIs.

        Query                                              Explanation
  [London Bridge]        This is a query for a famous POI in London.
   [Danube River]        This is a query for a river in Europe.
   [Charing Cross
                         This is a query for a transit station in London.
      Station]
 [Union Square, SF] This is a query for a location in San Francisco.

Business queries

Business queries contain the name of a specific business.

        Query                                             Explanation
                         This is a business query with a location modifier (Palo Alto). The user is
   [Zola Palo alto]      looking for a specific restaurant (Zola) in Palo Alto, CA. Queries can include
                         location modifiers, like city names, that make them more specific.
                         This is a business query with a request for a specific store in Sunnyvale, CA.
   [Bookasaurus]         The viewport and user location can help pinpoint the desired location for
                         such a query.
    [Starbucks, 7        This is a query for a chain business followed by a specific address. Chain
      Boulevard          businesses are businesses that have more than one location, and include
    Poissonnière,        everything from national chains, like Starbucks, down to small local chains,
    75002 Paris,         like Burrito Boyz. Target, Auchan, Albert Heijn, and Boots are all chain
       France]           businesses.
                         This is a business query with a request for the chain business Target and
 [Target sunnyvale]
                         location modifier of Sunnyvale, CA.

Category queries

A category refers to a group of entities that share a set of characteristics.

        Query                                             Explanation
                         This query is for locations where fast food is served. Assume the user
      [fast fod]         wanted the correct version of the query when the query contains a simple
                         misspelling.
      [bus stop]         This query requests the locations of bus stops.
   [coffee shops]        This query requests the locations of businesses that sell coffee.
        [gym]            This query requests the locations of fitness centers.
       [gas San          This query requests the locations of gas stations with a location modifier
      Francisco]         of San Francisco.

Product and Service Queries

A product or service query is a query about something that can be purchased at or is offered by a business or POI. When researching results for these queries, be sure to confirm that the result

actually offers the product or service in a way that would be meaningful or helpful to a user with this query.

For instance if a user had the query [salads], a steakhouse with one salad on its menu, would not be very helpful, but the American restaurant Sweetgreen, which specializes in salads, would be.

        Query                                            Explanation
                        This query requests the locations of businesses that sell a specific type of
    [vanilla latte]
                        coffee drink.
    [deep-tissue        This query requests the locations of businesses that offer a unique style of
     massage ]          massage.
                        This query requests the locations of businesses that sell pencil, pens,
  [school supplies]
                        notebooks, and everything else students need for school.
                        This query requests the locations of businesses that offer truck tire repair
  [truck tire repair]
                        services.
                        This query requests the locations of businesses where ATV tours are
     [ATV tours]
                        available.
                        Not every hair salon offers perms, but this query requests the locations of
       [perms]
                        ones that do.
  [deep dish pizza      This query requests the locations of places that sell a specific type of pizza
      detroit]          in a particular city.

Coordinate and “My location” queries

Some queries are simply a set of coordinates or the words ”my location” (or something similar).

        Query                                            Explanation
    [36.082857,
                        The user has specified a location using lat/long coordinates.
    -115.172916]
    [my location]       The user has typed these (or similar) words to find out where they are.

Emoji Queries

Some queries are not made using words. Emojis represent the category they picture. Use the most literal meaning.

        Query                                            Explanation

⛽ The fuel pump represents a search for places to get gas.

           Query                                                 Explanation

🍕 The pizza slice stands for the query “pizza.”

☕ The coffee cup represents the query “coffee.”

Queries with no maps intent

Some queries have no maps intent. They include, but are not limited to, queries that:

- Do not refer to a physical location
- Do refer to a physical location but have an information intent rather than a location intent
- Refer to a brand or company with a predominantly online intent, like Groupon or LinkedIn
- Ask about the time or weather in a specific location

Rate all results for these queries Bad.

           Query                                                 Explanation
 [eureka
                             This is a weather query with no maps intent. Rate all results Bad.
 temperature]

[time in new york This is a “time in” query with no maps intent. Rate all results Bad. city] This is a query about a company that is mainly used online. It does not have maps [facebook] location intent. Rate all results Bad. [is cucumber a fruit This is an information-seeking query that has nothing to do with finding a location. or a vegetable] Rate all results Bad.

### 2.1.1. Research Expectation

Research will help you understand the user's query and intent:

- Use a search engine to investigate and understand the query intent
- Use official resources like businesses official websites, national postal service websites, and government websites whenever possible
- Use your own local knowledge
- Use the information provided in the rating interface

## 2.2. Result Types

A query can return one of three types of results.

Result Type                 Explanation                   Example
                Businesses and POI type results
                will show a name in the top field,
                followed by an address and a
Business/POI
                category. The same rating rules will
                apply to both Business and POI
                results.
                These results can be one of
                multiple address types, including
                residential address or locality.
                Instead of a business or POI name,
                this kind of result will show the first
                line of the address in the top field,
                followed by the entire address
  Address       below. This type of result will not
                include a category.

Note: If a result does not include a category, don't assume the result type is an address. You must still do research to verify this, as not all POIs will display a category. The results for POIs or features without an expected address, like bus stops, bridges, or mountains, may sometimes look like address type results. Check to see if the result includes a category. If it does, the result refers to a feature or POI, not an address.

Features At first glance, the result on the without an right might look like it's for an expected intersection. However, since it address includes a category, you can see that it actually refers to a POI — in this case, a bus stop.

This result for a landmark square might be mistaken for a result referring to a street with the same name. Since it contains a category, in this case “Park,” you can see that it actually refers to a POI.

## 2.3. Location Intent

A result is considered most relevant when it is located in the user's area of expected results. There are two types of Location Intent:

- Explicit: The query is made clearly and indicates a specific location or area where results are expected.
- Implicit: The location expectation is not as clear, so you must use context clues, in the form of user location and viewport, to discover the area in which the user is expecting results.

### 2.3.1. Explicit Location

When there is an explicit location mentioned in the query, you can ignore the user and viewport locations. The user has told you exactly where they want to find results.

Query Expected results Notes Places to buy this drink [bubble tea tully road san User and viewport locations should be on Tully Road in San jose] ignored. Jose. Museums in the city of User and viewport locations should be [Boston museums] Boston ignored. The queried chain User and viewport locations should be [kfc Philadelphia] business within the ignored. stated locality. Relevant POIs near the Viewport location should be ignored, [food near me] user's location even if fresh. [nearby/nearest Relevant POIs near the Viewport location should be ignored, starbucks] user's location even if fresh. Result placed on the Viewport location should be ignored, [my location] user's location even if fresh.

### 2.3.2. Implicit Location

If the user's location intent is not expressly stated in the query, for example [chinese] or [479 margarita ave], use the user location, viewport location, and viewport age to determine the area of expected results.

Viewport User Location Location Intent When the user is within a fresh viewport, take the user location as location intent. Results are generally expected in Inside Viewport or near the viewport, and results inside the area cannot be rated Bad because of distance alone.

Viewport User Location Location Intent Results are expected in or near the viewport area. All relevant Outside results inside the viewport are eligible for a rating of Fresh Viewport Excellent. If no results can be found in or near the viewport, consider the user location a secondary location intent.

Missing When the user is missing, the viewport is the location intent.

Inside Viewport When the viewport is stale, consider only the user location as Outside location intent. Stale Viewport Use the stale viewport as location intent when the user Missing location is missing. Viewport Age Present or Consider the viewport fresh when the viewport age is missing. Missing Missing The user location sets the location intent when the viewport is Present not present. Missing entirely When the user location and viewport are missing, the test Missing locale becomes the location intent with a strong focus on prominent results.

# 3. Rating the Query-Level Navigational Result Question

Once you have identified user intent, you will need to answer a query-level question. You must decide whether the intent is unique and clear enough that there is only a single (navigational) result in the real world that could fully satisfy it.

You will answer this question before you rate any results, since you don't need to know what the results are in order to learn if there sta real-world result that could fully satisfy the user's intent:

- If there is a real-world navigational result for the query, answer Yes
- If there are no possible real-world navigational results for the query, answer No

You will answer this question once for each query, whether or not any results are shown.

# 4. Rating Result-Level Issues

For each result, you must check to see whether:

- There is an issue with the language/script of the result name/title
- The business/POI is closed or does not exist

## 4.1. Result Name/Title in Unexpected Language or Script

A result name or title is in an expected language or script when it is:

- In the language/script of the test locale
- In the language/script of the query
- In a language/script of the result region
- Any combination of any of the languages or scripts described above
- An official company, chain, or brand name commonly used in the market, even if this is not any of the languages or scripts described above

Below Left: Result name is Walmart Supercenter (in yellow box), address details are below (in green box). Below Right: Result is an address, so the first line of the address appears in the yellow box as the Address title. All the address details appear below it in the green box.

When all or part of a result name or title is in an unexpected language or script, users will not understand it. In these cases, select the Result name/title is in unexpected language or script checkbox. No further rating will be required.

Note: When the address details, found below the name/title, are in an unexpected language or script, the result can still be understood and rated for relevance and name accuracy. For more on what to do when the address details (not the name or title) are in an unexpected language or script, see Language/Script Issue in Address.

Minor Differences in Spelling

Don't consider minor spelling issues, such as missing or added diacritics (e instead of é), as Unexpected Language/Script. This also applies to unnecessary or less relevant parts of a name or title. Use this checkbox only to report issues that interfere with understanding the name/title and issues listed in your Country Specific guidelines.

### 4.1.1. Name of Business/POI Results

Pay special attention to the language and script of brand and chain names. See your Country Specific guidelines for more information.

Expected Language                Explanation                              Example
                                                          Expected language/script:
  - Test locale: en_US
                       The query gives clues as to the
  - Result in California, USA
                       language in which the user
  - Query: [mystery]
                       expects results. Any result that
  - Result name: Mystery Spot
                       matches the most specific part
                       of the query or corrects a
                                                          Result name is in English and satisfies
                       spelling issue in the query is
                                                          the query.
                       considered to be a result in an
        Query          expected language. This also
                                                          Unexpected language/script:
                       includes remote results in
  - Test locale: en_US
                       foreign countries.
  - Result in California, USA
  - Query: [market]
                       But: Consider official result
                       name variations and default to      • Result name: ေစျးကွက်
                       the test locale for very short
                       queries.                           The result name is “Market” in Burmese
                                                          script.

    Expected Language             Explanation                                 Example
                         The language of the test locale     Expected language/script:
                         is generally considered an            • Test locale: es_ES
                         expected language and script.         • Result in California, USA
  - Query: [college]
                         If the query is so short that the     • Result name: Colegio Skyline
                         language cannot be identified,
                         assume that the query language      The result name is in Spanish, which
                         is that of the test locale.         matches the language of the test locale,
                                                             so this result title is expected and
          Test Locale
                         When the test locale and the        acceptable.
             and
                         query locale differ, consider the
         Query Locale
                         query locale an expected          Unexpected language/script:
                         language, as it provides more        • Test locale: en_US
                         detailed information.                • Result in California, USA
                         In the example below, the Query      • Query: [college]
                         Locale is set to English in          • Result name: Colegio Skyline
                         Indonesia. Therefore English is
                         an expected language:              “Colegio” is in Spanish, but the test locale
- Query Locale: en_ID              is in English, so the result title is in an
- Test Locale: id_ID               unexpected language.
                                                             Expected language/script:
  - Test locale: en_US
  - Result in Rio de Janeiro, BR
  - Query: [beach]
  - Result name: Praia de Copacabana
                                                              Result satisfies the category “beach” and
                                                              the result's name is in Latin script and the
                                                              Portuguese language, which is the
                                                              language of Brazil.
                         The language/script of the
         Result region   result's region is expected as
                                                             Unexpected language/script:
                         the result language.                   • Test locale: en_US
  - Result in Rio, BR
  - Query: [beach]
  - Result name: Playa de Copacabana
                                                              Though the result name is in the same
                                                              script as the test locale and query
                                                              language, returning the name in Spanish
                                                              is unexpected language because the
                                                              language of Brazil is Portuguese.

Expected Language              Explanation                               Example
                                                         Expected language/script:
  - Test locale: ar_SA
  - Result in Riyadh, SA
  - Query: [‫]ماكدونالدز‬
  - Result name: McDonald's

The name of this restaurant is in the Any official brand, chain , or      language of the official brand name. business name in the language of the result's region or the       Expected language/script: official brand name commonly          • Test locale: ar_SA used in the market, even if it is     • Result in Riyadh, SA not in the language of the            • Query: [‫]ماكدونالدز‬ query, test locale, or result         • Result name: [‫]ماكدونالدز‬ Brand, chain, and region, is expected. business names The name of this restaurant is in the In bilingual areas, official language of the region names in any of the languages of the area are expected, Unexpected language/script: unless otherwise specified in        • Test locale: ar_SA the Country Specific                 • Result in Riyadh, SA Guidelines.                          • Query: [‫]ماكدونالدز‬
- Result name: [           ]

The name of this restaurant is in Japanese, which is not the language of the query, the locale, the result region, or the official brand name.

### 4.1.2. Title of Address Results

Unlike business/POI results, address results do not have an actual name. Instead, the first line of the address appears as the title. Rate Result name/title is in unexpected Language or Script when the title (first line of the address) is in an unexpected language or script.

Localized and Non-Localized Components

Address results often cannot be translated and are accepted in the original version of the result location. Some features, however, are translated into the test locale's language, especially for bilingual or English-speaking areas. Although the preferred language is the test locale's language, the query language and language of the result's location are also accepted.

Localized components may include:

- City
- State
- Country

Appropriate localization depends on the result itself and the language it is translated into. Research and local knowledge will help you decide if the translation has been done appropriately.

Components that are not typically localized include:

- Feature type (square, bridge, roundabout, or intersection)
- Street names and street addresses including building names

Use the Address Accuracy Incorrect – Language/Script Issue checkbox if you find issues of this nature in any of the address components in the address details (not the address title) of any result.

## 4.2. Business/POI is Closed or Does not Exist

Use this checkbox when, after careful research you determine that a result is:

- Closed/non-existent
- Randomly moving (like a food truck without a fixed schedule)
- A non-recurring past event with no further significance that does not carry any maps intent

Important: If you rate a result as Business/POI is closed or does not exist, you must still give a relevance rating as if the place were open or did exist.

Remember, this rating can only be applied to business or POI results, not to address type results.

Use this checkbox to indicate a POI has closed only if there is evidence to prove the business indicated in the result is no longer operational. When you can't make a decision about business closure due to lack of resources, assume the business could exist and rate the name, address, and pin accuracy as Can't Verify (unless there is an obvious data issue like a missing mandatory address component or a pin in the ocean).

Note: Businesses and POIs can close for construction, remodeling, vacations, or other reasons. Treat all temporarily closed businesses as if they were open when the closure is announced on the business/POI webpage or managed social media page. There is no limit to how long the closure can be.

### 4.2.1. Closed/Does Not Exist vs. Inaccurate Name and Address

It is important to understand what the result really is before making your rating. If your research reveals that the business has an incorrect name or address, use the drop-down rating options to signal precisely what is wrong. Use the Business/POI is closed or does not exist checkbox only for the specified purposes. See Unclear Results for more guidance and examples.

### 4.2.2. Rating Relevance of Closed/Non-Existing Business/POI

Special consideration is required when rating a closed/non-existing business/POI. Please review section 4.3 carefully with regards to the status and permanently closed vs. open.

Never automatically demote to Bad simply because of closure. (You may find other reasons to demote to Bad, but closure should not be the sole reason for the demotion.)

## 4.3. Business/POI Status is PERMANENT_CLOSURE

The following chapter offers a high-level introduction to rating closed/non-existing businesses/POIs in relation to their status (displayed as part of the result information). It addresses Relevance and Data rating. Please also review the more specific guidance in the associated relevance chapter.

Note: No matter what is displayed in the status section of the tool, you must always research the business/POI to determine whether it is open or not.

This chart shows the possible combinations of status displayed in TryRating plus a result's actual state based on your research.

Real-World State Confirmed by TryRating Status Comments Research Open/Exists None Rate as usual

Closed/Does not Exist None Rate as usual

Real-World State Confirmed by TryRating Status Comments Research Rate relevance based on Closed/Does not Exist PERMANENT_CLOSURE whether result is expected/ unexpected. See 5.19. Rate relevance based on Open/Exists PERMANENT_CLOSURE whether result is expected/ unexpected. See 5.19.

### 4.3.1. No Status Shown

When no result status shown or the status is blank, you must research to determine whether the business/POI is open or closed/does not exist in the real world. Use the Business/POI is closed or does not exist checkbox when needed.

Rate the result relevance as if the business/POI were open or did exist. Use your best judgement to determine how well the result satisfies user intent within the area of expected results.

### 4.3.2. Status Shown as PERMANENT_CLOSURE

When the result status is PERMANENT_CLOSURE, follow the research steps to determine if the business in fact is open in real world or not, and use the Business/POI is closed or does not exist checkbox when needed.

The relevance rating for a result with PERMANENT_CLOSURE status depends on whether this result is expected or unexpected based on the specific relevance guidance in 5.19. Rating Relevance when Status is set to PERMANENT_CLOSURE and 10.8. Permanently Closed Results

# 5. Relevance

Relevance for each result is found by assessing the relationship between:

- Satisfying user intent
- Prominence
- Distance

Complete each step of this workflow before assigning your relevance rating.

General Rating Rules

- Rate each result individually and demote based on relevance and distance.
- Always rate against the real world: If there is a better result available but it is not shown, demote the existing result(s) considering the missing one(s).
- Ignore the order of the results and evaluate each one individually.
- Ignore duplicate results and rate them individually. Do not demote for repetition.
- If there are results that are extremely inappropriate or illegal, rate Bad. Identify such content by determining if the result is likely to be embarrassing if seen by users.

Rate the relevance of each result without considering the accuracy of the name/category, address, or pin. When judging distance/prominence, ignore closed or nonexistent results.

Adult Content

Businesses and POIs with legal adult content are rated:

- Navigational to Bad if the query clearly requests this type of content
- Bad if the query does not imply such an intent

## 5.1. Query-Result Connection

For a result to satisfy a query to any degree, there must be some kind of relationship between them. Your first task is to understand what this connection is.

Satisfying the user intent is only the first step in the rating process and covers the minimum requirements for a result to be considered relevant.

### 5.1.1. General Connection

A result can satisfy user intent for multiple reasons, but most often the result satisfies the most specific part of the query's intent. This kind of relationship between query and result is called a General Connection.

Type of User Query Result Description Connection Satisfies Intent: Users are likely to start their San Francisco search with the name of the brand “Marriott”. [marriot] Marriott Union General Result satisfies user intent by providing a Square Marriott close to a user/viewport located in the San Francisco area. Satisfies Intent: The user is looking for an [Houston George Bush General airport in the city of Houston. This is an airport airport] Intercontinental in Houston, which satisfies user intent. Satisfies Intent: The query contains two [london, different cities, so it's likely a routing query. London General brighton] Returning either of the individual results is expected and should be rated Excellent.

### 5.1.2. Abbreviation/Alternate Name Connection

The query is an abbreviation or alternate name and the result provides the full and currently accurate name.

Type of User Query Result Description Connection Newark Liberty Satisfies Intent: The international airport code [ewr] International Abbreviation for Newark Liberty International Airport is EWR. Airport Alternate Satisfies Intent: The result is the correct name [sears tower] Willis Tower Name of what was formerly known as the Sears Tower.

### 5.1.3. Category Connection

The query is a category and the result satisfies that specific category, which may or may not be displayed within the information provided in the result.

Type of User Query Result Description Connection Satisfies Intent: A category search for "food" [food] La Ciccia Category in a viewport over San Francisco returns an Italian restaurant there.

### 5.1.4. Spell Correction Connection

The query is misspelled and the result corrects that issue. This kind of connection only applies to obvious issues when no result for the actual query exists at the user's location or when the user intent is clearly satisfied by the spell-corrected results.

This kind of correction also happens when a query address does not exist but the result address does, correcting the issue and creating a match.

Type of User Query Result Description Connection Spell Satisfies Intent: The result corrects the user's [aple store] apple store Correction spelling mistake. Satisfies Intent: This query suggestion for the Spell Lodz Łódź Polish market adds the diacritics the user may Correction have missed when typing the query. Satisfies Intent: When there is no "Clair St" [23 Clair 23 Clair Spell within or around the viewport/user, consider a street] Boulevard Correction “Clair Boulevard" that is close to the viewport/ user as the most likely intent.

### 5.1.5. Transit Intent Connection

The result satisfies the transit intent of the query. If the query indicates a specific transit system, the result must match that system. There is also a transit intent connection when a station provides access to more than one transit service and the queried one is included.

Type of User Query Result Description Connection Satisfies Intent: Result satisfies user intent by Richmond BART Transit providing a close station that runs the requested [bart] Station Intent transit service for a user/viewport located in the Richmond area.

### 5.1.6. Special Character Connection

Always consider the specific language conventions. In general, user intent is satisfied when:

- The query contains a special character and the result is a valid variation (if applicable).
- The query does not include a special character but the result with special characters adds value to the user and is therefore considered spell corrected.
- The country or language does not have the special character and it is generally perceived as a form of expression or style (like “café” in English).

Type of User Query Result Description Connection Satisfies Intent: "oe" is a valid variation for the Special [möllersdorf] Moellersdorf special character "ö" in the country/language of Characters the result (Germany/German).

### 5.1.7. Address-Result Connection

When a query address and a result address are not exactly the same, the kind of connection they have depends on their relationship:
- Street number is the same in both query and result but the unit number is different or missing:
- If neither address is a street extension, rate result relevance Good when: ▪   The query contains a unit number and the result does not. ▪   The result contains a unit number and the query does not. ▪   The query contains one unit number and the result contains another.
- The query is full address including street number and name and the result is the street name only:
- Since this result is an unlikely secondary intent, rate relevance as Acceptable.
- Query is for a street [Main Street, Pleasanton, CA] result is just the locality (Pleasanton, CA).
- Rate the result relevance Bad as it does not satisfy the user intent.

Type of User Query Result Description Connection 357 Western Satisfies Intent: The result does not include [357 western Ave Address the unit number requested in the query so its ave suite 1] St. Johnsbury, VT relevance is rated Good. Satisfies Intent: The result has the same 357 Western [357 western street number but a different unit number from Ave Suite 2 Address ave suite 1] the address in the query, so its relevance is St. Johnsbury, VT rated Good. Satisfies Intent: Instead of returning the full address requested, the result provides only the [357 western Western Ave Address street name. This is an unlikely secondary ave suite 1] St. Johnsbury, VT intent, so relevance is demoted to an initial rating of Acceptable. Does not satisfy user intent: Instead of [357 western St. Johnsbury, returning the full address requested, the result ave st. Address VT provides only the locality. This does not satisfy johnsbury] the user intent, so relevance is rated Bad.

### 5.1.8. Lack of Connection

If the result does not satisfy the user intent either because there is no relationship between the query intent and the result or because the connection between the query intent and result will not be immediately obvious to the user, rate the result relevance Bad.

Type of User Query Result Connecti Description on Santa Cruz Does not satisfy user intent: Research [airport] Boardwalk None shows that there is no connection between the Santa Cruz query and the result. Rate Bad. Does not satisfy user intent: Result is for [Raging Waters 2333 South the correct address, but does not include the 2333 South White White Rd None business named in the query, so users will Rd San Jose have no way of knowing if this is truly San Jose] connected to the business or not. Rate Bad. Does not satisfy user intent: Query is the name of a business and result is for the 2333 South correct address, but does not include the [Raging Waters] White Rd None business name. Users will have no way of San Jose knowing whether or not this address is connected to the business they asked for. Rate Bad. Does not satisfy user intent: Result is for a Macy's store, not a mall. This store is inside the 2801 Stevens [valley fair mall] None requested mall, but does not satisfy the intent Creek Blvd, of the query, which is the whole mall. Santa Clara Rate Bad. Westfield Does not satisfy user intent: Result is for a Valley Fair mall, not a store. This mall contains the [macy's] 2855 Stevens None requested store, but this result is the whole Creek Blvd, mall, not the single store the user asked for. Santa Clara Rate Bad. Does not satisfy user intent: Result is for a Costco Costco gas station, not a Costco store. The Gasoline store and the station are at the same address [costco] 1601 Coleman None and share a brand name, but the result is not Ave, Santa what the user asked for and does not satisfy Clara the query intent. Rate Bad. Does not satisfy user intent: Result is for a Costco Costco store, not a Costco gas station. The 1601 store and the station are at the same address [costco gas] None Coleman Ave, and share a brand name, but the result is not Santa Clara what the user asked for and does not satisfy the query intent. Rate Bad.

## 5.2. Satisfying User Intent

The user's intent can be determined by considering the query, the user's location/viewport, and your

local knowledge. Sometimes queries are ambiguous or can have multiple interpretations.

In order to determine a query's primary and secondary intent, look at the relationship between the query and the result. Ask yourself:

- Is there a logical relationship between the query and the result?
- How likely is the user to be looking for this result given the query and the location intent?

Intent Type Definition Highest Initial Rating Primary Intent Result satisfies the most obvious and likely user Navigational or intent Excellent Secondary Intent A result which is less likely to be the user's intent. Good (User Intent) Results matching secondary intent are often not as prominent as the originally queried entity but still satisfy the intent of the query. Unlikely Intent A result which matches the query but is very Acceptable (User unlikely to be the user's intent. Intent) Non-Relevant There are issues that make the result useless for the Bad (User Intent) Intent user.

For any Relevance Rating of Good or below, you must select the appropriate check box(es) to indicate the reason(s)for demotion: User Intent and/or Distance/Prominence. If both reasons apply, use both checkboxes.

When determining intent, keep in mind:

- It is rare that a navigational query will have multiple primary intents.
- Rating one result Navigational and one Excellent within the same set of results is also rare, but possible (see examples in Navigational Results for Category Queries).
- A navigational query will most often produce one result that satisfies the distinct intent and multiple other results that satisfy a secondary intent or do not satisfy the intent at all. This means there will be one result rated Navigational and all other results will be rated Good or Acceptable for secondary intent or Bad for not satisfying user intent.
- Most non-navigational queries will produce results that are rated from Excellent to Bad.
- Since the queries were made by actual users, there will be cases where a query is gibberish or has no maps intent. Do your best to understand it and see how well the results fit the user's intent, but don't be shy about assigning a Bad rating if a result doesn't fit.

Satisfying the user intent is only the first step in the rating process and covers the minimum requirements for a result to be considered relevant. The rating determined by deciding how well intent is met is called the Initial Rating. Distance and prominence will be considered next in order to establish the final rating.

## 5.3. Prominence

Once you've made an initial rating by establishing that there is a relationship between the query and the result and determining the intent type, consider the result's prominence.

The prominence of a feature refers to its popularity, including the number of people visiting and media sources referencing it. Prominence can vary based on the test locale and even local knowledge. Consider the following list to get a general idea how to establish prominence, ordered from the most prominent to the least prominent:

- The feature is known internationally
- The feature is known in the country
- The feature is known in the region
- The feature is known locally
- The feature may not even be known locally

A result that may not directly appear to be user intent can be promoted for being internationally prominent.

           Query                    Result                          Rating and Explanation
                                                       Relevance              Navigational
                         Sydney, Australia             The city of Sydney is clearly the user's primary
                                                       intent.
                                                       Relevance              Good (User Intent)
                         Sydney Opera House            The Opera House does not satisfy primary intent.
                         Sydney, NSW, Australia        However, it is promoted to secondary intent due
          [Sydney]
                                                       to its international prominence.
                                                       Relevance              Bad (User Intent)
                         Sydney Town Hall
                         483 George St,                The Sydney Town Hall does not satisfy primary
                         Sydney, NSW, 2000             intent. While the civic center is historically
                         Australia                     important, it is not internationally prominent and
                                                       will not be promoted to secondary intent.
                                                       Relevance              Bad (User Intent)
                         Sydney Buses Depot            The depot matches the query string but is
                         Randwick                      unlikely to be the user's intent and has very low
                         34-36 King St, Randwick       prominence given how many other internationally
                         NSW 2031, Australia           prominent POIs Sydney has to offer.

Relevance Navigational

Agra Uttar Pradesh, India Query is for a small locality in India and the result satisfies the user intent.

        Query                     Result                          Rating and Explanation
                                                      Relevance             Good (User Intent)
        [Agra]

Result is for a prominent site in the queried Taj Mahal locality. The Taj Mahal does not satisfy the user's Agra, Uttar Pradesh, India primary intent. However, it is promoted to secondary intent due to the international prominence of the feature in the queried locality.

Relevance Navigational Japan The country of Japan is clearly the user's primary intent. [japan] Relevance Bad (User Intent) (User is in Seattle) Sarku Japan 401 NE Northgate Way A chain restaurant with “Japan” in its name does Seattle, WA 98125 not satisfy the query's primary intent (the country of Japan) or any secondary intent (entities with international prominence).

## 5.4. Distance

Generally, the farther away the result is from the area of expected results, the less desirable it becomes. This is especially true for queries highly driven by distance to the user/viewport, such as chain businesses, hospitals, pharmacies, or grocery stores.

Because the user can be offered many possible results that are all very similar, the closest entities providing the expected service can be considered the best options. Results which are farther away are less relevant and should be demoted according to their additional distance. Defining what is close and what is far depends on the context of each individual query. Factors affecting distance include:

- Number of possible results in the real world
- Distribution of all possible results
- Population density (rural, urban, or suburban)

Distance refers to the direct distance from one point to another and is measured via a straight line. There is no need to account for the actual distance required to travel from one point to the other, such as driving distance.

Viewport Location Intent (see section 2.3.2)

When the user is within a fresh viewport, the user's location should be used as the location intent. All ratings made should be based on the user's location. Results inside the fresh viewport may be demoted based on distance to the user but they cannot be demoted by 3 (to Bad) for distance alone.

Note: Consider the viewport fresh when the viewport age is missing.

Fresh Viewport, User Inside

When the user is outside the fresh viewport, the fresh viewport should be used as the location intent. All ratings should be based on the fresh viewport's location and any results within the fresh viewport receive No demotion for distance.

Note: If no results can be found in or near the viewport, use the user location as a secondary location intent.

Fresh Viewport, User outside

When the viewport is stale, the user's position is considered the location intent whether the user is inside or outside of the viewport.

Note: If the user is missing, use the stale viewport as location intent.

Stale Viewport

Do not demote a result for distance when:
- This is the closest possible result, even if it is far away from the area of expected results.
- Other, closer results are found to be closed or non-existent.

Demote a result for distance when:
- Other results that satisfy the query and provide the same or similar service are closer.

## 5.5. Distance vs. Prominence

Once you've decided how relevant the result is based on user intent, consider the result in the context of all possible results in the real world. Use the distance to the user or viewport and the prominence of the result to decide if a demotion should be applied.

A result's fit to user intent, prominence, and distance should all be relative to the query and the context around the query. Before deciding whether to demote because of prominence or distance, it's important to look at:

- The type of area around the result – rural, urban, or suburban
- The number of businesses that satisfy the query
- The distance to the user or viewport

The following examples of multiple query/result pairs will demonstrate how to interpret the relationship between distance, prominence, and satisfying the user's intent. The examples address common rating situations and explain how to evaluate the relevance of the results.

## 5.6. Many Possible Results

Some queries, like [starbucks], have many results that could satisfy the user. In cases like this, distance is more important than prominence, so results that are closer to the user's location/viewport should be rated higher than results that are farther away. To illustrate the high density of Starbucks, possible results are shown as purple dots.

User Inside Fresh Viewport

When the user is inside the viewport, consider all possible results, including real-world results not returned for rating (purple dots), and demote by distance from the user.

             Query and Screenshot              Result                     Rating and Explanation

① Starbucks Relevance Excellent 865 Market Rate Excellent for Starbucks locations that are in Street close proximity to the user.

Relevance Good (Distance/Prominence) [starbucks] ② Starbucks 170 O Farrell St Rate Good for locations that are a bit farther User and fresh viewport in San away from the closest relevant locations to the Francisco, CA user. Acceptable (Distance/ Relevance Prominence) ③ Starbucks 264 Kearny St Rate Acceptable for relevant locations that are even farther away from the user but still inside the viewport.

Relevance Bad (Distance/Prominence) ④ Starbucks 580 California St When there are many locations close to the user, rate Bad for locations that are significantly farther away and outside the viewport.

Relevance Excellent Starbucks 140 Mason Rate Excellent for Starbucks locations that are in Street close proximity to the user, even if they are outside the viewport.

➄

User Outside Fresh Viewport

When a user is outside the viewport, results are expected in or near the viewport. In cases where there are a large number of possible results inside the viewport, even if they are not returned for rating (purple dots), rate Bad for those outside it.

             Query and Screenshot              Result                    Rating and Explanation

Relevance Excellent ① Starbucks 865 Market Rate any Starbucks within the fresh viewport Street Excellent when the user is outside the viewport.

[starbucks] Relevance Excellent User in Alameda with fresh ② Starbucks viewport in San Francisco, CA 170 O Farrell St Rate any Starbucks within the fresh viewport Excellent when the user is outside the viewport.

Relevance Excellent ③ Starbucks 264 Kearny St Rate any Starbucks within the fresh viewport Excellent when the user is outside the viewport.

Relevance Bad (Distance/Prominence) ④ Starbucks 580 California St When there are many possible results within the viewport, including those not returned for rating (purple dots), rate Bad for results outside it.

Relevance Bad (Distance/Prominence) Starbucks 140 Mason Street When there are many possible results within the viewport, including those not returned for rating (purple dots), rate Bad for results outside it.

➄

## 5.7. Few Possible Results

When the query has only a few results in the real world, be more lenient when considering distance. Because there are only a few Zara clothing stores in Miami, results for the query [zara] are demoted more leniently for distance than the many Starbucks locations in the example above.

         Query and Screenshot             Result                    Rating and Explanation

Zara Relevance Excellent 19501 Biscayne Blvd, Aventura Rate Excellent for the closest Zara location, even when outside the fresh viewport.

Relevance Good (Distance/Prominence) ② Zara 420 Lincoln [zara] When there aren't any possible results in the Rd, Miami Beach fresh viewport, rate Good for locations that are a User and fresh viewport in North bit farther away from the user/viewport. Miami Beach, FL Relevance Good (Distance/Prominence) ③ Zara 590 Collins Ave, Miami When there aren't any possible results in the Beach fresh viewport, rate Good for locations that are a bit farther away from the user/viewport.

Relevance Good (Distance/Prominence) ④ Zara 701 S Miami When there aren't any possible results in the Ave, Miami fresh viewport, rate Good for locations that are a bit farther away from the user/viewport.

Acceptable (Distance/ Relevance Prominence) ⑤ Zara 7535 N Kendall Dr, Miami The Zara store is located significantly further away than the second closest stores and is therefore rated Acceptable.

➀

## 5.8. Few Possible Results and Greater Distance

Leniency on distance is acceptable when there are only a few possible results for the query in the requested area. For example, a user close to Berlin queries for [Wartestraße], which is a street name. There are only four streets in Germany called “Wartestraße” that can satisfy the user's intent and all four streets are returned as results. Because of the limited number of results, each result's relevance remains fairly high even over longer distances.

          Query and Screenshot                Result                     Rating and Explanation
             [Wartestraße]                                   Relevance        Excellent
                                            Wartestraße,     Wartestraße in Gransee is the closest to the
                 User and
       fresh viewport close to Berlin,   Gransee             user and viewport and is therefore the most
                 Germany                                     relevant.
                                                             Relevance        Good (Distance/Prominence)
                                            Wartestraße,     Wartestraße in Siegen is far away from the
                                         Siegen              user, but is the second closest possible result.

Wartestraße, Wartestraße in Wiesbaden is at a similar Wiesbaden distance from the user as the one in Siegen and receives the same rating.

④ Wartestraße, Acceptable (Distance/ Relevance Geislingen Prominence) Wartestraße in Geislingen is the fourth closest [Wartestraße] result but significantly farther away. Given all other results and their distances, this result is User and rated Acceptable. fresh viewport close to Berlin, Germany

➂ ➁ ➀

## 5.9. Rural Areas

Results are often farther away in rural areas, but can still be considered relevant if there are no reasonable results close to or within the fresh viewport. In a rural area, generosity can be applied to ratings with respect to distance. The criteria for rating are similar to the [zara] example in the Few possible results section, but with an emphasis on distance. Here is an example for the query [american legion] in North Dakota.

                Query                          Result                  Rating and Explanation
                                                                Relevance       Excellent
                                         ① American
                                         Legion                 This result is closest to the user
                                                                based in Bismarck, ND.
         [american legion]
                                                                Relevance       Good
                                         ② American             The second-closest result is
                                         Legion                 significantly further north than the
                                                                closest result.

Relevance Acceptable

③ American While quite remote from the user, this Legion result is still a good option for the user given that there are only two closer results.

Relevance Acceptable

American Like result 3, this location quite far Legion away but is still an acceptable result given that there are only two significantly closer results available to the user.

## 5.10. Location – User Intent Deviation

When the location intent and user intent do not allow for a clear result (because either the user or viewport are in an atypical location, like the middle of the ocean), rate with a focus on high prominence. For example, the query [Hong Kong] in attest locale set to en_US with the viewport and user location around Naples, Italy. There is no real change in rating if the user is inside or outside of the viewport, or if the viewport is fresh or stale.

          Query and Screenshot               Relevance Rating                  Explanation
              [Hong Kong]                                          The most prominent result is the
                                               Navigational
                                                                   territory of Hong Kong in Asia.
                User and
    Fresh Viewport close to Naples, Italy                          Businesses/locations with the same
                                                                   name that are within the viewport or
                                                 Excellent
                                                                   close proximity to the user and
                                                                   prominent. (This will be rare.)

Locations that are too far away and less prominent to be considered relevant should be rated Bad. A Bad (Distance/ restaurant in Rome named “Hong Prominence) Kong” should be rated Bad because it is very far away from the user location, which is in Naples.

## 5.11. Rating for User Inside and Outside Viewport

The following two examples show the differences in rating when a user is inside and outside a fresh viewport. The query is for a chain business called Great Wolf Lodge found across the United States. The examples show all possible results within and around the large viewport.

In general, when the user is outside the fresh viewport, no result within the viewport is demoted for distance. The only exception to this is when the viewport is large enough to include an unusually large area, like an entire continent, and the results within it would not realistically be useful or interesting to a user with this query.

(Note that even though the viewport in the example below is large, because of the limited number of Great Wolf Lodges with it, the results still might be useful or interesting to a user with this query.)

    Query and Screenshot                     Result                  Rating and Explanation
                                                             Relevance         Excellent
                                   ① Great Wolf Lodge
                                   Atlanta                   The result is within the fresh viewport
                                                             and fulfills the primary user intent.
       [great wolf lodge]                                    Relevance         Excellent
                                   ② Great Wolf Lodge
 User in Savannah outside large,   Charlotte                 The result is within the fresh viewport
          fresh viewport                                     and fulfills the primary user intent.
                                                             Relevance         Excellent
                                   ③ Great Wolf Lodge
                                   Williamsburg              The result is within the fresh viewport
                                                             and fulfills the primary user intent.
                                                             Relevance         Good/Acceptable
                                                                               (Distance/Prominence)

④ Great Wolf Lodge The result is outside the fresh viewport. Pocono Mountains Because there are a limited number of possible results within the viewport and this one is relatively close, demote to Good or Acceptable. Relevance Excellent ⑤ Great Wolf Lodge Niagara Falls The result is within the fresh viewport and fulfills the primary user intent. Relevance Good/Acceptable (Distance/Prominence)

⑥ Great Wolf Lodge The result is outside the fresh viewport. Traverse City Because there are a limited number of possible results within the viewport and this one is relatively close, demote to Good or Acceptable.

When the user is inside the fresh viewport, the user's location is used as location intent and results are demoted for distance.

    Query and Screenshot                     Result                  Rating and Explanation
                                   ① Great Wolf Lodge        Relevance          Excellent
                                   Atlanta
                                                             This result is amongst the closest
                                                             possible to the user and is inside the
                                                             fresh viewport.
                                   ② Great Wolf Lodge        Relevance          Excellent
       [great wolf lodge]          Charlotte
                                                             This result is amongst the closest
  User in Savannah inside large,                             possible to the user and is inside the
          fresh viewport                                     fresh viewport.
                                   ③ Great Wolf Lodge        Relevance          Good (Distance/
                                   Williamsburg                                 Prominence)
                                                             Though still inside the fresh viewport,
                                                             this result is significantly farther away
                                                             from the user location with closer
                                                             options available.
                                   ④ Great Wolf Lodge        Relevance          Bad (Distance/
                                   Pocono Mountains                             Prominence)
                                                             This result not only is very far away from
                                                             the user, it is also outside the fresh
                                                             viewport.
                                   ⑤ Great Wolf Lodge        Relevance          Acceptable
                                   Niagara Falls                                (Distance/Prominence)
                                                             While very far away from the user, this
                                                             suggestion is still within the fresh
                                                             viewport and therefore rated
                                                             Acceptable.
                                   ⑥ Great Wolf Lodge        Relevance          Bad (Distance/
                                   Traverse City                                Prominence)
                                                             This result is not only very far away from
                                                             the user, it is also outside the fresh
                                                             viewport.

## 5.12. Partial Address Does Not Exist

Relevance is always rated independently of any data (name, address, or pin accuracy) issues the result may have. This includes results for addresses that do not exist in real life.

When judging distance for existing addresses do not factor in any returned non-existent addresses. Evaluate distance separately for existent and non-existent addresses. Do not demote existing address results when closer, non-existent addresses are returned.

For example, a user in Half Moon Bay, CA is looking for [2373 chestnut] and is presented with three residential addresses. The address in San Francisco is the only one that actually exists. The results in Oakland and Redwood City are not supported by the postal authorities and no evidence can be found that the addresses in either city exist.

Note: For cases where the query is a unique full address that does not exist and the result matches the query, see Query Address does not Exist.

    Query and Screenshot               Result                    Rating and Explanation
                                                       Relevance           Excellent
                                                   This is the closest existing result. The address
                                 2373 Chestnut St, in Redwood City is disregarded and its
      [2373 chestnut]              San Francisco   relevance is not promoted nor demoted for
    User and Fresh Viewport                        Distance/Prominence because it does not
   around Half Moon Bay, CA                        exist.

Relevance Excellent

This is closer to the user than the existing 2373 Chestnut St, result in San Francisco. Because data issues Redwood City are not part of the relevance rating, the result is rated Excellent due to proximity and user intent. Address accuracy is rated Incorrect – Address does not exist.

Relevance Good/Acceptable (Distance/Prominence)

2373 Chestnut St, This is significantly farther away than the Oakland existing result in San Francisco and the non- existent result in Redwood City, and is demoted in relevance. Address accuracy is rated Incorrect – Address does not exist.

## 5.13. City vs. Municipality

In many cases, a city and a state/county/municipality (or other similar market-specific components) have the same name, but the city is typically more prominent. In this case, the chances that a user is looking for the state/county/municipality and not the city, are very small, but still a possibility. Therefore, states, counties, and municipalities will be treated as a secondary intent and given an initial rating of Good. Consider the relationship between the city and the municipality in terms of their locale and adjust if necessary. On the other hand, if the query specifically requests the state/county/ municipality, that result's relevance should be rated as Navigational and the city should be rated Bad.

See your Country Specific guidelines for more information.

       Query                  Result                             Rating and Explanation
                                                Relevance                Navigational
                      New York City
                      New York, USA             The result is for the city, which is considered more
                                                prominent than the state.
   [new york]
                                                Relevance                Good (Distance/Prominence)
                      New York State
                      New York State, USA       Result is for the state, which is less prominent than the
                                                city.
                                                Relevance                Navigational
                      Santa Clara
                      Santa Clara, CA           Query is for the city, which is considered more
                                                prominent than the county.
 [santa clara]
                                                Relevance                Good (Distance/Prominence)
                      Santa Clara County
                      Santa Clara County, CA    Query is for the city, which is considered more
                                                prominent than the county.
  [santa clara                                  Relevance                Navigational
    county]           Santa Clara County
                      Santa Clara County, CA    Query is specifically requesting the county, so the
                                                result for the county will be rated Navigational.
                                                Relevance                Bad (User Intent)
                      Santa Clara
                      Santa Clara, CA           Query is for the county and a result for the city is
                                                considered irrelevant for the query.
## 5.14. Unexpected Results

Straightforward queries can have unexpected results which at first glance might not fit the query intent. For these kinds of results, consider:
- Is there a logical relationship between the query and the result?
- How likely is it that the user is going to be looking for this result given the query and location intent?

A result can partially satisfy a secondary intent due to:

- Prominence of the feature
- Transit intent

Promoting for prominence should only occur for internationally prominent POIs.

In the examples below, two ratings are provided for some results: Good and Acceptable. The difference between the two ratings rests in how well the result satisfies user intent. Choose Good if there is a strong likelihood that it will satisfy user intent and Acceptable if it is less likely to satisfy.

        Query                      Result                            Rating and Explanation
                                                        Relevance                  Navigational
                        Mission St & 14th St
                        San Francisco, CA               Query is for an intersection and the result
  [mission & 14th                                       satisfies the user intent.
      street]
                                                        Relevance      Good/Acceptable (User Intent)
   User and fresh
   viewport in San      Mission St & 14th St Bus        Result is for the bus stop at the queried
    Francisco, CA       Stop                            intersection. The bus stop carries the name of
                        San Francisco, CA               the intersection and users tend to look for
                                                        intersections when seeking transit POIs.

Relevance Navigational [soho] Soho User and viewport in London, UK Query is for a neighborhood in London and the London, UK result satisfies the user intent.

Relevance Bad (User Intent)

Mildreds Restaurant 45 Lexington St, Carnaby, Result is for a specific restaurant in Soho. It is London W1F 9AN, UK very unlikely to satisfy the user intent.

Relevance Bad (User Intent)

Happy Lamb Hot Pot The query is for a street and the result is a [stevens creek blvd cupertino] 19062 Stevens Creek Blvd, specific business on that street. This specific Cupertino, CA, 95014 result is unlikely to satisfy the broad intent of the User and fresh query. viewport in Relevance Bad (User Intent) Cupertino, CA 19062 Stevens Creek Blvd The result includes a street number when the Cupertino, CA, 95014 query is for a street, making this result too specific for the more general query.

       Query                      Result                         Rating and Explanation
 [The Slanted                                        Relevance               Bad (User Intent)
      Door
                         One Ferry Building #3
    One Ferry                                        Result is for the address and not the business
                         One Ferry Building #3 San
  Building #3                                        requested in the query, so it does not satisfy the
                         Francisco, CA 94111
 San Francisco,                                      user intent.
California 94111]

[One Ferry Relevance Navigational The Slanted Door Building #3 San The query is for an address and the result is the One Ferry Building #3 Francisco, business at this address. Including the business San Francisco, CA 94111 California 94111] name provides additional correct information. Relevance Navigational San Francisco [san francisco] San Francisco, CA Query is for the city of San Francisco and the result satisfies the user intent. User and fresh viewport in San Relevance Good (User Intent) Francisco, CA San Francisco International Airport The result represents the airport within the San Francisco, CA queried locality, which satisfies the secondary transit intent.

The Pruneyard Relevance Navigational 1875 South Bascom Ave The query is for a mall and the result is the mall Campbell, CA the user asked for.

The Pruneyard Relevance Bad (User Intent) Pruneyard Cinemas The query is for an entire mall and the result is 1875 South Bascom Ave for a cinema inside the mall. Even though the Campbell, CA cinema shares the mall's name and address, it does not match the query intent.

## 5.15. Multiple Transit POIs with the Same Name

Many large transit POIs include multiple means of transportation at the same location. For example, large airports can have metro or train service within the same location, or train stations can be a hub for trains, metros, and buses. Other transit POIs at the queried transit POI should be treated as secondary intent with an initial rating of Good, but can also be considered Acceptable if the result is less likely to satisfy the user's intent. Additional demotions can be applied based on the prominence of the returned feature.

           Query           Result                                   Rating and Explanation

Hamburg Airport Relevance Navigational 22335 Hamburg, Germany Result is for the queried airport. Relevance Good (User Intent)

[hamburg airport] Hamburg Airport Station 22335 Hamburg, Germany Result refers to the train station at Hamburg User and fresh Airport. viewport in Germany Relevance Bad (User Intent)

Lufthansa Basis The result is for a small bus stop that seems to 22335 Hamburg, Germany service the Lufthansa training center. The result does not share the same name as the queried transit. Therefore, the result is not relevant. Relevance Navigational The query is for a unique transit station. The Embarcadero Station result (a unique BART station) fully satisfies the [Embarcadero San Francisco, CA user's intent. Station] Acceptable (User Intent & User and fresh Relevance Distance/Prominence) viewport in San Jose, CA Ferry Building & The result (a historic streetcar) name includes Embarcadero Station the queried station name, but has low San Francisco, CA prominence, given that there is a unique Embarcadero Station. Therefore, the result should be demoted based on user intent.

## 5.16. POIs and Transit Intent

A non-transit POI can be associated with a transit POI with the same name. You can establish the relationship between the two entities by using local knowledge, researching prominence, and understanding how well the result satisfies user intent. This way you will learn whether the query has a distinct navigational intent or if the prominence of the two POIs that share a similar name is so strong that both can be the intent.

             Query                     Result                       Rating and Explanation
       [mall of America]                                Relevance                       Navigational
                               Mall of America
     User and fresh viewport   60 E Broadway,
                in             Bloomington, MN          Result is POI requested in the query.
           Minnesota           55425 United States

         Query                      Result                        Rating and Explanation

Mall of America Good/Acceptable Station Relevance (User Intent & 8240 24th Ave S Distance/Prominence) Minneapolis, MN Even though the station has the same name as 55425 the POI, it is not prominent and therefore United States demoted. Relevance Excellent

Result is for famous square in London. The square and the train station are both equally Piccadilly Circus prominent and local users would be looking for [Piccadilly circus] London, UK the station while tourists would be looking for User and viewport in the square. As both features are equally London, UK prominent, it is hard to establish a distinct user intent.

Piccadilly Circus Relevance Excellent Station Result is the famous station that is just as London, UK prominent as the square. Dam Square Relevance Navigational Dam Square, Amsterdam, The result is the famous square in Amsterdam. [dam square] Netherlands User and viewport in Dam Square Line 2 Good/Acceptable Relevance Amsterdam Dam Square, (Distance/Prominence) Amsterdam, Netherlands Result is for the tram stop for line 2. The stop is on a street adjacent to Dam Square. However, it is not prominent and should be demoted.

### 5.16.1. Transit Queries

The criteria described above should be applied to understand the transit queries. Additionally, if it is determined that a query has a clear navigational intent, all other results will be Bad (see [12th st oakland bart] example below). If a result is promoted to Navigational, other results that could potentially satisfy the user intent should be demoted further for distance and prominence (see [BART daly city] and [stockport station] examples below). In general, the fewer the results that satisfy the user intent, the farther away the results can be and still be considered relevant. The more available results that can satisfy the user intent, the closer they need to be.

      Query                        Result                         Rating and Explanation
                                                    Relevance                    Navigational

The query is for a specific BART station with a 12th St. Oakland unique name that is not the same as the name of Station the locality where the station is found. (Compare Oakland, CA this to the examples below). This result matches the [12th st oakland query exactly and fully satisfies the user's intent for bart] this specific station.

User and viewport in Relevance Bad (User Intent Issue) California The query intent is for a specific BART station with a 19th St. Oakland unique name that is not the same as the name of the Station place where the station is located. The result Oakland, CA returned is for a different BART station and does not satisfy the user intent. This result should receive a rating of Bad. Relevance Navigational

Daly City Station The query intent is for a BART station in Daly City. Daly City, CA Research shows that there is only one BART station in Daly City and its name is Daly City Station, so this result fully satisfies the user's intent. Relevance Good (Distance/Prominence)

The query intent is for a BART station within Daly City. This result fits intent as it is a BART station. Colma Station This station is in a neighboring locality just outside Colma, CA of the requested locality. Even though the station is [BART daly city] outside of the requested locality, it provides a User and viewport in choice of BART stations in the area for the user. This California result is demoted due to distance.

Relevance Acceptable (Distance/Prominence)

San Francisco International Airport Station The query intent is for a BART station in Daly City. San Francisco This result fits intent as it is a BART station. This International Airport, station is in a neighboring locality, but is farther CA away than the Colma station and is demoted due to distance.

      Query                      Result                    Rating and Explanation
                                             Relevance                    Navigational

Stockport Station The query intent is for a station in Stockport. Stockport, England Research shows that there are several stations in Stockport, but only one named Stockport Station, so this result fully satisfies the user's intent.

Davenport Station Relevance Excellent Stockport, England [stockport The query intent is for a station in Stockport. There is station] one station with a name that matches the query Heaton Chapel exactly, which receives the Navigational rating. All User and viewport in Station other stations within the queried locality should Stockport, England Stockport, England receive Excellent.

Relevance Good (Distance/Prominence)

This station is just outside of the requested locality, in a neighboring locality. Even though the station is Burnage Station outside of the requested locality, it provides a choice Manchester, England of stations in the area for the user. The fewer choices there are available, the farther away the results can be and still be relevant. This result is demoted due to distance.

Relevance Excellent San Jose Diridon Station [san jose station] San Jose, CA The query intent is for a station in San Jose. There are several stations in San Jose, but no stations with User and viewport in a name that matches the query exactly, so we should California rate every station within the queried locality equally. Tamien Station There are two stations that match the user's intent, San Jose, CA so both results should be rated Excellent.

Relevance Good (Distance/Prominence)

This station is just outside of the requested locality, Lawrence Caltrain in a neighboring locality. Even though the station is Station outside of the requested locality, it provides a choice Sunnyvale, CA of stations in the area for the user. The fewer choices there are available, the farther away the results can be and still be relevant.

       Query                    Result                            Rating and Explanation
                                                   Relevance         Acceptable (Distance/Prominence)
                                                   This station is just outside of the requested locality,
                       Sunnyvale Caltrain          in a neighboring locality. Even though the station is
                       Station                     outside of the requested locality, it provides a choice
                       Sunnyvale, CA               of stations in the area for the user. The fewer choices
                                                   there are available, the farther away the results can
                                                   be and still be relevant.
                                                   Relevance              Bad (Distance/Prominence)
                       Palo Alto Train             Result is far from the queried station. The farther
                       Station                     away the result is from the queried station, the less
                       Palo Alto, CA               likely it is that it will be considered relevant, so the
                                                   relevance rating should be lowered.

### 5.16.2. Stops vs. Stations

A transit stop is a location typically designated by a bench or covered waiting area, a posted sign, or street markings. Transit stations, on the other hand, are typically larger areas associated with major structures including, but not limited to, platforms, ticketing offices, enclosed waiting/seating areas, or terminal buildings/structures encompassing the transit area. The term “station” is primarily used to refer to transit locations that are larger and typically a terminal housing multiple routes. All stations are stops, but not all stops are stations.

Since all stations are stops, but not all stops are stations, returning a station for a stop query is ok, but returning a stop when the query is station should result in a rating of Bad with the User Intent checkbox selected. Try to identify these corresponding terms in the test locale and understand the relationship between them.

For the category [bus stops], relevance should be based mainly on distance from the user location or fresh viewport and the physical size of the bus stop. If the result is a small bus stop in a rural area and the bus stop is among the closest ones to the user's location intent, it should be rated Excellent. On the other hand, if the result is a large bus hub that is a bit farther away from the user, it should still receive an Excellent because of its size, regardless of the fact that there are closer, smaller bus stops. Results close to the user should not be demoted because there is a larger bus stop farther away, instead, the large bus stop should be promoted because of its importance.

      Query                     Result                       Rating and Explanation

Relevance Excellent Greyhound Lines 200 Folsom St This is a major bus station in San Francisco San Francisco, CA 94105 where a user can take Greyhound buses.

Main St & Folsom St San Francisco, CA 94105 Relevance Bad (User Intent) [bus station in san francisco]

User and viewport in San Francisco, CA These results are small local bus stops and do 5th St & Howard St not satisfy the user intent for a bus station. San Francisco, CA 94103

Relevance Bad (Distance/Prominence) Sacramento Bus This result is another Greyhound station, but it is Station in Sacramento, quite far from San Francisco. 420 Richards Blvd There are closer real world results we could Sacramento, CA 95811 return. This result is too far and should be demoted due to distance.

Relevance Excellent Chicago Bus Station 630 W Harrison St The query intent is for a bus stop. This result is Chicago, IL 60607 a Greyhound station, which fully satisfies the user's intent. This result is close to the user.

Relevance Excellent [bus stop] W Harrison St & S The query intent is for a bus stop. This result is Jefferson St a Greyhound station, which fully satisfies the User and viewport in Chicago, IL 60607 Chicago, IL user's intent. This result is close to the user.

Relevance Bad (Distance/Prominence) The query intent is for a bus stop. This result is a Harlem Ave & W 115th bus stop and matches the user's intent, but St there are many bus stops closer to the user in Worth, IL 60482 the real world we should be returning instead. Therefore, this result should be demoted due to distance.

## 5.17. Parking Intent

When evaluating [parking] queries, note that:

- Free and paid parking are equally relevant.
- Parking time limits do not affect relevance rating. Your rating should not be changed by the fact that a parking lot is long term, short term, or limited-time (like a two-hour limit) parking.
- Parking for small cars, large cars, RVs, or motorcycles is equally relevant.
- If you can find evidence that a result is for private parking that cannot be used by the general public, give it a rating of Bad.

Public parking vs Private Parking

Public parking is:

- Parking that is a mix of residential/staff/permit and visitor parking and is not in a gated community
- Parking that can be used only when visiting a certain business (limited-use parking)

Private parking is:

- Parking that is residents only, staff only, or by permit only
- Parking in a gated community

If you cannot confirm whether parking is public or private, give the result the benefit of the doubt and consider it public parking.

## 5.18. Relevance: Service-Level Mismatch

Sometimes a query specifically requests a certain level of service, which may or may not be reflected in the result. Common requests include:

- Specific stores (e.g. Walmart Supercenter)
- Outlet stores (e.g. J. Crew Factory)

When the query requests a specific level of service which is not reflected in the result, give an initial rating of Good and demote as necessary depending on how well the result would satisfy the user intent.

When the query requests a type of business with a generic level of service, providing a result that offers more service than requested still satisfies user intent and should receive an initial rating of Excellent.

When the query does not specify the type of service, any relevant result can be rated Excellent.

   Query               Result                          Rating and Explanation
                                         Relevance                         Excellent

Walmart Supercenter Query is for a generic Walmart and the result is a 3435 East Broadway Walmart Supercenter store that offers more Blvd, Tucson, AZ 85716 services than the average Walmart store. User intent has been met and there is no need to demote for service level. [walmart] Relevance Excellent

Walmart Neighborhood Market The query does not specify the type of Walmart, 5500 E 22nd St, Tucson, and any Walmart can be rated Excellent. Demote AZ 85711 further for distance.

Relevance Good (User Intent)

Walmart Neighborhood Query is for a store with specific level of service. [walmart Market Walmart Supercenters are very large stores that supercenter] 5500 E 22nd St, Tucson, have a full range of grocery and general AZ 85711 merchandise. A Walmart Neighborhood Market is generally smaller with a more limited array of grocery and general merchandise. Relevance Good (User Intent) Nordstrom The query is for an outlet store, but the result is for [nordstrom 55 E Grand Ave, Chicago, rack] a full-price store. The result satisfies the query IL 60611 intent, but to a lesser degree. Bank of America Relevance Excellent 10900 Orangewood Blvd, Orlando, FL 32821

[bank of When the query is for a bank or a general bank america] Bank of America ATM brand, an ATM or a branch location of that specific 10900 Orangewood Blvd, brand are equally relevant. Orlando, FL 32821

      Query           Result                       Rating and Explanation
                                      Relevance                        Excellent

The result is a bank branch location. Since many Citibank branches contain ATMs, and would be able to 3333 E Tropicana Ave provide the same level of service as an ATM, this Las Vegas, NV 89121 result usually fulfills the user's intent.

[ATM] Note that if research indicates the result does not offer cash services, rate it Bad.

Relevance Excellent Citibank ATM 7-Eleven 3421 E Tropicana Ave This is an ATM located inside a 7-Eleven Las Vegas, NV 89121 convenience store. It satisfies the primary intent of the category. Relevance Bad (User Intent) A user has asked for a specific fast food restaurant McDonald's and the result is another fast food restaurant that [burger king] 6875 Sand Lake Rd, offers similar food and service. Even though the Orlando, FL 32819 service level in the two restaurants is similar, this result does not match the user intent for the named restaurant.

## 5.19. Rating Relevance When the Result Status is PERMANENT_CLOSURE

A business/POI that has its status set to PERMANENT_CLOSURE requires special consideration during relevance rating.

Note: A result without any status indicated should be rated as usual, including when research indicates the business/POI is closed or does not exist.

There are some situations where you can expect to see results with the status PERMANENT_CLOSURE and others where such results are not expected. The following sections will describe how to identify and rate them.

### 5.19.1. Expected PERMANENT_CLOSURE Status

Sometimes you can expect to see results whose status is shown as PERMANENT_CLOSURE.

This can happen when:

- The permanently closed result satisfies the user intent completely. AND
- There is/are no other result(s) that satisfy the actual user intent in the area of location intent.

Examples of results where PERMANENT_CLOSURE status is expected

- Navigational queries:
- Queries that can only return a single result, which is permanently closed. This could be because the POI or business name is unique or the query contains location intents like locality or street components.
- Chain queries for closed chains:
- All chain locations within the area of location intent are permanently closed and the closest open chain result is significantly farther away.

Rating Approach

Rate results with an expected status of PERMANENT_CLOSURE as if they were open. This means that in most cases the rating will be either Navigational or Excellent, because even though they are closed, these are the best or only results that could ever be returned.

#### 5.19.1.1. Expected PERMANENT_CLOSURE Status: Navigational Query

The user is looking for a unique business in a specific location.

Query User and Viewport [99 bottles santa cruz] User and fresh viewport in San Luis Obispo, CA

              Result                                Rating and Explanation
                                 Relevance              Navigational
                                 Business/POI
  99 Bottles Of Beer On The      Closed/Does not        Yes
Wall                             exist
PERMANENT_CLOSURE                This permanently closed restaurant is the only result that
110 Walnut Ave, Santa Cruz, CA   meets the user intent, which makes it expected. Choose the
                                 Business/POI Closed/Does not exist checkbox and rate the
                                 business as if it were open.
                                 Relevance              Bad (User Intent)
  99 Cents Only Stores
                                 The 99 Cents store does not match the user intent and is rated
260 E 10th St, Gilroy, CA
                                 Bad.
                                 Relevance              Bad (User Intent)
  99 Bottles & Cocktails
                                 While also a restaurant with a name that starts with 99 Bottles,
8901 Katella Ave,                this is not in Santa Cruz, does not match the user intent, and is
Anaheim, CA                      rated Bad.

#### 5.19.1.2. Expected PERMANENT_CLOSURE Status: All chains closed in area

Chico's has closed all of its locations in Canada. The closest locations to the user are across the border in the United States.

Query User and Viewport [chico's] Fresh viewport in Toronto, ON, user in Hamilton, ON

                       Result                                    Rating and Explanation
                                            Relevance                 Excellent

Chico's Business/POI Closed/ Yes Does not exist PERMANENT_CLOSURE 100 City Centre Dr, The permanently closed location for Chico's is in the center of the Mississauga, ON fresh viewport. Since there are no open locations anywhere close to the area, this result is expected. Choose the Business/POI Closed/Does not exist checkbox and rate the business as if it were open. Relevance Excellent

Chico's The open Chico's closest to the user is just across the border. 5151 Main St, Because it is the closest open result, it is rated Excellent. Williamsville, NY United States

               Result                                    Rating and Explanation
     Chico's                        Relevance                 Good (Distance/Prominence)
3349 Monroe Ave Ste 45,
Rochester, NY                       As the second-closest open location, the Chico's in Rochester is
United States                       demoted to Good.

### 5.19.2. Unexpected PERMANENT_CLOSURE Status

These are results whose status is shown as PERMANENT_CLOSURE, but are not expected to be shown at all.

Results with the status PERMANENT_CLOSURE are unexpected when there are also open results in the area of location intent that would satisfy the actual user intent fully without changing or altering the user query.

Examples of situations where results with PERMANENT_CLOSURE status are not expected

- Category queries:
- There are always a large number of possible results for category queries like [restaurant] or [hair salon]
- Note: In cases where there is only one match for the category query within a large area and it is marked with the PERMANENT_CLOSURE status, consider it an exception and choose Business/POI is closed or does not exist, then rate it as if it were open. This should be extremely rare.
- Queries with several possible interpretations:
- These are queries could have several possible results and/or result types available, and do not depend on PERMANENT_CLOSURE results.
- Most chain queries:
- There are often multiple locations of a chain available within the area of location intent, and a permanently closed result does not need to be shown in these cases.

Rating Approach

Unexpected permanently closed results should be demoted by 2 for relevance which means the highest rating starts at Acceptable.

5.19.2.1. Unexpected PERMANENT_CLOSURE Status: Open Op ons are Nearby

There are many options available near the user for this category query, so there is no reason to show a permanently closed business.

Query User and Viewport [vintage store] User and fresh viewport in Washington, DC

                Result                                      Rating and Explanation

Relevance Excellent Meeps Vintage 2104 18th St NW, Washington, Meeps Vintage matches the user intent and is close to the user DC within the fresh viewport.

Miss Pixie's Relevance Excellent

1626 14th St NW, Washington, Miss Pixie's sells vintage clothing and is among the closest DC results for this category query.

Buffalo Exchange Bad or Acceptable Relevance (User Intent) PERMANENT_CLOSURE 1318 14th St NW, Washington, Business/POI Closed/ DC Yes Does not exist

                      Result                                     Rating and Explanation

The permanently closed Buffalo Exchange did sell vintage clothing, but since there are other open stores that do this in the area of location intent, this result is unexpected. The relevance rating starts at Acceptable. Given the abundance of nearby results, this could be rated Bad, as well.

# 6. Name and Category Accuracy

The Name and Category Accuracy rating is used to evaluate the accuracy of a Business/POI name. Your final rating will take into consideration the accuracy of both the Business/POI name and the category assigned to it. Inaccuracies in either or both of these elements will result in rating demotions.

You'll see this rating referred to throughout the guidelines as both “Name Accuracy” and "Name and Category Accuracy.”

Business/POI Name and Category Accuracy can be rated as:
- n/a
- Correct
- Partially Correct
- Incorrect
- Can't Verify

If you give affinal Name and Category Accuracy rating of Partially Correct or Incorrect, you may be presented with two checkboxes:

- Name Issue
- Category issue

If they appear, use one or both them to select the reason(s) for your rating.

## 6.1. Name Not Applicable (n/a)

The n/a rating should be used for all address type results, including residential addresses, streets, localities, and so on.

        Unlike Business/POI type results, address type results do not actually have a result name. Instead, the
        first line of address type results appears as the result title. This is because this field is meant to
        present the most relevant part of the address information.

Since address results do not have a name or category, their Name and Category Accuracy cannot be evaluated. This is why the n/a rating should be selected.

           Result                                      Rating and Explanation
1703 NW Taylor St              Name and Category Accuracy             n/a
1703 NW Taylor St
Topeka, KS 66608               This is a residential address, not the name or title of a business or POI.

1600 Pennsylvania Ave Name and Category Accuracy n/a 1600 Pennsylvania Ave, Although this is the address of a well-known POI (the White House), it Washington, DC, 20500 is still an address result and contains no name or title. It cannot be United States rated for Name Accuracy. Name and Category Accuracy n/a Paris, France Paris, France This is the name of a locality and country, not the name of a business or POI.

## 6.2. Result Names

Your final Name and Category Accuracy rating will take into consideration both the accuracy of the Business/POI name and the category assigned to it.

First, consider the name.

### 6.2.1. Correct Name

A business/POI result name is accurate when it is used on the POI's official website or on other official resources. Even if the official website does not use the name, if it is used on other official sources, the name is correct. Note that the name has to be used to refer to the particular POI. The corporate name by itself is not automatically the correct name.

Business Name

Every name that a specific business location uses to refer to itself is considered correct. These names can be listed in a variety of ways in different sections of the entity's official website or official social media website(s):

- Chain business locator page on the official website
- About/About Us section on an entity's official website
- Signs and storefronts seen on official sites or social media pages
- Claimed social media pages

If these resources are not available, other reliable sources that can be used for researching business names include:

- Signs and storefronts seen on recent street or online imagery or crowdsourced review pages
- Recent articles in primary publications (newspapers or similar publications that do their own reporting)
- Official restaurant menus (user photos or scanned images from restaurants)

If the name cannot be confirmed with these resources and there is nothing objectively wrong with it, rate it Can't Verify.

Corporate name

The corporate name (and sometimes brand or product name) is often used to refer to a particular entity, but might be not the preferred name for a specific location. This depends on the particular company and the specific result.

Some official websites have a local language and an international (English) version. Consider the name given in the international version only if English is the language/script of the test locale, the query, or the result region, or if the official company, chain, or brand name is commonly used and understood in English in this market. If it is not, select the Result name/title is in unexpected language or script checkbox. No further rating is required.

           Result Name                Official Business Name                   Rating and Explanation
                                                                 Name Accuracy              Correct

McDonald's McDonald's The chain calls all stores McDonald stand has the name in front of all locations as corporate branding. Name Accuracy Correct The name is considered Correct, because it is Peet's Coffee Peet's - Polk Street used on the sign on the storefront. The store is officially called “Peet's - Polk Street” on the website, as it refers to the Polk Street location.

   Result Name        Official Business Name                     Rating and Explanation
                                                  Name Accuracy             Correct

The chain Best Buy uses a location modifier in Best Buy Best Buy San Jose their store names, but their store sign (logo) shows only the corporate brand name “Best Buy” and can be rated Correct.

Name Accuracy Correct The Microsoft storefront shows only the Microsoft logo without any text. On the webpage, stores are Microsoft Microsoft Store referred to as “Microsoft Store” or named together with a location modifier such as “Microsoft Store – South Coast Plaza”. Because of the close similarities between the result name and the store name, rate Correct.

Location modifier or affiliation

Businesses can include the name of the locality or the larger complex or organization they belong to as additional information. These modifiers, even when not specifically used by the official resources, can be considered correct. A name with missing modifier can also be considered correct as long as the modifier isn't crucial for understanding the particular result. If a modifier is present, it must be spelled correctly. If it is misspelled, the name is partially correct.

See your Country Specific guidelines for cases where the location modifier is essential for understanding the result.

   Result Name        Official Business Name                     Rating and Explanation
                                                  Name Accuracy            Correct

Apple Apple Valley Fair The result name is missing the location modifier (Valley Fair) given on the official website, but is still considered Correct.

             Result Name      Official Business Name                    Rating and Explanation
                                                          Name Accuracy           Correct

Peet's Coffee Peet's – Ferry Bldg SF The result name is Correct because it is used as the name on the official website, while the specific store has an optional location modifier.

Name Accuracy Correct Old Navy – Belle Old Navy doesn't officially use the mall name as Old Navy Isle Station part of the store name, but the location modifier is correct, so the business name is rated Correct. Name Accuracy Correct Delgado Community Charity School of The result for the Nursing School includes the name College – Nursing of the college that it is affiliated with. Even though Charity School of Nursing this form is not official, it is rated Correct.

Stylized logos and letters

A variation is still correct when a business uses stylized logos and letters (like the backwards “R” in Toys ”R” Us) that are outside the regular set of letters.

             Result Name      Official Business Name                    Rating and Explanation
                                                          Name Accuracy       Correct

Toys ‘R Us Toys Я Us This business uses a special character in its name, so the name is still considered Correct.

“The” is missing or added
- Missing: The use of definite articles depends on the individual result. When a company using “the” is often referred to without it, the name is correct both with and without the article.
- Added: A business/POI that does not officially include a definite article in its name but has one included in the result should be considered partially correct.

             Result Name      Official Business Name                    Rating and Explanation
                                                          Name Accuracy       Correct

Home Depot The Home Depot The official name of this business is “The Home Depot,” but since it is so often referred to as “Home Depot” the name is considered Correct.

### 6.2.2. Partially Correct Name

A partially correct name differs from the official versions but can still be recognized by the user. Partially correct names can include minor and moderate misspellings, service level mismatches, and missing or unnecessary name parts, including holding names/corporate structures. When the business name on the storefront does not include the corporate status (Ltd., Inc., etc.) seen in the result, it is partially correct.

#### 6.2.2.1. Minor and Moderate Misspellings and Missing or Extra Words

Consider names partially correct when they contain issues that don't prevent the user from identifying the business:

- Name contains repeated, redundant, or missing information or parts
- Incorrect or missing punctuation or special characters
- Unnecessary or missing spaces
- Unexpected use of lower/upper case and ALL CAPS letters
- Acronyms are often expected in ALL CAPS: YMCA, TGIF
- Minor and moderate misspellings that don't influence the user's understanding. See your Country-Specific guidelines for more information on misspellings.
- Mix of expected languages in the result title. Expected languages are the languages of the query, test locale, or region, or of an official business name.

       Result Name        Official Business Name                       Rating and Explanation
                                                       Name Accuracy        Partially Correct
    Macys                 Macy's
                                                       The result is missing an apostrophe.

Name Accuracy Partially Correct

HM H&M Missing the “&” in H&M is a misspelling but the name is still recognizable.

Name Accuracy Partially Correct

uhaul uhaul U-Haul The result name is duplicated and in all lowercase with no “-”.

Name Accuracy Partially Correct

Seven Eleven 7-Eleven The name is in an unexpected form not used by the business itself.

  Result Name    Official Business Name                  Rating and Explanation
                                           Name Accuracy       Partially Correct
GAMESTOP         GameStop                  The name written in ALL CAPS is not expected for
                                           this business and demoted.
                                           Name Accuracy       Partially Correct

Mosjaw Moosejaw The name of this outdoor store has two missing letters but is still identifiable.

Name Accuracy Partially Correct Ecofuture Ecofutures Building Inc The business shows two misspellings and the Buildng Co incorrect business structure (Co. vs. Inc.).

Name Accuracy Partially Correct

Napoli The result name has additional parts not used by Coffeehouse & Napoli Coffee the business. Because the additional parts are in Pastries line with the business and don't make the result ambiguous, it is considered Partially Correct.

Name Accuracy Partially Correct

The additional “superstore” is not used officially, but GAP Superstore GAP also does not change the user stability to identify the well formatted and correct corporate name and is therefore considered Partially Correct.

Name Accuracy Partially Correct

BerkeleyLaw BerkeleyLaw The query [law] was issued in a cz_CZ (Czech) Univerzitní of University of locale and the result locale is the US (English). California California Consider this Partially Correct due to the mix of expected languages: English and Czech.

      Result Name   Official Business Name                   Rating and Explanation
                                               Name Accuracy               Partially Correct

Aqua Spa 夢幻 Aqua Spa - Ocean The query [aqua spa] was issued in the zh- 都 City Hant_HK (Hong Kong) test locale and the result locale is in the US (English). Consider this Partially Correct due to the mix of expected scripts.

Name Accuracy Partially Correct

URLs can give an indication of a businesses official name, but because a URL lacks formatting choices, it should generally not be used to confirm the att AT&T official business name. Similar restrictions exist for certain social media such as Twitter.

The company's name is confirmed by the URL (att.com), but the name stated in the URL, “att”, is clearly poorly formatted, but still recognizable.

Name Accuracy Partially Correct

University of University of California Irvine is more than a location modifier for this California Irvine university. The city name differentiates the Irvine location from other universities in the University of California network.

Name Accuracy Partially Correct

Even though the Nike symbol appears on this Nike NIKELAB 21M NYC store's official website, the preferred store name for this specific location is not the general brand name but the NIKELAB name seen on the store sign and website.

水

   Result Name         Official Business Name                   Rating and Explanation
                                                  Name Accuracy       Partially Correct

The Sears Sears Sears does not use “The” in any of their official webpages. Adding it to the company name gives the name a rating of Partially Correct.

#### 6.2.2.2. Service-Level Mismatch

Chain businesses often indicate the level of service provided at that location in their name. If the result name does not reflect the correct type, it is considered a service-level mismatch and is considered partially correct.

   Result Name         Official Business Name                   Rating and Explanation
                                                  Name Accuracy               Partially Correct

Patagonia Outlet Patagonia The result name suggests that the store is an outlet, which it isn't.

Name Accuracy Partially Correct Depending on its size and the services available, Delhaize Delhaize Supermarkt this chain business comes in five varieties. The result is missing part of the name indicating its service level. Name Accuracy Partially Correct

Best Buy Best Buy Express A Best Buy Express is a vending machine and not a store. This is a service-level mismatch and considered Partially Correct. Name Accuracy Partially Correct

Best Buy Express Best Buy The user is expecting a vending machine where there is a store. This is a service-level mismatch and considered Partially Correct.

#### 6.2.2.3. Holding Name and Corporate Structure

Holding names or corporate structures are not considered correct if they are not explicitly used by the individual stores. Holding names or names that include corporate structure are considered partially correct or incorrect depending on how recognizable the name is in context with the particular business.

       Result Name        Official Business Name       Explanation
                                                     Name Accuracy      Partially Correct

IT SUGAR LLC IT SUGAR The addendum “LLC” refers to the corporate structure and should not be used for the store, However, this name is still recognizable. Name Accuracy Partially Correct The addendum “Inc.” refers to the company's Nordstrom, Inc. Nordstrom corporate structure and should not be used for the store. However, the store can still be recognized.

### 6.2.3. Incorrect Name

An incorrect result name is one that can't be recognized because of severe misspelling or ambiguous or unnecessary/missing parts in the name.

Consider names incorrect when they contain issues including:

- Severe misspellings that prevent the user from identifying the business because of:
- Change in meaning
- Misspelling that results in an entirely different word or gibberish
- Holding names that are completely different than the recognized name
- Unnecessary or missing parts in the name that prevent the user from recognizing the business
- Slang and inappropriate language
- Using the previous name of the same entity that is not a variation of the current name and therefore cannot be identified

Note: If a result name is incorrect, the final Name and Category Accuracy rating will always be Incorrect, even if the category is correct.

      Result name   Official Business Name                Rating and Explanation
                                             Name Accuracy           Incorrect

JAB Holding Peet's Coffee The holding company name is completely Company different than the store name.

Name Accuracy Incorrect

IEA IKEA In short business names, even small errors can prevent the user from recognizing the business.

Name Accuracy Incorrect

Zatas Tacos + Zacatecas Tacos + The misspelling is severe and does not allow the Tequila Tequila user to identify the business with certainty. The user is likely under the impression that it is a different restaurant.

Name Accuracy Incorrect

The misspelling changes the meaning, which Taco Bull Taco Bell makes the name ambiguous: It could be a “Taco Bell” chain store or a different business named “Taco Bull”.

Name Accuracy Incorrect

             Result name   Official Business Name                 Rating and Explanation

With the unnecessary word “Pizza,” the name Walgreens Pizza Walgreens becomes ambiguous and the user does not know if this is a pizzeria named Walgreens or a wrongly labeled Walgreens pharmacy.

Name Accuracy Incorrect

Cheesecake The Cheesecake Factory When missing the word “factory”, the result name “Cheesecake” is not specific enough and the chain business cannot be identified with certainty.

Name Accuracy Incorrect

UPS USPS USPS (United States Postal Service) and UPS (United Parcel Service) are both in the delivery business, but are entirely different companies.

Name Accuracy Incorrect

Starbucks & Marks & Spencer By switching Marks with Starbucks, the business Spencer can no longer be identified.

Name Accuracy Incorrect

Mickey Dts McDonald's Mickey Dts is British slang for McDonald's brand. However it is not an official variation of the brand name. Name Accuracy Incorrect

       Result name         Official Business Name                     Rating and Explanation
                                                         Showing a former name that is not shown on the
                           Bridgestone                   arena's official webpage is not a good experience.
    Sommet Center
                           Arena                         Even when the name might still be in use among
                                                         users, if a result shows a former name, rate it
                                                         Incorrect.

## 6.3. Result Category

Once you have determined the correctness of a result's name, you must evaluate the accuracy of its category in order to determine the final Name and Category Accuracy rating. The category of a result refers to the category of the Business/POI.

Not every result will include a category, but when one appears, you will find it below the address details

If the category is missing or listed as N/A, make your final Name and Category Accuracy rating based on the name alone.

### 6.3.1. Correct Category

When a business or POI is categorized correctly, the category accurately reflects the business, service, or function of the entity. This includes broad or alternate categorizations that are not the preferred choice but are not misleading.

A correct name paired with a correct category is rated Correct for Name and Category Accuracy.

- Not every result will include a category. If the category is missing or listed as N/A, do not demote.
- Some categories may seem slightly too specific or too general. As long as the categorization is not misleading, consider it correct.
- Categories can vary for similar POIs and vary per market. Localization of categories should be taken into account when deciding on correctness.

           Result Name and
                                                    Category Rating and Explanation
              Category
                                 Category Accuracy        Correct
    Restaurant Toqué
    French Cuisine               Restaurants are commonly classified by their respective cuisines. French
                                 Cuisine is an appropriate category for the result.

Category Accuracy Correct Jocko's World Famous Chicken and Seafood This categorization may seem a bit too specific but it is not misleading. Seafood Restaurant Although this restaurant sells more than just seafood, categorizing it as a seafood restaurant still properly reflects the nature of this entity. Category Accuracy Correct

Walmart As long as research shows that the particular Walmart location Grocery Store represented by the result sells groceries, this would be an appropriate category. This is because grocery is a major department in this store and represents a large part of what it sells.

Category Accuracy Correct Walmart Discount Store This category accurately represents the POI. Walmart is known to offer merchandise at low prices.

### 6.3.2. Incorrect Category

When the category is wrong, the final Name and Category Accuracy rating is always Incorrect. This is true whether the result name is Correct, Partially Correct, or Incorrect.

Consider the category incorrect when it is:

- Wrong
- Misleading
- Misspelled
- Incomplete (missing parts or has uncommon/odd abbreviations)
- In an unexpected language/script. The category must match the language/script of the query, test locale, or result region

         Result Name and
                            Expected Category               Final Rating and Explanation
            Category
                                                Incorrect (Category Issue)
        Denver Zoo                              Category is wrong since the result is a zoo. This
                            Zoo
        Active Life                             category does not represent the nature of the result.
                                                Final Name Accuracy rating is Incorrect.

Incorrect (Category Issue)

Macy's The result is a department store and should not be Bar Department Store categorized as bar. Final Name Accuracy rating is Incorrect.

Incorrect (Category Issue) Category is misleading. The result is a department store and it should be categorized as one. Although Macy's this store does sell shoes, the category does not Shoe Store Department Store reflect the wide variety of other merchandise it offers. It is misleading to categorize this result as simply a shoe store. Final Name Accuracy rating is Incorrect. Incorrect (Category Issue) Fry's Electronics Category is misspelled. Any misspelling in the Electronics Store Electrnics category name should be considered wrong. Final Name Accuracy rating is Incorrect. Incorrect (Category Issue)

Macy's Category is incomplete. The category shown is not a Department Store common abbreviation for “Department Store” and Depart Store appears incomplete. Final Name Accuracy rating is Incorrect. Incorrect (Category Issue)

Test Locale: Germany

Category is in an unexpected language or script. Aral The category “Gas Station” is in English instead of Tankstelle Gas Station the expected German “Tanskstelle.” English should be considered an unexpected language in this locale (even if it could be understood by a user there). Final Name Accuracy rating is Incorrect.

Incorrect (Name Issue, Category Issue)

          Result Name and
                                Expected Category                Final Rating and Explanation
             Category
                                                    The result name should be considered partially
    Macys                                           correct because it does not include the proper
    Bar                         Department Store    punctuation: “Macys” should be “Macy's.” The
                                                    category of Bar for this department store is wrong.
                                                    When the name is partially correct and the category
                                                    is wrong, rate Name Accuracy Incorrect.

## 6.4. Can't Verify

When, due to a lack of available data online, the business or POI name cannot be confirmed, rate Can't Verify. This can be because of a lack of official resources or street imagery, or can be the case for small businesses that don't maintain their own webpage or social media profile.

## 6.5. Transit Names

Transit stations and other transit results (like airports and shipping ports), are often named after the locality or street where they are located and can include a transit indication such as "Station" or “Subway.” The transit indication in the result name/title is considered optional and can be missing and still be considered correct. The user query for [san mateo station] can therefore return the name San Mateo Station or simply San Mateo to be Correct. The category of the result will help you correctly interpret the result because categories for transit POIs should be a reference to transit.

Keep in mind that some transit POIs located on street intersections may have a result title that is the name of the street intersection (e.g. “Lincoln Way & 19th Avenue”). This is also considered Correct.

If there are multiple transit systems operating out of the same station, any of the systems can be included in the name to be Correct. If transit stations are close to each other, but users have to walk outside to get from one building to another, consider the results for the two stations as two separate POIs.

            Query                   Result                          Rating and Explanation
                        Millbrae                      Name Accuracy        Correct
                        Millbrae, CA                  “Millbrae” has no transit indication in the result
                        Category: Train Station       name, but the category indicates it is a train station.
          [Millbrae
           station]     Millbrae BART                 Name Accuracy        Correct
                        Millbrae, CA                  “Millbrae BART” has a transit indication for the BART
         User and       Category: Train Station       system in the result name.
         viewport
     in Palo Alto, CA   Millbrae Amtrak               Name Accuracy        Incorrect (Category Issue)
                        Millbrae, CA                  “Millbrae Amtrak” has an incorrect Amtrak transit
                        Category: Train Station       indication. Only BART and Caltrain operate from
                                                      Millbrae station.

## 6.6. Parking Names

A parking lot may or may not have a name. Confirm this on the lot's official webpage:

- The generic names “Parking,” “Garage,” or “Lot” (or any other words that indicate parking can take place at the location) are considered Correct when no official name can be found.
- If an official name can be found, rate the generic names “Parking,” “Garage,” or “Lot” (or any other words that indicate parking can take place at the location) as Partially Correct.
- If the official website provides a name that differs from the standalone brand name found in the result, rate the brand name (e.g. “Impark”, “Qpark”, etc.) as Partially Correct.
- If the parking lot is specialized (for instance, motorcycle-only parking), and the result's name doesn't reflect that specialization, the result should be rated Incorrect for name accuracy.

Accept the following combinations of names as Correct if no official name is found:

- (Business name/Plaza name/Shopping area name) + (parking/ garage/lot)
- Without the addition of parking/garage/lot, the name is Incorrect
- Parking/ Garage/Lot (or any other words that indicate parking can take place at the location)

                Query                    Result                           Rating and Explanation
                                                            Name Accuracy           Correct
                               Union Square Garage
                                                            This garage's official website confirms its name.
                                                            Name Accuracy           Partially Correct

Parking (Result is for the Union Research shows that the official name for this Square Garage) parking location is Union Square Garage

[Parking] Safeway Parking Name Accuracy Correct (Result is for the parking User and viewport lot attached to a This parking lot has no official website or name, but in San Francisco, CA Safeway store in San is associated with a Safeway store. Francisco) Parking Name Accuracy Correct (Result is for the parking lot attached to a Safeway store in San This parking lot has no official website or name. Francisco) Safeway Name Accuracy Incorrect (Result is for the parking lot attached to a Without the words “Parking,” “Garage,” or “Lot,” Safeway store in San users will have no way to know they can park at this Francisco) Safeway.

## 6.7. Final Name and Category Accuracy Rating (Summary Table)

This table shows the final ratings produced by different combinations of name correctness and category accuracy.

Final Name and Category Name/Title Correctness Category Accuracy Accuracy Rating Correct Correct or N/A Correct Correct Incorrect Incorrect

Partially Correct Correct or N/A Partially Correct

Partially Correct Incorrect Incorrect Incorrect Correct or N/A Incorrect Incorrect Incorrect Incorrect

Remember: If you give affinal Name and Category Accuracy rating of Partially Correct or Incorrect, you may be presented with two checkboxes:

- Name Issue
- Category Issue

If they appear, use one or both to select the reason(s) for your rating.

# 7. Address Accuracy: Components and Issues

Address Accuracy is split into two main parts: Components and Issues and Result Expectation. This section will discuss Components and Issues and the next section will discuss Result Expectations.

## 7.1. Address Components

Address components are the elements used to form the address details for each result. These components include street number, unit/apt, street name, locality, region/state, postal code, and country. The components are defined in these guidelines with a global approach in mind. There may be variations for specific markets that are not addressed here. See your Country Specific guidelines for more information on the address component requirements for each type of result.

This section covers the issues that can be associated with the address components as well as the possible issues that can be associated with the address itself. It refers to the checkboxes presented in the rating interface when Incorrect is selected. Checkboxes should be selected for incorrect or missing information. Issues can occur within parts of the address or the entire address.

Choose all identified incorrect or missing components. If the issue is not tied to individual components but to an issue pattern, choose the appropriate issue instead.

Never select issues and components at the same time to report the same problem. That is, do not rate Incorrect —Language/Script issue for the entire address and also Incorrect—Street Name because street name is in an incorrect language.

When a Language/Script issue is present, make sure to check the address components for accuracy and to select the appropriate checkbox. For instance, if you select language issue for the entire address, you can also mark street number as incorrect, since this is an error that's not language related.

### 7.1.1. Street Number

        Result            Official Address                     Rating and Explanation
                                                Address Accuracy         Incorrect – Street Number
7-Eleven            834 E Fremont Ave,
836 E Fremont Ave,  Sunnyvale, CA               Select the Street number checkbox because the
Sunnyvale, CA 94087 94087, USA                  street number in the result address is incorrect.

            Result            Official Address                    Rating and Explanation

Defour Potgieterstraat 47, Address Accuracy Incorrect – Street Number Potgieterstraat, 1053 1053 XS Select the Street number checkbox because the XS Amsterdam, Amsterdam, street number is missing in the result address. Netherlands Netherlands

The way street numbers are assigned varies by country and area. Some patterns you may see:

Street Number Extensions

Some markets use a street number extension system. Street number extensions are part of the street number, not a further breakdown of it like building or unit numbers. If a street number extension is incorrect or missing from a POI address it should be treated as an incorrect/missing street number. Refer to Country Specific Guidelines for more details.

            Result           Official Address                     Rating and Explanation
                                                  Address Accuracy          Incorrect – Street Number
Elkjøp Halden               Walkersgate 8c,       In Norway, street number extensions are part of the
Walkersgate 8, 1771         1771 Halden,          street number and are not unit numbers. The street
Halden, Norway              Norway                number in the result is missing a street number
                                                  extension ‘c which is listed as part of the official street
                                                  number.
                                                  Address Accuracy          Incorrect – Street Number
REMA 1000 Tynset Elfengveien 4 B,                 In Norway, street number extensions are part of the
Elfengveien 4 A, 2500 2500 Tynset,                street number and are not unit numbers. The street
Tynset, Norway        Norway                      number in the result has an incorrect number
                                                  extension ‘A when ‘B is listed as the official street
                                                  number extension.

Address Range

Address ranges are used to assign numbers to a stretch of road. Given the nature of these ranges, not all numbers will have a building assigned to them.

When an address range is given by the query or returned as a result, consider it Correct when:

- The result street number is within the queried range
- The result address range exists and contains the queried street number
- The range or number matches the odd/even numbering system for left/right side of street required by the country

The same criteria apply to POI addresses.

      Suggestion             Official Address                    Rating and Explanation
                                                    Address Accuracy        Correct
The Crutched Friar
39 Crutched Friars,                              No need to select the Incorrect – Street Number
London                                           checkbox since the street number in the
                          39-41 Crutched Friars,
                                                 suggestion is within the official address range.
                          London EC3N 2AE,
                          United Kingdom         Address Accuracy        Incorrect – Street Number
The Crutched Friar
45 Crutched Friars,                                 Select the Incorrect – Street Number checkbox
London                                              because the street number in the suggestion is
                                                    outside of the official address range.

Address Accuracy Incorrect – Street Number 26 Winchester 25-27 Winchester Avenue Select the Incorrect – Street Number checkbox Avenue, Burpengary Burpengary East Qld East Qld 4505 Australia because the number 26 is even while the official 4505 Australia address range is odd.

Address Accuracy Incorrect – Street Number Select the Incorrect – Street Number checkbox Rua de Dom Hugo 17 because the street range in the suggestion does Apartamentos Oporto 4050 Porto Rua de Dom Hugo 1-45 Portugal not exist. This is a random address range and Porto should be considered incorrect even if it contains the official street number.

### 7.1.2. Unit/Apt

A street number can be divided into unit, apartment, or building numbers. Commonly seen forms include the use of letters: A, B, C as well as the character # in front of a number: #420. Less common are forms like ½.

A unit number should be correct and present when the official address of a business/POI contains a unit number.

When a business does not list a unit number and the unit number cannot be confirmed, no unit number should be given in the result. Rate Incorrect – Unit/Apt when unit number is present in the rating tool in these cases.

        Result            Official Address                     Rating and Explanation
Vuori                                           Address Accuracy          Correct
333 Santana Row                                 This is the correct address listed on the official
Suite #1110                                     website of the business.
San Jose, CA 95128
                                           Address Accuracy          Incorrect – Unit Number
Vuori                   333 Santana Row
333 Santana Row         Suite #1110        This result address is missing the unit number listed
San Jose, CA 95128      San Jose, CA 95128 on the official website. Unit number checkbox should
                                           be selected.

Vuori Address Accuracy Incorrect – Unit Number 333 Santana Row This result address has a different unit number than Suite #2490 the one listed on the official website. Unit number San Jose, CA 95128 checkbox should be selected.

### 7.1.3. Street Name

If the result address has an incorrect or missing street name rate Address Accuracy as Incorrect – Street Name.

         Result             Official Address                    Rating and Explanation
Van Gogh Museum                                   Address Accuracy         Correct
Museumplein 6, 1071
DJ Amsterdam,                                     This is a correct address as displayed on the official
Netherlands                                       website of the business.

Van Gogh Museum Address Accuracy Incorrect – Street Name Museumplein 6, Van Baerlestraat 6, 1071 DJ Amsterdam, 1071 DJ Amsterdam, This address has the wrong street name. Street Netherlands Netherlands name checkbox should be selected. Van Gogh Museum Address Accuracy Incorrect – Street Name 6, 1071 DJ Amsterdam, This address has a missing street name. The street Netherlands name checkbox should be selected.

Alternative Street Names A street can have alternate names or route numbers, as well as multiple names in different languages in bilingual areas. Consider a street name correct when the name used is still valid and in the language expected given the test language, result region, or user query. If the street name has changed and the older name is no longer in use, consider the old name to be Incorrect – Street Name if returned.

Misspelled Street Names

Misspellings in the street name, including missing diacritics (e instead of é, l instead of ł) may be rated Incorrect – Street Name. See your Country Specific guidelines for more information.

         Result             Official Address                    Rating and Explanation

Van Gogh Museum Address Accuracy Incorrect – Street Name Museumplein 6, Musuemplein 6, 1071 1071 DJ Amsterdam, The result street name is misspelled (“ue” instead of DJ Amsterdam, “eu”), so the street name checkbox should be Netherlands Netherlands selected Address Accuracy Incorrect – Street Name Bozego Ciala The result street name is missing diacritics in two Bożego Ciała, Bozego Ciala, letters (ż and ł) which should be treated as a Wrocław, Poland Wrocław, Poland misspelling in the Polish market. The street name checkbox should be selected.

Street Directions and Types

Street directions (North (N), East (E), South (S), West (W)) as well as street types (Street (St),
Boulevard (Blvd), Avenue (Ave), etc.) are part of the street name. If they are incorrect or missing, the
street name is wrong and rated Incorrect – Street Name. Exceptions are when such elements of a
street name are used interchangeably for the same street.

         Result             Official Address                    Rating and Explanation
                                                  Address Accuracy         Incorrect – Street Name
 Van Gogh Museum                             This address has the wrong type of street: both
                          Museumplein 6,
 Museumkade 6, 1071
                          1071 DJ Amsterdam, “plein” (square) and “kade” (quay) are street types.
 DJ Amsterdam,                               The official street type is listed as ‘plein , therefore
                          Netherlands
 Netherlands                                 the type of street is considered wrong and the
                                             checkbox for street name should be selected.

118 El Camino Real 118 E El Camino Address Accuracy Incorrect – Street Name 118 El Camino Real, Real, Sunnyvale, CA This address is missing the direction. Therefore, the Sunnyvale, CA 94087 94087 street name checkbox should be selected. Blue Stones Address Accuracy Incorrect – Street Name 3530 El Camino 3530 E El Camino Real, Santa Clara, This result address has additional direction, which is Real, Santa Clara, CA CA 95051 wrong and does not exist in real life. 95051

### 7.1.4. Sub-Locality and Administrative Subdivisions

Some countries or areas require an additional subdivision, like sub-locality, for correct address information. See your Country Specific guidelines for specific guidance. The general guidance is to rate a wrong sub-locality as Incorrect – Sub-Locality. This is also true if the sub-locality is required but missing.

### 7.1.5. Locality

Misspellings within the locality name, including missing diacritics (e instead of é, l instead of ł) may be rated Incorrect – Locality. See your Country-Specific Guidelines for more information.

Every result requires the correct locality component within its address details. In cases of local
government reforms or other changes in naming, the result has to reflect the official name.
Exceptions are made when alternate names are accepted.

         Result              Official Address                     Rating and Explanation
 Van Gogh Museum                                    Address Accuracy       Incorrect – Locality
 Museumplein 6, 1071       Museumplein 6, 1071
 DJ Utrecht,               DJ Amsterdam,            This address has the wrong locality. Locality
 Netherlands               Netherlands              checkbox should be selected.

Address Accuracy Incorrect – Locality Van Gogh Museum Museumplein 6, 1071 Museumplein 6, 1071 DJ Amsterdam, This address has a missing locality therefore DJ Netherlands Netherlands locality checkbox should be selected.

Jana Matejki Jana Matejki Address Accuracy Incorrect – Locality Jana Matejki 90-237 Łódź Polska The locality within the street result is missing 90-237 Lódz diacritics in two letters (Ł and ź) which should be Polska treated as a misspelling in the Polish market.

### 7.1.5. Region or State

Each country has its own understanding of what is expected (correct) or unusual (incorrect) for region or state components. See your Country Specific guidelines for more information.

         Result               Official Address                    Rating and Explanation
                                                                                 Incorrect – Region/
                                                      Address Accuracy
                      1384 Navarro Dr,                                           State
1384 Navarro Dr
                      Sunnyvale, CA 94087,            This address is missing the state, which is a
1384 Navarro Dr,
                      USA                             mandatory component in the USA. Region/State
Sunnyvale, 94087, USA
                                                      checkbox will be selected for missing state.
                                                                                 Correct with
                                                      Address Accuracy
                                                                                 formatting issue
Van Gogh Museum
                           Museumplein 6, 1071        Region is not a mandatory component in the
Museumplein 6, 1071
                           DJ Amsterdam,              Netherlands, but if present has to be correct.
DJ Amsterdam, North-
                           Netherlands                Since the region is not necessary, it is a
Holland, Netherlands
                                                      redundant address component and should be
                                                      flagged as a formatting issue.

         Result                Official Address                     Rating and Explanation
                                                                                  Incorrect – Region/
                                                       Address Accuracy
                                                                                  State
Van Gogh Museum
                            Museumplein 6, 1071        Region is not a mandatory component in the
Museumplein 6, 1071
                            DJ Amsterdam,              Netherlands, but if present has to be correct.
DJ Amsterdam, North-
                            Netherlands                The correct region for the city of Amsterdam is
Brabant, Netherlands
                                                       North-Holland, therefore the region/state
                                                       checkbox will be selected.

### 7.1.6. Postal Code

The postal code accompanies the locality name and provides further detail about where a feature is located. See your Country Specific guidelines for more information on when postal codes are a mandatory address component.

If a postal code is not mandatory but is present in the result address, rate Correct as long as the postal code applies to at least part of the feature (street, locality, large POI without an expected address, etc.).

For many localities, more than one postal code may apply. As long as the returned postal code is correct for at least a part of the feature (street, locality, large POI) rate Correct. Columbus, OH, for example, contains 45 postal codes.

Postal code standards differ between locales so be sure to consult your Country Specific guidelines for details.

Consider any country specific conventions when it comes to the use and correctness of shortened postal codes. For example, the US postal code does not need the four-digit extension that follows the five digit main code. Ignore it if it appears.

        Result              Official Address                     Rating and Explanation

Van Gogh Museum Address Accuracy Incorrect – Postal Code Museumplein 6, Museumplein 6, 1071 1071 DJ Amsterdam, This address has the wrong postal code “DM” DM Amsterdam, instead of the correct “DJ.” Postal code checkbox Netherlands Netherlands should be selected. Van Gogh Museum Address Accuracy Incorrect – Postal Code Museumplein 6, Museumplein 6 1071 DJ Amsterdam, This address has a missing postal code. Postal code Amsterdam, Netherlands checkbox should be selected. Netherlands

### 7.1.7. Country

The country is a “nice to have” piece of information, but should always be included when the result is located in a country other than the test locale. If missing, rate Incorrect and select the Country checkbox.

    Test
              Address in Result      Address in Reality              Rating and Explanation
   Locale

1384 Navarro Dr, 1384 Navarro Dr, Address Accuracy Correct en_US Sunnyvale, CA Sunnyvale, CA This is a correct address since the test 94087 94087 locale is the USA. Address Accuracy Correct 1384 Navarro Dr, 1384 Navarro Dr, de_DE Sunnyvale, Sunnyvale, CA This address includes the country name CA,94087, USA 94087, USA since it is outside of Germany, which is the test locale. Address Accuracy Incorrect – Country

Museumplein 6, The country is mandatory in this example Museumplein 6, because the address is in the Netherlands, en_US 1071 DJ 1071 DJ Amsterdam, which is outside the user's US test locale. Amsterdam Netherlands Country checkbox should have been selected.

## 7.2. Address Does Not Exist

An address-type result needs to be associated with a building or with a plot of land that has been officially assigned that address. If you find strong evidence that there is no building at the address or that no plot of land has been officially assigned the address, rate Incorrect – Address does not exist and leave a detailed comment including links. If there are not enough resources available to make an informed decision, rate Can't Verify.

Within markets that use street number extensions, if the result offers an address with a generic street number, but the street number alone does not exist without an extension (e.g. result returns “163 Main St.”, but only “163A Main St.” and “163B Main St.” exist), rate the address as Incorrect – Address does not exist, since the street number without the extension is not a valid, real-life address. Note that street number extensions differ from the building numbers referred to in Unit/Apt section.

In rare cases, an existing street address can be found in a different locality. Always mark such cases as Incorrect – Address does not exist and not as Incorrect – Locality.

Use the Incorrect – Address does not exist checkbox for any address result that doesn't exist, like a street or sub-locality result. This rating should not be applied to POI addresses.

## 7.3. Language/Script Issue in Address

The address details must be in a language and script that matches the test language (like en_US), the user query, or the result region.

Use the Address Accuracy Incorrect – Language/Script Issue checkbox if you find issues of this nature in any of the address components in the address details of any result. (For business/POI names and address titles in unexpected languages, see Result title/name in unexpected language.)

These examples show incorrect language and script for the result “Cafe Timber, 1066 Hippy Hollow Rd, Red Boiling Springs, TN 37150” with a user in the US using English.

Any combination of unexpected language or script is considered Incorrect. An exception can be made in cases when only special characters are added that are not used in the expected language.

Results located in a market with different scripts are hard to verify. Use the normal research steps to confirm the address. It is not expected that you understand markets and address formats outside your local knowledge expertise, so do the best you can without doing more research than normal.

Rate mixed languages and scripts found in any address details as Language/script Issue when they use a different language or script than the one used in the query, test, or result location.

## 7.4. Country-Specific Issue

The variety of address formats and distinctive country specific issues is broad. In general, use the checkbox for Country Specific Issue when there is an address problem that is not covered by the available checkboxes. This includes things like instances when an address also requires a municipality in addition to locality and state, but those components are either missing or incorrect. See your Country Specific guidelines for more information.

### 7.4.1. Country-Specific Issue vs. Correct with Formatting Issue

Any additional components beyond the regular address format for a country are rated:

- Correct with formatting issue if correct
- Incorrect – Country Specific Issue if very unusual or wrong

## 7.5. Other Issue

Issues not mentioned in these guidelines are reported using the Incorrect – Other Issue checkbox. If you choose this option, be sure to leave a comment as well as links to the resources you used to identify the issue. The checkbox is also used for:

- Duplicate address components
- Name of POI reappears in the address details
- Natural features that contain street address elements (see Natural Features)
- P.O. Box addresses

You may also use this checkbox if you notice formatting issues along with any Incorrect components you've already selected. This is because once you mark a component Incorrect, you can no longer choose Correct with Formatting issue.

## 7.6. Correct with Formatting Issue

When all the result address information is correct and present, but not in the format expected, mark it as Correct with Formatting issue. Formatting issues include the order of address components and other minor issues that are not necessarily considered wrong. They do not include misspellings which are addressed under the relevant individual components. Some reasons to rate Correct with formatting issue:

- Components are in unexpected order
- Non-required but correct address components
- Extra spacing
- Double comma [,,]
- Rate Incorrect if a required component is missing
- Valid but redundant or unnecessary components (See your Country Specific guidelines for more information)

If optional components already discussed in this chapter appear in the address, use the guidance provided in the section that applies to those components, not the Correct with formatting issue rating. If your market has additional address components, consult your Country Specific guidelines before demoting.

## 7.7. Can't Verify

An address is rated Can't Verify when it cannot be confirmed as Correct or Incorrect. This is usually the case when there is a lack of resources or an unexpected address format is given on the official website.

- Lack of resources:
- No official webpage found
- No official address listed
- General lack of official resources
- Lack of street imagery
- Unexpected address formats used by official resources can include:
- Intersection address (Main St and 2nd St)
- Exit address (Exit 5, Hwy 101)
- Descriptive address (Main St between 6th and 7th Streets)

Ask yourself: Is the location given by the result address at least not wrong given all information I have found? Use the following examples to learn how reach a conclusion.

Note: If an address contains missing or incorrect components, it can be confirmed as Incorrect. Mark the individual incorrect components. See your Country Specific guidelines for more information on missing or incorrect components.

### 7.7.1. Can't Verify for Street Number

The following example shows address details for a business called “Utopia.” No information online confirms the address and only a few street numbers can be confirmed with official resources.

                  Rule and Explanation                                      Example

The street number has to fall within the possible range of addresses.

The street number 165 falls within the possible street numbers ranging from 103 to 175.

Those are the houses closest to the result address that could have been confirmed.

Rate the address Can't Verify.

### 7.7.2. Can't Verify for Street Name

The following examples give different address details for a business called Aztec. The official address is “Granite Ave & W Babcock St, Bozeman, MT” and is in a different format than the result addresses.

                  Rule and Explanation                                      Example

The result address has to provide access and be within the possible range of street numbers.

W Babcock St provides access to the business and the number appears to be within the range of addresses we can confirm.

Rate the address Can't Verify.

Granite Ave provides access to the business and the number appears to be within the range of addresses we can confirm.

Rate the address Can't Verify.

# 8. Address Accuracy: Result Expectations

You will see three kinds of results:

- Business/POI results
- Address type results
- Features without an expected address

Different address details are expected for each result type. For example, the Amazon river has no street address but its name is accompanied by the country, while the fast food place Wienerschnitzel shows a complete address. You will need the appropriate expectations in order to rate addresses accuracy.

Wienerschnitzel Eiffel Tower 75 Saratoga Ave 5 Avenue Anatole France Santa Clara, CA 95050 75007 Paris United States France 1 Church St Grand Central Terminal 1 Church St Manhattan Burlington, VT 05401 New York, NY United States United States Amazon Yellowstone National Park Brazil Natural Feature Yellowstone National Park WY 82190 United States

## 8.1. Business/POI Result

The address details of a business or POI generally consist of: street number, street name, locality, region, postal code, and country.

The address given is confirmed Correct when it points to the same physical location listed on the official webpage or other official resources and all mandatory components for your market are present. See your Country Specific guidelines for details on mandatory address components.

### 8.1.1. Business/POI Address Research and Resources

Use official resources to confirm an address when a business or POI's official website does not provide a full address or if there is a conflict with the address in the result. These resources can include:

- Social media sites claimed by the business/POI and updated within the last 6 months
- Street imagery (any recent online imagery showing streets and buildings)
- Postal authorities (for postal codes and locality names)
- Government property registries

If a business or POI has more than one official address for the same location, accept any of them as Correct.

If no official resources can be found, rate according to consensus from multiple reliable sources. Reliable resources include:

- Articles in primary publications (newspapers or similar publications that do their own reporting)
- Crowdsourced user review sites

When no official resources are available and address components are missing or clearly incorrect, check to see if those components are required in the market or region of the result and select the appropriate checkboxes under Incorrect. See your Country Specific guidelines for more information.

Some resources, like data aggregators, spammy directory sources, and so on, are unreliable, and consensus between unreliable resources should be disregarded.

- Valid alternate street and locality names When valid alternate names for streets or localities are used interchangeably, consider all versions Correct.
- Valid alternate street addresses: When valid alternate addresses are returned, consider all versions found on the official website or confirmed by official sources as Correct.

When the address listed by the official website or resources is in a different format than the one seen in the result, confirm if the address given is Incorrect or Can't Verify. See Can't Verify for more information.

If there is any obvious error in an official source, like a misspelled country or city name, and the same error appears in the result, rate the erroneous component Incorrect.

### 8.1.2. Alternative Official Addresses

Some official addresses may contain a vanity street name or have no official street number. In rare cases they may even lack a complete street address. Refer to the official webpage as well as to common address formats in your country to determine the accuracy of each business or POI address.

#### 8.1.2.1. Department Addresses

When the official webpage does not give a complete address with street number and name for a large entity (mall, university, etc.):
- Rate the result address Correct when it matches the address of any department or entity at the same location complex or campus.
- Rate the result address Correct when it lists the correct locality for the entity. If the exact locality is unclear because the entity borders multiple localities, rate Can't Verify.
- The locality is always expected, even when no complete address is provided. If missing, rate Incorrect – Locality.
- Region and postal code must also appear in countries where they are mandatory components. See your Country Specific guidelines for more information.

   Result Address            Official Address                  Rating and Explanation
                                                    Address Accuracy       Correct

Dartmouth College Dartmouth College has no official street 10 N Main St, address listed on their website. The address Hanover, NH 03755 in the result belongs to the Office of Admissions, which is part of the larger university, therefore the address is Correct.

Dartmouth College Address Accuracy Correct Dartmouth College Hanover, NH The college lists only the locality as its Hanover, NH 03755 official address and the result matches that 03755 USA address and is therefore Correct (even though it is missing a street number and name). Address Accuracy Incorrect – Locality Dartmouth College NH A locality is expected in the address details 03755 for most POIs. Rate Incorrect – Locality when the locality is given by the official webpage but missing in the result.

In addition to a street address, a store or department can have the name of the complex or campus that contains it and be rated Correct.

    Result Address          Official Address                 Rating and Explanation
                                                 Address Accuracy           Correct

Stanford School of 559 Nathan Abbott This result is a department within Stanford Law Way, Stanford, CA University. The address is Correct because the Stanford University, 94305 larger entity name and correct locality is listed Stanford, CA 94305 as the address.

Address Accuracy Correct The Cheesecake 3041 Stevens Creek Factory Blvd This result is a business within Westfield Valley Westfield Valley Fair, Santa Clara, Fair shopping mall. The address is Correct Santa Clara, CA CA 95050 because the larger entity name and correct 95050 locality are listed as the address.

If the entity has an official address and the result address belongs to another entity in the same complex or on the same campus, rate Incorrect.

       Result Address               Official Address              Rating and Explanation
                                                                            Incorrect – Street Number
                                                       Address Accuracy
                                                                            & Street Name
 Stanford School of
                               559 Nathan Abbott       The result address belongs to the larger entity
 Law
                               Way, Stanford, CA       (Stanford University). The department has an
 450 Serra Mall,
                               94305                   official address that is different from the
 Stanford, CA 94305
                                                       university's address, so the result address is
                                                       rated Incorrect.
                                                                            Incorrect – Street Number
                                                       Address Accuracy
 Stanford University                                                        & Street Name
 559 Nathan Abbott             450 Serra Mall,         The result address belongs to a smaller entity
 Way, Stanford, CA             Stanford, CA 94305      within the university (Stanford School of Law).
 94305                                                 The university has an official address that is
                                                       different, so this address is rated Incorrect.
                                                       Address Accuracy Incorrect – Street Number
 The Cheesecake
                               3041 Stevens Creek      The result address belongs to the larger entity
 Factory
                               Blvd                    (Westfield Valley Fair mall) that contains the
 2855 Stevens Creek
                               Santa Clara,            restaurant. The Cheesecake Factory's official
 Blvd
                               CA 95050                website lists a different address, so the
 Santa Clara, CA 95050
                                                       address Incorrect.
                                                       Address Accuracy Incorrect – Street Number
 Westfield Valley Fair         2855 Stevens Creek
 3041 Stevens Creek            Blvd                    The result address belongs a business (The
 Blvd                          Santa Clara,            Cheesecake Factory) within the mall. the
 Santa Clara, CA 95050         CA 95050                shopping mall has an official address that is
                                                       different, so the address is rated Incorrect.

#### 8.1.2.2. Result Missing the Street Address

When both the result and the official webpage show identical but incomplete street addresses (missing street name, street number, or both) and the locality is correct, consider the address Correct.

     Result Address           Official Address                  Rating and Explanation
                                                    Address Accuracy            Correct
Pilot Thomas                                        This result is for a self-serve gas station for
Cardlock                    State Hwy 115 &         commercial vehicles. While we would normally
State Hwy 115 &             Mustang Drive,          expect a full address for this type of result, the
Mustang Drive,              Andrews, TX 79714       official website lists only an intersection. The
Andrews, TX 79714                                   result listing matches the official website, so
                                                    the result is rated Correct.
                                                    Address Accuracy             Can't Verify

Strand Central Park This result is for a automated book kiosk. E. 60th St & 5th Ave, While we would normally expect a full address Kiosk Manhattan, NY for this type of result, the official website lists 789 5th Ave 10065 only an intersection. The result listing is a full Manhattan, NY 10065 street address, so the result is rated Can't Verify.

When the street address is missing from the result but the official webpage has a street address, consider the address Incorrect.

     Result Address           Official Address                  Rating and Explanation
                                                    Address Accuracy Incorrect – Street Name
                                                    This result is for a self-serve gas station for
Pilot Thomas                State Hwy 115 &         commercial vehicles. The official website lists
Cardlock                    Mustang Drive,          an intersection as the address. The result
Andrews, TX 79714           Andrews, TX 79714       address is missing the two streets (State Hwy
                                                    115 & Mustang Dr). Mark the result Incorrect
                                                    – Street Name.
                                                     Address Accuracy Incorrect – Street Number
Stanford University                                 The result address is missing the street
                            450 Serra Mall,
Serra Mall, Stanford, CA                            number given on the official website, therefore
                            Stanford, CA 94305
94305                                               the address accuracy is Incorrect – Street
                                                    Number.

#### 8.1.2.3. P.O. Box, Mailing Addresses, and Management Offices

Addresses that point to a different location or building, such as management offices, P.O. Boxes, mailing addresses, or shared office spaces, are not valid and are rated Incorrect – Other Issue.

     Result Address            Official Address                  Rating and Explanation
                                                     Address Accuracy Incorrect – Other Issue

John F. Kennedy The address on the official airport site is for 4 World Trade The Port Authority of NY & NJ corporate International Airport Center, 150 office, which is not the location of the actual 4 World Trade Center, Greenwich St., airport. Even though the result address 150 Greenwich St., New York, NY 10007 matches the address listed on the official site, New York, NY 10007 it is a different location and does not refer to the location of the result POI.

### 8.1.3. Businesses/POI with Moving Locations

Moving entities can either be on a fixed schedule or move at random. In some cases, entities appear to be moving because they are located in a truck or similar vehicle, but are actually permanently based at the same location.

Random location The location of randomly moving entities cannot be predicted and should not be shown on the map. Rate such businesses as Result is closed or does not exist.

Fixed schedule Some entities, such as food trucks, move on fixed schedules. Their stops and schedule are usually posted on their official webpage. The most accurate location for these entities is the address of their longest stay over a full cycle of the given schedule (i.e. if a business has a weekly cycle and stays in one spot for four days, that spot will be the only acceptable address for it). Mark any other address as Incorrect – Other Issue. In cases of a tie, consider any of those locations Correct.

Fixed location Businesses that operate out of a truck or bus that is stationary are evaluated like a standard business. The vehicle does not need to be parked at the location after closing hours to be considered at a fixed location.

### 8.1.4. Events

Some events can be very prominent but happen only a few days a year, others are regularly recurring.

Regularly recurring (weekly/monthly) Rate events like weekly farmer's markets like any other business.

Annual Events

Events that happen once a year, such as Burning Man or the Sziget Festival, only occur for a short time each year, but attract massive amounts of people and media attention. Users can be interested in these kinds of events outside the time they are held.

If the query and location intent are clear, assign an appropriate relevance rating, otherwise rate Bad. Treat seasonal stores (like Spirit Halloween store) and seasonally open POIs (like California's Great America theme park) the same way as annual events.

Depending on its location, an event may not have an official address. This kind of event should be treated like a landmark or natural feature.

Singular or Non-Established Events

Non-recurring events from the past don't carry any map significance and are rated Business/POI closed or does not exist, unless the location of the event became a POI (due to its historical importance) that carries the name of the event further.

## 8.2. Address Type Results

Address type results generally include:
- Street number, street name, postal code, locality and country (when outside of the test locale).

### 8.2.1. Address Result

An address usually includes a street number, street name, locality, postal code and state/region. It can be the same as the mailing address or other addresses provided by the official resources. Use the chapter Address Formats, below, as well as your local knowledge, to identify the necessary components and format.

- The address given has to be associated with a building or a plot of land officially assigned that address.
- P.O. boxes are not valid addresses in the map context. Rate such addresses as Incorrect – Other Issue.

If your research shows that the address does not exist, see Address Does Not Exist.

       Address               Mandatory components                           Explanation
13 Navarro Dr,            Street Number, Street Name,
Sunnyvale, CA             Street Type, Locality, State,    Mandatory components may vary by
94087                     Postal code                      country. Check your country specific
Museumplein 5,            Street Name, Street Type, Street guidelines for a complete list.
1071DJ Amsterdam          Number, Postal code, Locality

### 8.2.2. Address Formats

Various address formats are used in different countries. The sequence and presentation of the components is adapted to match the local needs. For example, the street number comes before the street name in the United States but after it in Germany. See your Country Specific Guidelines for more information.

It might be impossible to confirm an address on official resources when another format is used. Rate

Can't Verify if the address points to the same location using an alternate format and there are no missing or incorrect components.

### 8.2.3. Street Result

Depending on the length of the street, different address components are expected.

Mandatory components may vary per country. See your Country Specific guidelines for a complete list.

- Local roads: Local roads that stay within a certain locality or county should carry the appropriate locality and state name.
- Highways/Interstates: Longer roads that travel between cities or even states don't require a locality or state component. If such components are present, they must be accurate.

U.S. Route 395 covers almost the entire distance from Canada to Mexico. It passes through four states and connects countless towns, such as Big Pine, CA. Within that locality, it carries for a short distance the name N Main St. The two results have different expectations regarding components.

There are several forms that are appropriate for the result U.S. Route 395 because of its length:

- U.S. Route 395 or US 395
- U.S. Route 395, California
- US 395, Big Pine, California, United States

For the result N Main St, there is only one expected form because the road is short and stays within the locality:

- N Main St, Big Pine, CA United States

### 8.2.4. Locality Result

A locality result can be a city, village, municipality or neighborhood. In the U.S. the result usually includes the state it is part of.

                                     Mandatory
            Address                                                           Explanation
                                    components
        Sunnyvale, CA               Locality, State       Mandatory components may vary per country.
           Amsterdam,                                     Check your country specific guidelines for a
                                       Locality           complete list.
           Netherlands

### 8.2.5. Postal Code Result

Postal codes are returned when the user query matches the specific numbers or letters.

                                                   Mandatory
      Query                Address                                                 Explanation
                                                  components
                     Sunnyvale, CA           Locality, State, Postal
     [94087]                                                            Mandatory components may
                     94087                   code
                                                                        vary per country. Check your
                     Museumplein, 1071                                  Country Specific guidelines for
     [1071 DJ]       DJ Amsterdam,           Postal code, Locality      a complete list.
                     Netherlands
### 8.2.6. State/Region/Territory Result

If the user makes the query from a country outside the state or region result, that result must be accompanied by the country name.

                                Mandatory
       Address                                                           Explanation
                               components
      California                State name
                                                     If the result is outside of the test locale, country
    North-Holland              Region name
                                                     name is a mandatory component.
     Puerto Rico              Territory name

### 8.2.7. Country Result

The country is the highest administrative level and has no other address component.

                                Mandatory
       Address                                                           Explanation
                               components
     Netherlands                 Country             The country is the highest administrative level
       Romania                   Country             and has no other address components.

## 8.3. Features Without an Expected Address

There are several kinds of features where no address is expected by the user. This could mean no street name or number or, in some cases, no address components of any kind, are expected to be shown. These types of results have different rating criteria when it comes to Address Accuracy.

### 8.3.1. Natural Features

Natural features are specific landforms or ecosystems like rivers, mountains, jungles, and other geological features. They have names that can be rated, but typically do not have a street address, so natural feature results should be returned without any street address components. If a street address

is present, it is considered Incorrect – Other Issue, even when pointing to a building that is associated with the feature (like a ranger station or visitor center).

- A locality may be an acceptable address if it is appropriate for the size of the feature, as it can help locate a small feature, like a hot spring, within the locality. For larger features, such as a mountain, a locality may not make sense and would be rated Incorrect – Other Issue.
- The state the feature is in can also be provided as the feature's address and rated Correct.
- If a postal code is included, it must be correct
- If a very large or expansive natural feature, like a river or mountain, spans more than one country, any one of these countries can be a Correct address. If no country at all appears, this is also Correct.

Parks and other protected areas are artificial boundaries created to help protect the natural feature. Those POIs are often named after the natural feature they contain. In cases where a feature can be considered a POI, such as Mount Rushmore or a state park beach, the official address can be returned. There might be other natural features within a park that reference the park name as part of their address details.

Treat landmasses like islands and continents as natural features with no expectation of a street address. If one is returned, rate it Incorrect – Other Issue.

       Result Details           Official Address                   Rating and Explanation
Wreck Beach                                            The beach can be confirmed as located within
                             No official address
Vancouver                                              Vancouver and is therefore rated Correct.
                                                       The result contains the name of a street that
Wreck Beach
                                                       provides access to the beach. But the street is
NW Marine Dr,                No official address
                                                       not expected and therefore rated Incorrect –
Vancouver
                                                       Other Issue.
                                                       The result contains the name of a street that is
Wreck Beach
                                                       nowhere near the beach. The street is not
W King Edward Ave,           No official address
                                                       expected and therefore rated Incorrect – Other
Vancouver
                                                       Issue.
                                                       This glacier is located in the borough of Juneau.
Mendenhall Glacier                                     The postal code in the address is associated
                             No official address
Juneau, AK 99801                                       with that locality, therefore both components
                                                       should be considered Correct.
Mendenhall Glacier                                     The given address belongs to the overseeing
8510 Mendenhall Loop         No official address       Forest Office. The glacier should not have this
Rd, Juneau                                             address and is rated Incorrect – Other Issue.
                                                       Mount Rushmore is both a mountain and a
Mount Rushmore               13000 Highway 244         monument within its own national park. The
13000 HWY 244 #31-1,         Building 31, Suite 1      address given on the official National Parks
Keystone, SD                 Keystone, SD 57751        Service website confirms the result address as
                                                       Correct.

### 8.3.2. POIs Without an Expected Address

POIs without an expected address differ from regular POIs and businesses in that the user would not expect a street name and number to be shown.

These types of POIs include, but are not limited to:

Parks (Golf courses and theme parks not included)
- Monuments
- National Landmarks
- Park-like heritage sites
- Bridges
- Squares
- Parking lots
- Transit POIs - these can include airports (including airport terminals), ferry ports, subways, bike share stations, train and bus stops

The rating criteria described in the sections below apply to all features without an expected address.

See Official Address Present if this kind of POI has an official address

#### 8.3.2.1. Minimum Address Component

Whether there is an official street address or not, POIs without an expected address do not need to show it. The locality must be returned whenever a POI is small enough to fit entirely within it. A POI that covers an area overlapping several localities does not require a locality component.

See your Country Specific guidelines for more information on mandatory address components.

        Result             Official Address                    Rating and Explanation
                                                 Address Accuracy          Correct

Quincy Station 220 S. Wells St, This is a transit POI so no street address is expected. Chicago, IL Chicago, IL 60606 The result address is just the locality. The POI is physically located within the given locality and it matches the one listed within the official address.

Address Accuracy Correct

               Result             Official Address                   Rating and Explanation

This is a heritage site so no street address is Stonehenge expected. The result address is just the locality. None Amesbury, Salisbury There is no official street address but since the POI is physically located only within given locality it can be considered correct.

Address Accuracy Correct

Tongariro National This is a park and heritage site POI so no street Park None address is expected. No locality is listed for this New Zealand result. Since this POI covers an area that overlaps several localities no locality component is required.

Address Accuracy Incorrect – Locality 351 N Union St, This is a park POI so no street address is expected. Founders Park Alexandria, VA No locality is listed for this result. Since this park fits Virginia 22314 into only one locality, Alexandria, the missing locality component must be considered incorrect.

#### 8.3.2.2. Official Address Present

Official address is a full street address:

Some of these features have an official street address listed on their website or found on other official sources, but users wouldn't necessarily expect the address to be shown. Since a full address is not expected, the result does not need to contain a full address even if there is one found via official sources. Do not automatically consider any missing street address components as incorrect.

Full Address: When the result contains a full address it should be rated Correct if:
- The result and official addresses are identical Street: When the result address is just a street it should be rated Correct if:
- The result address street is the same as the street within the official address

Consider the following examples for Embarcadero Station in San Francisco:

               Result             Official Address                   Rating and Explanation
                                                      Address Accuracy          Correct
       Embarcadero
       Station
       298 Market St, San                             The result has a full address that is the same as the
       Francisco, CA 94111                            address listed on the official website.

        Result             Official Address                    Rating and Explanation
                                                Address Accuracy            Correct
Embarcadero
Station                                         The result address is just a street. Since the street
Market St,                                      matches the street listed within the official address it
San Francisco, CA                               should be considered correct.

Address Accuracy Incorrect – Street Number Embarcadero 298 Market St, San Station Francisco, CA 94111 The result has a full address. The street number does 388 Market St, San not match the number listed within the official Francisco, CA 94111 address and should be considered incorrect.

Embarcadero Address Accuracy Incorrect – Street Name Station The result address is just a street. The street is not Davis St, the same as the street listed within the official San Francisco, CA address and should be considered incorrect.

Embarcadero Address Accuracy Incorrect – Locality Station The result has no address details at all. Locality is the minimum component required for this kind of result and should be rated Incorrect – Locality if missing.

Official address is a partial street address

When the result address is more specific than the official address it can be rated as Can't Verify or Incorrect, unless another official source can be found to confirm the returned address.

Full Address: When the result contains a full address it should be rated Can't Verify if all of the following apply:
- It does not belong to another POI/entity
- The street within the result address matches the street listed as the official address

If the full address belongs to another building not associated with the POI it should be rated Incorrect.

Consider St Nicholas Church in Berlin, Germany:

                      Result             Official Address                   Rating and Explanation
                                                              Address Accuracy                Can't Verify

St. Nicholas Church The result POI is a landmark church and museum. Nikolaikirchplatz 3, The result has a full address. The street number is 10178 Berlin, not associated with any other POI or entity and the Germany street within the address matches the official street address. Address Accuracy Incorrect – Street Number St. Nicholas Church Nikolaikirchplatz The result has a full address. The street number Nikolaikirchplatz 5, 10178 Berlin, belongs to a building not associated with the POI and 10178 Berlin, Germany should be considered incorrect. The street within the Germany address matches the official street address. Incorrect – Street Number, Address Accuracy St. Nicholas Church Street Name Poststraße 1, The result has a full address. The street name does 10178 Berlin, not match the official street name, so both address Germany components should be considered incorrect.

#### 8.3.2.3. No Official Address

If no official street address is found, the result street address can be rated as Can't Verify or Incorrect unless another official source, like street imagery, can be found to confirm the returned address. When there is no official address the returned street address cannot be confirmed and therefore cannot be considered correct. (Please see your Country-Specific guideline for more details.)

Full Address: If the full address belongs to another building not associated with the POI (even if they are on the same street) it should be rated Incorrect. When the result contains a full address it should be rated Can't Verify if all of the following apply:

- It belongs to a building associated with the intended POI/entity
- The street provides access to the intended POI

Street: When the result address is just a street it should be rated Can't Verify if:
- The street provides access to the intended POI

Determining Access:

A person must be able to reach the POI directly from the given street by walking or driving. This includes:
- Streets providing access by following the boundaries of the feature or leading into it.
- T-intersections:

- A street ending at an intersection does not provide access to the feature on the other side of it.
- A street provides access to a feature when it continues through the feature (even as a different road type with or without a different name) as long as it keeps its original name on the other side of the feature, and by doing so provides physical access.
- Ignore access restrictions when considering whether a street provides access or not.

               Result                                     Rating and Explanation

Grosvenor Square Garden Address Accuracy Can't Verify Grosvenor Square, The result address is the street in front of the result POI. Like the London example illustrated above, this street provides direct access to the result POI.

Grosvenor Square Garden Address Accuracy Incorrect – Street Name N Audley St. The street ends in afT-intersection with the park on the other side. London The street does not continue on the other side as it becomes S Audley St. and is therefore rated Incorrect. Address Accuracy Incorrect – Street Name Charles de Gaulle Airport Rue A. Parreux, The result address is just a street. The street does not provide Mauregard direct access to the result POI and should be considered Incorrect.

Address Accuracy Incorrect – Street Number Charles de Gaulle Airport The result has a full address. The street provides direct access 4 Rue de la Fossette, however, the street number belongs to a building not associated Mauregard with the result POI and should be considered Incorrect.

                   Result                                     Rating and Explanation
                                       Address Accuracy            Incorrect – Street Number, Street Name
    Charles de Gaulle Airport          The result has a full address. The street does not provide direct
    64 Rue de Claye,                   access to the suggestion POI and the street number is associated
    Mauregard                          with another entity. Both address components should be
                                       considered Incorrect.
                                       Address Accuracy                       Incorrect – Locality

Zurich Airport Since the airport is associated with a distinct locality “Kloten” it requires at least a locality name and is rated Incorrect – Locality if this is missing.

# 9. Pin Accuracy

For each result returned, you will find a pin on the map. Rate the accuracy of each pin's placement using this scale:

- Perfect
- Approximate
- Next Door
- Wrong
- Can't Verify

The pin should be a reflection of the result: The location represented by the pin should reflect the result. Pin ratings should be evaluated individually and not influenced by address or other data. A pin can be correct when other rating components are rated Wrong.

Missing Pins

If a pin for a result does not appear on a map, rate the pin Wrong. If this happens five or more times in a row, release the task for technical reasons and explain why in the comments box.

## 9.1. Pin Rating Options

The following sections will provide more detail on how to evaluate pin placement based on the result presented. They describe issues to consider when evaluating the pin.

### 9.1.1. Perfect

A pin is Perfect if it drops directly on the rooftop of a POI or on the listed feature, in the case of entities that are not expected to have rooftops. To be considered Perfect, a pin must either be:

- Located over the listed result's rooftop(s), as determined by research.

- OR -
- Located over the listed feature, if the result does not have an associated rooftop, as determined by research.
- If the result does not have an associated rooftop, the rating is based on the property boundaries of the POI/feature.

“Rooftop” refers to the precise physical location of a result. “Property boundaries" refer to the boundaries of the result's property as a whole. For explanations of property boundaries and how to determine them, see Section 9.3. Boundaries of the Feature.

#### 9.1.1.1. Does the available evidence indicate the result’s precise location?

If you provide a pin rating of Perfect, you may be required to answer an additional question: Does the available evidence indicate the result's precise location?

To answer this question, review the best available evidence for the result's location and determine whether that evidence indicates the precise location of the result

                    Does the available
       Pin         evidence indicate the
                                                                            Explanation
      Rating          result's precise
                         location?
                                                   Select this option when the best available evidence
                                                   indicates the precise location of the result. See Sec. 9.2.1.
                              Yes
                                                   Research Resources for a list of acceptable types of
                                                   evidence.
                                                   Select this option when the best available evidence does
                                                   not indicate the precise location of the result. This may
     Perfect
                                                   include, but is not limited to, the following scenarios:
  - The result is located on a parcel with multiple rooftops,
                              No
                                                     but it is not clear which rooftop it is under.
  - The result is located under a shared rooftop with multiple
                                                     POIs, but it is not clear exactly where it is located under
                                                     that rooftop.

### 9.1.2. Approximate

A pin is Approximate if it drops within the property boundaries of the result and outside of the area that qualifies for a Perfect rating.

To be considered Approximate, a pin must satisfy all of the following criteria:

- On the same property as the listed result
- On the same side of the street as the intended property
- On the same block as the intended property

### 9.1.3. Next Door

A pin is considered Next Door if it drops anywhere on the property immediately next to the intended property. To be considered Next Door, a pin must be:

- On the same street as the intended property
- The Next Door property must have the same street name as the result
- On the same side of the street as the intended property
- The first property to any side of the intended property
- On the same block as the intended property

“Intended property" refers to the boundaries of the result's property as a whole, even if there is no rooftop.

A feature cannot be Next Door to another property when they are both within the same property boundaries. See No Next Door for Share Spaces for more details.

Note that the Half n Half rule also applies to Next Door properties.

No Next Door for Shared Spaces

A feature cannot be Next Door to another feature within the same property boundaries. This means that two buildings in the same shared parking lot or parcel can never be rated as Next Door to one another.

There will also be no Next Door ratings made outside the parcel or shared space. Any pin falling outside of the Approximate area will be marked Wrong.

### 9.1.4. Wrong

All pins that fall outside of the property boundaries of the result and its neighboring properties are considered to be Wrong.

### 9.1.5. Can't Verify (Smallest Identified Area)

When a specific rooftop or boundary cannot be identified, Perfect cannot be given. In these cases, Can't Verify can be used if the pin is within the smallest area that can be identified as a potentially correct location. A pin outside of this area is considered Wrong.

The Can't Verify rating will also be used when an address is rated Incorrect (Address does not exist).

                      Example                                            Explanation
    920 Remour Ln
    Mount Shasta, CA 96067

There is no street imagery in the area, so the exact location of 920 Remour Ln cannot be determined, though its existence is confirmed by the postal service. Remour Ln is a dead-end street, and satellite imagery allows us to confirm the location of the the last properties on the street. The last building number that can be confirmed is 912. We can now create a perimeter within which the pin should be dropped (teal area).

Can't Verify -> All pins dropped within the teal area Wrong -> All pins dropped outside the teal area 350 352 Bukit Batok Street 34 Singapore, 650352

There is satellite imagery for this area, but clouds cover the the exact location of the address. Using evidence from other reliable resources, a perimeter for where the pin should be dropped can be established (teal area).

Can't Verify -> All pins dropped within the teal area Wrong -> All pins dropped outside the teal area

## 9.2. Research Expectations

Rate pin placement according to consensus from multiple reliable online resources. These resources should include both aerial and street-level views whenever possible.

### 9.2.1. Research Resources

Rate pin placement according to consensus from multiple reliable online resources. These resources should include both aerial and street-level views whenever possible. Reliable resources include:

- Reliable online map resources, including vector and hybrid views
- Hybrid views may provide additional points of reference including the locations of streets
- Street imagery
- Accurate street-level imagery can also be found on claimed social media sites, crowdsourced user review sites, and articles in primary publications (newspapers or similar publications that do their own reporting)
- Official venue maps and directories, which can contain information not available in street imagery
- Government business and property registries
- Official government maps (land registry/cadaster, GIS maps)

Note: After consulting these research resources, always verify pin placement using the layers provided in the TryRating tool. This means that even if you have gathered coordinates elsewhere, you must rate pin placement based on what you can actually see in the TryRating tool layers.

Leave comments including coordinates and links to resources if the pin rating was difficult to determine or if you could not verify the pin's placement.

### 9.2.2. Best Available Evidence

Pin rating for most results found under a rooftop is based on the best available evidence for the result's location. That is, the more evidence that can be found to verify a result's location, the more precise the pin's location must be in order to be rated Perfect. (This is true whether or not the result's address includes a unit number because the goal is to find the location of the result.)

If a result's specific location under a shared rooftop can be identified using street imagery or other strong evidence, only that location will be considered Perfect. When there is evidence of the result's specific location under the rooftop, you should also respond Yes, to the question, Does the available evidence indicate the result's precise location?

If a shared rooftop can be identified but there's no strong evidence to confirm the result's specific location, the entire rooftop will be considered Perfect and you should also respond No, to the question, Does the available evidence indicate the result's precise location?

If several rooftops share an address and there's no strong evidence to confirm which rooftop the resultI is under, all rooftops that share the result's address will be considered Can't Verify.

## 9.3. Boundaries of the Feature

To rate a pin for a feature, you must first understand where the feature begins and ends. Some features have rooftops (houses, businesses, malls, and so on) and sit on a parcel of land that belongs to or is associated with them. Other features do not have rooftops (mountains, parks, waterfalls), but there is still a place where they begin and where they end.

A boundary is a real or imaginary line that separates one feature, or the parcel it sits on, from another. The boundaries of a feature always include half of the road when a road is present (see the Half 'n Half rule).

Boundaries can include:

- Fences
- Walls
- Garden plants and bushes
- Bodies of water (lakes, rivers, oceans)
- Other dividers
- Property boundaries confirmed by official sources

If there is no divider, draw an imaginary 90-degree line to the road or use the Half 'n Half rule.

                     Example                                                Explanation
EXAMPLE TYPE: SINGLE RESIDENTIAL PROPERTY

1556 Tobias Dr San Jose, CA 95118

The property boundary is defined by half of the road on one side and physical dividers like brick, concrete, and wooden fences on the others.

EXAMPLE TYPE: SHOPPING CENTER

2086 NewPark Mall Newark, CA 94560

                     Example                                               Explanation

The property boundary is defined by the roads surrounding the shared parking lot.

### 9.3.1. Half n Half and Tennis Rules

In dense areas it may be difficult to find boundaries between parcels. In these cases, divide the space between the street or next building in half to create a boundary. Use this "Half 'n Half" rule to determine the Approximate and Next Door pin locations.

                     Example                                               Explanation
EXAMPLE TYPE: HALF N HALF TO STREET

Extend the feature boundaries to the middle of the road(s). The example shows how Will Rogers Dr (to the south) and Saratoga Ave (to the east) are divided in half to define the outer limits of the Approximate area.

EXAMPLE TYPE: HALF N HALF TO NEXT BUILDING

                     Example                                                  Explanation

The space between two buildings can be divided in half to create a boundary for an Approximate pin placement.

Use natural boundaries as much as possible to draw the line between a Perfect, Approximate, Next Door, and Wrong pin locations.

To address close calls, apply the Tennis Rule:

- If the tip of the pin is still touching the line, the pin is considered inside the boundary.
- If the tip of the pin points outside, it is outside of the boundary.

### 9.3.2. Boundaries in Shared Spaces

When a feature shares a parcel or parking lot with other entities and the same space is used to access many entities, it can be difficult to determine a feature's boundaries. In cases like this:

- Use the guidance provided in Boundaries of the Feature
- If the shared parcel contains any through roads, apply the Half n Half rule to them:
- Through roads are part of the public road network that can be used to go to places other than the specific parcel
- The Half n‘ Half Rule may also be applied to the parcel's internal access roads if they meet all three of these conditions:
- They must continue all the way through the parcel and
- They must have an exit and entrance to public roads at both ends and
- They must be continuously and clearly separated from the shared parking areas by curbs, barriers, road markings, do not cross lines, or similar features

Note: If all three of the conditions above do not apply, then an internal access road cannot be considered a boundary.

                  Example                                      Explanation

EXAMPLE TYPE: BOUNDARIES OF AN ENTIRE CAMPUS

Stanford Shopping Center

This is the Stanford Shopping Center, a campus containing multiple buildings and POIs. When this shopping center is the result, the entire parcel is Perfect. This includes all buildings, parking lots, and parking structures on both the north and south sections of the mall on either of side Arboretum Rd, the public road that cuts through the parcel.

EXAMPLE TYPE: BOUNDARIES OF A POI IN A SHARED SPACE WITH THROUGH ROADS

Nordstrom @ Stanford Shopping Center

The Nordstrom department store is located in the south section of the shopping center's parcel.

When Nordstrom (shown in green) is the result, only the south part of the mall up to 1/2 of Arboretum Road is rated Approximate (shown in yellow). This is because Arboretum Road is a public road that can be used to access places outside the parcel. The north side of the parcel (shown in red) is rated Wrong since the public road acts as boundary to Nordstrom's Approximate area.

                     Example                                            Explanation

EXAMPLE TYPE: BOUNDARIES OF A POI IN A SHARED SPACE WITH NO THROUGH ROADS

Pho 2 Love 6593 W Colfax Ave Lakewood, CO 80214

Pho 2 Love is a Vietnamese restaurant in a strip mall with shared parking that has no public or internal access roads passing through it. The entire shared parcel is rated Approximate (yellow area) and only the section of the rooftop over the restaurant is rated Perfect (green area). This is because the exact location of the business can be confirmed with street imagery or other strong evidence.

#### 9.3.2.1. No Next Door for Shared Spaces

A feature cannot be Next Door to another feature within the same property boundaries. This means that two buildings in the same shared parking lot or parcel can never be rated as Next Door to one another.

There will also be no Next Door ratings made outside the parcel or shared space. Any pin falling outside of the Approximate area will be marked Wrong.

### 9.3.3. Map View Layers

The following sections explain how to determine pin ratings based on the available maps layers in the Rating Tool.

#### 9.3.3.1. Satellite Imagery vs. Vector Map

When there is a difference between where the pin drops in satellite imagery and the vector map, always use the map layer in the TryRating tool that is more generous toward the pin. For example, if the pin drops on the rooftop in satellite imagery, but in the parking lot in vector map, rate using satellite imagery because a pin on a rooftop will get a better rating than a pin placed in a parking lot. Even if there is a major shift between satellite imagery and the vector map in a larger area, such as a complete city or region, rate according to the most generous layer.

Note: When deciding between the generosity of the vector and satellite views for pin rating, use only the vector/satellite views provided in the TryRating tool.

In cases where the vector map is more generous toward the pin but does not show any building contours, use satellite imagery as a reference to locate buildings on the vector map to allow for rooftop ratings. If satellite imagery is unavailable, use your best judgment to determine the correct location of the pin.

In the screenshot below, the vector map does not provide any contours, so it is difficult to determine where each building is. Satellite imagery should be used instead.

Vector Image Satellite Image

### 9.3.4. Pin Display Issues

The following sections explain what to do in cases of certain pin display issues.

#### 9.3.4.1. Leaning Buildings

Normal Building Leaning Building

Sometimes a building or buildings seem to be leaning in satellite view. These buildings do not appear to be standing straight and their rooftops are not aligned with their bases.

When a building or buildings appear to be leaning in satellite view, the satellite photos do not always give accurate information about their shape or location. This is why even when a pin appears to land on a leaning building, you cannot rely on satellite photos alone to rate pin placement.

Research the leaning building's true location using consensus from multiple reliable resources, including:

- Vector views
- Hybrid views, which may provide additional points of reference, including the locations of streets the buildings lean over
- Street imagery
- Reliable online map resources

Always rate the pin based on the building's actual location as confirmed by reliable resources, not on the appearance of leaning caused by satellite photography.

If no reliable resources are available and the pin is not objectively wrong, rate Can't Verify and leave a comment.

       Rating                                      Explanation

Pin falls on the building's actual location as confirmed by consensus Perfect among multiple reliable sources.

Approximate Pin falls within the boundaries of the property including on any rooftop that's not the intended one.

Next Door See Next Door.

Wrong Pin falls outside of the property boundaries or next door property.

Can't Verify See Can't Verify.

Satellite View Vector View Langham Tower and Jollibee Langham Tower and Jollibee

The tallest building seen in satellite view, above left, is Langham Place Office Tower, located at the corner of Argyle and and Portland streets in Hong Kong.

While in satellite view the building appears to lean over both Argyle and Portland streets, the vector view, above right, shows the building's actual location.

The fast food restaurant Jollibee, circled in red on vector diagram, above right, is located at 16 Argyle Street. It cannot be seen in satellite view because the tower leans over it.

  Target       Screenshot                Pin Rating
 Location
                            Research shows that the pin lands
                            across the street from the building's
                            actual location (green area), making
                            it Wrong.

Langham Place Office Tower

Research shows that the pin lands off the building's rooftop (green area), but on its property, making it Approximate.

Langham Place Office Tower

Although this pin appears to land on Langham Place Office Tower in the satellite photo, research shows that the pin actually lands across Jollibee, the street from the Tower on the 16 Argyle rooftop of the Jollibee at 16 Argyle Street, Street (green area), making it Mong Kok, Perfect. Kowloon, Hong Kong Note that while Jollibee cannot be seen in satellite view, its location can be confirmed by reliable resources.

#### 9.3.4.2. Pin Missing or Falls on 0,0

All pins that fall outside of the property boundaries of the POI and its neighboring properties are considered to be Wrong. However, there are two notable additions to this rule:

 Exceptions        Screenshot                                            Explanation

If the pin is completely missing, a map centered on the intersection of De Missing Anza Blvd. and Stevens Creek Blvd. will be shown. In these cases, the pin is missing and should be rated Wrong.

Similarly, if the pin falls on latitude 0, longitude 0, a position in the Atlantic Falls on 0,0 Ocean located off the East coast of Africa, it should be rated Wrong.

If the pin is rated Wrong because the pin is either missing or falls on 0,0, include an explanation in your comments.

## 9.4. Single Rooftop

      Rating                                                    Explanation
 Perfect              Pin falls on the rooftop of the intended property.

Approximate Pin falls within the boundaries of the property, including on any rooftop that's not the intended one. Next Door Pin falls on the next door property. Pin falls outside of the property boundaries or next door property. Any pin falling Wrong outside of the Approximate area in a shared space will be rated Wrong.

Can't Verify See Can't Verify

                         Example                                       Explanation

EXAMPLE TYPE: INDIVIDUAL HOME

5507 Dent Ave San Jose, CA 95118

Perfect -> The pin is on the rooftop specified in the query address (green area) Approximate -> The pin is within the boundaries of the feature (yellow area) Next Door -> The pin is on the immediate property next to the intended feature (purple area) Wrong -> The pin falls outside of the property boundaries or Next Door property (everything else) Can't Verify -> See Can't Verify

EXAMPLE TYPE: MULTIPLE STREET NUMBERS UNDERtONE ROOFTOP WITHOUT SHARED PARKING

Breitensteinstrasse 77, 8037 Zurich

Available resources can have a big impact on rating when a pin is dropped on a rooftop with multiple street numbers under it. This result is a residential townhouse without shared parking. Note that the same rating principles apply to buildings with patchwork rooftops.

                        Example                          Explanation
                                      Using street imagery or other strong evidence, four
                                      entrances for the street numbers can be identified:
                                      75, 77, 79 and 81. Once the rooftop area where the
                                      pin should be dropped is determined, draw
                                      imaginary lines to delimitate that area. A pin
                                      dropped within that area will be rated Perfect.
                                      Since the precise location on the rooftop can be
                                      determined, rate Yes, for the question, “Does the
    With evidence                     available evidence indicate the result's precise
                                      location?”

A pin dropped within the property boundaries of the perfect rooftop will be rated Approximate. The rest of the connected rooftop with the appropriate property boundaries will be rated Next Door (purple area) or Wrong (red area) if the corresponding rooftop portion is farther than the Next Door property. Perfect -> The pin is on correct portion of the rooftop (green area) Approximate -> The pin is within the boundaries of the feature (yellow area) Next Door -> The pin is on the immediate property next to the intended feature (purple area) Wrong -> The pin falls outside of the property boundaries or Next Door property. (everything else) Can't Verify -> See Can't Verify

                             Example                                         Explanation
                                                         Without street imagery or other strong evidence,
                                                         research may indicate that the address range under
                                                         the rooftop is 75 to 81, but the locations where the
                                                         middle numbers 77 and 79 start and end cannot be
                                                         determined. In this case, a pin falling anywhere on
                                                         the correct rooftop will be rated as Perfect, even if
                                                         the precise location on the rooftop for #77 cannot
        Without evidence
                                                         be determined. When the precise location on the
                                                         rooftop cannot be determined, rate No, for the
                                                         question, ‘Does the available evidence indicate the
                                                         result's precise location?
                                                          A pin falling within the property boundaries will be
                                                         considered Approximate and the buildings to the
                                                         right and to the left will be considered Next Door.
                                                         Perfect -> The pin is on the rooftop (green area)
                                                         Approximate -> The pin is within the boundaries
                                                         of the feature (yellow area)
                                                         Next Door -> The pin is on the immediate property
                                                         next to the intended feature (purple area)
                                                         Wrong -> The pin falls outside of the property
                                                         boundaries or Next Door property (everything
                                                         else)
                                                         Can't Verify -> See Can't Verify

EXAMPLE TYPE: ONE BUILDING WITH MULTIPLE STREET NUMBERS IN A SHARED PARKING LOT

Supercuts 1054 E El Camino Real Sunnyvale, CA 94087

The result is a business (or an address) under a connected rooftop with multiple street numbers under it. This result shares a parking lot with other features.

Note: If there are any other buildings within the shared parking lot that are not connected to the Perfect location, they will also be rated Approximate.

This guidance also applies to residential buildings with shared rooftops, like townhouses.

                      Example                                        Explanation

With street imagery or other strong evidence, the exact location of the business (or address) can be With evidence confirmed. Draw imaginary lines on that part of the shared rooftop to create the area for Perfect. Since the precise location on the rooftop can be determined, rate Yes, for the question, “Does the available evidence indicate the result's precise location?”

The rest of the connected rooftop and the shared parking lot are rated Approximate.

Remember: Make no Next Door ratings outside the parcel or shared space. Any pin falling outside of the Approximate area in a shared space will be rated Wrong.

Without evidence Without street imagery or other strong evidence, only the location of the entire rooftop under which the business (or address) is located can be determined. The business exact location under the rooftop cannot be determined. In this situation, the whole rooftop becomes Perfect. When the precise location on the rooftop cannot be determined, rate No, for the question, “Does the available evidence indicate the result's precise location?”

The shared parking lot will be Approximate.

EXAMPLE TYPE: ONE BUILDING WITH A SINGLE STREET NUMBER AND MULTIPLE UNIT NUMBERS IN A SHARED PARKING LOT

Subway 1923 59th Ave #155 Greeley, CO 80634

The result is a business (or an address) under a rooftop that has a single street number, multiple unit numbers, and shares a parking lot with other features. It will be rated exactly the same way as a result whose address does not include a unit number. Whether a result contains a unit number or not, the goal is to use the best available evidence to find the result's location.

Note: If there are any other buildings within the shared parking lot that are not connected to the Perfect location, they will also be rated Approximate.

This guidance also applies to residential buildings with shared rooftops, like townhouses.

                      Example                                        Explanation
                                                 With street imagery or other strong evidence, the
With evidence
                                                 exact location of the business (or address) can be
                                                 confirmed. Draw imaginary lines on that part of the
                                                 shared rooftop to create the area for Perfect. Since
                                                 the precise location on the rooftop can be
                                                 determined, rate Yes, for the question, “Does the
                                                 available evidence indicate the POI's precise
                                                 location?”

The rest of the connected rooftop and the shared parking lot are rated Approximate.

Without evidence Without street imagery or other strong evidence, only the location of the entire rooftop under which the business (or address) is located can be determined. The business exact location under the rooftop cannot be determined. In this situation, the whole rooftop becomes Perfect. When the precise location on the rooftop cannot be determined, rate No, for the question, “Does the available evidence indicate the POI's precise location?”

The shared parking lot will be Approximate.

EXAMPLE TYPE: MULTIPLE ROOFTOPS WITH THE SAME STREET NUMBER AND MULTIPLE UNIT NUMBERS

Samurai Sam's 4801 Washington St, Suite 5 Phoenix, AZ 85034

The result is a business (or an address) under a rooftop that'stone of several rooftops sharing a single street number and containing multiple unit numbers. All the buildings share a parking lot. (The small rectangles on the bottom right are solar parking covers, not buildings.)

This guidance also applies to residential buildings with shared rooftops, like townhouses, and to situations where the feature's address does not includes a unit number, because the goal is to find the location of the feature.

                 Example                                      Explanation
                                          With street imagery or other strong evidence for
                                          the location of the rooftop and the unit under it, the
                                          exact location of the business (or address) can be
With evidence for rooftop and unit
                                          confirmed. Draw imaginary lines on that part of the
locations
                                          shared rooftop to create the area for Perfect.
                                          Whenever the precise location on the rooftop can
                                          be determined, rate Yes, for the question, ‘Does the
                                          available evidence indicate the POI's precise
                                          location?

The rest of the connected rooftop and the shared parking lot are rated Approximate.

Note: If there are any other buildings within the shared parking lot that are not connected to the Perfect location, they will also be rated Approximate. When there is street imagery or other strong evidence for the location of the specific rooftop at the address where the unit is, but no evidence for With evidence for rooftop location only the location of the unit under it, only the location of the entire rooftop can be confirmed. In cases like this, the entire rooftop will be Perfect. When the precise location on the rooftop cannot be determined, rate No, for the question, ‘Does the available evidence indicate the POI's precise location?

The shared parking lot will be Approximate.

Note: If there are any other buildings within the shared parking lot that are not connected to the Perfect location, they will also be rated Approximate.

                   Example                                           Explanation
Without evidence for rooftop or unit
locations, but with evidence for parcel

When there is no strong evidence for the location of the rooftop or the specific unit under it, but there is evidence for the location of the parcel, all rooftops within the parcel will be rated Can't Verify and the parcel will be rated Approximate.

EXAMPLE TYPE: ONE BUILDING WITH SINGLE STREET NUMBER AND MULTIPLE BUSINESSES UNDER THE ROOFTOP

Circle K 925 Wonderland Rd South London, Ontario, Canada N6K 2V8

The result is a business under a single rooftop that has one street number and contains multiple business.

A nail salon, a pharmacy, a dental office, and other businesses all share this address.

With evidence

With street imagery or other strong evidence, the exact location of the result under the shared rooftop can be confirmed. Draw imaginary lines on that part of the shared rooftop to create the area for Perfect. Whenever the precise location on the rooftop can be determined, rate Yes, for the question, ‘Does the available evidence indicate the POI's precise location?

The rest of the connected rooftop and parcel, including all other rooftops that are not the intended one on the parcel, if they exist, are rated Approximate.

                      Example                                         Explanation

Without evidence

Without street imagery or other strong evidence, only the location of the entire rooftop under which the business is located can be determined. The business exact location under the rooftop cannot be determined. In this situation, the whole rooftop becomes Perfect. Whenever the precise location on the rooftop cannot be determined, rate No, for the question, ‘Does the available evidence indicate the POI's precise location?

The parcel will be Approximate.

EXAMPLE TYPE: SHOPPING MALL WITH A SINGLE ROOFTOP

Westfield Valley Fair 2855 Stevens Creek Blvd Santa Clara, CA 95050

This large shopping mall contains many stores undertone rooftop at the same address.

Perfect -> The pin is on the rooftop (green area) Approximate -> Parking structures (entire structure included). Approximate boundaries are found when Half 'n Half rule is applied to the street and parking lots are included (yellow area)

EXAMPLE TYPE: STORE IN A MULTI-STORY MALL

H&M 1004 Stoneridge Mall Rd Suite A 105 Pleasanton, CA 94588

                Example                      Explanation
With evidence

The exact location of this POI cannot be determined by using street imagery, but the official mall directory provides strong evidence for the H&M's location. Using this evidence, the exact location of the result under the shared rooftop can be confirmed. Draw imaginary lines on that part of the shared rooftop to create the area for Perfect. When the precise location on the rooftop can be determined, rate Yes, for the question, "Does the available evidence indicate the POI's precise location?”

The rest of the connected rooftop and parcel are rated Approximate.

                       Example                                            Explanation

Without evidence

Without street imagery or other strong evidence, only the location of the entire rooftop under which the business is located can be determined. The business exact location under the rooftop cannot be determined. In this situation, the whole rooftop becomes Perfect. When the precise location on the rooftop cannot be determined, rate No, for the question, "Does the available evidence indicate the POI's precise location?”

The parcel will be Approximate.

EXAMPLE TYPE: EMPTY PLOT

86 Liberty St. Binghamton, NY

All features that do not have a rooftop will be rated as Perfect if the pin is dropped within the boundaries of the feature.

                          Example                                      Explanation

Perfect -> The pin is within the boundaries of the feature (green area) Approximate -> There is no Approximate Next Door -> The pin is on the immediate property next to the intended feature (purple area) Wrong -> The pin falls outside of the property boundaries or Next Door property (everything else) Can't Verify -> See Can't Verify

EXAMPLE TYPE: HIGH-DENSITY URBAN AREA

57 Neal Street London, England

In this example, the rooftop behind the intended feature will not be considered Next Door. Next Door will be considered to the left or right of the intended feature.

The screenshot shows that the boundaries of the Next Door property contain half of the street. The building behind the Perfect building is not considered Next Door because it has a different street address.

                           Example                                      Explanation

Perfect -> The pin is on the rooftop specified in the address (green area) Approximate -> The pin is within the boundaries of the feature (yellow area) Next Door -> The pin is on the immediate property next to the intended feature (purple area) Wrong -> The pin falls outside of the property boundaries or Next Door property (everything else) Can't Verify -> See Can't Verify

EXAMPLE TYPE: CORNER HOUSE

44 Russel Square London, England

Here there is only one property that qualifies as Next Door. The property marked in red is on another street (Montague Street) and does not meet all the criteria for the rating of Next Door.

When a property is on a corner, the Next Door property can be behind it as long as that property shares the same street name.

Perfect -> The pin is on the rooftop specified in the address(green area) Approximate -> The pin is within the boundaries of the feature (yellow area) Next Door -> The pin is on the immediate property next to the intended feature (purple area) Wrong -> The pin falls outside of the property boundaries or Next Door property (everything else) Can't Verify -> See Can't Verify 44 Russel Square, London, England

                          Example                                         Explanation

EXAMPLE TYPE: RURAL AREA

100 Mulligan Rd Laytonville CA

In rural areas, the Next Door property will often be quite large. This is expected.

Perfect -> The pin is on the rooftop specified in the address (green area) Approximate -> The pin is within the boundaries of the feature (yellow area) Next Door -> The pin is on the immediate property next to the intended feature (purple area) Wrong -> The pin falls outside of the property boundaries or Next Door property (everything else) Can't Verify -> See Can't Verify

EXAMPLE TYPE: PIN ON THE SAME BLOCK

1491 Kooser Rd San Jose, CA 95118

This property has only one next door neighbor because the property to the left, in red, is not on the same block as the intended property.

Perfect -> The pin is on the rooftop specified in the address (green area) Approximate -> The pin is within the boundaries of the feature (yellow area) Next Door -> The pin is on the immediate property next to the intended feature (purple area) Wrong -> The pin falls outside of the property boundaries or Next Door property Can't Verify -> See Can't Verify

### 9.4.1. Residential Property with Multiple Buildings

Some residential properties consist of more than one building associated with a single address. A pin falling on any house(s) on the property will be rated Perfect. If the evidence shows that any other structure on the property could also be a dwelling, it can also be rated Perfect.

In cases where the property also contains support or auxiliary buildings, including, but not limited to, sheds, garages, greenhouses, playhouses, pergolas, and doghouses, these structures should be considered part of the Approximate area.

         Rating                                           Explanation
                        Pin falls on any of the rooftop(s) of the house(s) within the boundaries of the
    Perfect
                        property.
                        Pin falls within the boundaries of the property (or on support or auxiliary
    Approximate
                        buildings within it)

Next Door The next door property.

Pin falls outside of the property boundaries or outside of the Next Door Wrong property.

Can't Verify See Can't Verify

                    Example                                             Explanation
    EXAMPLE TYPE: INDIVIDUAL HOME WITH SEPARATE GARAGE

1351 Navarro Dr Sunnyvale CA 94087

This property contains two buildings: the main house and a garage. Both buildings are on the same parcel, belong to the same entity, and share an address.

Perfect -> The pin is on the rooftop of the house (green area) Approximate -> The pin falls on the garage or within the property boundaries (yellow area) Next Door -> The pin falls on the next door property (purple area) Wrong -> The pin is outside the boundaries (everything else) Can't Verify -> See Can't Verify

## 9.5. Multiple Rooftops

Some POI results consist of multiple buildings associated with/owned by a single business or POI. To rate the pins for these results correctly, you must research and understand the relationship of the structures within the boundaries of the property (or parcel of land) to the POI.

Two kinds of ratings are possible for multiple rooftop POI results:

1. Multiple-Rooftop: When the result is a POI that contains no other POIs and consists of more than one building with multiple rooftops on the property. In cases like this, primary rooftops will be rated Perfect. The parcel of land inside the boundaries of the POI will be rated Approximate. Properties next door to the intended one will be rated Next Door.

2. Campus: When a multiple-rooftop result is a higher education institution like a university or a medical, retail, or other type of business complex, most often containing other public-facing POIs. In cases like this, the entire parcel or property inside the boundaries of the POI, including all rooftops, will be rated Perfect. There will be no Approximate or Next Door ratings.

### 9.5.1. Multiple-Rooftop Rating

Single entities with multiple rooftops are single businesses or POIs that operate out of more than one building. This category includes, but is not limited to, entities like factories, gas stations, apartment complexes, company headquarters, lumberyards, and breweries, and other types of POIs that generally do not contain additional businesses or POIs.

Every primary rooftop on the property will be rated Perfect. The parcel of land inside the boundaries of the POI will be rated Approximate. Properties next door to the intended one will be rated Next Door.

In cases where the property also contains support or auxiliary buildings, including, but not limited to, guardhouses, dumpsters, storage sheds, donation bins, utility buildings, and toilets, these buildings should be considered part of the Approximate area.

         Rating                                    Explanation

Perfect Pin falls on rooftops within the boundaries of the property.

Pin falls within the boundaries of the property (or on support or Approximate auxiliary buildings within it)

Next Door The pin falls on the Next Door property.

Pin falls outside of the property boundaries or outside of the Next Wrong Door property.

Can't Verify See Can't Verify

                 Example                                   Explanation

EXAMPLE TYPE: BUSINESS WITH MULTIPLE ROOFTOPS AT SAME ADDRESS (GAS STATION)

Super Gaz 700 Chambly Road Longueuil, QC J4H 3M1 Canada

This business (or address) is a gas station with a main building and a canopy over the pumps. All structures are on the same property, belong to the same business, and share an address.

Perfect (green area in Figure 2) -> If the pin falls on any rooftop. Approximate (yellow area in Figure 2) -> If the pin falls within the property boundaries. Next Door (purple area in Figure 2) -> If the pin falls on the immediate property next to the intended one.

Figure 1: Satellite view of a gas station

Figure 2: Annotated satellite view of gas station

                    Example                                    Explanation

EXAMPLE TYPE: BUSINESS WITH MULTIPLE ROOFTOPS ON A SHARED PARCEL (GAS STATION)

Canadian Tire Gas+ 401225 ON-401 Woodstock, ON N4S 7W8 Canada

This business is also a gas station with a canopy over the gas pumps, but it shares a parcel with other businesses and a wooded picnic area.

With street imagery or other strong With evidence evidence for the location of the rooftops, the exact location of the business (or address) can be confirmed. When the exact location of the rooftops can be found, the green area is Perfect. Since the precise location on the rooftop can be determined, rate Yes, for the question, "Does the available evidence indicate the POI's precise location?” The rest of the parcel is Approximate.

Without evidence Without strong evidence for the location of the gas station's rooftops, all rooftops are Can't Verify (since there is not enough evidence to narrow the location down to specific rooftop or rooftops). The rest of the parcel is Approximate.

EXAMPLE TYPE: BUSINESS COMPLEX CONTAINING A GAS STATION

When the result is the entire business complex that contains the gas station seen above as well as restaurants and other services under multiple rooftops, the result is considered a campus. In cases like this, the entire parcel is considered Perfect.

                 Example                                      Explanation

EXAMPLE TYPE: BUSINESS WITH MULTIPLE ROOFTOPS AT SAME ADDRESS

Bremac 8133 Mechanicsville Tpke Mechanicsville, VA 23111 United States

The business has three buildings. All buildings are on the same property, belong to the same business and share an address.

This business consists of three buildings.

Perfect (green area in Figure 2) -> If the pin falls on any of the buildings Approximate (yellow area in Figure 2) -> If the pin falls within the property boundaries. Next Door (purple area in Figure 2 ) -> If the pin falls on the immediate property next to the intended one. Figure 1: Satellite view of multi-rooftop POI

Figure 2: Annotated satellite view of multi- rooftop POI

                 Example                                     Explanation
EXAMPLE TYPE: BUSINESS WITH MULTIPLE ROOFTOPS AT SAME ADDRESS (FACTORY)

Fazerintie 2 01230 Vantaa Finland

This is a large factory consisting of several buildings.

Perfect (green area in Figure 2) -> If the pin falls on any of the buildings. Approximate (yellow area in Figure 2) -> If the pin falls within the property boundaries.

This particular POI has no Next Door area.

Figure 1: Satellite view of multiple-rooftop POI

Figure 2: Annotated satellite view of multiple-rooftop POI

                Example                                   Explanation

EXAMPLE TYPE: MULTIPLE BUILDINGS ON ONE PARCEL SHARING ONE ADDRESS (APARTMENT COMPLEX)

Merkuriuksentie 13 00750 Helsinki Finland

This query is for an address that is shared by several apartment buildings on the same parcel. There are five buildings with the same address on the parcel. A pin on any of them is rated Perfect while a pin on the parcel or any of the support structures is rated Approximate.

                      Example                                      Explanation
    EXAMPLE TYPE: BUSINESS WITH A SHED IN THE BACK

33 Mile Roadhouse 33 Mile Haines Hwy Haines AK 99827 United States

This business is a restaurant with a support building — a storage shed — in the back. This restaurant has a detached storage shed on its property.

Perfect (green area in top image) -> If the pin falls on the main restaurant building. Approximate (yellow area in top image) -> If the pin falls within the property boundaries, including the small support shed behind the restaurant. Next Door (purple areas in top image) -> If the pin drops on either of the immediate properties next to the intended one.

Annotated satellite view shows restaurant and shed (arrow points to street imagery of shed).

### 9.5.2. Campus Rating

    Some POIs will encompass entire business complexes, meaning that there are multiple buildings
    associated with/owned by the POI. These POIs include (but are not limited to) institutional complexes
    like universities, hospitals, and airports. Other POI types that can be rated as campuses include
    shopping and strip malls with multiple rooftops, amusement parks, resorts, and zoos.

In cases like this, the entire parcel or property inside the boundaries of the POI, including all rooftops, will be rated Perfect. There will be no Approximate or Next Door ratings.

The property of a campus complex includes the buildings themselves, any shared parking lots, and half n half as described in the guidelines.

How to Identify Campus Results

Wondering if a multiple-rooftop result is a campus? Many, though not all, campuses can be identified by the presence of POIs within the POI. That is, individual stores within multiple-rooftop malls, departments within hospitals, libraries and colleges within universities, spas and restaurants within multiple-rooftop resorts, terminals within airports, and so on.

     Rating                                   Explanation

Perfect Pin falls within the campus/complex boundaries, as determined by research. Approximate N/A - Campuses and business complexes do not have Approximate ratings. Next Door N/A - Campuses and business complexes do not have Next Door ratings. Wrong Pin falls outside of the campus/business complex boundaries.

Can't Verify See Can't Verify

Note: The result may be for an address that should have the campus rule applied.

Some of these types of POIs may have polygons outlining the boundaries of the POI on the map. These polygons may not always be present or perfect, so rate against the true boundaries of the campus or complex as determined by research. A few examples of campuses are below, including one that is missing its polygon.

              POI type                                         Screenshot

Hospital

              POI type   Screenshot

Park

Airport

Outlet Mall

Amusement Park No Polygon available

#### 9.5.2.1. Single-Complex Campus

Entities made up of a single cluster of buildings are the easiest to identify. On the map, these entities can be represented by a single, continuous polygon. Remember, the polygons on the map may not always be perfect or present, so rate against the true boundaries of the campus or complex as determined through research.

The property of a complex includes the buildings themselves, any shared parking lot and half n half as described in the guidelines.

Note: Parking facilities may be included in the polygon if they are owned by the POI and contiguous to the campus (contiguous means that they are not separated from the campus by a street). Tip: Start by looking at the pin's location, then determine if the property surrounding the pin belongs to the POI you are looking at.

              POI               Screenshot                    Rating Explanations

Perfect (green area in Fig. 2) -> If pin falls within campus boundaries. Wrong (everything else outside Fig. 1: Vector view of Stanford of green area in Fig. 2)-> If pin University campus falls outside campus Stanford University boundaries.

Remember, there is no Approximate or Next Door rating for campus and business complexes.

Fig. 2: Annotated vector view of Stanford University campus

             POI               Screenshot                    Rating Explanations

Perfect (green area in Fig. 2) -> If the pin falls within the hospital Fig. 1: Vector view of El Camino boundaries. Hospital campus Wrong (everything else outside El Camino Hospital of green area in Fig. 2)-> If the pin falls outside of hospital boundaries, as determined by your research.

Fig. 2: Annotated vector view of El Camino Hospital campus

               POI                           Screenshot                    Rating Explanations
                                                                      There is no polygon available for
                                                                      this POI, so an imaginary
                                                                      polygon outline must be created
                                                                      according to the actual
                                                                      boundaries of the POI.

To determine where the valid pin area is, look at the location of the attractions within the amusement park and visualize the boundary of the park to determine the POI's polygon. Fig. 1: Vector view of Disneyland The green area highlighted in a Disneyland Park Park satellite view of the POI (Fig. 2) represents the valid area for the pin to land in. A pin landing anywhere outside of this green area would be Wrong.

Note: Parking lots separated by a road should not be included in the polygon because they outside the boundary. Utility buildings located outside of the public park premises are not Fig. 2: Annotated satellite view included in the polygon.

#### 9.5.2.2. Dispersed Campus

In some cases, a campus will not have a single, continuous location, but rather be spread out across a large area like a city. Sometimes, the pin will fall on this type of campus and there may not be a polygon for the campus. If this occurs, research to determine where the polygon should be. Pins that fall on campus-associated, non-parking facilities are valid pins. Apply the single rooftop rules to any standalone, non-parking facility, campus building.

If two or more campus buildings are next to each other, apply the single complex campus logic.

     POI                         Screenshot                        Rating Explanation

Perfect -> If the pin falls the green polygon minus campus- associated parking facilities and non-campus-associated buildings.

Wrong -> If the pin falls on a standalone, campus-associated parking facility, or on a non- campus-associated building.

In this example, Virginia Fig. 1: Annotated vector view of Virginia Commonwealth University (VCU) Commonwealth University is a campus that is spread out Virginia around the city (campus Commonwealth properties are highlighted in University Fig. 2: Zoomed-in view of pin location green).

A pin falling on the rooftop of the Virginia Commonwealth University
- School of Medicine building (in VCU Medical Center complex) would be considered a valid pin for this POI, but a pin falling on a VCU parking lot would not be a valid pin for the same POI.

Zooming into the pin shows that the result is Perfect in this example.

      POI                    Screenshot                           Rating Explanation

The Boston University campus is also spread out across the city, as represented by the highlighted green areas. In this case, the pin happens to fall on the Boston Boston University Center for University Computational Neuroscience and Neural Technologies building. The building is a standalone, non- parking facility building that is Fig. 1: Annotated vector view of the Boston associated with the campus, so University campus the pin is Perfect.

## 9.6. Features Without a Rooftop

This chapter will describe how to rate pin accuracy for features that typically do not have a rooftop.

### 9.6.1. Natural Features

Natural features include but are not limited to:

Bodies of Water Land Features

- Lakes (Lake Victoria)                       • Forests (Black Forest)
- Oceans (Pacific Ocean)                      • Mountains (Carpathian Mountains)
- Creeks (Bear Creek in Colorado)             • Hills (Chocolate Hills of the Philippines)
- Rivers (the Danube river)                   • Plateaus (Colorado Plateau)
- Ponds (Antonelli Pond in California)        • Valleys (Death Valley)
- Wetlands (Laguna de Rocha)                  • Plains (The North American Great Plains)
- Seas (Black Sea)                            • Fjords (Geirangerfjord in Norway)
- Peninsulas (Indian Peninsula)
- Volcanoes (Etna)
- Deserts (Gobi Desert)
- Glaciers (Patna Glacier in Iceland)
- Waterfalls (Niagara Falls)

A natural feature may also have other natural features within or surrounding it. These could include, but are not limited to, the shore of a lake, an island in a river, and afforest surrounding a mountain.

Similar natural features, even if not listed above, should be rated using these guidelines.
      Rating                                             Explanation
                    If the natural feature has a defining feature (water for a river/ocean, cliffs/peak of a
                    mountain, the sand for a beach), pin should fall on that feature or if the natural
                    feature is defined by an arbitrary boundary (parks, national forests), pin should
                    fall in their polygon or where it would be if we had that information.
Perfect
                    When evidence shows that a pin falls in the area described as Perfect, answer
                    Yes to the question Does the available evidence indicate the result's
                    precise location?
                    The pin falls outside of the defining features of a natural feature but still on it
                    (slope of a mountain rather than the peak, the shore of a river or lake). Consider
Approximate         each situation individually. Not all natural features will have an Approximate. If
                    the natural feature exists within an urban or suburban area, you may apply the
                    Half 'n' Half rules.
Next Door           N/A - Natural features do not have Next Door ratings.
                    The pin falls in an area that does not meet the criteria for Perfect or
Wrong
                    Approximate.

Can't Verify See Can't Verify

Type of POI              Screenshot                                    Explanation

Lake Merritt

Perfect (green area in Fig. 2) -> Anywhere on the defining feature of the lake. In this case, the defining feature would be the water. Fig. 1: Vector view of Lake Merritt Body of Approximate (yellow area in Fig. 2) -> The water shore of the lake.

Wrong (everything else in Fig. 2) -> Anywhere past the shore of the lake.

Fig. 2: Annotated vector view of Lake Merritt

Type of POI              Screenshot                                Explanation
Land feature Mount Rainier                       Land features, such as mountains, mountain
                                                 ranges, or volcanoes, should use the following
                                                 guidelines.

Perfect (area above green line in Fig. 4) -> Anywhere on the defining feature of the mountain (peak or ridge, depending on the mountain).

Approximate (area between green and yellow lines in Fig. 4) -> Anywhere on the slope of the mountain.

Fig. 1: Vector view of Mount Wrong (area below yellow line in Fig. 4) -> Rainier Valley of the mountain, anywhere farther out than the obvious slope.

Tip: If available, try using a 3D view of the mountain to determine where its peak or ridge is. Check to see if there is a 3D view before using other sources.

Use common sense to determine the pin rating for these types of land features. For example, a peak of a mountain can span a large area and Fig. 2: Satellite view of Mount may have a more gradual slope area, so make Rainier sure you're not being too strict or too generous when rating the pin.

Fig. 3: 3D view of Mount Rainier

Fig. 4: Annotated 3D view of Mount Rainier

### 9.6.2. Administrative Divisions

Administrative divisions can refer to, but are not limited to:
- Countries
- States
- Counties
- Provinces
- Cities
- Neighborhoods

          Rating                                             Explanation
                        Pin should fall in within the boundaries/polygon of the administrative division.

Perfect When evidence shows that a pin fall into the area described as Perfect, answer Yes to the question Does the available evidence indicate the result's precise location? Approximate N/A Next Door N/A Wrong Pin falls in an area that does not meet the criteria for Perfect. Can't Verify See Can't Verify

          Type                    Screenshot                           Explanation

Perfect – the pin can fall anywhere within the neighborhood boundaries Approximate – not applicable Neighborhood Next Door – not applicable Wrong – everything outside of Perfect

Tenderloin in San Francisco

### 9.6.3. Streets

    In this chapter, rating pins for streets will be explained.
          Rating                                              Explanation
                        Pin can fall anywhere on the street, including medians and intersections the
                        street passes through completely (but not on sidewalks).
    Perfect
                        When evidence shows that a pin fall into the area described as Perfect, answer
                        Yes to the question Does the available evidence indicate the result's
                        precise location?
    Approximate         N/A
    Next Door           N/A
    Wrong               Pin falls in an area that does not meet the criteria for Perfect.
    Can't Verify        See Can't Verify

                         Example                                              Explanation
                                                         Perfect – The pin can fall anywhere on the street,
                                                         including medians and intersections the street
                                                         passes through completely, whether seen in
                                                         satellite view or on the vector map. If there is a
                                                         discrepancy between the satellite view and vector
                                                         map of the street boundaries, use the most
                                                         favorable layer. Note that sidewalks are not part of
                                                         the Perfect area.
                                                         Approximate – not applicable
                                                         Next Door – not applicable
                                                         Wrong – everything outside of Perfect, including
                                                         intersections the street does not pass through

Here, only the Jersey St. & Lafayette St. intersection is a valid intersection for the pin to fall on, since Jersey St. completely passes through Jersey St. in New York City Lafayette St. The intersections where Jersey St. meets Mulberry St. and Crosby St. are not included because Jersey St. does not pass through these streets.

Query: [highway 92]

User and fresh viewport in San Francisco, CA Perfect – The pin can fall anywhere on the street, including bridges that are part of the street. Both result 1 and result 2 are Perfect since the pin falls on the San Mateo-Hayward Bridge, which is part of the highway. Approximate – not applicable Next Door – not applicable Wrong – everything outside of Perfect, including intersections the street does not pass through

Rate pins falling on physical road dividers (the middle of a road with lanes in both directions) as Perfect, even if they fall into water, as in result 3.

## 9.7. Parking Lots and Structures

Shared parking lots are considered Approximate even though they do not belong entirely to the feature. Assume that parking lots belong to the feature and do not split them. When Sourdough & Co (green building) is the result, the approximate area (yellow) extends up to the public road to the north.

In cases where the parking structure can be verified in satellite imagery (by either parked cars or parking lot striping), consider the entire structure a parking lot. The assumption is that there will be no businesses within the structure other than parking-related businesses.

Always consider parking lots and parking structures as belonging to the feature. There's no need split them by applying the Half n' Half rule.

In the example below, the result is a shopping mall with both a parking lot and parking structures. Pins that fall on the building (rooftop) of the mall are Perfect. Apply the Half 'n Half rule to the street and internal access roads, if any, to determine the area for Approximate, as parking lots and parking structures are also Approximate.

## 9.8. Transit POIs

Transit POIs include, but are not limited to, POIs that are transit stops, stations, toll booths, and terminals. A transit stop is a small, transit location typically designated by a bench or covered bench area, a posted sign, or street markings. Transit stations, on the other hand, are typically larger stops that have a major structure associated with them, which include, but are not limited to, platforms, ticketing offices, enclosed waiting/seating areas, or terminal buildings/structures encompassing the transit area. The term “station” is primarily used to refer to transit locations that are larger and typically a terminal housing multiple routes. All stations are stops, but not all stops are stations.

If a transit POI does not meet the criteria to be rated under the Single Rooftop or Campus/Complex guidelines, please use the following criteria to rate.

    Rating                                    Explanation
                 The pin falls on the polygon for the transit POI or in the area where you
                 would wait for transit or within the entrance polygon for an
                 underground transit station.
Perfect
                 When evidence shows that a pin falls in the area described as
                 Perfect, answer Yes to the question Does the available evidence
                 indicate the result's precise location?
            The pin falls within 50 meters of where you would wait for transit or
Approximate within station parking lots and surrounding property up to where the
            Half 'n' Half rule allows.

Next Door Transit POIs do not have Next Door ratings.

The pin is wrong if it falls:
- Farther than 50 meters from the ideal location Wrong
- Within 50 meters on a non-associated rooftop
- Outside of the boundaries as allowed by the Half 'n' Half rule
- Beyond half a city block (applies to bus stops only) Can't Verify     See Can't Verify

### 9.8.1. Bus, Tram, and Streetcar Stops

    Bus, tram and streetcar stops are often, but not always, on the side of the street and have one spot
    where users can wait to board the bus. Perfect pins should be placed on the spot where a user would
    wait while Approximate pins can be placed within 50m of the waiting spot and within the Half 'n' Half
    rule.
       POI              Screenshot                               Rating Explanation
                                            Perfect (green area in Fig. 2) -> Where a user would wait for
                                            the bus.

Approximate (yellow area in Fig. 2) -> 50 m away from where a user would wait for the bus but no farther out than the Half 'n' Half rule allows and not on a building rooftop.

Wrong (everything else in Fig. 2) -> Farther than 50 meters, or beyond half a city block from where user waits for the Noriega Fig.1: Vector view of bus bus, or farther out than the Half n Half rule allows, or on a St and stop rooftop, or in an agricultural field where a person would not 46th wait for transit. Ave bus stop Can't Verify – See Can't Verify

Special Note: A satellite view shows that this pin might actually fall in the street for this bus stop. Remember, favor the map view that gives a more generous rating for the pin these cases. In this case, the vector map is used to rate the pin. Fig.2: Annotated satellite view of bus stop

### 9.8.2. Transit POI with Multiple Rooftops/Platforms

If the POI has multiple rooftops/platforms, apply similar ideas from the campus/complex pin guidelines when determining the valid area for the pin to land on.

For campuses/complexes, a polygon was created using the boundaries of the campus. Use the same concept with transit POIs and create a polygon for the transit POI using the POI's multiple rooftop/ platforms.

         POI                   Screenshot                                 Explanation

Here is the San Jose Diridon train station, so rate the pin according to the train station platforms and rooftops.

Perfect -> Polygon of the station or rooftop/ platform of the station or area between rooftops/platforms of the station (green area). Fig. 1: Vector view of San Jose Diridon Station Approximate -> Within transit station parking San Jose lots and surrounding property up to where the Diridon Half 'n' Half rule allows (yellow area). Station Wrong -> Anywhere outside of transit station boundaries.

Can't Verify – See Can't Verify Fig. 2: Annotated satellite view of Remember, if there is a polygon available in San Jose Diridon Station vector view for the POI, rate against the polygon.

       POI                   Screenshot                                 Explanation

Some transit stops only have a platform where a user can wait for the transit.

Perfect (green area in Fig. 2) -> Where a user would wait for transit or the area between where a user would wait for transit.

Fig. 1: Vector view of Sunnyvale Approximate (yellow area in Fig. 2) -> Within Station 50 meters of where you would wait for transit Sunnyvale or within transit stop parking lots and Station surrounding property up to where the Half 'n' Half rule allows.

Wrong (everything else in Fig. 2) -> Farther than 50 meters from where user waits for transit or farther out than the Half 'n' Half rule allows.

Can't Verify – See Can't Verify

Fig. 2: Annotated satellite view of Sunnyvale Station

        POI                Screenshot                                 Explanation
                                                    Some stations have both a building rooftop
                                                    and an open platform waiting area. Both of
                                                    these areas are considered valid places for
                                                    pins to fall on.

Perfect (green area in Fig. 2) -> Pin falls on the platform(s) where the user would wait or the area between the platforms or the rooftop. Solana Fig. 1: Vector view of Solana Beach Approximate (yellow area in Fig. 2) -> Pin Beach station falls within 50 meters of where you would wait Amtrak for transit or within transit stop parking lots Station and surrounding property up to where the Half 'n' Half rule allows.

Wrong (everything else in Fig. 2) -> Farther Fig. 2: Annotated satellite view of than 50 meters from where user waits for Solana Beach station transit or farther out than the Half 'n' Half rule allows.

Can't Verify – See Can't Verify

### 9.8.3. Transit POIs with a Single Rooftop

If the POI has a single rooftop, apply the single rooftop guidelines.

        POI                     Screenshot                                    Explanation

Perfect -> Rooftop of transit station or stop

Approximate -> Transit POI parking lots and surrounding property up to where the Half 'n' Fig. 1: Vector view of Grand Central Grand Half rule allows Terminal station Central Terminal Wrong -> Farther out than the Half 'n' Half rule allows from POI property

Can't Verify – See Can't Verify

Fig. 2: Annotated satellite view of Grand Central Terminal station

### 9.8.4. Underground Transit Stations

Some transit stations are underground. For stops that do not have polygons available on the tool map, apply similar rules to the satellite campus and use your imagination to draw a polygon using the entrances to the underground station as polygon coordinates. A pin dropped within 50 meters of this polygon should be rated Approximate.

If a pin is placed on a building within the polygon, the building must contain an entrance to the transit stop for the pin to be Perfect. If the pin falls on any other building within the polygon, rate it Approximate.

Some entrances can be seen via satellite view of the station, while other entrances can only be found by doing more research, including using street imagery of the station area to find entrances or using a station map from the transit provider that shows entrances to the station.

#### 9.8.4.1. How to Establish an Entrance Polygon

1. Find at least three entrances to the underground transit station, if possible.

- Use street imagery or an official source to determine where the transit station entrances are located.
- Tip: A good place to start looking for transit entrances is near the pin's location. This will make it easier to determine whether or not the pin falls within the polygon.

2. Connect the entrance points to create an enclosed polygon, where each entrance is a point of the polygon. 3. Determine whether or not our pin falls within 50 meters of the polygon or within the property covered by the Half 'n' Half rule.

If the underground transit station only has two entrances, use the following steps to create an entrance polygon.

POI Steps Satellite Views

1. Imagine property boundaries around the underground transit station entrances using the Half n Half Rule.

Note: Entrances are designated by stars and property boundary polygons are designated by the letters A and B.

2. Connect the closest points of the two boundaries from step 1 to create an entrance polygon.

Note: In this case, we have taken points 1 and 2 from polygon A and connected 16th St & them with points 3 and 4 from polygon Mission B, respectively. Exclude building BART rooftops that do not contain an entrance Station to the underground station from the entrance polygon.

POI Steps Satellite Views

3. Determine whether or not the pin falls within 50 meters of the polygon.

Note: For underground transit POIs that only have one entrance, create the same polygon around the entrance as the Perfect pin rating area, then measure 50 meters from that polygon for the Approximate pin rating area.

#### 9.8.4.2. Examples

         POI                          Screenshot                            Explanation
                                                               If the underground POI already has a
                                                               polygon available, rate the pin against
                                                               the polygon.

In this case, there is a blue-colored polygon on the map for the POI.

Perfect (green area in Fig. 2) Polygon of transit station. Fig. 1: Vector view of Jingu Marutamachi Station Approximate (yellow area in Fig. 2) Jingu Pin lands within 50 meters from the Marutamachi polygon or on transit station parking Station lots and surrounding property up to where the Half'n'Half rule allows. In this case, the station does not have a station parking lot, so only look at the surrounding property within 50 meters of the polygon. Fig. 2: Annotated vector view of Jingu Marutamachi Station Wrong (everything else in Fig. 2) Farther out than the Half'n'Half rule allows from station property.

Can't Verify – See Can't Verify

  

        POI                        Screenshot                                  Explanation

Fig. 1: Vector view of 16th St Mission BART station Perfect -> Pin falls within the entrance polygon and not on a building rooftop (unless there is an entrance to the station within the building).

Approximate -> Pin falls within 50 meters of the entrance polygon or within the property that Half 'n' Half rule covers.

Wrong -> Pin falls more than 50 meters outside of the entrance polygon 16th St and or outside the Half 'n' Half rule area. Mission St BART Station Can't Verify – See Can't Verify Fig. 2: Satellite view of 16th St Mission BART Station showing station entrances

In this case, there are only two entrances to the transit station (Fig. 2). We'll use the Half 'n' Half rule to determine the points for our entrance polygon (Fig. 3).

Our pin falls within the entrance polygon created, so it is a Perfect pin.

Fig. 3: Annotated satellite view of 16th St Mission BART. Stars represent the entrances.

         POI                    Screenshot                                    Explanation

Perfect -> Pin falls within the entrance polygon and not on a building rooftop (unless there is an entrance within the building).

Approximate -> Pin falls within 50 meters of the entrance polygon or within the property that Half 'n' Half Fig. 1: Vector view of Tuileries Station rule covers. Tuileries Wrong -> Pin falls more than 50 Station meters outside of the entrance polygon or outside the Half 'n' Half rule area.

Can't Verify – See Can't Verify

In this example, the pin falls within the Half 'n' Half rule area for the entrance polygon, so it is an Approximate pin. Fig. 2: Annotated satellite view of Tuileries Station. Stars represent the entrances.

        POI                     Screenshot                                Explanation

Perfect -> Pin falls within entrance polygon and not on a building rooftop (unless there is an entrance within the building)

Approximate -> Pin falls within 50 meters of the entrance polygon Fig. 1: Vector view of Jay St-MetroTech Wrong -> Pin falls more than 50 station meters outside of the entrance polygon

Can't Verify – See Can't Verify

With underground transit stations that Jay have multiple entrances, you'll need to Street- use street imagery or an online MetroTech resource to find the transit entrances then draw a polygon using the entrances as points of the polygon. Here, we were able to find 5 entrances represented by the yellow stars that Fig. 2: Annotated vector view of Jay were near our pin (Fig. 2). These St-MetroTech station with entrance polygon entrances were found via street imagery, since satellite view does not clearly show entrances to this transit station (Fig. 3). There is also a transit station map available from the official transit website that shows the entrances to this station.

In this example, our pin is placed within the entrance polygon for this station, so we rate it as Perfect.

Fig. 3: Satellite view of Jay St-MetroTech station

# 10. How to Rate Results

This chapter shows how to rate a variety of examples.

For each result, you will need to answer questions about:

- Relevance
- Name accuracy
- Address accuracy
- Pin accuracy

## 10.1. Specific Address

When the query is an address, and the user explicitly states their location intent by including the name of a locality, this is an explicit location query and the user's viewport and location are irrelevant. The query refers to a unique location, so a result for this exact location should be rated Navigational.

       Query                    Results                            Ratings and Explanation
                  Is there a Navigational Result for this Query?             Yes

[12112 Relevance Navigational sugarloaf key Name Accuracy n/a st tampa fl 33626] Address Accuracy Correct

Pin Accuracy Perfect

12112 Sugarloaf Key St 12112 Sugarloaf Key St Tampa, FL 33626 Category: n/a

This address belongs to an apartment complex, where all buildings have the same address.

The pins falls on one of the rooftops of this mutiple-rooftop result and is rated Perfect.

   Query                    Results                       Ratings and Explanation
                                              Relevance            Navigational
   [12112       Camden Westchase Park
sugarloaf key   Apartments                    Name Accuracy        Correct
 st tampa fl    12112 Sugarloaf Key St
  33626]        Tampa, FL 33626               Address Accuracy     Correct
                Category: Apartments          Pin Accuracy         Wrong

The result includes the name of the business, which is located at this address.

The pin falls outside the boundaries of the apartment complex.

12112 Sugarloaf Key St Relevance Navigational 12112 Sugarloaf Key St Tampa, FL Name Accuracy n/a Category: n/a Address Accuracy Incorrect - Postal Code Pin Accuracy Perfect

The result is missing a postal code so Address Accuracy is Incorrect (with Postal Code specified as the incorrect component). Postal code is a mandatory component for a residential address result. The pin falls on one of the rooftops of this multiple-rooftop POI.

Sugarloaf Key St Acceptable (User Intent Relevance Sugarloaf Key St, Tampa, FL Issue) 33626 Category: n/a Name Accuracy n/a Address Accuracy Correct Pin Accuracy Perfect

The result is a whole street result instead of a specific address. As the user query is for a specific, full address, the information provided by the result is incomplete. The user would be able to find the street, but not the exact address's/he is looking for. The pin is dropped on the street mentioned in the result and is Perfect.

   Query                    Results                        Ratings and Explanation

11244 Windsor Pl Relevance Bad (User Intent Issue) 11244 Windsor Pl Cir Name Accuracy n/a Tampa, FL 33626 [12112 Category: n/a Address Accuracy Correct sugarloaf key st tampa fl Pin Accuracy Perfect 33626] The result does not satisfy the query and is not considered relevant. However, the address and pin placement are Correct and Perfect. Remember, the data and relevance of the result are considered separately. The data can be correct even when the result's relevance is Bad. [220 yonge st Is there a Navigational Result for this Query? Yes toronto] CF Toronto Eaton Centre Relevance Navigational User in Toronto, 220 Yonge St Toronto ON M5B 2H1 Name Accuracy Correct Canada Category: Shopping Center Address Accuracy Correct Pin Accuracy Perfect

This query is the address of the best-known mall in downtown Toronto. Even though many businesses have this address as their official address, the mall is rated Navigational due to its prominence.

The result includes the correct address plus the name of the mall, which is useful additional information. The pin is dropped on the mall's rooftop.

       Query             Results                Ratings and Explanation
              Indigo                Relevance           Good
              220 Yonge St
                                    Name Accuracy       Correct
[220 yonge st Toronto, ON M5B 2H1
   toronto]   Category: Bookstore   Address Accuracy    Correct

User in Toronto, Pin Accuracy Perfect Canada

This large, well-known bookstore is inside the Eaton Centre and shares the 220 Yonge Street address. It is demoted to Good because it is less prominent than the Eaton Centre.

The name and address are Correct. Based on the best available evidence (including interior maps of the mall available online) the exact position of the bookstore under the rooftop can be found. A pin falling on the green area (bookstore's position) is Perfect. The rest of the mall is Approximate.

        Query                 Results                         Ratings and Explanation
                  Moneysworth & Best                                   Acceptable (Distance/
                                                  Relevance
                  220 Yonge St                                         Prominence)
    [220 yonge st Toronto, ON M5B 2H1             Name Accuracy        Correct
       toronto]   Category: Shoe Repair Service
                                                  Address Accuracy     Correct
    User in Toronto,
       Canada                                     Pin Accuracy         Perfect

Most people come to the mall to shop, so this shoe repair service, also at 220 Yonge Street, is much less prominent and a much less likely intent than other stores in the mall. Its relevance is demoted to Acceptable.

The store is very small and located underground. When comparing the official map provided by the mall with the satellite, the store's location can be established inside the green area.

   Query                  Results                       Ratings and Explanation

[220 yonge st Subway Relevance Bad (User Intent) toronto] 260 Yonge St Toronto, ON M5B 2H1, CAN Name Accuracy Correct User in Toronto, Category: Sandwich Shop Address Accuracy Correct Canada Pin Accuracy Perfect

This fast-food restaurant is not located at 220 Yonge Street. The name and address in the result are Correct and the pin placement is Perfect.

The official venue map shows the precise location of the restaurant, but finding the perfect area is a little tricky. Given all evidence, the Perfect location (green area) can be estimated generously.

    Query              Results                    Ratings and Explanation
   [1141     Swiss Chalet             Relevance            Excellent
 Highbury    1141 Highbury Ave
Ave, London, London, ON N5Y 1A5 CAN
                                      Name Accuracy        Correct
  Ontario]

User in London, Address Accuracy Correct Canada Pin Accuracy Approximate All four of these businesses:

1. Swiss Chalet 2. Wings Kitchen 3. Fast Photo 4. Globally Local

share the 1141 Highbury Ave address and are of similar prominence. They are all equally likely to be the intent of a user with this query. This means that all results can be rated Excellent.

Compare this example to the Eaton Centre example, above, where there is a single most prominent POI at the address that is the dominant user intent.

In the diagram at left, the pin is in the parking lot and would be rated Approximate for any of the results.

Address queries can also be just the name of a street, neighborhood, intersection, or city. Results for streets, neighborhoods, intersection, and city queries are eligible for Navigational.

The expectation is that we return the requested entity with the same level of broadness that the user requested, which may not include all of the elements of a full address.

     Query                     Results                            Ratings & Explanation
                  Is there a Navigational Result for this Query?            Yes
                                                      Relevance             Navigational
                                                      Name Accuracy         n/a
                                                      Address Accuracy      Correct
                                                      Pin Accuracy          Perfect

Stevens Creek Blvd Stevens Creek Blvd [stevens Cupertino, CA creek blvd Category: n/a cupertino]

The query is for a street in Cupertino, CA. The postal code is optional for such results, but if the postal code is returned, any portion of the street has to belong to that postal code area. The pin appears to fall outside the street boundaries in the vector view. However, in satellite it is still within the boundaries. Whenever there is a discrepancy the most favorable layer should be used to determine pin accuracy.

  Query                Results                      Ratings & Explanation
                                        Relevance             Bad (User Intent)
                                        Name Accuracy         n/a
             Cupertino, CA
             Cupertino, CA              Address Accuracy      Correct
             Category: n/a              Pin Accuracy          Perfect

This result for an entire city does not satisfy user intent when the query was for a street in that city. Pin is dropped within the boundaries of the city of Cupertino and is rated Perfect.

[stevens creek blvd cupertino] Relevance Bad (User Intent) Name Accuracy n/a Address Accuracy Correct Pin Accuracy Perfect

19062 Stevens Creek Blvd 19062 Stevens Creek Blvd Cupertino, CA, 95014 Category: n/a

The result includes a street number when the query is just for a street, making this result too specific for the requested query. The pin is dropped on the result address.

   Query                  Results                          Ratings & Explanation
                                               Relevance             Bad (User Intent)
              Happy Lamb Hot Pot
              19062 Stevens Creek Blvd         Name Accuracy         Correct
              Cupertino, CA, 95014
                                               Address Accuracy      Correct
              Category: Chinese
                                               Pin Accuracy          Perfect

The result is for a business on the street. When the query is for an entire street, returning a business is too specific a result for the requested query.

[stevens creek blvd cupertino] Stevens Creek and De Anza Relevance Bad (User Intent) Blvd. Stop Cupertino CA 95014 Name Accuracy Correct Category: Bus Stop Address Accuracy Correct

Pin Accuracy Perfect

The result is for a bus stop on the street. This random result does not satisfy the user's intent and lacks prominence compared to the very long street. [upper east Is there a Navigational Result for this Query? Yes side] Relevance Navigational Name Accuracy n/a Upper East Side Upper East Side Address Accuracy Correct New York, NY 10021 Pin Accuracy Perfect Category: n/a

The result is the requested neighborhood and therefore is rated n/a for Name Accuracy. The postal code is correct and belongs to the requested neighborhood. A Perfect pin can drop anywhere within the boundaries of the neighborhood.

Query              Results                       Ratings & Explanation
                                     Relevance            Good (User Intent)
                                                          Incorrect (Category
                                     Name Accuracy
                                                          Issue)
                                     Address Accuracy     Correct
        Metropolitan Museum of Art
        1000 5th Ave                 Pin Accuracy         Perfect
        New York, NY 10028           Research shows the Metropolitan Museum,
        Category: Art Gallerry       one of the most famous museums in the world,
                                     is located on the Upper East Side. Its
                                     extremely high international prominence
                                     qualifies it for a Good rating due to secondary
                                     intent for this query.

The Name Accuracy rating for this result is Incorrect due to the misspelling of the category.

Relevance Bad (User Intent)

Boqueria Upper East Side Name Accuracy Correct 1460 2nd Ave New York, NY 10075 Address Accuracy Correct Category: Spanish Pin Accuracy Perfect

The result is for a business within the queried neighborhood. Even though the business name contains the query terms, this result does not satisfy user Intent, and is not internationally prominent enough to be considered relevant for the query.

   Query               Results                          Ratings & Explanation
                                            Relevance             Bad (User Intent)
                                            Name Accuracy         n/a

Address Accuracy Correct 1596 2nd Ave 1596 2nd Ave Pin Accuracy Perfect New York, NY 10028 Category: n/a

The result is for a specific address within the neighborhood. This result is too specific for the broader query. The address is not internationally prominent enough to satisfy the intent for the query.

Is there a Navigational Result for this Query? Yes Relevance Navigational Name Accuracy n/a [Cork] Address Accuracy Correct

Cork Pin Accuracy Perfect Cork, Ireland Category: n/a

The result is for the city of Cork in Ireland. A perfect pin can drop anywhere within the city boundaries.

Query               Results               Ratings & Explanation
                              Relevance             Good (User Intent)
                              Name Accuracy         Correct
        Cork Airport          Address Accuracy      Correct
        Kinsale Rd
        Cork, Ireland         Pin Accuracy          Perfect
        Category: Airport

The result is for a transit POI, which satisfies a secondary query intent. The address and pin are correct.

Relevance Bad (User Intent) Name Accuracy Correct Address Accuracy Correct Pin Accuracy Perfect

Cork City Library 57-61 Grand Parade Cork, Ireland Category: Library

The result is for a POI within the city. This does not satisfy secondary intent for the query as it is neither internationally prominent nor a transit POI.

   Query                Results                          Ratings & Explanation
[Stevens    Is there a Navigational Result for this Query?        Yes
Creek and
De Anza]                                     Relevance            Navigational
                                             Name Accuracy        n/a

Address Accuracy Correct

Pin Accuracy Perfect

Stevens Creek and De Anza Blvd Stevens Creek and De Anza Blvd Cupertino CA 95014 Category: n/a

The query is for an intersection and the specific intersection is returned.

Good/Acceptable (User Relevance Intent) Stevens Creek and De Anza Blvd. Stop Name Accuracy Correct Cupertino CA 95014 Address Accuracy Correct Category: Bus Stop Pin Accuracy Perfect

The query is for an intersection and a bus stop with the same name is returned. In some countries, bus stops carry the same name as the intersection where they are located and can satisfy a secondary intent for the query. The pin falls where a user would wait for the bus.

Query                 Results                          Ratings & Explanation
                                           Relevance            Bad (User Intent)
                                           Name Accuracy        n/a
                                           Address Accuracy     Correct
                                           Pin Accuracy         Perfect

Stevens Creek Blvd Stevens Creek Blvd Cupertino CA 95014 Category: n/a

The query is for an intersection and we return just one of the streets from the query. This does not satisfy user intent.

[95051] Is there a Navigational Result for this Query? Yes

95051 Relevance Navigational Santa Clara, CA, 95051 Name Accuracy n/a Category: n/a Address Accuracy Correct

Pin Accuracy Perfect The expectation for this result is to include locality, state and postal code. Other components are optional, but if present they need to be correct.

The pin must drop within the boundaries of the locality presented in the result.

## 10.2. Non-Specific Address

For queries where the location intent is not explicitly stated in the query, you must infer the location intent from the user's viewport and the user's location. One difficulty in evaluating address queries has to do with partial addresses, which could refer to multiple locations. Generally, for partial addresses, users are looking for the location closest to their position or within/ near the fresh viewport. Some general considerations:
- Exact location that exists returned very close to the user is eligible for Navigational, unless other addresses that satisfy the user intent are also very close.
- Exact location returned within a fresh viewport is eligible for Navigational, unless other addresses that satisfy the user intent are also very close.
- Results that are farther away from an ideal result but can potentially satisfy the user's intent can be rated as high as Good (Distance/Prominence)
- Results are demoted based on distance.
- Results are demoted based on the density of potential results in a given area
- Results that are too far away will be rated Bad (Distance/Prominence) Consider the query [154 orchard st] in different scenarios:

Scenario 1: Fresh viewport over Midtown Manhattan in New York City.

Query User and Viewport User and fresh viewport over Midtown Manhattan in [154 orchard st] New York City User Intent: The query does not specify in which locality the address is expected. Use the location intent given by the user and viewport to rate the results. Is there a Navigational Result for this Query? Yes

               Results                              Ratings and Explanation

① 154 Orchard St Relevance Navigational 154 Orchard St, New York, NY 10002 Name Accuracy n/a Category: n/a Address Accuracy Correct Pin Accuracy Perfect

The result is in Lower Manhattan, very close to the user location.

② 154 Orchard St Relevance Good (Distance/Prominence) 154 Orchard St, Newark, NJ 07102 Category: n/a Name Accuracy n/a Address Accuracy Correct Pin Accuracy Perfect

The result is farther away from the viewport, but still matches the query.

                Results                                  Ratings and Explanation

③ 154 Orchard St Relevance Good (Distance/Prominence) 154 Orchard St, Garfield, NJ 07026 Category: n/a Name Accuracy n/a Address Accuracy Correct Pin Accuracy Perfect

The result is farther away from the viewport, but still matches the query.

④ 154 Orchard Dr Relevance Bad (Distance/Prominence) 154 Orchard Dr, Levittown, Pennsylvania 19054 Name Accuracy n/a Category: n/a Address Accuracy Correct

Pin Accuracy Wrong

The result is in a different state and very far away from the user's viewport. The street type does also not match the query.

The pin lands on the house with the street number 114, which can be verified via street imagery. Since this is several houses down from the intended address, it is incorrect.

Scenario 2: Viewport/user's location is in Maine. There is no address in the vicinity that contains [154 Orchard St]. All locations with this address are far from the location intent of the query.

Query User and Viewport [154 orchard st] User and viewport in Maine User Intent: Since there is no matching result close to the location intent given by the user and viewport, the closest address is rated without demotion for user intent or distance/prominence. Is there a Navigational Result for this Query? No

                Results                             Ratings and Explanation

① 154 Orchard St Relevance Excellent 154 Orchard St, New York, NY 10002 Name Accuracy n/a Category: n/a Address Accuracy Correct Pin Accuracy Perfect

This location is among the closest possible results to the viewport/user's location.

② 154 Orchard St Relevance Excellent 154 Orchard St, Newark, NJ 07102 Name Accuracy n/a Category: n/a Address Accuracy Correct Pin Accuracy Perfect

This location is among the closest possible results to the viewport/user's location.

③ 154 Orchard St Relevance Excellent 154 Orchard St, Garfield, NJ 07026 Name Accuracy n/a Category: n/a Address Accuracy Correct Pin Accuracy Perfect

This location is among the closest possible results to the viewport/user's location.

                Results                                  Ratings and Explanation

④ 154 Orchard Dr Relevance Bad (User Intent) 154 Orchard Dr, Levittown, Pennsylvania 19054 Name Accuracy n/a Category: n/a Address Accuracy Correct Pin Accuracy Wrong This location is farther from the viewport/user location than the result in New York and therefore demoted for distance. The user is also looking for a Street, but has been presented with a Drive.

The pin lands on the house with the street number 114 which can be verified via street imagery. Since this is several houses down from the intended address, it is Wrong.

Here is another example of an address query with implicit location intent. Although this is a common address in US cities, it overwhelmingly refers to the location of the White House and should be considered the primary intent of the query unless an additional location modifier is provided (i.e. state, city, or postal code) or a different 1600 Pennsylvania Ave that's not the White House is already in or very near the location intent.

Scenario 1: Fresh viewport on Los Angeles, CA (not near Richmond, CA):

         Query                      Results                           Ratings and Explanation
                       Is there a Navigational Result for this Query?             Yes
                       The White House                      Relevance             Navigational
                       1600 Pennsylvania Ave,
                       Washington, DC, 20500 United         Name Accuracy         Correct
                       States                               Address Accuracy Correct
                       Category: Landmark
                                                            Pin Accuracy          Perfect

The POI associated with this address is [1600 overwhelmingly prominent and this is the pennsylvania most likely intent. ave]

Fresh viewport on Los Angeles, 1600 Pennsylvania Ave Acceptable/Bad CA (not near Relevance 1600 Pennsylvania Ave, (Distance/Prominence) Richmond, CA) Richmond, CA 94801 Name Accuracy n/a Category: n/a Address Accuracy Correct Pin Accuracy Perfect

Technically a match, but considering the user's viewport it is less likely that the user is looking for this location.

Scenario 2: The fresh viewport is in San Francisco, CA (near Richmond, CA). The proximity of the
user viewport to the Richmond location makes this location just as relevant as the prominent location
in Washington DC.
     Query                      Results                             Ratings & Explanation
                   Is there a Navigational Result for this Query?            No
                   The White House                      Relevance            Excellent
                   1600 Pennsylvania Ave,
                   Washington, DC, 20500                Name Accuracy        Correct
                   Category: Landmark                   Address Accuracy Correct
                                                        Pin Accuracy         Perfect

[1600 Both results are equally valid, so neither can pennsylvania get Navigational and should instead be rated ave] Excellent.

Fresh viewport on San 1600 Pennsylvania Ave Relevance Excellent Francisco, CA 1600 Pennsylvania Ave, (near Richmond, Name Accuracy n/a CA) Richmond, CA 94801 Category: n/a Address Accuracy Correct Pin Accuracy Perfect

Both results are equally valid, so neither can get Navigational and should instead be rated Excellent.

## 10.3. Query Address Does Not Exist

To be useful to the user, address results need to point to either a building with that address or a plot of land that has been officially assigned the address. Sometimes your research will show that a full query address does not exist (or no major search engine will be able to determine its exact location). In cases like this, you will see one of three types of results:
- The closest verified address (on the same street and in the same city and state): Rate relevance as Excellent.
- The same address as the query address: Rate relevance as Excellent and address as Incorrect – Address does not exist. The pin will be rated Can't Verify.
- The queried street without a street number: Rate relevance as Acceptable.

When a queried address does not exist, the answer to the question “Is there a navigational result for this query” will always be No.

       Query                  Results                       Ratings and Explanation
    [2001 Duncan Is there a Navigational Result for this Query?        No
        St, San
      Francisco] 1099 Duncan St                  Relevance             Excellent
                 1099 Duncan St., San
                 Francisco, 94131, CA            Name Accuracy         n/a
                 Category: n/a                   Address Accuracy      Correct
                                                Pin Accuracy           Perfect
                                                If 2001 does not actually exist then selecting
                                                1099, the closest address on the same street in
                                                the same city and state that does exist, is
                                                considered correct.
                                                For a locale that uses the rule of even numbers
                                                on one side of the street and the odd numbers
                                                on the other, we need to return the closest
                                                existing address on the same side of the street
                                                as the query. If the rule of odds and evens does
                                                not apply then the closest numeric number will
                                                be considered correct.
                                                The pin has to be correctly dropped on the
                                                address presented in the result to be rated
                                                Perfect.

2001 Duncan St Relevance Excellent 2001 Duncan St., San Name Accuracy n/a Francisco, 94131, CA Category: n/a Incorrect – Address Address Accuracy does not exist Pin Accuracy Can't Verify Duncan Street only goes up to number 1099, but the query requests a non-existent number. The result returned is the same as the queried address and should be rated as Excellent. The pin rating for addresses that do not exist is Can't Verify.

     Query                    Results                           Ratings and Explanation
                  Duncan St                         Relevance              Acceptable (User Intent)
                  Duncan St, San Francisco,
                  94131, CA                         Name Accuracy          n/a
                  Category: n/a                     Address Accuracy       Correct
                                                    Pin Accuracy           Perfect

The result returns only the street with a pin dropped within the boundaries of the street. This result technically satisfies the user intent, but this intent is unlikely, so relevance should be rated Acceptable.

## 10.4. Point of Interest

A correct location result should be rated Navigational for queries referring to a point of interest. Consider the query [mount rushmore], the famous US monument. Although the query terms do not contain an explicit location, the Mount Rushmore monument is so prominent and unambiguous that its location should be considered the primary location intent. The user viewport and user location are irrelevant for this query because the user is looking for the place of interest no matter where they currently are.

     Query                      Results                          Ratings and Explanation
                  Is there a Navigational Result for this Query?            Yes
     [mount
   rushmore]                                           Relevance            Navigational
                                                       Name Accuracy        Correct
                                                       Address Accuracy Correct
                  Mount Rushmore National              Pin Accuracy         Perfect
                  Memorial
                  13000 S Dakota 244, Keystone,
                  SD, United States
                  Category: Landmark

The pin can drop anywhere within the boundaries of the park to be rated Perfect.

Query              Results                    Ratings and Explanation
        Mount Rushmore KOA at
                                     Relevance          Bad (User Intent)
        Palmer Gulch
        12620 Highway 244
        Hill City, SD 57745          Name Accuracy      Correct
        Category: Campground         Address Accuracy Correct
                                     Pin Accuracy       Perfect

This result is a campground within the park and is not the park the user asked for.

Mount Rushmore Gift Shop Relevance Bad (User Intent) 13000 SD-244, Keystone, SD 57751 Name Accuracy Correct Category: Gift Shop Address Accuracy Correct Pin Accuracy Perfect This result is a gift shop inside Mount Rushmore National Park and is not the park the user asked for. Both the Name and Address Accuracy are verified and rated Correct. The pin falls on the shop and is Perfect.

   Query                      Results                         Ratings and Explanation
                  Is there a Navigational Result for this Query?         Yes
                  Route 66                          Relevance            Navigational
                  Seligman, AZ 86337
                  United States                     Name Accuracy        n/a
                  Category: n/a                     Address Accuracy Correct
                                                    Pin Accuracy         Perfect

This result represents Route 66 and is rated Navigational regardless of user location, viewport, or the locality in the address. The pin can be dropped anywhere along the route.

Route 66 Indian buffet all 7 Relevance Bad (User Intent) [route 66] days Fresh viewport 397 Las Colinas Blvd, Partially Correct (Name Name Accuracy on Amarillo, TX Irving, TX 75039 Issue) Category: Indian Incorrect - Unit/Apt, Address Accuracy Street Name Pin Accuracy Perfect The result is a randomly chosen business far from the user whose name includes the query terms. The result name differs from the official name variations used on the website: “Route 66 Fine Indian and American Cuisines” or “Route 66 Indian Cuisine”. However, the name is still recognizable and is rated Partially Correct. The address on the official website is “397 East Las Colinas Blvd” whereas the result address excludes “East”. Also, the official site lists a unit number, 180, which is missing from the address in the result.

   Query                      Results                           Ratings and Explanation
                 Is there a Navigational Result for this Query?            Yes
                 Machu Picchu                         Relevance            Navigational
                 Aguas Calientes, Peru
                                                      Name Accuracy        Correct
                                                      Address Accuracy Correct
                                                      Pin Accuracy         Perfect

The result is an internationally known historical site and the most relevant result, making it the primary user intent. [Machu Picchu]

Fresh viewport over Relevance Good (User Intent) Massachusetts, some distance Machu Picchu Restaurant Name Accuracy Correct away from 307 Somerville Ave, Somerville, MA Somerville, MA Address Accuracy Correct 02143 Pin Accuracy Perfect

Since the result is reasonably close to the fresh user viewport, it will be considered secondary intent for this query.

## 10.5. Understanding Multiple Query Interpretations: Beyond Viewport and User Location

Many address/POI queries have multiple interpretations. Understanding which interpretation is most likely often requires extra research in addition to considering the viewport and user's location. It is critical to fully understand the query through research rather than guessing.

     Query                      Results                           Ratings and Explanation
                   Is there a Navigational Result for this Query?            Yes
                  New York City                         Relevance            Navigational
                  New York City, NY, US
                                                        Name Accuracy        n/a
                  Category: n/a
                                                        Address Accuracy Correct
                                                        Pin Accuracy         Perfect

This is a very prominent result that satisfies the user intent.

New York State Relevance Good (User Intent) New York, US Name Accuracy n/a Category: n/a [new york] Address Accuracy Correct Pin Accuracy Perfect User and viewport somewhere in This result refers to the state of New York and France satisfies a secondary intent of the query.

Avenue de New York Relevance Good (User Intent) Avenue de New York, Paris, France Name Accuracy n/a Category: n/a Address Accuracy Correct Pin Accuracy Perfect

    Query                     Results                          Ratings and Explanation

The result is within the fresh viewport, but is not a very prominent street. Although this is still a possible interpretation, it is not a perfect match to the query and is overshadowed by the prominence of New York City.

Is there a Navigational Result for this Query? Yes Amsterdam Cafe Relevance Navigational 481 Amsterdam Ave New York, NY 10024 Name Accuracy Correct Category: Cafe Address Accuracy Correct [amsterdam cafe] Pin Accuracy Perfect

User and fresh viewport in New The user and fresh viewport are close to New York, NY York, NY this cafe is an exact match, and can therefore be considered the main intent.

The pin lands on the edge of the building, so by applying the tennis rule the pin will be rated as Perfect.

Is there a Navigational Result for this Query? No Café de Jaren Relevance Excellent Nieuwe Doelenstraat 20-22, 1012 CP Amsterdam, Netherlands Name Accuracy Correct [amsterdam cafe] Category: Café Address Accuracy Correct

User and Pin Accuracy Perfect viewport somewhere in Europe The user and viewport are in Europe, so cafes in the city of Amsterdam are the expected results.

Is there a Navigational Result for this Query? No Café de Jaren Relevance Excellent Nieuwe Doelenstraat 20-22, 1012 CP Amsterdam, Netherlands Name Accuracy Correct

   Query                     Results                         Ratings and Explanation
                 CP Amsterdam, Netherlands
                                                   Address Accuracy Correct
                 Category: Café
[amsterdam                                         Pin Accuracy         Perfect
   cafe]

User and fresh The user and viewport are in a rural area and viewport in Maine, US there is no relevant result in the area, so the strongest matches are cafes in the city of Amsterdam.

Is there a Navigational Result for this Query? Yes Relevance Navigational Name Accuracy n/a Europe Europe Address Accuracy Correct [europe] Category: n/a Pin Accuracy Perfect User and The query is clearly for the European viewport somewhere in continent, so returning the continent should US be rated Navigational. If the name of a local business exactly matches the query with no extra words then that business may be a reasonable interpretation of the query and should be rated based on distance from the user or viewport. All other businesses are Bad. Is there a Navigational Result for this Query? Yes Relevance Navigational Name Accuracy n/a Paris Paris, France Address Accuracy Correct Category: n/a Pin Accuracy Perfect

The query [paris] can mean either the capital of France or one of the more than 10 towns across the USA with the same name. Because [paris] of the small population and lack of tourism in these small towns, the city in France should User and fresh be rated Navigational unless the query's viewport location intent is within or very close to one of somewhere in these small US cities. San Francisco, CA

       Query                     Results                           Ratings and Explanation
  San Francisco,
       CA          Paris                                                       Acceptable/Bad (User
                                                         Relevance
                   Texas, USA                                                  intent)
                   Category: n/a
                                                         Name Accuracy         n/a
                                                         Address Accuracy Correct
                                                         Pin Accuracy          Perfect

This result is unlikely to satisfy the user intent.

Is there a Navigational Result for this Query? No Relevance Excellent

Brandy Ho's Hunan Food Name Accuracy Correct 217 Columbus Ave, San Francisco, Address Accuracy Correct [hunan] CA 94133 Category: Hunan Pin Accuracy Perfect User and fresh viewport The query [hunan] represents both the somewhere in seventh most populous province in China and San Francisco, a popular type of cuisine. In this case, both CA user location and viewport are in the San Francisco Bay area. An online maps search done by a user in this area shows that the dominant intent of this query is for the cuisine. The province is a less likely, but still viable, intent that can be rated Acceptable.

## 10.6. Business Queries

Before you rate a business query, consider:

- Multiple interpretations: Are there ways to interpret the query terms other than as a business name? French Laundry is both a famous restaurant in Napa and a type of laundromat/cleaner.
- Number of locations: How many locations of this business exist? If there are many of them (like Starbucks) then the user expects to find locations in or very close to the their location intent.
- Population density: Is the area of the business results urban, suburban, or rural? City dwellers are less willing to travel longer distances than suburban and rural users.

### 10.6.1. Non-Chain Businesses

Some businesses have only one location, so treat and rate them as navigational queries. The correct location should be rated Navigational and any other results should receive Bad (User Intent).

     Query                         Results                      Ratings and Explanation
                  Is there a Navigational Result for this Query?            Yes
                  Klein High School                   Relevance             Navigational
                  16715 Stuebner Airline Rd
                  Spring, TX 77379                    Name Accuracy         Correct
                  Category: High School               Address Accuracy      Correct
                                                      Pin Accuracy          Perfect

This is a perfect result for the query. While the city on the official website is ‘Klein , because USPS validates the full address, as [klein high returned, in the city as ‘Spring , we can rate school] the address as correct.

User and Fresh Viewport in Relevance Bad (User Intent) Klein Independent School Spring TX District Central Office Name Accuracy Correct 7200 Spring Cypress Road Klein, TX 77379 Address Accuracy Correct Category: School District Office Pin Accuracy Perfect

The school district office is not relevant for the query.

   Query                     Results                          Ratings and Explanation
                Is there a Navigational Result for this Query?            Yes
                Restaurant Gary Danko                Relevance            Navigational
                800 North Point St, San Francisco,
                California 94109                     Name Accuracy        Correct
                Category: American (New)             Address Accuracy     Correct
                                                     Pin Accuracy         Perfect

This is a nationally famous restaurant in San Francisco with no other possible results.

800 North Point Relevance Bad (User Intent) 800 North Point St, San Francisco, California 94109 Name Accuracy n/a [Gary Danko Address Accuracy Correct 800 North Point St, San Pin Accuracy Perfect Francisco, When a user types in the name of a business California or a POI along with its address, they expect 94109] to see the business mentioned in the query as part of the result. If the result is the address alone and does not mention the business, the user cannot be certain that the query and the result refer to the same thing. This is why the result's relevance is Bad. Garry Lee, DDS Relevance Bad (User Intent) 1259 Mason St, San Francisco, California 94108 Name Accuracy Correct Category: Dentist Address Accuracy Correct Pin Accuracy Perfect

Result is unrelated to the queried restaurant.

Sometimes there are multiple unrelated businesses with the same name in the same area. In this case, rate each business independently considering its relevance and distance from the location intent of the query.

Query User and Viewport User inside a fresh viewport over in Dearborn, MI (a [lighthouse] suburb of Detroit) User Intent: When there are multiple unrelated businesses with the same name in the same area, rate each business independently considering its relevance and distance from the location intent of the query. Is there a Navigational Result for this Query? No

                  Results                                     Ratings and Explanation

① The Lighthouse Relevance Excellent 4474 W Jefferson Ave Name Accuracy Correct Ecorse, MI 48229 Category: Pub Address Accuracy Correct Pin Accuracy Perfect This is one of the closest results that fits the user's query. This result should receive a relevance rating of Excellent.

Both the Name and Address Accuracy are verified and rated Correct.

The Pin lands on the correct rooftop.

② Lighthouse Ministries of Free Relevance Good (User Intent) Methodist Church 2069 Chandler Ave Name Accuracy Correct Lincoln Park, MI 48146 Category: Church Address Accuracy Correct Pin Accuracy Perfect This is one of the closest results and partially fits the query intent. This result is about the same distance from the user's location as the result above (The Lighthouse), but is less likely to be the user's intent based on the query. Therefore, this result should be demoted based on secondary intent to Good.

Both the Name and Address Accuracy are verified and rated Correct.

The pin lands on the correct rooftop and is Perfect.

### 10.6.2. Chain Businesses

A query for a chain business is generally not considered an explicit query and is therefore not eligible a for Navigational rating unless the query contains a location modifier that points to a single unique location (see Chain Business with Location Modifier).

Chain businesses are businesses that have more than one location, and include everything from national chains like Starbucks, Target, Auchan, Albert Heijn, and Boots down to small local chains.

Distance evaluations should be based on chain business locations in the real world, not only the returned results.

- The more locations the chain business has in the area, the closer the results should be in order to be considered relevant.
- The fewer locations the chain business has in the area, the more you can widen the distance for relevant results.

Note: Go to the chain business official website and check the address of the specific branch you're rating. For each branch of a chain business, research to verify that it actually exists at the address listed in the result.

Query User and Viewport [whole foods] User and fresh viewport in Irvine, California

User Intent: The user is clearly looking for the grocery chain Whole Foods close to their location or at least within the viewport. Is there a Navigational Result for this Query? No

                 Results                                 Ratings and Explanation
Is there a Navigational Result for this Query?                    No
                                          Relevance               Excellent
                                          Name Accuracy           Correct
                                          Address Accuracy        Correct
① Whole Foods
The District, 2847 Park Ave, Tustin, CA   Pin Accuracy            Approximate
92782
Category: Grocery

This is a Whole Foods store within the user's viewport as well as the closest Whole Foods location to Irvine.

The pin is dropped within the shared parking lot of the result, making it Approximate.

② Whole Foods Relevance Good (Distance/Prominence) Fashion Island, 415 Newport Center Dr, Newport Beach, CA 92660 Name Accuracy Correct Category: Grocery Address Accuracy Correct Pin Accuracy Perfect

This is a Whole Foods store in the same metro area, but is outside the user's viewport.

                   Results                                    Ratings and Explanation

③ Whole Foods Acceptable (Distance/ Relevance Aliso Village Shopping Center, 23932 Prominence) Aliso Creek Rd, Laguna Niguel, CA 92677 Name Accuracy Correct Category: Grocery Address Accuracy Correct Pin Accuracy Perfect

This is a Whole Foods store in a neighboring city, outside of the viewport and a considerable distance away. As such this result is less relevant to the user and is rated Acceptable.

### 10.6.3. Chain Business With Location Modifier

If the query for a chain business includes a location modifier that points to a single unique branch of that business, that specific branch can be eligible for a Navigational rating.

When there are multiple results available for the location modifier, the highest possible rating for all results will be Excellent. Remember:

- User and viewport location should always be ignored when there is a location modifier
- Ratings must always be based on possible real-world results

There are two types of location modifiers:

- General location modifier (locality or postal code)
- Specific location modifier (street or full address)

#### 10.6.3.1. General Location Modifier

Location modifiers in the form of localities or areas are considered to be general location modifiers.

Results inside the requested location

When the location modifier is general, results inside the specified location are not demoted for distance.

                     Quantity of results
   Location of
                    inside the requested                       Rating and Explanation
     results
                          location
                                              If there is only one result present in the requested
                                              location, it should receive a rating of Navigational.
                    One
                                              It is promoted because it is the only result that satisfies
Inside the                                    the user intent
requested                                                                                                  219

                    Quantity of results
   Location of
                   inside the requested                    Rating and Explanation
     results
Inside the               location
requested                                  When there are multiple results for the chain business in
location                                   the requested location, they should all receive a rating of
                                           Excellent.
                   More than one
                                           Ignore user and viewport location. The user has already
                                           told you exactly where they are looking for results.

Results outside the requested location

When the location modifier is general, results outside the requested location are demoted based on how many results there are inside it.

   Location of       Results inside the
                                                           Rating and Explanation
     results        requested location

If there are no results for the chain business inside the requested location, results outside the area may be Outside the demoted less severely depending on how close they are requested to the named location and how many branches of the location chain exist in the real world. Ratings may range from Excellent to Bad. None This is because when there are no locations of a chain business inside the requested area, results that are outside it can still be relevant. However, it's also possible for results to be so far away from the location that they have no relevance at all.

Location of        Results inside the
                                                        Rating and Explanation
  results         requested location
                                        If there are few results for the chain business inside the
                                        requested location, results outside the area may be
                                        demoted less severely depending on how close they are
                                        to the named location and how many branches of the
                                        chain exist in the real world. Ratings may range from
                                        Good to Bad.
                  Few
                                        This is because when there are fewer locations of a
                                        chain business inside the requested area, results that
                                        are outside it can still be relevant. However, it's also
                                        possible for results to be so far away from the location
                                        that they have no relevance at all.
                                        When there are many results for the chain business
                                        inside the requested location, results outside the area
                  Many                  are demoted to Bad. This is because there are multiple
                                        results that would satisfy user intent inside the
                                        requested area, so there's no need to look outside it.

Query User and Viewport [Starbucks san francisco] User and fresh viewport in San Francisco, CA User Intent: The user is seeking a Starbucks in a specific location. The fresh viewport and user location can be ignored since the user has an area in mind for results. Because there are so many Starbucks within the named area, results outside it are rated Bad. Is there a Navigational Result for this Query? No

              Results                                  Ratings and Explanation

① Starbucks Relevance Excellent 2165 Polk St, San Francisco, CA Name Accuracy Correct 94102 Category: Coffee Address Accuracy Correct Pin Accuracy Perfect

This result is one of many Starbucks in the specified location, San Francisco, and is rated Excellent. All results within San Francisco are eligible for the highest possible initial rating of Excellent.

All the data for the result is correct.

Relevance Excellent ② STARBUCKS 1231 Market St, San Francisco, CA Name Accuracy Correct 94103 Address Accuracy Correct Category: Coffee Pin Accuracy Perfect This result is one of many Starbucks in the specified location, San Francisco, and is rated Excellent. All results within San Francisco are eligible for the highest possible initial rating of Excellent.

The STARBUCKS name is written in capital letters. Because this is how the business refers to itself on storefront signs, it is Correct. The address is Correct and the Perfect pin lands on the correct rooftop.

③ Starbucks Relevance Bad (Distance/Prominence) 1555 40th St. Emeryville, CA 94608 Category: Coffee Name Accuracy Correct Address Accuracy Correct Pin Accuracy Approximate This Starbucks is outside of the boundaries of the specified location and should be rated Bad since there are so many Starbucks to choose from in San Francisco.

The name and address are Correct. Using the best available evidence — in this case, street imagery — the location of the Starbucks under the rooftop can be found. Since the pin falls on the correct rooftop, but not in the correct location, it is rated Approximate.

              Results                                  Ratings and Explanation

④ Starbucks Relevance Bad (Distance/Prominence) 601 Westlake Center, Daly City, CA 94015 Name Accuracy Correct Category: Coffee Address Accuracy Correct Pin Accuracy Perfect

This Starbucks is outside of the boundaries of the specified location and should be rated Bad since there are so many Starbucks to choose from in San Francisco.

All the data for the result is correct.

⑤ Starbucks Relevance Bad (Distance/Prominence) 12 Manor Plaza, Pacifica, CA 94044 Category: Coffee Name Accuracy Correct Address Accuracy Correct Pin Accuracy Approximate

This Starbucks is outside of the boundaries of the specified location and should be rated Bad since there are so many Starbucks to choose from in San Francisco.

The pin drops within the Half n' Half rule boundaries of the shared parking lot.

Query User and Viewport [Aldi waco tx] User and fresh viewport in Houston, TX User Intent: The user asked for a specific chain business in a specific location. The fresh viewport can be ignored since the user has a specific area in mind for results. Because there are very few stores within the specified area, results outside it are gradually demoted. Is there a Navigational Result for this Query? Yes

               Results                              Ratings and Explanation
                                   Relevance                    Navigational
                                   Name Accuracy                Correct
                                   Address Accuracy             Correct
① ALDI                             Pin Accuracy                 Approximate
1220 N Valley Mills Dr, Waco, TX
76710
Category: Grocery

ALDI is a well-known chain business. Research confirms that the location modifier in the query narrows possible results to a single unique location. This is the only location eligible for a Navigational rating.

The pin drops within the shared parking lot.

② ALDI Relevance Good (Distance/Prominence) 3310 S 31st St, Temple, TX 76502 Category: Grocery Name Accuracy Correct Address Accuracy Correct Pin Accuracy Perfect Although this result is not in Waco, research shows that, unlike the many Starbucks in San Francisco, there are very few Aldi stores in the Waco area. That is why this nearby result should be demoted -2 for distance from the highest possible initial rating of Navigational and rated Good.

The pin drops on the edge of the appropriate rooftop and can be rated Perfect.

                  Results                                   Ratings and Explanation
                                                                         Acceptable (Distance/
                                           Relevance
                                                                         Prominence)
③ ALDI
3623 W State Highway 31, Corsicana,        Name Accuracy                 Correct
TX
                                           Address Accuracy              Incorrect – Postal Code
Category: Grocery
                                           Pin Accuracy                  Perfect
                                           Although this result is not in Waco, research shows that,
                                           unlike the many Starbucks in the San Francisco example
                                           above, there are very few Aldi stores in the Waco area. This
                                           result has been demoted -3 from the highest possible
                                           initial rating of Navigational to Acceptable because it is
                                           significantly farther from the area of expected results.

The postal code, which is a mandatory address component, is missing from the result address.

#### 10.6.3.2. Specific Location Modifier

Location modifiers in the form of streets or full addresses are referred to as specific location modifiers.

A specific location modifier might also be the name of a POI, as seen here: [university of kentucky starbucks] in a query about the location of the coffee chain at a particular university.

When the a query includes a specific location modifier, results that satisfy the location intent should not be demoted for distance:

                       Number of results
   Location of
                     inside the requested                      Rating and Explanation
     results
                           location

Consider the location modifier a general one and None demote results based on distance to the specified location.

If there is a only a single result present in the specified location it should receive a rating of Navigational. One Inside the It is promoted because it is the only result that satisfies requested the user intent location

                      Number of results
 Location of
                    inside the requested                   Rating and Explanation
   results
                          location

When there are multiple results in the location, they should all receive a rating of Excellent. More than one Ignore user and viewport location. The user has already told you exactly where they are looking for results.

    Query                      Results                          Ratings and Explanation
                    Is there a Navigational Result for this Query?          Yes

Kate Spade New York Relevance Navigational [kate spade 789 Madison Ave, New York, NY Name Accuracy Correct 789 Madison 10065 Ave, New York] Category: Accessories Address Accuracy Correct

User and large, Pin Accuracy Perfect fresh viewport in This chain business query includes a specific New York, NY location modifier in the form of a full address. Research confirms that this is the address of queried business, so this result is eligible for a Navigational rating.

All the data for the result is correct and the pin is Perfect.

Kate Spade New York Relevance Bad (User Intent) 205 Columbus Ave, New York, Name Accuracy Correct NY 10023 Category: Accessories Address Accuracy Correct Pin Accuracy Perfect

This is a very specific query and the result does not satisfy the specific location modifier and would not be useful to the user searching only for the location at the specified address. This result is rated Bad.

All the data for the result is correct.

Query User and Viewport [tacodeli burnet rd] User and fresh Viewport in Austin, TX

User Intent: Since there are two Tacodelis located on the named street, both are primary intent. Any other location is rated Bad. Is there a Navigational Result for this Query? No

               Results                                 Ratings and Explanation
                                       Relevance                  Excellent
① Tacodeli
12001 Burnet Rd, Austin, TX 78757      Name Accuracy              Correct
Category: Mexican                      Address Accuracy           Correct
                                       Pin Accuracy               Approximate
                                       At first glance, this chain business query with a specific
                                       location modifier may suggest the user is looking for a
                                       unique location. However, research indicates that there
                                       are two branches of this restaurant on the same road.
                                       Both are therefore eligible for a rating of Excellent.

The pin drops off the edge of the appropriate rooftop and should be rated Approximate. Relevance Excellent ② Tacodeli 7301 Burnet Rd, Austin, TX 78758 Name Accuracy Correct Category: Mexican Address Accuracy Correct Pin Accuracy Perfect At first glance, this chain business query with a specific location modifier may suggest the user is looking for a unique location. However, research indicates that there are two branches of this restaurant on the same road. Both are eligible for a rating of Excellent.

All the data for the result is correct. Relevance Bad (User Intent Issue) Name Accuracy Correct ③ Tacodeli 4200 N. Lamar Blvd, Austin, TX 78756 Address Accuracy Correct Category: Mexican Pin Accuracy Perfect

This result does not satisfy the specific location modifier and would not be useful to the user searching only for locations along Burnet Road and is therefore rated Bad.

However, if there are no results present on this road, consider the location modifier as a general one and demote results based on distance to the road

All the data for the result is correct.

When a query is for a POI on a named street, results for this POI that are on the named street but have an official address on another street can also be rated Excellent.

### 10.6.4. Back Office and Businesses with No Physical Location

These type of results are most often rated Bad because they are either not useful to the user or have no maps intent at all.

   Business Type               Example                      Rating and Explanation
                                           Businesses with no physical location, like mobile
                        Mobile
No Physical location                       locksmiths or mobile dog groomers, have no relevance for
                        locksmith
                                           maps and are rated Bad.
                                           Back offices are usually not open to the public. Rate them
                        Administrative
                                           with a lower prominence. In most cases the relevance
Back Office             offices of a
                                           rating will be Bad unless these offices match the specific
                        company
                                           user intent.
                                           Unless your Country Specific guidelines state otherwise,
                                           give businesses running out of a home very low
                                           prominence.

These businesses see customers by appointment only and have no regular opening hours or brick and mortar Home based Home Business businesses (like a store with regular hours where calligrapher customers can drop by and choose from a large selection of merchandise).

The most likely relevance rating is Bad, unless there is a likely user intent or the suggestion is similar to a bed and breakfast or other business that a user may want to visit.

For these types of results, rate the address accuracy according to the official website or consensus of three sources, otherwise rate Can't Verify. If the entire address is missing, rate Can't Verify. If an address is present, rate the pin according to the address in the result. If no address is present, rate the pin Can't Verify.

   Query                     Results                        Ratings and Explanation
                 Is there a Navigational Result for this Query?       No
                                                   Relevance          Bad (User Intent)
                                                   Name Accuracy      Correct
                 Wendy's Flower Affair
                 1175 E 930 N, Provo, UT 84604     Address Accuracy Correct
                 Category: Wedding Planning        Pin Accuracy       Perfect
[flower shop]
                                                   Research shows that this is a business run
User and fresh                                     out of a residential home, not a showroom full
 viewport in                                       of flowers. The relevance rating for this
  Provo, UT                                        location is Bad. We have been able to confirm
                                                   the address and pin for this business and they
                                                   will be rated Correct.

This business will not be rated Business/POI is closed/does not exist because we want to reserve that option for businesses and POIs that truly do not exist.

### 10.6.5. Business/POI Does Not Exist

There are situations where a result returned is for a business that does not exist. You must still rate relevance as if the business were open.

     Query                       Results                           Ratings and Explanation
                   Is there a Navigational Result for this Query?             No
                   Ocean Blue Sushi Club                 Business/POI is closed/does not
                   1010 E El Camino Real,                exist                                   ☑
                   Sunnyvale, CA 94087
                                                         Relevance            Excellent
                   Category: Sushi
     [sushi]
                                                         Research shows that this business is closed.
  User and fresh
                                                         The checkbox for Business/POI is closed/
   viewport in
  Sunnyvale, CA
                                                         does not exist should be selected. Name,
                                                         address and pin accuracy questions will not
                                                         appear. The relevance rating for this location
                                                         is Excellent because if this business were
                                                         open, it would be a very good result for the
                                                         query.

Is there a Navigational Result for this Query? No North Shore Hotel Business/POI is closed/does not 99300 Sea View Drive, Hwy 11 exist ☑ North Shore, CA Relevance Excellent [hotel] Category: Hotel

Fresh viewport over North Shore, CA The North Shore hotel no longer exists at this address, but its relevance is judged as if it were still in business.

## 10.7. Category Queries

Category queries are the broadest query type because they can return the greatest variety of results. Give prominence more weight than distance when rating them.

The highest relevance rating most category query results will receive is Excellent.

Category queries with a location modifier are the only category queries eligible for a Navigational rating (see Navigational Results for Category Queries).

You'll need to determine the user's intent based on the query:

- Primary Intent refers to the businesses or POI the user is expecting to see for the given category.
- Secondary Intent refers to businesses that fit the category intent but would not be the user's first choice. Secondary intent results will receive a demotion of -1 or an initial rating of Good.
- Unlikely Intent refers to results that technically match the query terms or category intent, but woud not be an obvious, or even secondary, intent for most users. They receive a demotion of -2 or an initial rating of Acceptable.

Significant Increase in Distance

Given how many results are often within close proximity to the location intent, results for category queries are not demoted for distance simply because there is something closer (in the result set or in real life). Instead, use significant increases in distance to group possible results for the appropriate demotions.

It is important to understand the real-world distribution of all possible results when assessing a significant increase in distance.

The image on the left shows possible results around the user as purple dots. In this example, demotion for distance starts approximately 500m away from the user (around 3 to 6 blocks away) due to the high number of possible results. This distance will vary depending on how many or few results are available in a given area.

Please note that no results inside the fresh Viewport should be demoted to Bad for distance alone.

### 10.7.1. Demotion for Distance with User Inside Viewport

Query User and Viewport [pizza] User and fresh viewport in Campbell, CA User Intent: The user is looking for a pizza place. Is there a Navigational Result for this Query? No

                   Results                            Ratings and Explanation
                                       Relevance          Excellent
    ① Domino's Pizza                   At about 1 km away, this pizza place is among the
    930 W Hamilton Ave Campbell, CA    closest results to the user, who is in an area with many
    Category: Pizza                    pizza options. Other results in the same general range
                                       would also receive this rating.
                                       Relevance          Good (Significant Distance)
    ② Luigi's Pizza and Pasta
    2495 S Winchester Blvd, Campbell   Luigi's is significantly further away from the user is and
                                       is demoted for distance, as are all other results in this
    Category: Pizza
                                       general range.

Relevance Acceptable (Significant Distance) ③ Pizza My Dear 2590 S Bascom Ave, San Jose, CA Pizza My Dear is over 4km away from the user, which is significantly further than many other results. It is Category: Pizza demoted -2 for distance.

### 10.7.2. Demotion for Distance with User Outside Viewport

Query User and Viewport Fresh viewport in New Braunfels, TX, with user north of [guns] San Antonio User Intent: The user is looking for guns. Is there a Navigational Result for this Query? No

                Results                                 Ratings and Explanation

① EDC TX Relevance Excellent 964 N Walnut Ave, New Braunfels, Tx This result is inside the very specific viewport and Category: Gun Store carries weapons and other accessories. Relevance Excellent ② Freddy's Pawn & Jewelry 671 S Seguin Ave, New Braunfels, TX The pawn shop is very close to the fresh Viewport and Category: Pawn Store sells guns and related items.

                Results                      Ratings and Explanation
                              Relevance                Good (Significant Distance)
③ Guntrap
850 Schneider, Cibolo, TX     This weapons store satisfies the user intent but is
                              significantly further away from the fresh viewport in a
Category: Gun Store
                              more rural area, with fewer such stores close by.
                              Relevance                Good (Significant Distance)
④ River City Pawn & Jewelry
417 Main St, Scherz, TX       The pawn shop sells guns and other related equipment
                              but is also significantly further away from the fresh
Category: Pawn Store
                              viewport.

### 10.7.3. Demotion for Distance with Fewer Possible Results

Query User and Viewport [bicycle path] User and fresh viewport in Kennesaw, GA User Intent: The user is looking for places to ride a bike. These could include trails, parks, and other paths that are frequented by bicyclists. Is there a Navigational Result for this Query? No

                Results                                  Ratings and Explanation
                                          Relevance                Excellent
① Deerfield Park                          Deerfield Park is among the closest results to the user.
2401 Deerfield Dr, Kennesaw, GA           There are other results that are within an acceptable
Category: Park                            range given the number of other possible results that
                                          are within 13km.
                                          Relevance                Good (Significant Distance)
② Allatoona Creek                         These mountain bike trails are about 25km away from
Pitner Rd NW, Acworth, GA 30101           the user and significantly more distant than the closest
Category: MTB Trails                      group of results. The result, and others in the same
                                          general range, is demoted by -1 for distance.

                Results                   Ratings and Explanation
                                                     Acceptable (Significant
                          Relevance
                                                     Distance)
③ Iron Hill Trail Head    Iron Hill Trail Head is about 30km away. It is still within
Cartersville, GA 30121    the Acceptable group in terms of distance to the
Category: Hiking Area     location intent given the smaller number of possible
                          results in the area, and gets a demotion of -2 for
                          distance.

### 10.7.4. Category Queries and User Intent

                Query                   Suggestion                 Ratings & Explanation
                                   ① The Art Institute     Relevance             Excellent
                 [art]             of Chicago
                                   111 S Michigan Ave,     This result is an internationally famous
           User in Chicago, IL     Chicago                 art museum in Chicago very close to the
           (Viewport is stale)     Category: Museum        user's location.

Good (User Intent & Relevance ② Arts & Artisans Distance/ 321 N Michigan Ave Prominence) #1, Chicago This art gallery should be demoted due Category: Art Gallery to distance to user as there are many other possible art-related matches in the user's area. ③ The Art of Pizza Relevance Bad (User Intent) 727 S State St, Chicago Category: Pizza

Even though it has the word “art” in its name, this pizzeria does not meet the user's intent and should be rated Bad.

### 10.7.5. Category Queries and Prominence

              Query                      Suggestion                   Ratings & Explanation
                                     ① Solomon R.            Relevance             Excellent
           [museum]                  Guggenheim
                                     Museum                  This result is a highly prominent
No user location (viewport is fresh) 1071 5th Ave            museum likely to fulfill the user's primary
                                     New York                intent.
                                     Category: Museum

Relevance Excellent ② 9/11 Memorial & Museum This is another highly prominent result 180 Greenwich St likely to meet the user's the primary New York intent. Category: Museum

③ Houdini Museum Good/Acceptable 421 7th Ave Relevance (Distance/ New York Prominence) Category: Museum This result is a small museum that's much less prominent than other museums in this location, like the Guggenheim. ④ Museum of the Bad (Distance/ Moving Image Relevance Prominence) 36-1 35th Ave Astoria This result is also much less prominent Type: BUSINESS than other possible results in the area. It Category: Museum is located outside of the viewport while there are multiple other options available inside of the viewport.

### 10.7.6. Category Query with Location Modifier

If the query contains a location modifier, all results within the specified location should receive the highest possible initial rating of Excellent. Results outside the expected location should be demoted based on their distance from the location modifier and the number of possible real-world results within it. User and viewport location should be disregarded. Further demotions can be applied based on how well the result fits the intent of the category.

Note that location modifiers for category queries can take many forms, from the names of cities, neighborhoods, and streets to the names of POIs, like [Aeropuerto barcelona gasolinera], a query about gas stations at or near Barcelona's airport.

Query User and Viewport [Food montgomery tx] User and viewport outside Montgomery, TX User Intent: Any food provider or restaurant within the named locality is considered primary intent. Given the large number of possible results within the explicit area, results outside it are rated Bad. Is there a Navigational Result for this Query? No

                 Results                                      Ratings and Explanation
                                              Relevance                Excellent
① Pizza Shack
20821 Eva St, Montgomery, TX                  Name Accuracy            Correct
Category: Pizza
                                              Address Accuracy         Incorrect – Postal Code
                                              Pin Accuracy             Approximate
                                              All results that satisfy the ‘Food intent located in
                                              Montgomery are eligible for an initial rating of
                                              Excellent.

The postal code, which is a mandatory address component, is missing from the result address. The pin drops into the shared parking lot.

                      Results                                   Ratings and Explanation

② Taco Bell Relevance Bad (Distance/Prominence) 3207 W Davis St, Conroe, TX 77304 Name Accuracy Correct Category: Fast Food Address Accuracy Correct Pin Accuracy Perfect

Given the large number of places to get food in Montgomery, results outside of it are rated Bad.

All the data for the result is correct.

### 10.7.7. Navigational Results for Category Queries

Sometimes it's not clear whether a query is for a category or a specific business/POI. What first appears to be a category query with a location modifier may lead to a single prominent result which can be rated Navigational.

Due to the ambiguity of these queries, even if there is a Navigational result, the query should still be treated as a potential category query and other results considered relevant.

When deciding if a category query could have a Navigational result, consider:

- The actual wording of the query
- Possible results in the real world
- Local knowledge
- Prominence

     Query                     Results                      Ratings and Explanation
                Is there a Navigational Result for this Query?          Yes
                                                 Relevance              Navigational
                                                Name Accuracy           Correct
                Hotel Kilkenny
                College Road, Kilkenny R95 KP08 Address Accuracy        Correct
                Ireland
                Category: Hotel                 Pin Accuracy            Perfect

This result is an exact match to the query. The wording of the query leads to a single result, so it's likely the user intent is this specific hotel.

The address is correct without a street number because it matches what's found on the official website. The pin landing in the hotel's roof is Perfect. [hotel kilkenny] Relevance Excellent Name Accuracy Correct Newpark Hotel Castlecomer Road, Kilkenny R95 Address Accuracy Correct KP63, Ireland Pin Accuracy Perfect Category: Hotel Although the wording of the query suggests a single result, there is still a possibility that the intent is for any hotel in Kilkenny. Since this could be a category query with a location modifier, all hotels in this locality should be rated as Excellent.

The address is correct without a street number because it matches the address shown on the official website. The pin is Perfect because it lands on the hotel's rooftop.

 Query                     Results                     Ratings and Explanation
            Is there a Navigational Result for this Query?         No
                                             Relevance             Excellent
                                            Name Accuracy          Correct
            Hotel Kilkenny
            College Road, Kilkenny R95 KP08 Address Accuracy       Correct
            Ireland
                                            Pin Accuracy           Perfect
            Category: Hotel

There is no result that matches the exact wording of the query, so this is more likely to be a category query with a location modifier. Any hotel result returned in the locality of Kilkenny would be rated Excellent.

The address is correct without a street number because it matches what appears on the official website. The pin landing the hotel's roof is Perfect.

Relevance Excellent Name Accuracy Correct [Kilkenny hotel] Address Accuracy Correct Pin Accuracy Perfect

Newpark Hotel Castlecomer Road, Kilkenny R95 KP63, Ireland Category: Hotel

Any hotel result returned in the locality of Kilkenny would be rated Excellent, completely satisfying the ‘Category with Location Modifier query

The address is correct without a street number because it matches the address shown on the official website. The pin is Perfect because it lands on the hotel's rooftop.

Query                  Results                         Ratings and Explanation
           Is there a Navigational Result for this Query?          No
                                            Relevance              Excellent
                                            Name Accuracy          Correct
                                            Address Accuracy       Correct
           Berlin Tegel Airport
                                            Pin Accuracy           Perfect
           13405 Berlin, Germany
           Category: Airport
                                            There are two equally prominent airports in
                                            Berlin. Since there is more than one possible
                                            result for this query in the real world, it is likely
                                            to be a category query with a location
                                            modifier. All airports within the queried locality
                                            should be rated as Excellent.

The address is correct without a street number and street name because this is a POI without an expected address so a locality and postal code are appropriate. The pin is Perfect because it lands on the airport's rooftop.

[airport berlin] Relevance Excellent Name Accuracy Correct Address Accuracy Correct Pin Accuracy Perfect Berlin Schönefeld Airport 12521 Berlin, Germany Category: Airport There are two equally prominent airports in Berlin. Since there is more than one possible result for this query in the real world, it is likely to be a category query with a location modifier. All airports within the queried locality should be rated as Excellent.

The address is correct without a street number and street name because this is a POI without an expected address so a locality and postal code are appropriate. The pin is Perfect because it lands on the airport's rooftop.

### 10.7.8. Clear Categories

When a query is clearly for a straightforward category, results must also belong to that category

     Query                      Results                          Ratings and Explanation
                   Is there a Navigational Result for this Query?           No
                                                     Relevance              Bad (User Intent)
                                                     Name Accuracy          Correct
                   Sephora
                   2855 Stevens Creek Blvd,          Address Accuracy       Correct
                   Santa Clara, CA 95050             Pin Accuracy           Approximate
                   Category: Beauty Supplies
     [mall]                                          The query intent is for a mall. The result is a
                                                     store inside Westfield Valley Fair mall and is
 User and fresh                                      within the viewport. Since the query is a
   viewport in                                       category and the result is a specific store,
 Santa Clara, CA                                     which the user did not ask for, rate Bad due to
                                                     user intent. If the result had been the entire
                                                     mall, the result would be rated Excellent.

The name and address can be confirmed on the official website. The pin is Approximate because it does not land on Sephora's location (shown in green) according to the mall's official map. Is there a Navigational Result for this Query? No Relevance Bad (User Intent) Name Accuracy Correct Terminal 8 Address Accuracy Correct JFK International Airport Queens, NY 11430 Pin Accuracy Perfect Category: Airport [airports] The result is a terminal that's part of JFK User and fresh International Airport. Since the query is a viewport in category and the result is a specific terminal New York, NY and not the airport itself, rate Bad due to user intent.

The name and address can be confirmed on the official website. The pin is Perfect because it lands on one of the rooftops of Terminal 8 according to the official airport map.

### 10.7.9. Soft Categories

Some category queries are straightforward and may have results that satisfy an intent exactly, like [italian restaurant]. However, sometimes categories are very small or have multiple interpretations, so several different types of results could satisfy the user's intent. These are called “soft categories.”

These category queries will produce a variety of results, each of which could satisfy the query intent to a greater or lesser degree. How well a result satisfies a category query will vary depending on the services typically offered by the result entities in that market and the customs of the specific market.

It's often difficult to define which businesses or chains belong in any one soft category, so you'll have to research the individual results provided to make your rating decisions. For instance, the query [ski shop] is very specific and is associated with the more general Sporting Goods category.

Query User and Viewport [ski shop] User and fresh viewport in Denver, Co User Intent: The user is looking for places that sell ski clothing and equipment. Any store that carries such items is consider primary intent. Is there a Navigational Result for this Query? No

               Results                   Ratings and Explanation
                          Relevance                Excellent
① Meier Skis
970 Yuma St, Suite 190    Name Accuracy            Correct
Denver, CO 80204
                          Address Accuracy         Correct
Category: Ski Equipment
                          Pin Accuracy             Perfect

Business is a shop dedicated to skiing, which would satisfy the primary intent of this category.

Relevance Good (User Intent) ② Patagonia 1431 15th St Name Accuracy Correct Denver, CO 80202 Address Accuracy Correct Category: Sports Wear Pin Accuracy Perfect

Stores that sell ski clothing would be considered secondary intent for the category query [ski shop].

       Query                     Results                          Ratings and Explanation
                     Is there a Navigational Result for this Query?          No
                                                      Relevance              Excellent
                                                      Name Accuracy          Correct
                     Riva's Italian Restaurant
                     1117 Missouri St                 Address Accuracy       Correct
                     Houston, TX 77006
                     Category: Italian                Pin Accuracy           Perfect

The most likely user intent for this query is Italian restaurants. This result satisfies the user's intent.

Cafe Dolce Gelato Relevance Good (User Intent) 5135 W Alabama St, Ste 7315 Houston, Texas 77056 Correct Category: Ice Cream Name Accuracy

Address Accuracy Correct

[italian] Pin Accuracy Approximate

User and fresh viewport in Houston, TX An Italian ice cream café is mostly likely a secondary intent for this query.

The official mall map shows the exact location of the cafe. The pin lands on another part of the mall and is rated Approximate.

Query              Results                       Ratings and Explanation
        Prada Houston Galleria
                                     Relevance              Bad (User Intent)
        5015 Westheimer, Ste 2285A
        Houston, Texas 77057
                                     Name Accuracy          Correct
        Category: Accessories
                                     Address Accuracy       Incorrect – Postal Code

Pin Accuracy Perfect

An Italian clothing store is an unlikely intent for this query.

The name is Correct, but the postal code should be 77056.

The official mall map shows the exact location of the store. The pin lands on this location and is rated Perfect.

### 10.7.10. Category Query: Parking

"Parking" generally refers to:

- Parking lots
- Parking garages
- Parking decks

     Example
                   Query                   Results                     Ratings and Explanation
      Type
                               Is there a Navigational Result for this Query?        No
                                                               Relevance             Excellent
                           Parking
                           123 O Farrell St, San Francisco, CA Name Accuracy         Partially Correct
                           94102                                                     (Name Issue)
                 [parking] Category: Parking Garage            Address Accuracy      Correct
      Specific    User and                                       Pin Accuracy        Perfect
      Parking    viewport in
                    San
                 Francisco,                                      Research reveals that the official name
                     CA                                          for this parking location is Ellis-
                                                                 O'Farrell Garage. Since an official
                                                                 name exists, the generic name
                                                                 “Parking” is demoted to Partially
                                                                 Correct.

Is there a Navigational Result for this Query? No Parking Relevance Excellent 121 Spear St, San Francisco, CA Name Accuracy Correct [parking] 94105 Category: Parking Garage Address Accuracy Correct User and Generic fresh Pin Accuracy Perfect Parking viewport in San Francisco, This result is the parking garage for CA the Rincon Center, which does not have a specific name according to official resources. Accept the generic name “Parking” as Correct.

Example
                   Query                 Results                     Ratings and Explanation
 Type
                             Is there a Navigational Result for this Query?        No
                                                               Relevance           Excellent
                         Rincon Center                         Name Accuracy       Correct
                         121 Spear St, San Francisco, CA
                         94105                                 Address Accuracy Correct
               [parking] Category: Parking Garage
                                                               Pin Accuracy        Perfect
                User and
    Paid vs.      fresh
     free      viewport in                                     This result is the parking garage for
                   San                                         the Rincon Center. It sta parking
               Francisco,                                      garage accessible to the public for a
                   CA                                          fee. Free and paid parking are equally
                                                               relevant. There should be no relevance
                                                               demotion if the parking lot/garage
                                                               requires payment and the query does
                                                               not specifically ask for free parking.

Is there a Navigational Result for this Query? No Relevance Excellent Name Accuracy Correct Parking 3705 El Camino Real, Santa Clara, Address Accuracy Correct [parking CA 95051 Pin Accuracy Perfect free] Category: Parking

User and The query specifically requests free Paid vs. fresh parking, so the results should reflect free viewport in Santa the user's request. This parking lot is Clara, CA free and should be rated as Excellent.

If the result were a parking lot that requires payment, then the correct relevance rating would be Bad, as it does not satisfy the user's intent.

Example
              Query                    Results                     Ratings and Explanation
 Type
                           Is there a Navigational Result for this Query?         No
                           Stevens Creek Parking Garage      Relevance            Excellent
                           2899 Stevens Creek Blvd, San
                           Jose, CA 95050                    Name Accuracy        Correct
                           Category: Parking                 Address Accuracy Correct
             [parking]
 Affiliate                                                   Pin Accuracy         Perfect
 parking     User and
that has a     Fresh
 specific    Viewport
  name        in San
             Jose, CA                                        The name of the parking garage can
                                                             be confirmed on the official site of the
                                                             POI to which it belongs, therefore the
                                                             name is Correct.

Is there a Navigational Result for this Query? No Relevance Excellent Hamilton/Waverly Lot Name Accuracy Correct 375 Hamilton Ave, Palo Alto, CA 94301 Address Accuracy Correct [parking] Category: Parking Pin Accuracy Perfect Generic User and fresh Parking viewport in Palo Alto, CA The name of the parking lot can be confirmed on the official site of the city of Palo Alto.

Example
              Query                   Results                     Ratings and Explanation
 Type
                          Is there a Navigational Result for this Query?        No
                          Parking                           Relevance           Excellent
                          San Francisco, CA United States
                                                            Name Accuracy       Correct
                          Category: Parking
                                                            Address Accuracy Correct
            [parking]                                       Pin Accuracy        Perfect
             User and
               fresh
 Airport                                                    This result refers to the parking lot of
            viewport in
 Parking                                                    San Francisco International Airport.
                San
            Francisco,                                      The generic name “Parking” is
                CA                                          considered Correct. Pin must be
                                                            dropped on the SFO parking lot. This is
                                                            a POI without an expected address so
                                                            just a locality is appropriate and rated
                                                            Correct without a street number and
                                                            street name.

Is there a Navigational Result for this Query? No Parking Relevance Bad (User Intent) 3600 Flora Vista Ave, Santa Clara, CA 95051 Name Accuracy Correct [parking] Category: Parking Address Accuracy Correct Private vs. Pin Accuracy Perfect User and public viewport in parking Santa Clara, CA The result in this example is a residents-only parking lot. This should be rated Bad because the lot is not useful for the general public.

## 10.8. Rating Results with PERMANENT_CLOSURE Status

When rating results whose status is PERMANENT_CLOSURE, be sure to understand whether the results are expected or unexpected. For more information on the differences between expected and unexpected results, see section 5.19. Rating Relevance When Result Status is PERMANENT_CLOSURE.

### 10.8.1. Expected PERMANENT_CLOSURE Status

When a result with PERMANENT_CLOSURE status is expected, choose the Business/POI is closed or does not exist checkbox and rate as if the location were open.

   Query                   Results                          Ratings and Explanation
                Is there a Navigational Result for this Query?                 Yes
                                               Relevance                       Navigational
                                               Business Closed/does not
                                                                               Yes
                Gaslight Grill                 exist
                PERMANENT_CLOSURE              Name Accuracy                   no ratings needed
  [gaslight
                5020 W 137th St, Overland
    grill]
                Park, KS 66224                 Address Accuracy                no ratings needed
    Fresh                                      Pin Accuracy                    no ratings needed
 viewport in
 Kansas City,                                  Research shows that the result for this navigational
     KS                                        query is permanently closed, and it displays the
                                               status PERMANENT_CLOSURE. Showing this
                                               closed result is expected since no other result can
                                               be returned in the area of location intent.

Select Business is closed or does not exist and rate the business as if it did exist. No further POI data rating will be needed.

### 10.8.2. Unexpected PERMANENT_CLOSURE Status

When many branches of a chain are available in the area of intent, we would not expect to see any locations with a status of PERMANENT_CLOSURE, whether that status is correct or not.

Query User and Viewport

[mcdonalds] User and fresh viewport in Sunnyvale, CA

        Suggestion                          Rating and Explanation
                        Relevance                Acceptable
                        Business/POI closed/
  McDonald's                                     Yes
                        does not exist
PERMANENT_CLOSURE       This permanently closed restaurant (confirmed by research) has
615 N Mathilda Ave,     its status set to PERMANENT_CLOSURE. It is considered
Sunnyvale, CA 94085     unexpected because there are many other locations of this chain
                        in the area. This means the highest rating it can get is
                        Acceptable. Name, address, and pin will not be rated.
                        Relevance                Excellent
                        Business/POI closed/
                                                 No
                        does not exist
  McDonald's            Name Accuracy            Correct
550 Lawrence Expy,
                        Address Accuracy         Correct
Sunnyvale, CA 94086
                        Pin Accuracy             Perfect
                        This open chain location is among the closest to the user and
                        rated Excellent.
                        Relevance                Acceptable
                        Business/POI closed/
                                                 No
                        does not exist
                        Name Accuracy            Correct
                        Address Accuracy         Correct
                        Pin Accuracy             Perfect

McDonald's PERMANENT_CLOSURE 556 E El Camino Real, This chain location is showing a status of Sunnyvale, CA 94086 PERMANENT_CLOSURE. Research shows that it is, in fact, open. Its relevance is rated independent of whether it is really open or closed in the real world. The result is considered unexpected and rated Acceptable.

Do not mark this result as Business/POI closed/does not exist, and continue rating the result for relevance plus name, address, and pin details.

          Suggestion                                   Rating and Explanation
                                  Relevance                 Good (Distance)
                                  Business/POI closed/
                                                            Yes
   McDonald's                     does not exist

1082 E El Camino Real, The chain location does not exist according to official resources Sunnyvale, CA 94087 and should be rated as Business is closed or does not exist. The result does not show the status as PERMANENT_CLOSURE, so it should be rated as if it were open, which is Good given the distance.

## 10.9. Other Query Types

Queries can sometimes be less obvious or even ambiguous.

### 10.9.1. Routing Queries

When a query mentions two distinct locations that are not near each other, the user was likely looking for driving directions, so returning either of the two distinct locations used for the route is the best experience Search can offer. Each location should be rated Excellent for Relevance.

     Query                       Results                          Ratings and Explanation
                   Is there a Navigational Result for this Query?          No
                                                         Relevance         Excellent
                                                         Name Accuracy n/a
                   Oxford                                Address
                   Oxford, United Kingdom                                  Correct
                                                         Accuracy
                   Category: n/a
                                                         Pin Accuracy      Perfect

The query includes two separate locations, which are very far away from each other, so the user was likely looking for routing directions. Returning either of the individual locations is expected and should be rated Excellent. [66 Chandos Pl, London The pin should be dropped within the WC2N 4HG boundaries of the result locality. Oxford]

 Query                  Results                        Ratings and Explanation
                                              Relevance         Excellent
            66 Chandos Pl
            66 Chandos Pl                     Name Accuracy n/a
            London WC2N 4HG                   Address
            Category: n/a                                       Correct
                                              Accuracy
                                              Pin Accuracy      Perfect
                                              The query includes two separate locations,
                                              so the user was likely looking for routing
                                              directions. Returning either of the individual
                                              locations is expected and should be rated
                                              Excellent.

The pin should be dropped on the address provided in the result.

Is there a Navigational Result for this Query? Yes

Oxford Relevance Navigational Oxford, United Kingdom Name Accuracy n/a Category: n/a Address Correct Accuracy [route to Oxford] Pin Accuracy Perfect

This routing query contains only one location.

### 10.9.2. Coordinate and “My Location” Queries

Note: Results for coordinate and ‘ my location” queries (or any variation of these, like “current location,” “where I am,” and so on) are rated differently from the other results described in these guidelines. Please read this section carefully.

Pin and Relevance are rated separately using a 50m radius around the queried coordinates or the user location (for “my location” queries):
- Relevance:
- A result that exists and is within the 50m radius is rated Excellent.
- A result that does not exist or is outside of the 50m radius is rated Bad.
- There will be no Navigational results.
- Pin Accuracy:
- A pin that falls within 50m radius is rated Perfect.
- A pin that falls outside the 50m radius is rated Wrong.
- Name and Address Accuracy:
- Rate the name and address accuracy according the regular guidelines.

The graphic below gives an overview. These concepts are explained further on the following pages.

If no result can be found within 50m, then the closest address or street up to 100m away will be accepted. If no address or street can be found within 100m, depending on the market, a locality or sub-locality will also be accepted.

                 Query                                Pin Rating and Explanation

Draw an imaginary circle with a 50m radius around the user's location. Rate any pin inside the circle Perfect and any pin outside the circle Wrong.

Draw an imaginary circle with a 50m radius around the queried coordinates. Rate any pin inside the circle Perfect and any pin outside the circle Wrong.

               Results                                Relevance Rating and Explanation

Use an imaginary circle with a 50m radius around the queried location to rate relevance. A result that has any part of its Perfect area within the circle is rated Excellent. If a result does not have any Perfect area inside the circle, rate Bad.

The Perfect area usually refers to the rooftop or section of the rooftop, but can include the parcel for parks and other features rated perfect for the parcel.

                Result                                Relevance Rating and Explanation

1: 3495 El Camino Real Part of the POI is inside the Excellent Santa Clara, CA 95051 50m radius

2: 3530 El Camino Real Part of the POI is inside the Santa Clara, CA 95051 Excellent 50m radius

The street is inside the 50m 3: El Camino Real (street name) Excellent radius 4: United Furniture Club No part of the POI is within 3503 El Camino Real Bad the 50m radius Santa Clara, CA 95051 5: 3482 El Camino Real Unit B Research shows this address Bad Santa Clara, CA 95051 does not exist

Note that the pin and result title do not need to match. For example, if a result for United Furniture Club is returned, but the pin is placed at the queried coordinates or user location, the Relevance Rating will still be Bad, but the pin rating will be Perfect even though it is far from United Furniture's location.

## 10.10. Unclear Results

There may be times when it is difficult to determine exactly what the result is because the business name can't be identified with certainty or the business does not correspond with the given location and it cannot be confirmed as closed. When this happens, use all provided information (including information that is not rated, such as URL and phone number – never call a business) to reach a conclusion.

If there is a tie in the evidence or you are rating Search Relevance only, rate Business/POI is closed/ does not exist, then rate relevance as if the entity did exist.

     Query                      Results                          Ratings and Explanation
                  Is there a Navigational Result for this Query?            No
                  Caribou Coffee                       Relevance            Excellent
                  227 West Market
                  Bloomington, NM 55425                Name Accuracy        Correct
                  Category: Coffee Shop                                 Incorrect – Street
                                                       Address Accuracy Number and Street
                  Additional info:                                      Name
                  URL: cariboucoffee.com
                  Phone: 1-952-854-7828                Pin Accuracy         Perfect
   [caribou]
                                                       The result name and URL are pointing to a
 User and fresh
                                                       Caribou location. The address listed belongs
  viewport in
                                                       to the Nike store located in the same
 Bloomington,
                                                       shopping center. There are multiple Caribou
      NM
                                                       Coffee locations inside the Mall of America
                                                       but the phone number belongs to the store on
                                                       60 East Broadway S-380 per official
                                                       website or 380 South Ave per mall website.
                                                       The pin is located in the same area as shown
                                                       on the mall website. Because a business with
                                                       the same name and phone number is found in
                                                       the immediate surrounding area, we will
                                                       consider the address incorrect for this result.

   Query                       Results                      Ratings and Explanation

Is there a Navigational Result for this Query? No Relevance Excellent

Pottery Barn Name Accuracy Correct 1350 Fashion Valley Rd, San Incorrect – Street Diego, CA 92108 Address Accuracy Number and Street Category: Furniture Store Name

[furniture Additional info: Pin Accuracy Approximate store] URL: www.potterybarn.com The result name and URL point to a Pottery Phone: 1-619-296-8014 User and Fresh Barn location. The address listed is San Diego, CA associated with a nearby business, Wells Fargo Bank. After researching the nearby area, a Pottery Barn with the same phone number as our result is found at 7007 Friars Road, San Diego, CA 92108, within the Fashion Valley Mall. The pin lands on the Fashion Valley Mall. Because a business with the same name and phone number is found in the immediate surrounding area, consider the address incorrect for this result. Is there a Navigational Result for this Query? No The Lot Bar Relevance Excellent 2333 S St Sacramento, CA 95816 Name Accuracy Incorrect (Name Issue) Category: Dive Bar Address Accuracy Correct

[bar] Additional info: Pin Accuracy Perfect

    Query
    [bar]                         Results
                    Additional info:                            Ratings and Explanation
                    Phone: 1-916-451-4682
User and Fresh                                        Research on the result information shows that
  Viewport in                                         the address belongs to Round Corner Tavern.
Sacramento, CA                                        The result phone number also belongs to the
                                                      Round Corner Tavern and the pin is located at
                                                      the result address. Finally, there is no ‘Lot Bar
                                                      located in the immediate area. Because all
                                                      result information except for the name listed
                                                      points to the Round Corner Tavern, we will
                                                      consider the name incorrect for this result.

Is there a Navigational Result for this Query? No Holiday Inn Business/POI is closed/does not 300 N Harbor Drive exist ☑ Redondo Beach, CA 90277 Category: Hotels and Events Relevance Excellent Use all the information provided , even Additional Info: information that's not rated, like URL and URL: http://www.ihg.com/ phone number, to research the result. holidayinn Phone: 1-310-750-1149 In this case, research shows that the address belongs to a Sonesta Hotel, not a Holiday Inn. Street imagery also shows that this building is [holiday inn] a Sonesta.

User and fresh The result phone number does not belong to viewport in Santa any business and the given URL does not Ana, CA point to any particular Holiday Inn.

Investigation of the surrounding area shows that there is no Holiday Inn in Redondo Beach, so this is not a case where the business has been misplaced and the result contains an incorrect street name or number.

Because the result information does not overwhelmingly point to a Holiday Inn at this location, rate the result Closed/Does not exist.

    Query               Results                        Ratings and Explanation

Is there a Navigational Result for this Query? No

Santa's Professional Dog Relevance Excellent Grooming 603 Manley St, North Pole AK, 99705 Name Accuracy Incorrect (Name Issue) Category: Pet Services

Additional info: Address Accuracy Correct Phone: (907) 480-9701 URL: http:// Pin Accuracy Perfect www.paulasprofessionaldoggroo

        Query                          Results
                            www.paulasprofessionaldoggroo               Ratings and Explanation
                            ming.com/
                                                              Use all the information provided , even
                                                              information that's not rated, like URL and
                                                              phone number, to research the result.
    [santa's dog
     grooming]                                                Here, research shows that the address, url,
                                                              and phone number belong to Paula's
     User and fresh                                           Professional Dog Grooming. Since the
    viewport in North                                         evidence points to Paula's business actually
        Pole, AK                                              existing at this location, the name Santa's
                                                              Professional Dog Grooming is considered
                                                              Incorrect.

When rating relevance, ignore all data issues and rate the result as if the name and category were correct. Because of the match between the query and the incorrect name, and how near the user is to the result in the fresh viewport, this result is rated Excellent.

When rating other results, treat this one as closed/does not exist and don't demote the relevance of other, more distant, results. This is so that a valid result that's farther away won't be demoted solely due to this naming error.

Is there a Navigational Result for this Query? No Shell Business/POI is closed/does not 1221 S Main St, Wildwood, FL exist ☑ 34785 Category: Gas Station Relevance Excellent

   Query         Shell       Results                      Ratings and Explanation
                 1221 S Main St, Wildwood, FL
                 34785
                 Category: Gas Station

Additional info: URL: www.shell.com Phone: 1-352-748-6199 There are two gas stations in the immediate area:

Mobil (purple pin) 1221 S Main St Wildwood, FL 34785 Phone: 1-352-748-6199

Shell (red pin) 1001 S Main St [gas station] Wildwood, FL 34785 User and fresh Phone: 1-352-748-8903 viewport in Wildwood, FL The result contains conflicting information from two nearby businesses. The result name and URL point to a Shell gas station a little north of the result address listed, while the result address and phone number point to a Mobil gas station. If, after researching all of the given information for a result no clear consensus of what the result is pointing to can be made, the result should be rated as Closed/Does not exist.

You will still need to rate relevance as if the business were open. The result matches the query intent and is within the fresh viewport. The result should receive a rating of Excellent.

    Query           Results                                      Ratings and Explanation
                    Is there a Navigational Result for this Query?         No
                    Dinosaur Inc                       Business/POI is closed/does not
                    8655 Jones Rd                      exist
                                                                                                 ☑
                    Houston,TX77065
                                                       Relevance             Excellent
                    Additional info:                   Research on the result information shows
                    Phone: 1-281-531-6500              that the address belongs to Trails at
                    Category: n/a                      Corinthian Creek Apartments. The result
 [dinosaur]
                                                       phone number belongs to a different
 User and large                                        apartment complex, Domain West
fresh viewport in                                      Apartments. Finally, there is no evidence that
      Texas                                            the business Dinosaur Inc exists. Based on
                                                       the information listed, rate the result as
                                                       Closed/Does not exist.

You will still need to rate relevance as if the business did exist. The result matches the query intent and is within the large, fresh viewport. The result should receive a rating of Excellent. Is there a Navigational Result for this Query? No Business/POI is closed/does not Lowongan Guru Kimia SMA SMU exist ☑ Di Jakarta [Salon di jalan Jalan Danau Sunter Utara No. 1 Relevance Bad (User Intent) tebet timur Tanjung Priok dalam raya DKI Jakarta 14350 The query is for a category with a specific jakarta Indonesia location modifier. The result is for a job selatan] Category: Education opening which does not satisfy the intent and is not indicative of a POI. There is a Translation: Result Title Translation: possibility the result is for a particular high [Salons in [Job Opening for High School school, however, the result address is not tied Jalan Tebet Chemistry Teacher in Jakarta] to any high school and no specific school is Timur Dalam Additional info: named in the result title. Since the result data Raya, Jakarta Lat/long: -6.13799,106.86598 is ambiguous and does not represent a single Selatan] or POI this entity should be rated Closed/Does [Category, not exist. Street Name, City Name] You will still need to rate relevance as if the business were open. The user's intent is for a Salon on a specific street. The result does not match this intent and should be rated as Bad.

# 11. Top Rating Tips

Solutions to the most common rating dilemmas.

## 11.1. What's the relevance when query is business/POI name and address and the result is

When a user types in the name of a business or a POI along with its address, they expect to see the business mentioned in the query as part of the result. If the result is the address alone and does not mention the business, the user cannot be certain that the query and the result refer to the same thing. This is why the result's relevance is Bad.

Address and pin accuracy can be rated as usual.

               Query                     Results                          Ratings and Explanation
                            800 North Point                      Relevance            Bad (User Intent)
                            800 North Point St, San Francisco,
                            California 94109                     Name Accuracy        n/a
            [Gary Danko     Category: New American Cuisine       Address Accuracy     Correct
             800 North
            Point St, San                                        Pin Accuracy         Perfect
             Francisco,                                          Result is for the address and not the
             California                                          business stated in the query, so the user
              94109]                                             cannot know whether or not the query and
                                                                 result refer to the same thing. This is why the
                                                                 result's relevance is Bad.

## 11.2. What's the relevance when the query is a street name and the result is a single

A query for an entire street is very broad. When the result is just one business or one address on that street, it is too specific to satisfy the broad intent of the query.

Name, address, and pin accuracy can be rated as usual.

       Query                      Results                              Ratings and Explanation
                   Happy Lamb Hot Pot                        Relevance             Bad (User Intent)
                   19062 Stevens Creek Blvd
                   Cupertino, CA, 95014                      Name Accuracy         Correct
                   Category: Hot Pot                         Address Accuracy      Correct
                                                             Pin Accuracy          Perfect
   [Stevens
  Creek Blvd]
                                                             The result is for a business on the street.
                                                             When the query is for a street, returning a
                                                             single business is too specific a result for the
                                                             broad query.

## 11.3. How do I know what the location intent is when user is outside/inside a fresh viewport?

When a viewport is fresh, the location intent for results depends on whether the user is inside or outside the viewport:

- When a user is inside the viewport, that user's location is the location intent

- When a user is outside the viewport, results are expected in or near the viewport, no matter how near or far the user is from that viewport.

Viewport User Location Intent When the user is within a fresh viewport, take the user location as location intent. Results are generally expected in Inside Viewport or near the viewport, and results inside the area cannot be rated Bad because of distance alone.

Fresh Results are expected in or near the viewport area. If no results Outside can be found in or near the viewport, use the user location as Viewport a secondary location intent.

When the user is missing, the viewport remains the location Missing intent.

## 11.4. How do I know what the location intent is when user is outside/inside a stale viewport?

When a viewport is stale, the user's location is considered the location intent for the results whether the user is inside or outside the viewport

Viewport User Location Intent Inside Viewport When the viewport is stale, consider only the user location as Outside location intent. Stale Viewport Use the stale viewport as location intent when the user Missing location is missing.

## 11.5. This full address result does not exist. How do I rate it?

An address type result needs to be associated with a building or officially assigned to a plot of land in order to be useful to a user. Sometimes your research will show that a queried address simply does not exist. In cases like, this you'll see one of three types of results:

- The closest verified address (on the same street, in the same city and state): Rate relevance as Excellent.
- The same address as the query address: Rate relevance as Excellent and address as Incorrect – Address does not exist. The pin will be rated Can't Verify.
- The queried street without a street number: Rate relevance as Acceptable.

When a queried address does not exist, the answer to the question “Is there a navigational result for this query” will always be No.

       Query                 Results                         Ratings and Explanation
                  Is there a Navigational Result for this Query?        No

[2001 Duncan 1099 Duncan St Relevance Excellent St, San 1099 Duncan St., San Francisco, 94131, CA Name Accuracy n/a Francisco] Category: n/a Address Accuracy Correct Pin Accuracy Perfect

If 2001 does not actually exist then selecting 1099, the closest number that does exist, is considered correct. For a locale that uses the rule of even numbers on one side of the street and the odd numbers on the other, we need to return the closest existing address on the same side of the street as the query. If the rule of odds and evens does not apply then the closest numeric number will be considered correct. The pin has to be correctly dropped on the address presented in the result.

2001 Duncan St Relevance Excellent 2001 Duncan St., San Name Accuracy n/a Francisco, 94131, CA Category: n/a Incorrect – Address Address Accuracy does not exist Pin Accuracy Can't Verify Duncan Street only goes up to number 1099, but the query requests a non-existent number. The result returned is the same as the queried address and should be rated as Excellent. The pin rating for addresses that do not exist is Can't Verify.

       Query                   Results                            Ratings and Explanation
                   Duncan St                          Relevance              Acceptable (User Intent)
                   Duncan St, San Francisco,
                   94131, CA                          Name Accuracy          n/a
                   Category: n/a                      Address Accuracy       Correct
                                                      Pin Accuracy           Perfect

The result returns only the street with a pin dropped within the boundaries of the street. This result technically satisfies the user intent, but this intent is unlikely, so relevance should be rated Acceptable.

# Appendix: Release Survey

You may occasionally be unable to rate a survey. To skip it, click Release Survey at the top right of the tool.

A pop-up window with a list of reasons for release will appear. You must choose one before you can release the survey.

Note: If you change your mind and decide to rate the survey, click Cancel at the bottom left of the pop-up window.

Reasons to Release

1. Adult Content

You are not comfortable rating queries and/or results that include businesses offering adult services or entertainment, like strip clubs.

2. Technical Issue

Technical issues that prevent rating include:

- Map or map features not loading.
- Query field is empty.
- Tool is not interactive. You cannot zoom in and out or move the map at all.
- Cannot submit ratings.
- More than 5 pins in a row are missing or pins do not stay in place.
- Receiving 5 consecutive surveys with all results in China, if China, or Hong Kong, are not the markets you are rating.

If you choose this option, leave a comment describing the issue before releasing the survey.

3. Not Enough Time Allocated

Select this option if the Estimated Rating Time is not sufficient to complete the task. Remember, the Estimated Rating Time is the average time over multiple tasks.

4. Other

Issues not mentioned above that prevent you from rating.

If you choose this option, you must leave a comment before you can release the survey.

Do Not Release

These issues will not prevent rating and are not reasons to release surveys:

- Poor satellite image, including clouds over target area or lack of image detail
- You can zoom in and out on map, but not as much as you'd prefer
- Rating is too difficult
- Query does not appear to be related to maps
- Query or results are from outside your market
- A query has no results
- If you see a query with no results, answer the query-level “Navigational Result” question and submit.
- Query or results in unexpected languages and scripts:
- If you see a query in an unexpected language or script, research it or use an online translation tool to find out what it means, then rate it as usual.
- For results in an unexpected language or script see Result Name/Title in Unexpected Language or Script and Language/Script Issues in Address