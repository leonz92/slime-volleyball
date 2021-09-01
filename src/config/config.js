export default {
  type: Phaser.AUTO,
  parent: 'App',
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
  }
}
