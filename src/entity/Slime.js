import 'phaser';

export default class Slime extends Phaser.Physics.Matter.Sprite {
	constructor(scene, x, y, spriteKey, frame, options) {
		super(scene.matter.world, x, y, spriteKey, frame, options)
		this.scene = scene
		this.scene.add.existing(this)
    this.setScale(0.5)
    // this.setAngularVelocity(0)
    // this.body.inertia = Infinity;
    this.setFixedRotation()
	}

	update(cursors) {
		this.updateMovement(cursors)
	}

	updateMovement(cursors) {
		if (cursors.left.isDown) {
			this.setVelocityX(-10)
		} else if (cursors.right.isDown) {
			this.setVelocityX(10)
    } else if (cursors.up.isDown) {
      this.setVelocityY(-10)
    } else {
			this.setVelocityX(0)
		}
	}
}
