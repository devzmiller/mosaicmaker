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

$(document).ready(function() {
  let currentColor = null;
  $(".color-buttons").on("click", "button", (event) => {
    currentColor = colors[$(event.target).attr("name")];

    $(".cells").on("mouseover", ".cell", (event) => {
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
        // let blob = new Blob(canvas, {type: "image/png"});

      // });
    });
    // on click, run ruby to screenshot the picture as an image.
    // open up a save file dialog box and let the user save image.
  });
});
