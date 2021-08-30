// import { Game } from 'phaser';
import 'phaser';
import LoadingScene from '../scenes/LoadingScene';
import MainScene from '../scenes/MainScene';
import TitleScene from '../scenes/TitleScene';
import config from '../config/config';

// eslint-disable-next-line no-undef
export default class Game extends Phaser.Game {
	constructor() {
		super(config);

		// this.scene.add('TitleScene', TitleScene);

		// this.scene.start('TitleScene');
		this.scene.add('MainScene', MainScene)

		this.scene.start('MainScene')
	}
}

window.onload = function () {
	window.game = new Game()
}
