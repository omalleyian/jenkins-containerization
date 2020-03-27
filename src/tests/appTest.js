module.exports = {
    'Test Case'(browser) {
        browser.url('http://localhost:8081')
        .waitForElementVisible('.text-center')
        .assert.containsText(".text-center", "YOU")
    }
}