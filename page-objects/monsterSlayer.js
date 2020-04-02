module.exports = { 
    url: function() {
        return this.api.launchUrl;
    },
    elements: {
        yourScoreSection: '#you-score-section',
        youHeader: '#you-header',
        youHealth: '#player-health',
        monsterHealth: '#monster-health',
        monsterHeader: '#monster-header',
        gameStartSection: '#game-start-section',
        startGameBtn: '#start-game',
        attackBtn: '#attack',
        specialAttackBtn: '#special-attack',
        giveUpBtn: '#give-up',
        healBtn: '#heal',
        gameScoreSection: '#game-score-section',
        rowLog: '#row-log',
        playerTurn: '.player-turn',
        monsterTurn: '.monster-turn'
    }
}