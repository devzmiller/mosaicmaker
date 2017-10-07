const colors = {
  red: "#9b0a03",
  orange: "#ef681a",
  yellow: "#ffc73a",
  green: "#57752d",
  blue: "#325f89",
  purple: "#370c6b",
  brown: "#49371f",
  black: "#000000",
  white: "#ffffff"
}



// class Mosaic {
//   import Tile from "./tile.js";
//
//   constructor() {
//     this.tiles = [];
//   }
//
//   addTile() {
//     this.tiles.push(new Tile());
//     console.log(this.tiles);
//   }
// }



$(document).ready(function() {
  let currentColor = null;
  $(".color-buttons").on("click", "button", (event) => {
    currentColor = colors[$(event.target).attr("name")];

    $(".cells").on("mousedown", ".cell", (event) => {
      $(event.target).css("background-color", currentColor);
      $(".cells").on("mouseover", ".cell", (event) => {
        $(event.target).css("background-color", currentColor);
      });
    }).on("mouseup", () => {
      $(".cells").off("mouseover")
    })

    $(".cells").on("click", ".cell", (event) => {
      $(event.target).css("background-color", currentColor);
    });
  });

  $("button[name='reset-button']").on("click", (event) => {
    $(".cell").css("background-color", colors["white"]);
  });

  $("button[name='save-button']").on("click", (event) => {
    html2canvas($(".cells"), {
      onrendered: function(mosaic) {
        let blob = new Blob([mosaic], {type: "image/png"})
        mosaic.toBlob((blob) => {
          saveAs(blob, "mosaic.png");
        });
      }
    });
  });
});
