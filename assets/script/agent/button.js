jQuery(document).ready(function($) {
  $("button, .button, submit, .submit").each( function() {
    $(this).on('click', function() {
      $(this).addClass('working');
    });
  });
});
