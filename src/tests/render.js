module.exports = {
    tags: ['monster-slayer'],
    'Application Renders'(browser) {
        browser
        .url('http://localhost:8080')
        .waitForElementVisible('body')
        browser.end();
    }
}