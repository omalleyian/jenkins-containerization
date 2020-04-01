//const axios = require('axios').default;
import axios from 'axios';
export default {
    data: function() {
        return {
			serviceResult: "Not Connected",
            gameStart: false,
            health: 100,
            monsterHealth: 100,
            playerHealthBar: {
                width: '100%',
            },
            monsterHealthBar: {
                width: '100%',
            }, 
            movesList: []
        };
    },
	mounted() {
        axios.get(`http://35.233.154.181:8080/dark-service/hello`)
        .then(response => {
          this.serviceResult = response.data
        })
        .catch(e => {
          this.errors.push(e)
		})
    },
    methods: {
		startGame: function() {
			this.gameStart = true;
			this.movesList = [];
			this.health = 100;
			this.monsterHealth = 100;
		},
		endGame: function(reason) {
			this.gameStart = false;
			return alert(reason);
		},
		attack: function() {
			let attack = Math.random() * 10;
			attack = Math.round(attack);
			this.monsterHealth -= attack;
			this.movesList.unshift({character: 'player', move: 'PLAYER HIT THE MONSTER FOR ' + attack + ' HP'})
			this.monsterAttack();
		},
		specialAttack: function() {
			let specialAttack = Math.random() * 15;
			specialAttack = Math.round(specialAttack);
			this.monsterHealth -= specialAttack;
			this.movesList.unshift({character: 'player', move: 'PLAYER HIT THE MONSTER FOR ' + specialAttack + ' HP'})
			this.monsterAttack();
		},
		heal: function() {
			let hp = '';
			if(this.health <= 80) {
				hp = 20;
			}
			else {
				hp = 100 - this.health;
			}
			this.health += hp;

			this.movesList.unshift({character: 'player', move: 'PLAYER HEALED FOR ' + hp + ' HP'})
			this.monsterAttack();
		},
		monsterAttack: function() {
			let attack = Math.random() * 20;
			attack = Math.round(attack);
			this.health -= attack;
			this.movesList.unshift({character: 'monster', move: 'MONSTER HIT THE PLAYER FOR ' + attack + ' HP'})
		}
	},
	watch: {
		health: function() {
			this.playerHealthBar.width = this.health + '%';
			if (this.health <= 0)
				this.endGame("Defeat!");
		},
		monsterHealth: function() {
			this.monsterHealthBar.width = this.monsterHealth + '%';
			if (this.monsterHealth <=0)
				this.endGame("Victory!");
		}
	}
}
