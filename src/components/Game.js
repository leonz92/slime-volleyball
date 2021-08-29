// import { Game } from 'phaser';
import 'phaser';
import LoadingScene from '../scenes/LoadingScene';
import TitleScene from '../scenes/TitleScene';
import config from '../config/config';

// eslint-disable-next-line no-undef
export default class Game extends Phaser.Game {
	constructor() {
		super(config);

		this.scene.add('TitleScene', TitleScene);

		this.scene.start('TitleScene');
	}
}

window.onload = function () {
	window.game = new Game()
}
