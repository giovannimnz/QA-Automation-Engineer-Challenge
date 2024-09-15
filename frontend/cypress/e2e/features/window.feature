Feature: window
  openNewWindow

  Scenario: Open a new window
    Given I am in the initial page
    When I click on menu option Alerts, Frame & Windows
    And I click in the submenu option: Browser Windows
    And I click on button: new Windows
    Then A new window have open showing the message: This is a simple page
    And I close the new opened window
