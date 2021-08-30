import 'phaser';

export default class Volleyball extends Phaser.Physics.Matter.Sprite {
  constructor (scene, x, y, spriteKey) {
    super(scene.matter.world, x, y, spriteKey);
    this.scene = scene;
    this.scene.add.existing(this);
    this.setCircle(64);
    this.setScale(0.5);
  }
}
