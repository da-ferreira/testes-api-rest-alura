Feature: Auth Service
  As a user registration system
  I want to validate the business rules for creating users
  So that all users are registered correctly

  Scenario: User must have a name, email, and password
    Given the user wants to register
    When the user provides a name, email, and password
    Then the system must validate that the name, email, and password are provided

  Scenario: User password must be encrypted
    Given the user has provided a name, email, and password
    When the registration is completed
    Then the user's password must be encrypted before being saved in the database

  Scenario: Prevent registration of duplicate emails
    Given a user is already registered with the email "example@domain.com"
    When the user tries to register with the same email "example@domain.com"
    Then the system must prevent the registration
    And display a message informing that the email is already in use

  Scenario: Return success message after registration
    Given the user has provided valid name, email, and password
    When the registration is completed successfully
    Then the system must return a message stating that the user has been successfully registered

  Scenario: Return user data after registration
    Given the user has provided valid name, email, and password
    When the registration is completed successfully
    Then the system must return the registered user data, except for the password
