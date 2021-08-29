import { Scene } from 'phaser';

export default class TitleScene extends Scene {
  constructor () {
    super('TitleScene');
  }

  preload () {
    // this.load.path = '/public/assets/';
    this.load.image('beach', '/assets/beach2.png');
  }

  create () {
    this.add.image(0, 0, 'beach').setOrigin(0).setScale(0.666)

    const titleText = 'SLIME VOLLEYBALL';
    const titleStyle = {
			font: '85px Creepster',
			fill: '#6cd124',
			align: 'center',
		}
    this.title = this.add.text(105,190, titleText, titleStyle)

  }
}
