import FormPage from '../pages/formPage';
import Index from "../pages/index";
import { generateRandomUserData } from '../../fixtures/dataGenerator';

const index = new Index();
const formPage = new FormPage();
const userData = generateRandomUserData();

Given('I am in the initial page', function () {
  cy.get(index.index);
});

When('I click in the form option', function () {
  formPage.openForms();
});

When('I click in the submenu option: Practice form', function () {
  formPage.openPracticeForm();
});

When('I fill in the first name and last name', function () {
    formPage.fillInFirstNameAndLastName(userData.randomFirstName, userData.randomLastName);
});

When('I fill in the email', function () {
    formPage.fillInEmail(userData.randomEmail);
});

When('I select the gender', function () {
  formPage.selectGender(userData.randomGender);
});

When('I fill in the phone number', function () {
  formPage.fillInPhoneNumber(userData.randomPhoneNumber);
});

When('I select the date of birth', function () {
  formPage.selectDateOfBirth(userData.randomMonth, userData.randomYear, userData.randomDayOfYear);
});

When('I fill in the interest', function () {
  formPage.selectInterest();
});

When('I fill in the hobby', function () {
  formPage.selectHobby();
});

When('I attach a text file', function () {
  formPage.uploadTxtFile('cypress/upload_files/hello-world.txt');
});

When('I fill in the address', function () {
  formPage.fillInAddress(userData.randomAddress);
});

When('I fill in the state and city', function () {
  formPage.selectState(userData.randomState);
  formPage.selectCity(userData.randomCity);
});

When('I click the submit button', function () {
  formPage.submitForm();
});

When('I click the submit button', function () {
  formPage.submitForm();
});

Then('The form should be successfully submitted', function () {
  cy.contains('Thanks for submitting the form').should('be.visible');
  cy.get('tbody > :nth-child(1) > :nth-child(2)').contains(userData.randomFirstName, userData.randomLastName);
});

Then('I click in the close bottom to close modal', function () {
  formPage.closeModal();
});
