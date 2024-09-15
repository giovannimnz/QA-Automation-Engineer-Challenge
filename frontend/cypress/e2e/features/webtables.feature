Feature:webtables
  editRegisters

  Scenario: Edit registers
    Given I am in the initial page
    When I click in the Elements menu option
    And I click in the submenu option: Web Tables
    And I create a new register
    And I edit this new register
    And I create twelve new registers
    Then I delete the new twelve registers created
