
function validateCompany() {
	var $companyForms = $('[data-form="0"]');

	var $button = $('#company .button');
	var company = $(this).val();
	if(company.length < 1) {
		$button.addClass('disabled');
		$button.removeClass('invalid');
		$companyForms.attr('data-valid','incomplete');

	} else if(company.length < 2) {
		$button.addClass('invalid disabled');
		$companyForms.attr('data-valid','invalid');
	} else {
		$button.removeClass('invalid disabled');
		$companyForms.attr('data-valid','valid');
	}
	$(this).trigger('validateAll');
}

function validateProject() {
	var $projectForms = $('[data-form="1"]');

	var $button = $('#project .button');
	var project = $(this).val();
	if(project.length < 1) {
		$button.addClass('disabled');
		$button.removeClass('invalid');
		$projectForms.attr('data-valid','incomplete');

	} else if(project.length < 3) {
		$button.addClass('invalid disabled');
		$projectForms.attr('data-valid','invalid');
	} else {
		$button.removeClass('invalid disabled');
		$projectForms.attr('data-valid','valid');
	}
	$(this).trigger('validateAll');
}

function validateTeam() {
	var $teamForms = $('[data-form="2"]');

	var $button = $('#team .button');
	var team = $(this).val();
	var names = team.split('\n');
	if(team.length < 1) {
		$button.addClass('disabled');
		$button.removeClass('invalid');
		$teamForms.attr('data-valid','incomplete');
	} else {
		var namesValid = true;
		names.forEach(function(name) {
			if(name.length < 1) {
				namesValid = false;
			}
		});
		if(namesValid) {
			$button.removeClass('invalid disabled');
			$teamForms.attr('data-valid','valid');	
		} else {
			$button.addClass('invalid disabled');
			$teamForms.attr('data-valid','invalid');
		}
	}
	$(this).trigger('validateAll');
}

function validateShare() {
	var $shareForms = $('[data-form="3"]');
	var $button = $('#share .button');
	
	var $shares = $('#share input[name="share"]');
	if($shares.length == 0) {
		$button.addClass('disabled');
		$button.removeClass('invalid');
		$shareForms.attr('data-valid','incomplete');
	} else {
		$shares.on('keyup', function() {
			var totalShare = 0;
			$shares.each(function() {
				totalShare+=parseInt($(this).val());
			})
			if(totalShare == 0) {
				$button.addClass('disabled');
				$button.removeClass('invalid');
				$shareForms.attr('data-valid','incomplete');
			}
			else if(totalShare != 100) {
				$button.addClass('invalid disabled');
				$shareForms.attr('data-valid','invalid');
			} else {
				$button.removeClass('invalid disabled');
				$shareForms.attr('data-valid','valid');	
			}
		});
	}
	$(this).trigger('validateAll');
}

function validateLeadership() {
	$(this).trigger('validateAll');
}

function validateDissolve() {
	var $dissolveForms = $('[data-form="5"]');
	var $options = $('#dissolve .options-list');
	var $button = $('#dissolve .button');
	if($options.find('.selected').length == 0) {
		$button.addClass('disabled');
		$button.removeClass('invalid');
		$dissolveForms.attr('data-valid','incomplete');
	} else {
		$button.removeClass('invalid disabled');
		$dissolveForms.attr('data-valid','valid');
	}
	$(this).trigger('validateAll');
}

function validateAll() {
	var $completeList = $('.progress [data-form][data-valid="valid"]');
	if($completeList.length == 6) {
		$('.progress .review').attr('data-valid','valid');
	} else {
		$('.progress .review').attr('data-valid','incomplete');
	}
}

jQuery(document).ready(function($) {
	addListeners();
});

function addListeners() {
	$('#company input[name="company"]').on('keyup', validateCompany);

	$('#project textarea[name="project"]').on('keyup', validateProject);

	$('#team textarea[name="team"]').on('keyup', validateTeam);
	$('#team textarea[name="team"]').on('keyup', validateShare);
	$('#team textarea[name="team"]').on('keyup', validateLeadership);
	$('#team textarea[name="team"]').on('keyup', validateDissolve);

	$('#share input[name="share"]').on('keyup', validateShare);

	$('#leadership input[name="leadership"]').on('keyup', validateLeadership);

	$('#dissolve .options-list').on('click', validateDissolve);

	$(document).on('validateAll', validateAll);


}
