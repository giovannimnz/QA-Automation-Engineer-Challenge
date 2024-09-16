import InteractionsElements from '../elements/interactionsElements';
import IndexElements from '../elements/indexElements';

const interactionsElements = new InteractionsElements();
const indexElements = new IndexElements();

class InteractionsPage {
  index() {
    cy.visit('/');
  }

  openInteractionsMenu() {
    cy.get(indexElements.menuInteractions()).click();
  }

  clickSortableMenu() {
    cy.get(interactionsElements.menuSortableButton()).click();
  }

  getListValues() {
    return cy
      .get(interactionsElements.verticalContainer())
      .children()
      .then(($items) => {
        return $items.map((index, item) => item.innerText.trim()).get();
      });
  }

  reorderIfNotAscending() {
    this.getListValues().then((listValues) => {
      const sortedList = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
      if (JSON.stringify(listValues) !== JSON.stringify(sortedList)) {
        cy.log('List is not in order, reordering...');
        for (let i = 0; i < sortedList.length; i++) {
          const targetIndex = sortedList.indexOf(listValues[i]) + 1;
          if (targetIndex > 0) {
            cy.get(interactionsElements.listContainer(i + 1))
              .drag(interactionsElements.listContainer(targetIndex));
          }
        }
      } else {
        cy.log('List is already in ascending order');
      }
    });
  }

  validateAscendingOrder() {
    const expectedOrder = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
    this.getListValues().then((listValues) => {
      expect(listValues).to.deep.equal(expectedOrder);
    });
  }
}

export default InteractionsPage;
