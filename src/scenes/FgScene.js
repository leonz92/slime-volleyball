import { Scene } from 'phaser';
import Volleyball from '../entity/Volleyball';
import Slime from '../entity/Slime';
import Net from '../entity/Net';

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
    this.load.atlas('net', 'assets/net.png', 'assets/net.json', {
      frameHeight: 300,
      frameWidth: 300
    })
  }

  create () {
    // Assets
    const slimeShape = this.cache.json.get('slime-shape')

    // World bounds
    this.matter.world.setBounds(0, 0, game.config.width, game.config.height - 20);

    // Player 1
    this.slime = new Slime(this, 200, 550, 'slime', 0, {
      shape: slimeShape.slime2,
      frictionStatic: 0
    });

    // Player 2
    this.slime2 = new Slime(this, 800, 550, 'slime', 0, {
      shape: slimeShape.slime2,
      frictionStatic: 0
    })
    this.slime2.flipX = true;

    // Volleyball
    this.volleyball = new Volleyball(this, 200, 0, 'volleyball');

    // Net
    this.net = new Net(this, game.config.width / 2, game.config.height - 94, 'net', 0, { shape: slimeShape.net })

    // Player controls
    this.cursors = this.input.keyboard.createCursorKeys();
    this.wasd = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D
    });
  }

  update () {
    this.slime2.update(this.cursors);
    this.slime.update(this.wasd);
  }
}
