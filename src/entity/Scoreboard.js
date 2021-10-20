import 'phaser';

export default class Scoreboard extends Phaser.GameObjects.Sprite {
  constructor (scene, x, y, spriteKey, frame, options) {
    super(scene, x, y, spriteKey, frame, options);
    this.scene = scene;
    this.scene.add.existing(this);
  }

  update (score) {
    this.updateFrame(score);
  }

  updateFrame (score) {
    this.setFrame(score);
  }
}
