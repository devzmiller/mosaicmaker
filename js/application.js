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

});
