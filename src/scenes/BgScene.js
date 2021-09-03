import { Scene } from 'phaser';

export default class BgScene extends Scene {
	constructor() {
		super('BgScene')
	}
	preload() {
    this.load.image('beach2', '/assets/beach2.png');
  }

	create() {
    const screenCenterX =
      this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY =
      this.cameras.main.worldView.y + this.cameras.main.height / 2;

    this.add.image(screenCenterX, screenCenterY, 'beach2').setOrigin(0.5).setScale(2 / 3);

	}
}
