import 'phaser';

export default class Volleyball extends Phaser.Physics.Matter.Sprite {
  constructor (scene, x, y, spriteKey) {
    super(scene.matter.world, x, y, spriteKey);
    this.scene = scene;
    this.scene.add.existing(this);
    this.setScale(0.06);
    this.setCircle(35);
    this.setFrictionAir(0);
    // this.setFriction(0)
    this.setBounce(.5);
    this.body.restitution = 0.5
    // this.setAngularVelocity(2)
  }
}
