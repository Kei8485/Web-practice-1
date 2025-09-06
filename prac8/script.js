$(document).ready(function () {
  $(".body__darkmode-container").click(function () {
    // darkMode
    let darkmode = $(".dark-mode");
    let logo = $(".logo");

    $("body").toggleClass("darkmode");
    $("body").toggleClass("theme-transition");

    if ($("body").hasClass("darkmode")) {
      darkmode.attr(
        "src",
        "browser-extensions-manager-ui-main/browser-extensions-manager-ui-main/assets/images/icon-sun.svg"
      );
      logo.attr(
        "src",
        "browser-extensions-manager-ui-main/browser-extensions-manager-ui-main/assets/images/webPractice img.png"
      );
    } else {
      darkmode.attr(
        "src",
        "browser-extensions-manager-ui-main/browser-extensions-manager-ui-main/assets/images/icon-moon.svg"
      );
      logo.attr(
        "src",
        "browser-extensions-manager-ui-main/browser-extensions-manager-ui-main/assets/images/logo.svg"
      );
    }
  });

  $(".switch input").on("change", function () {
    $(this).closest(".switch").toggleClass("switch-on", this.checked);
  });

  $(".btn").click(function () {
    $(".btn").removeClass("btn--active");
    $(this).addClass("btn--active");

    if ($(this).hasClass("active-click-btn")) filterCards("active");
    else if ($(this).hasClass("inactive-btn")) filterCards("inactive");
    else if ($(this).hasClass("all-card-btn")) filterCards("all");
  });

  function filterCards(type) {
    $(".card").each(function () {
      let checked = $(this).find(".switch input").is(":checked");

      if (type === "active") {
        $(this).toggle(checked);
      } else if (type === "inactive") {
        $(this).toggle(!checked);
      } else {
        $(this).show();
      }
    });
  }
});
