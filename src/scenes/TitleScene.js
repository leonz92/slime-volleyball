import { Scene } from 'phaser';

export default class TitleScene extends Scene {
  constructor () {
    super('TitleScene');
  }

  preload () {
    this.load.image('beach', 'assets/beach.png');
    this.load.image('slimeDrip', 'assets/slimeDrip.png');
    this.load.image('startButton', 'assets/startButton.png');
    this.load.spritesheet('volleyball', '/assets/volley-ball.png', {
      frameWidth: 1125,
      frameHeight: 1125,
    });
  }

  create () {
    const screenCenterX =
			this.cameras.main.worldView.x + this.cameras.main.width / 2
		const screenCenterY =
      this.cameras.main.worldView.y + this.cameras.main.height / 2

    // BG
    this.add.image(screenCenterX, screenCenterY, 'beach').setOrigin(0.5);

    // Title
    const titleText = 'SLIME VOLLEYBALL '
    const titleStyle = {
			font: '85px Creepster',
			fill: 'rgba(95,255,3, 1)',
			align: 'center',
			stroke: 'black',
			strokeThickness: 8,
		}
    this.title = this.add.text(screenCenterX + 10, screenCenterY - 240, titleText, titleStyle).setOrigin(0.5);
    this.title.setShadow(8, 8, 'black', 2);

    // Logo
    this.slimeDrip = this.add.image(screenCenterX, screenCenterY, 'slimeDrip');
    this.ball = this.add.sprite(screenCenterX, screenCenterY - 66, 'volleyball').setScale(.17);

    // Start Button
    this.startButton = this.add.image(screenCenterX, screenCenterY + 225, 'startButton').setScale(2);
    this.startButton.setInteractive({ useHandCursor: true });
    this.startButton.on('pointerdown', () => {
      this.scene.switch('MainScene');
    });
  }
}
