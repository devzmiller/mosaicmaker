class Tile {
  constructor() {
    this.currentColor = "rgb(255, 255, 255)";
  }

  changeColor(color) {
    this.currentColor = color;
  }

}

window.Tile = Tile;
