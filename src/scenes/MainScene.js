import { Scene } from 'phaser';

export default class MainScene extends Scene {
  constructor () {
    super('MainScene');
  }
  
  create () {
    this.scene.launch('BgScene');
    this.scene.launch('FgScene');
   }
}
