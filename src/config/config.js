import PhaserMatterCollisionPlugin from 'phaser-matter-collision-plugin';

export default {
	type: Phaser.AUTO,
	width: 1000,
	height: 600,
	physics: {
		default: 'matter',
		matter: {
			gravity: { y: 0.8 },
			debug: true
		},
	},
	render: {
		pixelArt: true,
	},
	scale: {
		parent: 'game_instance',
		expandParent: true,
		mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
		max: {
			width: 1000,
			height: 600,
		},
	},
	plugins: {
		scene: [
			{
				plugin: PhaserMatterCollisionPlugin, // The plugin class
				key: 'matterCollision', // Where to store in Scene.Systems, e.g. scene.sys.matterCollision
				mapping: 'matterCollision', // Where to store in the Scene, e.g. scene.matterCollision

				// Note! If you are including the library via the CDN script tag, the plugin
				// line should be:
				// plugin: PhaserMatterCollisionPlugin.default
			},
		],
	},
}
