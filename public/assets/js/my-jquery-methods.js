$(document).ready(function () {
  "use strict";
  moveToHome();
});

function moveToHome() {
  const $menuLogo = $("#menu-logo");

  $menuLogo.on("click", () => {
    $("#main > section.active, #menu > li a").removeClass("active");
    $("#menu > li:first-child a").addClass("active");
    $("#main > section#hero").addClass("active");
  });
}
