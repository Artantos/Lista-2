$(document).ready(function () {
  // 1. Zamiana kolorystyki strony
  $("#toggle-theme").click(function () {
    $("body").toggleClass("night-mode day-mode");
  });

  // 2. Pobieranie danych JSON z API
  $("#fetch-dogs").click(function () {
    $.getJSON("https://dog.ceo/api/breeds/image/random/6", function (data) {
      if (data.status === "success") {
        $("#dog-images").empty();
        data.message.forEach(function (url) {
          $("#dog-images").append(`
            <div class="col-sm-6 col-md-4 mb-3">
              <img src="${url}" alt="Dog" class="img-fluid rounded shadow">
            </div>
          `);
        });
      } else {
        $("#dog-images").html("<p>Failed to fetch dog images.</p>");
      }
    });
  });

  // 3. Ukrywanie/wyświetlanie na zdarzenie
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $("#menu-bar").fadeOut();
      $("#dropdown-container").fadeOut();
    } else {
      $("#menu-bar").fadeIn();
      $("#dropdown-container").fadeIn();
    }
  });

  // 4. Scroll to top and bottom functionality
  $("#scroll-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  $("#scroll-bottom").click(function () {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  });

  // 5. Wyłączenie podążania za kotwicą w rozwijanym menu
  $("#dropdown-container .dropdown-item").click(function (e) {
    e.preventDefault(); // Wyłączenie domyślnego zachowania przeglądarki
    const target = $(this).attr("href"); // Pobranie docelowego ID
    // Dynamiczne ładowanie zawartości (opcjonalne)
    if (target) {
      $("#content").load(target.substring(1) + "_sub.html");
    }
  });
});
