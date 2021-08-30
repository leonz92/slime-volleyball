import { Scene } from 'phaser';
import Volleyball from '../entity/Volleyball';
import Slime from '../entity/Slime';

export default class MainScene extends Scene {
  constructor () {
    super('MainScene');
  }

  preload () {
    this.load.atlas('slime', 'assets/slime3.png', 'assets/slime3.json');
    this.load.json('slime-shape', 'assets/slime-shape.json');
    this.load.spritesheet('volleyball', '/assets/volleyball3.png', {
      frameWidth: 128,
      frameHeight: 128,
    });
  }

  create () {
    const slimeShape = this.cache.json.get('slime-shape');

    this.matter.world.setBounds(0, 0, game.config.width, game.config.height);

    this.slime = new Slime(this, 200, 200, 'slime', 0, {shape: slimeShape.slime2})

    this.volleyball = new Volleyball(this, 200, 0, 'volleyball');
  }
}
