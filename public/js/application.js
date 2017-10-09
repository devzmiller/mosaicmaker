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
  $("#create-user-link").on("click", (event) => {
    event.preventDefault();
    const url = "/users/new"
    $.ajax({
      url
    }).done((response) => {
      $("#create-user-link").replaceWith(response);
    });
  });

  $(".menu-wrapper").on("submit", ".new-user", (event) => {
    event.preventDefault();
    const data = $(event.target).serialize();
    $.ajax({
      url: "/users",
      method: "POST",
      data
    }).done((response) => {
      console.log(response);
    });
  });

  $(".menu-wrapper").on("click", "#login-link", (event) => {
    event.preventDefault();
    const url = "/sessions/new"
    $.ajax({
      url
    }).done((response) => {
      $("#login-link").replaceWith(response);
    });
  });

  $(".menu-wrapper").on("submit", ".new-session-form", (event) => {
    event.preventDefault();
    const data = $(event.target).serialize();
    $.ajax({
      url: "/sessions",
      method: "POST",
      data
    }).done((response) => {
      if (response === "Invalid username or password") {
        $(".login-div").append(response);
      } else {
        $(".login-div").hide();
        $("#create-user-link").hide();
      };
    });
  });

  let currentColor = null;
  $(".color-buttons").on("click", "button", (event) => {
    currentColor = colors[$(event.target).attr("name")];

    $(".cells").on("mousedown", () => {
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
