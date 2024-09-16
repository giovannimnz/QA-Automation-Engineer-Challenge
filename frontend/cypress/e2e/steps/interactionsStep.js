import InteractionsPage from '../pages/interactionsPage';

const interactionsPage = new InteractionsPage();

Given('I am on the initial page', function () {
  interactionsPage.index();
});

When('I click on the Interactions menu', function () {
  interactionsPage.openInteractionsMenu();
});

When('I click on the submenu option: Sortable', function () {
  interactionsPage.clickSortableMenu();
});

Then('I check if the list is already in ascending order', function () {
  interactionsPage.reorderIfNotAscending();
});

Then('I reorder the list in ascending order', function () {
  interactionsPage.reorderIfNotAscending();
});

Then('I validate that the list is in ascending order', function () {
  interactionsPage.validateAscendingOrder();
});
