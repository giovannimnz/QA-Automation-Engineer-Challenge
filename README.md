# QA-Automation-Engineer-Challenge
QA Automation Engineer Challenge - JavaScript + Postman + Cypress

Project Description - API Test
This repository contains the automated tests for the QA Automation Engineer challenge. The focus is to test the user and book management API provided by the DemoQA platform. The tests were implemented using Postman to structure the requests.
____________________________________________________________

API Test Project Structure

The backend directory is organized as follows:

QA-Automation-Engineer-Challenge/
├── backend/
│   ├── collections/       # Postman test collections
│   │   └── Book_Rent.postman_collection.json
│   ├── environments/      # Postman environment files
│   │   └── Challenge.postman_environment.json
├── .gitignore
├── README.md

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
git clone https://github.com/giovannimnz/QA-Automation-Engineer-Challenge.git
cd QA-Automation-Engineer-Challenge

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
