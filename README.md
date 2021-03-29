# Catwalk

*Welcome!

This is a one-page website application for a retail product that features the following widgets:
- Product Overview
- Related Items and Outfit
- Questions and Answers
- Ratings and Reviews

An Express server is connected to a legacy API. Different components were built for the various widgets, while the star component was shared.

To run locally:
- You will need an access key for the API.
- After cloning, run npm install. Then run npm start and open a new terminal and run npm run build.*

## **To Begin**

Install npm dependencies locally by running:

`npm install`

Build the webpack bundle.js and watch for file changes:

`npm run build`

Then initiate the express server to listen on the specified port:

`npm start`

## **API**

Create a new root file 'token.js' and populate it with the same contents as provided in 'token.sample.js'.

Replace 'YOUR_API_TOKEN_HERE' with a [GitHub personal access token](https://github.com/settings/tokens)

*Note: Confirm that 'token.js' is listed in the '.gitignore' root file so that it is never checked into Git. If the token becomes compromised, please revoke the token immediately and generate a new one.*
