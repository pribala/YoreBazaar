var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("Yourebazaar", function() {
  // The default tests in mocha is 2 seconds.
  // Extending it to 30 seconds to have time to load the pages

  this.timeout(30000);
  it("should send user to the catalog page", function(done) {
    // ID for the login button.
    Nightmare({ show: true })
      .goto("https://infinite-hamlet-30446.herokuapp.com/")
      // Click the cart btn
      .click("a[href='/loginpage']")
      // Evaluate the title
      .evaluate(function() {
        return document.title;
      })
      // Asset the title is as expected
      .then(function(title) {
        expect(title).to.equal("Login Form");
        done();
      })
      .catch((error) => {
        console.error('gotologin', error);
      });
  });

  it("should present a link to members page after login", function(done) {
    new Nightmare({ show: true })
      .goto("https://infinite-hamlet-30446.herokuapp.com/loginpage")
      // Enter username.
      .type("#email-input", "email")
      // Enter password.
      .type("#password-input", "password")
      // Click the login button
      .click("submit")
      // Evaluate the following selector
      .evaluate(function() {
        // Assert the "learn" link can be found
        return document.querySelector("a[href='/profile/email']");
      })
      .then(function(link) {
        expect(link).to.not.equal(undefined);
        done();
      }).catch((error) => {
        console.error('loginerror', error);
      });
  });
  it("should present a link to members page after signup", function(done) {
    new Nightmare({ show: true })
      .goto("https://infinite-hamlet-30446.herokuapp.com/signuppage")
      // Enter username.
      .type("#email-input", "email")
      // Enter password.
      .type("#password-input", "password")
      // Click the login button
      .click("submit")
      // Evaluate the following selector
      .evaluate(function() {
        // Assert the "learn" link can be found
        return document.querySelector("a[href='/profile/email']");
      })
      .then(function(link) {
        expect(link).to.not.equal(undefined);
        done();
      }).catch((error) => {
        console.error('signup', error);
      });
  });
  it("should present a link to shopping page after clicking user", function(done) {
    new Nightmare({ show: true })
      .goto("https://infinite-hamlet-30446.herokuapp.com/profiles/email")
      .click(".add-profile")
      // Evaluate the following selector
      .evaluate(function() {
        // Assert the "learn" link can be found
        return document.querySelector("a[href='/profile/email']");
      })
      .then(function(link) {
        expect(link).to.not.equal(undefined);
        done();
      }).catch((error) => {
        console.error('signup', error);
      });
  });

  // it("should throw an error for fun", function() {
  //   throw new Error("Failed on purpose, just to make the Mocha output more interesting.");
  // });
});