export default {
  type: Phaser.AUTO,
  width: 1000,
  height: 600,
  physics: {
    default: 'matter',
    matter: {
      gravity: { y: .8 },
      // debug: true
    }
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
      height: 600
    }
  }
}
