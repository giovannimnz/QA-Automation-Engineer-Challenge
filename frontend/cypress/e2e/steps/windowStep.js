import Index from '../pages/index';

const index = new Index();

Given('I am in the initial page', function () {
  cy.get(index.index);
});

When('I click on menu option Alerts, Frame & Windows', function () {
  cy.get(index.alertsFrameWindows).click();
});

When('I click in the submenu option: Browser Windows', function () {
  cy.get(index.browserWindows).click();
});

When('I click on button: new Windows', function () {
  cy.get(index.newWindow).click();
});

Then(
  'A new window have open showing the message: This is a simple page',
  function () {
    cy.contains('This is a sample page').should('be.visible');
  }
);

Then('I close the new opened window', function () {
  cy.go('back');
});
