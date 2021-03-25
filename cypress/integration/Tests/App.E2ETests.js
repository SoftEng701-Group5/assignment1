/**
 * Cypress test suite for end-to-end tests. Currently covers login, signup page rendering, home and dashboard pages.
 * Does not make any new accounts or tasks to prevent database from being polluted.
 * All tests are done in a single 'session' to prevent making multiple calls to the database. Helps emulate a user's
 * behaviour more accurately too.
 *
 * Test Account details : Name: Test Account
 * Email: Test@test.com, password: TestAccount
 */
