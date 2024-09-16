import ProgressBarPage from '../pages/progressBarPage';

const progressBarPage = new ProgressBarPage();

describe('Test Progress Bar', () => {
  it('Test Progress Bar Start Stop and Reset', () => {
    progressBarPage.index();
    progressBarPage.openWidgetsButton();
    progressBarPage.clickProgressBarWidgetButton();
    progressBarPage.clickStartStopButton();
    progressBarPage.clickStartStopButton(24);
    progressBarPage.checkProgressBarValue(25);
    cy.wait(1000);
    progressBarPage.clickStartStopButton(25);
    progressBarPage.checkProgressBarValue(100);
    cy.wait(9000);
    progressBarPage.clickResetButton();
  });
});
