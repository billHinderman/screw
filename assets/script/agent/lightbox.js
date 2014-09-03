jQuery(document).ready(function($) {
  $('*[data-rel="lightbox"]').on('click', function(event) {
    event.preventDefault();
    var lightboxMarkup = "<div class='lightbox-overlay' id='lightbox-overlay'><div class='lightbox' id='lightbox'><div class='lightbox-close'>&times</div><div class='lightbox-content'></div></div></div>";
    $(lightboxMarkup).hide().appendTo('body').fadeIn(250);
    $('.lightbox-content').trigger('ajax:thumper');
    $('.lightbox-content').load($(this).attr('href'));

    $('#lightbox-overlay').on('click', function(event) {
      if(event.target === this) {
        $('#lightbox-overlay').fadeOut(150, function() { $(this).remove();});
      }
    });
    $('.lightbox-close').on('click', function() {
      $('#lightbox-overlay').fadeOut(150, function() { $(this).remove();});
    });
  });
});
