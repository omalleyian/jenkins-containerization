module.exports = {
    beforeEach: browser => {
      browser.page.monsterSlayer()
        .navigate()
        .waitForElementVisible('body', 3000)
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

        .assert.containsText('@youHeader', 'YOU', 'The player header is YOU.')
        .assert.containsText('@monsterHeader', 'MONSTER', 'The monster header is MONSTER.')
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

      .assert.containsText('@playerTurn', 'PLAYER HIT', 'Player hit recorded in log.')
      .assert.containsText('@monsterTurn', 'MONSTER HIT', 'Monster hit recorded in log.')
      .assert.cssProperty('@monsterTurn', 'color', 'rgb(255, 0, 0)', 'The monster hit recorded in the log is red.')
      .assert.cssProperty('@playerTurn', 'color', 'rgb(0, 0, 255)', 'The player hit recorded in the log is blue.')
    },

    'Count the total numbers of entries in the logs': browser => {
      browser.page.monsterSlayer()
      .click('@startGameBtn')
      .waitForElementVisible('@attackBtn', 1000)
      .click('@attackBtn')
      browser.elements('css selector', 'ul li', result => {
        browser.assert.equal(result.value.length, 2, 'The log has two entries, one for monster, and one for player.');
      });
    }
  };