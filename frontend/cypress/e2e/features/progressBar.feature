Feature: Test Progress Bar functionality

  Scenario: Test start, stop, and reset of progress bar
    Given I am in the initial page
    When I click in the widgets option
    And I click in the submenu option: Progress Bar
    And I click in Start Button
    And I stop the progress when it reaches 24
    And I confirm that the progress bar value is between 24 and 25
    And I resume the progress until 100
    Then I confirm that the Progress bar is at 100
    And I click the reset button