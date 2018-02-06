const page = require("./page");

const formPage = Object.create(page, {
  /**
   * define elements
   */
  title: {
    get: function() {
      return $("mat-toolbar.topbar span").getText();
    }
  },
  linkSignup: {
    get: function() {
      return $("article small a");
    }
  },

  submitButton: {
    get: function() {
      return $("#login button[type=submit]");
    }
  },

  /**
   * define or overwrite page methods
   */
  open: {
    value: function() {
      page.open.call(this, "dashboard");
    }
  },

  clickSignup: {
    value: function() {
      this.linkSignup.click();
    }
  },

  submit: {
    value: function() {
      this.submitButton.click();
    }
  }
});

module.exports = formPage;
