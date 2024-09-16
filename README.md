# qa-automation-engineer-challenge
QA Automation Engineer Challenge - JavaScript + Postman + Cypress + Cucumber

Project Description - API Test

This repository contains the automated tests for the QA Automation Engineer challenge. The focus is to test the user and book management API provided by the DemoQA platform. The tests were implemented using Postman to structure the requests.
____________________________________________________________

API Test Project Structure

qa-automation-engineer-challenge/
/backend/
  /collections/       # Postman test collections
    - Book_Rent.postman_collection.json
  /environments/      # Postman environment files
    - Challenge.postman_environment.json
- .gitignore
- README.md

collections/: Contains the Book_Rent.postman_collection.json file, which includes test scenarios for creating users, authentication, listing books, and reserving two books.

environments/: Contains the Challenge.postman_environment.json file, which defines environment variables such as the API base URL (serviceBaseUrl).
____________________________________________________________

Prerequisites

Before running the tests, ensure you have the following versions installed:
-Postman: v11.12
-Node.js: v18.16.1
-npm: v9.5.1
____________________________________________________________

How to Run the Tests

1. Clone the repository:
git clone https://github.com/giovannimnz/qa-automation-engineer-challenge.git
cd qa-automation-engineer-challenge

2. Import the Collection and Environment into Postman:
Open Postman
Import the test collection located at backend/collections/Book_Rent.postman_collection.json
Import the environment file backend/environments/Challenge.postman_environment.json

3. Run the tests in Postman:
Select the "Book Rent" collection and execute the tests using the Challenge environment.
____________________________________________________________

API Test Structure

The Book_Rent.postman_collection.json collection includes the following scenarios:

Create a New User:
Method: POST /Account/v1/User
Generates a random user and stores the credentials as collection variables.
Validates that the user is successfully created and does not have any books.

Generate Access Token:
Method: POST /Account/v1/GenerateToken
Generates an access token for the newly created user and stores it as a variable.

Validate User Authorization:
Method: POST /Account/v1/Authorized
Validates that the user is authorized with the provided credentials.

List Available Books:
Method: GET /BookStore/v1/Books
Lists all available books in the store and stores the ISBNs for later use.

Reserve Two Books:
Method: POST /BookStore/v1/Books
Randomly selects two books from the available list and reserves them for the user.

Get User Account Information:
Method: GET /Account/v1/User/{userID}
Retrieves the user's account information, including the reserved books, and validates if the books match the selected ones.

____________________________________________________________

Font End Test Project Structure

/frontend
  /cypress
    /e2e
      /elements
        - formElements.js        # Locators for form elements
      /features
        - formulario.feature     # Test scenarios written in Gherkin
      /pages
        - formPage.js            # Actions and interactions for the form page
      /specs
        - fillForm.cy.js         # Main test file for filling the form
      /steps
        - formStep.js            # Step definitions for Cucumber tests
    /fixtures
      - dataGenerator.js         # Random data generator for tests
    /support
      - commands.js              # Custom Cypress commands
      - e2e.js                   # Global configuration for Cypress tests
    /upload_files
      - hello-world.txt          # Sample file used for testing file upload
  - cypress.config.js            # Cypress configuration file
  - package.json                 # Project dependencies and scripts
  - package-lock.json            # Lock file for npm dependencies
____________________________________________________________

Cypress Folder:

cypress/e2e/: Contains all the end-to-end test files and related resources.
elements/: Holds the locators for the form elements (formElements.js).
features/: Holds Gherkin-formatted feature files (form.feature) that describe test scenarios.
pages/: Contains files with actions and interactions for specific pages, such as the form page (formPage.js).
specs/: Test files written in JavaScript, with test cases (fillForm.cy.js).
steps/: Step definitions for Cucumber, where the steps from the .feature file are implemented (formStep.js).

cypress/fixtures/: This folder contains the data used for testing.
dataGenerator.js: Utility file that generates random data, such as names and emails, for form submission tests.

cypress/support/: Contains custom support files and configurations.
commands.js: Defines custom commands used in Cypress.
e2e.js: Global configuration, including exception handling, and loading custom commands.

cypress/upload_files/: Stores files used in tests involving file uploads.
hello-world.txt: Example text file used during form upload tests.

cypress.config.js: The Cypress configuration file that sets timeouts, base URL, and test file patterns.
package.json: Lists project dependencies and scripts to run Cypress tests.

Technologies Used:
Cypress: An end-to-end testing framework for automating frontend interactions.
Cucumber: Integrated with Cypress to define behavior-driven development (BDD) tests using Gherkin syntax.
faker.js: Library used to generate random test data in dataGenerator.js.

Running the Tests

In yor IDE, go to folder: frontend
cd frontend

Install Cypress
npm install cypress --save-dev

And These necessary libraries:
npm install --save-dev @4tw/cypress-drag-drop
npm install --save-dev @faker-js/faker

To run Cypress with the GUI:

npx cypress open

configure Cypress

Run the specs




