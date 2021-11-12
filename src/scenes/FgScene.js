import { Scene } from 'phaser';
import Volleyball from '../entity/Volleyball';
import Slime from '../entity/Slime';
import Net from '../entity/Net';
import Scoreboard from '../entity/Scoreboard';

export default class FgScene extends Scene {
	constructor() {
    super('FgScene')
    this.score1 = 0;
    this.score2 = 0;
	}

	preload() {
		this.load.atlas('slime', 'assets/slime3.png', 'assets/slime3.json');
		this.load.json('slime-shape', 'assets/slime-shape.json');
		this.load.spritesheet('volleyball', '/assets/volley-ball.png', {
			frameWidth: 1125,
			frameHeight: 1125,
		});
		this.load.atlas('net', 'assets/net.png', 'assets/net.json', {
			frameHeight: 300,
			frameWidth: 300,
		});
		this.load.spritesheet('scoreboard', 'assets/scoreboard.png', {
			frameWidth: 500,
			frameHeight: 75
		});
		this.load.image('resetButton', 'assets/resetButton.png', {
			frameWidth: 100,
			frameHeight: 50,
		})
	}

	create() {
		// Shape Config
		const slimeShape = this.cache.json.get('slime-shape');

		// World bounds
		this.matter.world.setBounds(
			0,
			0,
			game.config.width,
			game.config.height - 20
		);

		// Scoreboard
		this.scoreboard1 = new Scoreboard(this, 250, 50, 'scoreboard', 0);
		this.scoreboard2 = new Scoreboard(this, 750, 50, 'scoreboard', 0);
		this.scoreboard2.flipX = true;

		// Player 1
		this.slime = new Slime(this, 200, 550, 'slime', 0, {
			shape: slimeShape.slime2,
			frictionStatic: 0,
		});

		// Player 2
		this.slime2 = new Slime(this, 800, 550, 'slime', 0, {
			shape: slimeShape.slime2,
			frictionStatic: 0,
		});
		this.slime2.flipX = true;

		// Volleyball
		this.volleyball = new Volleyball(this, 200, 0, 'volleyball');

		// Net
		this.net = new Net(
			this,
			game.config.width / 2,
			game.config.height - 94,
			'net',
			0,
			{ shape: slimeShape.net }
		);

		// Player controls
		this.cursors = this.input.keyboard.createCursorKeys();
		this.wasd = this.input.keyboard.addKeys({
			up: Phaser.Input.Keyboard.KeyCodes.W,
			down: Phaser.Input.Keyboard.KeyCodes.S,
			left: Phaser.Input.Keyboard.KeyCodes.A,
			right: Phaser.Input.Keyboard.KeyCodes.D,
		});

		// Event Emitter
		const emitter = new Phaser.Events.EventEmitter();
		emitter.on('reset', () => {
			this.slime.resetSlime(200, 550);
			this.slime2.resetSlime(800, 550);
		});
		emitter.on('player1Scores', () => this.score1++);
		emitter.on('player2Scores', () => this.score2++);

		// Collisions
		const { bottom } = this.matter.world.walls;

		this.matter.world.on('collisionstart', (event, bodyA, bodyB) => {
			if (bodyB.label === 'Circle Body' && bodyA === bottom) {
				let pointGoesTo = this.volleyball.resetBall();
				emitter.emit('reset');
				if (pointGoesTo) emitter.emit('player1Scores');
				else emitter.emit('player2Scores');
			}
		});

		// Reset Button
		this.add.image(500, 50, 'resetButton')
			.setInteractive()
			.on('pointerdown', () => {
				this.score1 = 0;
				this.score2 = 0;
				this.scene.restart();
			})
	}

	update() {
		this.slime2.update(this.cursors);
		this.slime.update(this.wasd);
		this.scoreboard1.update(this.score1);
		this.scoreboard2.update(this.score2);
		if (this.score1 === 6 || this.score2 === 6) {
			let winner;
			if (this.score1 === 6) winner = 1;
			else winner = 2;
			this.volleyball.destroy();
			this.add.text(500, 150, `Player ${winner} wins!`, { fontSize: 24 }).setOrigin(.5);
		}
	}

}
