Feature: AutoTrader Car Search
  As a user
  I want to search for cars on AutoTrader
  So that I can find cars matching my criteria

  Scenario: Search for Audi cars under £5000 in RH2 7PE
    Given I am on the AutoTrader homepage
    When I accept all cookies
    And I enter the postcode "RH2 7PE"
    And I select "Audi" from the make dropdown
    And I select "5000" from the max price dropdown
    Then I click the search button

  Scenario: Search for Kia cars under £5000 in RH2 7PE
    Given I am on the AutoTrader homepage
    When I accept all cookies
    And I enter the postcode "RH2 7PE"
    And I select "Kia" from the make dropdown
    And I select "5000" from the max price dropdown
    Then I click the search button