jQuery(document).ready(function($) {
  $("*[data-menu]").on('click', function() {
    if($("body").hasClass('menu')) {
    	$("body").addClass("no-menu");	
    }
    $("body").toggleClass("menu");
    if($("body").hasClass('menu')) {
    	$("body").removeClass("no-menu");	
    }
    setTimeout(function(){
    	$('.nav-icon').toggleClass('fa-bars');
    	$('.nav-icon').toggleClass('fa-times');
    }, 450);
  });
});
