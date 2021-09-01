import { Scene } from 'phaser';

export default class MainScene extends Scene {
	constructor() {
		super('MainScene')
	}
	preload() {
		this.load.image('beach', '/assets/beach2.png')
  }

	create() {
    this.scene.launch('FgScene')
    this.add.image(0, 0, 'beach').setOrigin(0).setScale(0.666)

    const titleText = 'SLIME VOLLEYBALL'
    const titleStyle = {
      font: '85px Creepster',
      fill: '#6cd124',
      align: 'center',
    }
    const screenCenterX =
      this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY =
      this.cameras.main.worldView.y + this.cameras.main.height / 2;

    this.title = this.add.text(screenCenterX, screenCenterY - 140, titleText, titleStyle).setOrigin(0.5);
	}
}
