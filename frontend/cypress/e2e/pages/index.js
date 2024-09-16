import IndexElements from '../elements/indexElements';
const indexElements = new IndexElements();

class Index {
  index() {
    cy.visit('/');
  }

  alertsFrameWindows() {
    cy.get(indexElements.menuAlertsButton()).click();
  }

  browserWindows() {
    cy.get(indexElements.browserWindowsButton()).click();
  }

  newWindow() {
    cy.window().then((win) => {
      cy.stub(win, 'open').callsFake((url) => {
        win.location.href = url;
      });
    });
    cy.get(indexElements.newWindowButton()).click();
    cy.contains('This is a sample page').should('be.visible');
    cy.wait(3000);
    cy.go('back');
  }
}

export default Index;
