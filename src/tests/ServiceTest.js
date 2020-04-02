module.exports = {
    '@tags': ['service'],
    beforeEach: browser => {
      browser.page.servicePage()
        .navigate()
        .waitForElementVisible('body', 3000)
    },
    afterEach: browser => {
        browser.end();
    },

    'Test message from service': browser => {
      const serviceMessageText = 'Service Message: Hello World!'
      browser.page.servicePage()
      .waitForElementVisible('@serviceMessage', 'Message from service is visible')
      .assert.containsText('@serviceMessage', serviceMessageText, 'Service message contains correct text')
    }
  };