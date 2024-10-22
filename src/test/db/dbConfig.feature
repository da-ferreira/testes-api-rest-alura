Feature: Database connection test and retrieve author

Scenario: Connect to the database and retrieve the registered author
  Given I am connected to the database
  When I query the "autores" table
  Then the system should return the registered author's name
