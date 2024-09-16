import IndexElements from '../elements/indexElements';
import WebtablesElements from '../elements/webtablesElements';
import FormElements from '../elements/formElements';

const indexElements = new IndexElements();
const webtablesElements = new WebtablesElements();
const formElements = new FormElements();

class WebtablesPage {
  index() {
    cy.visit('/');
  }

  indexElements() {
    cy.get(indexElements.menuElementsButton()).click();
  }

  openWebtablesButton() {
    cy.get(webtablesElements.webtablesButton()).click();
  }

  addNewRegister(name, lastName, email, age, salary, department) {
    cy.get(webtablesElements.addNewRecordButton()).click();
    cy.get(formElements.inputFirstName()).should('be.visible').type(name);
    cy.get(formElements.inputLastName()).type(lastName);
    cy.get(formElements.inputEmail()).type(email);
    cy.get(webtablesElements.inputAge()).type(age);
    cy.get(webtablesElements.inputSalary()).type(salary);
    cy.get(webtablesElements.inputDepartment()).type(department);
    cy.get(formElements.submitButton()).click();
  }

  editNewRegister(name, lastName, email, age, salary, department) {
    webtablesElements.getLastRecordNumber().then((lastRecordNumber) => {
      cy.get(webtablesElements.editRecordButton(lastRecordNumber))
        .should('be.visible')
        .click({ force: true });
      cy.get(formElements.inputFirstName())
        .clear()
        .should('be.visible')
        .type(name);
      cy.get(formElements.inputLastName()).clear().type(lastName);
      cy.get(formElements.inputEmail()).clear().type(email);
      cy.get(webtablesElements.inputAge()).clear().type(age);
      cy.get(webtablesElements.inputSalary()).clear().type(salary);
      cy.get(webtablesElements.inputDepartment()).clear().type(department);
      cy.get(formElements.submitButton()).click();
    });
  }

  removeRegister() {
    webtablesElements.getLastRecordNumber().then((lastRecordNumber) => {
      cy.get(webtablesElements.deleteRecordButton(lastRecordNumber))
        .should('be.visible')
        .click();
    });
  }
}

export default WebtablesPage;
