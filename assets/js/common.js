jQuery( document ).ready(function() {
  // Show/Hide the overlay menu.
  $('#logo').click(function () {
    $('#banner-nav-container').fadeToggle();
  });
  $('#close-nav').click(function () {
    $('#banner-nav-container').fadeOut();
  });
  $('#footermenulink').click(function () {
    $('#banner-nav-container').fadeToggle();
  });

});