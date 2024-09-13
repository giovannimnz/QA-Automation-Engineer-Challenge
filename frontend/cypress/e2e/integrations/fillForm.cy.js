import FormPage from '../pages/formPage';
import { generateRandomUserData } from '../data/dataGenerator';

const formPage = new FormPage();

describe('Fill the form', () => {
  it('Fill the form with aleatory data', () => {

      const userData = generateRandomUserData();

      cy.visit('/automation-practice-form');
      formPage.fillInFirstNameAndLastName(userData.randomFirstName, userData.randomLastName);
      formPage.fillInEmail(userData.randomEmail);
      formPage.selectGender(userData.randomGender);
      formPage.fillInPhoneNumber(userData.randomPhoneNumber);
      formPage.selectDateOfBirth(userData.randomMonth, userData.randomYear, userData.randomDateOfBirth.getDate().toString().padStart(2, '0'));
      formPage.selectSubjects(userData.randomSubjects);
      formPage.selectHobby(userData.randomHobby);
      formPage.uploadTxtFile('cypress/upload_files/hello-world.txt');
      formPage.fillInAddress(userData.randomAddress);
      formPage.selectState(userData.randomState);
      formPage.selectCity(userData.randomCity);
      formPage.submitForm();
      cy.contains('Thanks for submitting the form').should('be.visible');
      formPage.closeModal();
  });
});
