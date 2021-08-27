// import { Game } from 'phaser';
import 'phaser'
import LoadingScene from '../scenes/LoadingScene'
import config from '../config/config'

// eslint-disable-next-line no-undef
export default class Game extends Phaser.Game {
	constructor() {
		super(config)

		this.scene.add('LoadingScene', LoadingScene)

		this.scene.start('LoadingScene')
	}
}

window.onload = function () {
	window.game = new Game()
}
