$(document).ready(function() {
  $("button#light-button").click(function() {
    $("body").removeClass();
    $("body").addClass("light-mode");
  });
  $("button#dark-button").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-mode");
  });
});