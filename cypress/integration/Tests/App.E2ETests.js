/**
 * Cypress test suite for end-to-end tests. Currently covers login, signup page rendering, home and dashboard pages.
 * Does not make any new accounts or tasks to prevent database from being polluted.
 * All tests are done in a single 'session' to prevent making multiple calls to the database. Helps emulate a user's
 * behaviour more accurately too.
 *
 * Test Account details : Name: Test Account
 * Email: Test@test.com, password: TestAccount
 */

describe("End to End Test", () => {
  // Login/Signup tests
  it("successfully loads Login page", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "Welcome");
  });
  it("successfully fails a login", () => {
    cy.get("input[type=email]").type("Incorrect@no.com");
    cy.get("input[type=password]").type("wrong");
    cy.get(".button-container").should("contain", "Login").click();
    // Waiting just to make sure login failed
    cy.wait(2000);
    cy.get("h1").should("contain", "Welcome");
  });
  it("successfully loads Signup page", () => {
    cy.get("a").should("contain", "Sign").click();
    cy.url().should("include", "/signup");
    cy.get("h1").should("contain", "Sign Up");

    // Just testing input, but don't want to pollute database so we don't create a new account
    cy.get("input[type=firstName]").type("Testing");
    cy.get("input[type=lastName]").type("Testing2");
    cy.get("input[type=email]").type("Testing3");
    cy.get("input[type=password]").type("Testing4");

    cy.get("a").should("contain", "Log").click();
  });
  // NOTE: IF DATABASE HAS BEEN CLEARED/TEST ACCOUNT REMOVED FROM DATABASE, TESTS WILL FAIL
  // sometimes randomly has issues with logging in, so will retry at least twice
  it(
    "successfully logs in and loads Home page",
    { retries: { runMode: 2, openMode: 2 } },
    () => {
      cy.get("input[type=email]").type("Test@Test.com");
      cy.get("input[type=password]").type("TestAccount");
      cy.get(".button-container").should("contain", "Login").click();
      cy.url().should("include", "/home");
      cy.get("h1").should("contain", "Test");
    }
  );

  // Dashboard tests
  it("loads Dashboard Page", () => {
    // force true required to bypass 'visibility' issues, otherwise tester can't find it
    cy.get("[data-testid=nav-dashboard-icon]").click({ force: true });
    cy.url().should("include", "/dashboard");
    cy.get("h1").should("contain", "Stats:");
  });
  // NOTE: IF DATABASE HAS BEEN CLEARED/TEST ACCOUNT REMOVED FROM DATABASE, TEST WILL FAIL
  it("sees a Task on the Dashboard", () => {
    cy.get(".task-list").should("contain", "Test Task");
    cy.contains("Second Task").click();
    cy.get(".current-task").should("contain", "Second");
    cy.get(".current-task-notes__header > #Layer_1").click();
    cy.contains("This is a second test");
    cy.get(".current-task-notes__header > #Layer_1").click();
    cy.contains("Test Task").click();
    cy.get(".current-task").should("contain", "Test");
    cy.get(".current-task-notes__header > #Layer_1").click();
    cy.contains("This is a test task");

    // Making sure the add task function renders, but we do not add a task to prevent polluting the database
    cy.get(".add-button-container").click();
    cy.contains("End Date");
    cy.get(".icon-button-container").click();
  });

  it("sets and starts a custom timer", () => {
    cy.get(".current-task__icon-button-container > #Capa_1").click({
      force: true,
    });
    cy.contains("Work");
    // Sets up timer to test value of Work: 00:10, Break: 01:30
    cy.get(
      ":nth-child(1) > .timer-config__interval-input > :nth-child(1) > .text-input__input--centered"
    )
      .clear()
      .type("0");
    cy.get(
      ":nth-child(1) > .timer-config__interval-input > :nth-child(3) > .text-input__input--centered"
    )
      .clear()
      .type("10");
    cy.get(
      ":nth-child(2) > .timer-config__interval-input > :nth-child(1) > .text-input__input--centered"
    )
      .clear()
      .type("1");
    cy.get(
      ":nth-child(2) > .timer-config__interval-input > :nth-child(3) > .text-input__input--centered"
    )
      .clear()
      .type("30");
    cy.get(".timer-config__checkbox").click();
    cy.get(".current-task__button-container").click();
    // Checks if timer starts at correct point, then waits 2 seconds and pauses
    cy.get(".timer-text").should("contain", "00:10");
    cy.get(".timerTitle").should("contain", "Work");
    cy.wait(2000);
    cy.get(".button-align > :nth-child(1) > #Layer_1").click({ force: true });
    cy.wait(2000);
    // Checks if no time has passed while paused
    cy.get(".timer-text").should("contain", "00:08");
    cy.get(".button-align > :nth-child(1) > #Layer_1").click({ force: true });
    cy.wait(8000);
    // Checks if we're in a 'break' now
    cy.get(".timer-text").should("contain", "01:");
    cy.get(".timerTitle").should("contain", "Break");

    // Pauses timer and closes full screen
    cy.get(".button-align > :nth-child(1) > #Layer_1").click({ force: true });
    cy.get(".button-align > :nth-child(2) > #Capa_1").click({ force: true });
  });

  it("rolls the timer over correctly", () => {
    // Refreshes dashboard page
    cy.get("[data-testid=nav-home-icon]").click({ force: true });
    cy.get("[data-testid=nav-dashboard-icon]").click({ force: true });
    cy.contains("Second Task").click();
    // Sets up timer to new test values of 00:10 and 00:05
    cy.get(".current-task__icon-button-container > #Capa_1").click({
      force: true,
    });
    cy.get(
      ":nth-child(1) > .timer-config__interval-input > :nth-child(1) > .text-input__input--centered"
    )
      .clear()
      .type("0");
    cy.get(
      ":nth-child(1) > .timer-config__interval-input > :nth-child(3) > .text-input__input--centered"
    )
      .clear()
      .type("10");
    cy.get(
      ":nth-child(2) > .timer-config__interval-input > :nth-child(1) > .text-input__input--centered"
    )
      .clear()
      .type("0");
    cy.get(
      ":nth-child(2) > .timer-config__interval-input > :nth-child(3) > .text-input__input--centered"
    )
      .clear()
      .type("5");
    cy.get(".current-task__button-container").click();
    cy.wait(10000);
    cy.get(".timer-text").should("contain", "00:05");
    cy.get(".timerTitle").should("contain", "Break");
    cy.wait(5000);
    cy.get(".timerTitle").should("contain", "Work");
    cy.get(".timer-text").should("contain", "00:10");
  });

  // Taskboard tests (do tomorrow)
  /*
    it("loads Taskboard page", () => {
      cy.get("[data-testid=nav-taskboard-icon]").click({ force: true });
    });
  */
  // Home page tests
  it("loads a task on the Home page", () => {
    cy.get("[data-testid=nav-home-icon]").click({ force: true });
    cy.contains("Second Task");
  });

  it("uses dashboard and task buttons as links", () => {
    cy.contains("Second Task").click();
    cy.url().should("include", "/dashboard");
    cy.get(".current-task").should("contain", "Second");
    cy.get("[data-testid=nav-home-icon]").click({ force: true });

    cy.contains("Dashboard").click({ force: true });
    cy.url().should("include", "/dashboard");
  });
  // Log out Test
  it("logs out successfully", () => {
    cy.get(".navbar__useravatar").click();
    cy.get("[data-testid=nav-logout-icon]").click();
    cy.contains("Welcome");
  });
});
