import Phaser from "phaser";

export const World: Phaser.Types.Scenes.CreateSceneFromObjectConfig = {
  preload(this: any) {
    this.load.setBaseURL("https://labs.phaser.io");
    this.load.image("sky", "assets/skies/space3.png");
  },

  create(this: any) {
    // this.add.image(window.innerWidth / 2, window.innerHeight / 2, "sky");
  },
};
