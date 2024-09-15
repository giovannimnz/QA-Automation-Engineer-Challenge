import FormElements from '../elements/formElements';
const formElements = new FormElements();

class FormPage {
  fillInFirstNameAndLastName(name, lastName) {
    cy.get(formElements.inputFirstName()).type(name);
    cy.get(formElements.inputLastName()).type(lastName);
  }

  fillInEmail(email) {
    cy.get(formElements.inputEmail()).type(email);
  }

  selectGender(gender) {
    cy.get(formElements.inputGender(gender)).click();
  }

  fillInPhoneNumber(number) {
    cy.get(formElements.inputPhoneNumber()).type(number);
  }

  selectDateOfBirth(month, year, day) {
    cy.get(formElements.inputDateOfBirth()).click();
    cy.get(formElements.selectMonth()).select(month);
    cy.get(formElements.selectYear()).select(year);
    cy.get(formElements.selectDay(day)).click();
  }

  selectSubjects(subjects) {
    subjects.forEach((subject) => {
      cy.get(formElements.subjectsField()).type('S');
      cy.get(`#react-select-2-option-${subject}`).click();
    });
  }

  selectHobby(hobbies) {
    hobbies.forEach((hobby) => {
      cy.get(formElements.inputHobby(hobby)).click();
    });
  }

  uploadTxtFile(textFilePath) {
    cy.get(formElements.uploadTxtFile()).selectFile(textFilePath);
  }

  fillInAddress(address) {
    cy.get(formElements.inputAddress()).type(address);
  }

  selectState(state) {
    cy.get(formElements.openState()).click();
    cy.get(formElements.selectState(state)).click();
  }

  selectCity(city) {
    cy.get(formElements.openCity()).click();
    cy.get(formElements.selectCity(city)).click();
  }

  submitForm() {
    cy.get(formElements.submitButton()).click();
  }

  closeModal() {
    cy.get('#adplus-anchor').invoke('remove');

    cy.wait(3000)

    cy.get(formElements.closeModal())
        .scrollIntoView()
        .should('be.visible')
        .click({ force: true });
  }
}

export default FormPage;
