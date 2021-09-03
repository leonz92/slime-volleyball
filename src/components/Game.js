import 'phaser';
import TitleScene from '../scenes/TitleScene';
import BgScene from '../scenes/BgScene';
import FgScene from '../scenes/FgScene';
import MainScene from '../scenes/MainScene';
import config from '../config/config';

export default class Game extends Phaser.Game {
	constructor() {
		super(config);
		this.scene.add('TitleScene', TitleScene);
		this.scene.add('MainScene', MainScene);
		this.scene.add('BgScene', BgScene);
		this.scene.add('FgScene', FgScene);
		this.scene.start('TitleScene');
	}
}

window.onload = function () {
	window.game = new Game();
}
