class Mosaic {

  constructor() {
    this.tiles = [];
  }

  addTile() {
    this.tiles.push(new Tile());
    console.log(this.tiles);
  }
}

window.Mosaic = Mosaic;
