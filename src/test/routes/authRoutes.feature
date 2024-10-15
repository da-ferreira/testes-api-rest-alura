Feature: User Login
  As a user authentication system
  I want to validate the login process
  So that users can authenticate correctly

  Scenario: Login must require email and password
    Given the user wants to log in
    When the user provides an email and password
    Then the system must validate that both email and password are provided

  Scenario: Login must validate if the user is registered
    Given the user has provided an email and password
    When the user is not registered in the system
    Then the system must deny the login attempt
    And display a message stating that the user is not registered

  Scenario: Login must validate incorrect email or password
    Given a user is registered in the system
    When the user provides an incorrect email or password
    Then the system must deny the login attempt
    And display a message stating that the email or password is incorrect

  Scenario: Login must return an accessToken on successful authentication
    Given the user has provided a valid email and password
    When the login is successful
    Then the system must return an accessToken
