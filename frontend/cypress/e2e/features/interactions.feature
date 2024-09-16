Feature: Sort elements in ascending order

  Scenario: Sort list in ascending order if necessary
    Given I am on the initial page
    When I click on the Interactions menu
    And I click on the submenu option: Sortable
    And I check if the list is already in ascending order
    And I reorder the list in ascending order
    Then I validate that the list is in ascending order