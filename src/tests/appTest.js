const browserURL = "http://34.66.129.27:8080/monster-slayer";
module.exports = {
    'Test For User'(browser) {
        browser.url(browserURL)
        .waitForElementVisible('#player', "Player visible")
        .waitForElementVisible('#player-health', "Player health visible")
        .assert.containsText("#player", "YOU", "Player name set")
        .assert.containsText("#player-health", "100", "Player health set to 100")
    },
    'Test For Monster'(browser) {
        browser.url(browserURL)
        .waitForElementVisible('#monster', "Monster visible")
        .waitForElementVisible('#monster-health', "Monster health visible")
        .assert.containsText("#monster", "MONSTER", "Monster visible")
        .assert.containsText("#monster-health", "100", "Monster health set to 100")
    },
    'Test For Start'(browser) {
        browser.url(browserURL)
        .waitForElementVisible('#start-game', "Start button visible")
        .click('#start-game')
        .waitForElementVisible('#attack', "Attack button visible")
        .waitForElementVisible('#special-attack', "Special button visible")
        .waitForElementVisible('#heal', "Heal button visible")
        .waitForElementVisible('#give-up', "Give up button visible")
    },
    'Test For Message From Service'(browser) {
        browser.url(browserURL)
        .waitForElementVisible('#hello', "Message from Service visible")
        .assert.containsText("#hello", "Service Message: Hello World!", "Message recieved from service")

    }
}