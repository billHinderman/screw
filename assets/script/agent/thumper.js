jQuery(document).ready(function($) {
	$(document).bind('ajax:thumper', function(event){
		event.stopPropagation();
		var thumperMarkup = "<div class='thumper'><div class='thumper-content'></div></div>";
		$(event.target).html(thumperMarkup);
	});
});
