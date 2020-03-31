module.exports = {
    'Test Case'(browser) {
        browser.url('http://34.66.129.27:8080/monster-slayer')
        .waitForElementVisible('.text-center')
        .assert.containsText(".text-center", "YOU")
        .end();
    }
}