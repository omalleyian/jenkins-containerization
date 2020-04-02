module.exports = {
    beforeEach: browser => {
      browser.page.monsterSlayer()
        .navigate()
        .waitForElementVisible('body', 3000)
        .windowMaximize()
    },
    afterEach: browser => {
        browser.end();
    },
  
    'Check visibility of initial components': browser => {
      browser.page.monsterSlayer()
        .assert.visible('@youHeader', 'You header is visible.')
        .assert.visible('@youHealth', 'You health bar is visible.')
        .assert.visible('@monsterHealth', 'Monster health bar is visible.')
        .assert.visible('@yourScoreSection', 'Your score section is visible.')
        .assert.visible('@monsterHeader', 'Monster header is visible.')
        .assert.visible('@gameStartSection', 'Start game section is visible.')
        .assert.visible('@startGameBtn', 'Start game button is visible.')
    },

    'Check visibility of move options': browser => {
        browser.page.monsterSlayer()
        .click('@startGameBtn')
        .assert.visible('@gameScoreSection', 'The game score section is visible.')
        .assert.visible('@attackBtn', 'Attack button is visible.')
        .assert.visible('@specialAttackBtn', 'Special Attack button is visible.')
        .assert.visible('@healBtn', 'Heal button is visible.')
        .assert.visible('@giveUpBtn', 'Give-up button is visible.')
    },

    'Simulate a generic attack': browser => {
      browser.page.monsterSlayer()
      .click('@startGameBtn')
      .waitForElementVisible('@attackBtn', 1000)
      .click('@attackBtn')
      .assert.visible('@rowLog', 'Row log is visible.')
      .assert.visible('@playerTurn', 'Player turn is visible')
      .assert.visible('@monsterTurn', 'Monster turn is visible.')
    }
  };