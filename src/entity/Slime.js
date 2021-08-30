import 'phaser';

export default class Slime extends Phaser.Physics.Matter.Sprite {
	constructor(scene, x, y, spriteKey, frame, options) {
    super(scene.matter.world, x, y, spriteKey, frame, options);
    this.scene = scene;
    this.scene.add.existing(this);
    this.setScale(0.5);
	}
}
