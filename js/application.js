const colors = {
  red: "#9b0a03",
  orange: "#ef681a",
  yellow: "#ffc73a",
  green: "#57752d",
  blue: "#325f89",
  purple: "#370c6b",
  brown: "#49371f",
  black: "#000000"
}

$(document).ready(function() {
  $(".color-buttons").on("click", "button", (event) => {
    let currentColor = colors[$(event.target).attr("name")];
  });
});
