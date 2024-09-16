import ProgressBarPage from '../pages/progressBarPage';

const progressBarPage = new ProgressBarPage();

Given('I am in the initial page', function () {
  progressBarPage.index();
});

When('I click in the widgets option', function () {
  progressBarPage.openWidgetsButton();
});

When('I click in the submenu option: Progress Bar', function () {
  progressBarPage.clickProgressBarWidgetButton();
});

When('I click in Start Button', function () {
  progressBarPage.clickStartStopButton();
});

When('I stop the progress when it reaches 24', function () {
  progressBarPage.clickStartStopButton(24);
});

When('I confirm that the progress bar value is between 24 and 25', function () {
  progressBarPage.checkProgressBarValue(25);
});

When('I resume the progress until 100', function () {
  progressBarPage.clickStartStopButton(100);
});

Then('I confirm that the Progress bar is at 100', function () {
  progressBarPage.checkProgressBarValue(100);
});

Then('I click the reset button', function () {
  progressBarPage.clickResetButton();
});
