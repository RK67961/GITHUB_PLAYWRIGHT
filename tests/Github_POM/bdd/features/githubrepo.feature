Feature: GitHub Repository

  @bdd
  Scenario: Create a new repository
    Given user is on GitHub homepage
    When user creates a new repository
    Then repository should be created successfully