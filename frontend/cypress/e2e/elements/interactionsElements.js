class InteractionsElements {
  menuSortableButton = () => ':nth-child(5) > .element-list > .menu-list > #item-0';
  verticalContainer = () => '.vertical-list-container';
  listContainer = (index) => `.vertical-list-container > :nth-child(${index})`;
}

export default InteractionsElements;
