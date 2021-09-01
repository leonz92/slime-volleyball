import { Scene } from 'phaser';
import Volleyball from '../entity/Volleyball';
import Slime from '../entity/Slime';

export default class FgScene extends Scene {
  constructor () {
    super('FgScene');
  }

  preload () {
    this.load.atlas('slime', 'assets/slime3.png', 'assets/slime3.json');
    this.load.json('slime-shape', 'assets/slime-shape.json');
    this.load.spritesheet('volleyball', '/assets/volley-ball.png', {
      frameWidth: 1125,
      frameHeight: 1125,
    });
  }

  create () {
    const slimeShape = this.cache.json.get('slime-shape');

    this.matter.world.setBounds(0, 0, game.config.width, game.config.height - 20);

    this.slime = new Slime(this, 200, 550, 'slime', 0, {
      shape: slimeShape.slime2,
      restitution: 0.5,
      frictionStatic: 0
    });
    this.volleyball = new Volleyball(this, 200, 0, 'volleyball');

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update () {
    this.slime.update(this.cursors);
  }
}
