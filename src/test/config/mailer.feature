Feature: Email system connection and sending validation

  Scenario: Validate connection to the email sending system
    Given the system is connected to the email sending service
    Then the connection should be successfully validated

  Scenario: Send an email
    Given the system is connected to the email sending service
    When the system sends an email
    Then the email should be successfully sent
