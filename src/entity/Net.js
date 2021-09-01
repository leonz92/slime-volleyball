import 'phaser';

export default class Net extends Phaser.Physics.Matter.Sprite {
  constructor (scene, x, y, spriteKey, frame, options) {
    super(scene.matter.world, x, y, spriteKey, frame, options);
    this.scene = scene;
    this.scene.add.existing(this);
    this.setStatic(true);
    this.setBounce(1);
  }
}
