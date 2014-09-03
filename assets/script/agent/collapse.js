jQuery(document).ready(function($) {
  $('*[data-collapse]').each( function() {
  	var collapseElement = $(this);
  	var triggerElement = collapseElement.children('*[data-collapse-trigger]')
    triggerElement.on('click', function(event) {
			event.preventDefault();
			collapseElement.toggleClass('collapsed');
			if(triggerElement.children('.icon-plus')[0] != null) {
				triggerElement.children('.icon-plus').removeClass('icon-plus').addClass('icon-minus');
			}
			else if(triggerElement.children('.icon-minus')[0] != null) {
				triggerElement.children('.icon-minus').removeClass('icon-minus').addClass('icon-plus');
			}
    });
  });
});
