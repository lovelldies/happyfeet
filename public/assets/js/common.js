jQuery( document ).ready(function() {
  // Show/Hide the overlay menu.
  $('#logo, #footermenulink').click(function () {
    $('#banner-nav-container').fadeToggle();
  });
  $('#close-nav').click(function () {
    $('#banner-nav-container').fadeOut();
  });
  $('img').bind('contextmenu', function(e) {
    return false;
  });
});