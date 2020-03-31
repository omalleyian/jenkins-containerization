module.exports = {
    'Test Case'(browser) {
        browser.url('http://localhost:8080')
        .waitForElementVisible('.text-center')
        .assert.containsText(".text-center", "YOU")
        .end();
    }
}