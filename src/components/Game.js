import 'phaser';
import LoadingScene from '../scenes/LoadingScene';
import MainScene from '../scenes/MainScene';
import TitleScene from '../scenes/TitleScene';
import FgScene from '../scenes/FgScene';
import config from '../config/config';

export default class Game extends Phaser.Game {
	constructor() {
		super(config);
		this.scene.add('MainScene', MainScene)
    this.scene.add('FgScene', FgScene)
		this.scene.start('MainScene')
	}
}

window.onload = function () {
	window.game = new Game();
}
