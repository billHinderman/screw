jQuery(document).ready(function($) {
  $('*[data-rel="microcontent"]').on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $('#microcontent').remove();
    var microcontentPosition = $(this).data('microcontent-position');
    if(microcontentPosition == "top") {
      var microcontentMarkup = "<div class='microcontent "+microcontentPosition+"' id='microcontent' style='left:"+$(this).position().left+"px; top:"+($(this).position().top + $(this).height() + 12)+"px;'><div class='microcontent-beak'></div><div class='microcontent-content'></div></div>";
    }
    else if(microcontentPosition == "left") {
      var microcontentMarkup = "<div class='microcontent "+microcontentPosition+"' id='microcontent' style='left:"+$(this).position().left+"px; top:"+($(this).position().top + $(this).height() + 12)+"px;'><div class='microcontent-beak'></div><div class='microcontent-content'></div></div>";
    }
    else if(micrcocontentPosition == "right") {
      var microcontentMarkup = "<div class='microcontent "+microcontentPosition+"' id='microcontent' style='left:"+$(this).position().left+"px; top:"+($(this).position().top + $(this).height() + 12)+"px;'><div class='microcontent-beak'></div><div class='microcontent-content'></div></div>";
    }
    else {
      var microcontentMarkup = "<div class='microcontent "+microcontentPosition+"' id='microcontent' style='left:"+$(this).position().left+"px; top:"+($(this).position().top + $(this).height() + 12)+"px;'><div class='microcontent-beak'></div><div class='microcontent-content'></div></div>";
    }
    $(microcontentMarkup).appendTo('body');
    $('.microcontent-content').trigger('ajax:thumper');
    $('.microcontent-content').load($(this).attr('href'));
  });

  $('body').on('click', function(event) {
    $('#microcontent').remove();
  });
});
