jQuery(document).ready(function($) {
	$('#dissolve .options-list li').on('click', function() {
		if($(this).hasClass('selected')) {
			$(this).removeClass('selected');
		} else {
			$('#dissolve .options-list li').removeClass('selected');
			$(this).addClass('selected');
		}
	});
});
