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
    this.title = this.add.text(game.config.width / 4, 190, titleText, titleStyle)
	}
}
