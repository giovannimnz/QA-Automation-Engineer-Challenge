import WebtablesPage from '../pages/webtablesPage';

const webtablesPage = new WebtablesPage();

Given('I am in the initial page', function () {
  webtablesPage.index();
});

When('I click in the Elements menu option', function () {
  webtablesPage.indexElements();
});

When('I click in the submenu option: Web Tables', function () {
  webtablesPage.openWebtablesButton();
});

When('I create a new register', function () {
  webtablesPage.addNewRegister();
});

When('I edit this new register', function () {
  webtablesPage.editNewRegister();
});

When('I create twelve new registers', function () {
  webtablesPage.addNewRegister();
});

Then('I delete the new twelve registers created', function () {
  webtablesPage.removeRegister();
});
