import IndexElements from '../elements/indexElements';
import ProgressBarElements from '../elements/progressBarElements';

const indexElements = new IndexElements();
const widgetsElements = new ProgressBarElements();

class ProgressBarPage {
  index() {
    cy.visit('/');
  }

  openWidgetsButton() {
    cy.get(indexElements.menuWidgetsButton()).click();
  }

  clickProgressBarWidgetButton() {
    cy.get(widgetsElements.progressBarWidgetButton()).click();
  }

  clickStartStopButton(progressBarPercentage = null) {
    if (progressBarPercentage !== null) {
      cy.waitForProgressAndClick(progressBarPercentage);
    } else {
      cy.get(widgetsElements.startStopButton()).click();
    }
  }

  getProgressBarStatus() {
    return cy
      .get(widgetsElements.progressBarStatus)
      .invoke('attr', 'aria-valuenow')
      .then((value) => {
        if (value !== undefined && value !== null) {
          return parseInt(value);
        } else {
          return 0;
        }
      });
  }

  checkProgressBarValue(progressBarPercentage) {
    this.getProgressBarStatus().should('be.lte', progressBarPercentage);
  }

  clickResetButton(progressBarPercentage = 100) {
    if (progressBarPercentage !== 100) {
      cy.get(getProgressBarStatus)(progressBarPercentage);
    } else {
      cy.get(widgetsElements.resetButton()).click();
    }
  }
}

Cypress.Commands.add('waitForProgressAndClick', (stop) => {
  cy.get(widgetsElements.progressBarStatus()).then(($bar) => {
    const progress = parseFloat($bar.attr('aria-valuenow'));
    cy.log(`Current progress: ${progress}`);

    const margin = 1;
    if (progress >= stop - margin) {
      cy.get(widgetsElements.startStopButton()).click();
    } else {
      cy.wait(100);
      cy.waitForProgressAndClick(stop);
    }
  });
});

export default ProgressBarPage;
