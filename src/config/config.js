export default {
  type: Phaser.AUTO,
  parent: 'App',
  width: 800,
  height: 600,
  physics: {
    default: 'matter',
    matter: {
      gravity: { y: 2 },
      debug: true
    }
  },
  render: {
    pixelArt: true,
  }
}
