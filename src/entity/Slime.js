import 'phaser';

export default class Slime extends Phaser.Physics.Matter.Sprite {
	constructor(scene, x, y, spriteKey, frame, options) {
    super(scene.matter.world, x, y, spriteKey, frame, options);
    this.scene = scene;
    this.scene.add.existing(this);
    this.setScale(0.3);
    this.setFixedRotation();
	}

	update(cursors) {
		this.updateMovement(cursors)
	}

  updateMovement (cursors) {
    if (cursors.left.isDown && cursors.up.isDown) {
      this.setVelocity(-8, -8);
    } else if (cursors.right.isDown && cursors.up.isDown) {
      this.setVelocity(8, -8);
    } else if (cursors.left.isDown) {
      this.setVelocityX(-8);
    } else if (cursors.right.isDown) {
      this.setVelocityX(8);
    } else if (cursors.up.isDown) {
      this.setVelocityY(-8);
    } else if (cursors.down.isDown) {
      this.setVelocityY(30);
    } else {
			this.setVelocityX(0)
		}
	}
}
