import InteractionsPage from '../pages/interactionsPage';

const interactionsPage = new InteractionsPage();

describe('Sort list in ascending order', () => {
  it('should sort the list if it is not already in ascending order', () => {
    interactionsPage.index();
    interactionsPage.openInteractionsMenu();
    interactionsPage.clickSortableMenu();
    interactionsPage.reorderIfNotAscending();
    interactionsPage.validateAscendingOrder();
  });
});
