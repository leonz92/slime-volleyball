import 'phaser';

export default class Volleyball extends Phaser.Physics.Matter.Sprite {
  constructor (scene, x, y, spriteKey) {
    super(scene.matter.world, x, y, spriteKey);
    this.scene = scene;
    this.scene.add.existing(this);
    this.setScale(0.04);
    this.setCircle(23);
    this.setFrictionAir(0.008);
    this.setFriction(0)
    this.setBounce(.9);
  }
}
