module.exports = {
    'Test Case'(browser) {
        browser.url('34.66.129.27:8080/monster-slayer')
        .waitForElementVisible('#player')
        .assert.containsText("#player", "YOU")
    }
}