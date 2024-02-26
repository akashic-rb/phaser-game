import { Scene } from "phaser";

class Char extends Scene {
  rect;
  keys;
  velocity = 5;

  preload() {
    this.keys = this.input.keyboard!.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.UP,
      down: Phaser.Input.Keyboard.KeyCodes.DOWN,
      left: Phaser.Input.Keyboard.KeyCodes.LEFT,
      right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
    });
  }
  update() {
    this.handleMoving();
  }

  create() {
    // top wall
    this.add.rectangle(window.innerWidth / 2, 0, window.innerWidth, 10, 0xfff);
    // right wall
    this.add.rectangle(
      window.innerWidth,
      window.innerHeight / 2,
      10,
      window.innerHeight,
      0xfff
    );
    // bottom wall
    this.add.rectangle(
      window.innerWidth / 2,
      window.innerHeight,
      window.innerWidth,
      10,
      0xfff
    );
    // left wall
    this.add.rectangle(
      0,
      window.innerHeight / 2,
      10,
      window.innerHeight,
      0xfff
    );

    this.rect = this.add.rectangle(50, 50, 10, 10, 0xffffff);
  }

  handleMoving() {
    if (this.keys.right?.isDown) {
      if (this.rect.x >= window.innerWidth - 50) return;
      this.rect.x += this.velocity;
    }
    if (this.keys.left?.isDown) {
      this.rect.x -= this.velocity;
    }
    if (this.keys.up?.isDown) {
      this.rect.y -= this.velocity;
    }
    if (this.keys.down?.isDown) {
      this.rect.y += this.velocity;
    }
  }
}

export default Char;
