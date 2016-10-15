var headerActionLogin = $('#headerActionLogin');
var hiddenRegistration = headerActionLogin.parent().find('.hidden-registration');

$(document).ready(function() {
	// home-slider
	$('.home-slider__list').slick({
		dots: true,
		arrows: false,

	});
	// END:home-slider

	// headerActionLogin
	headerActionLogin.on('mouseenter', function(event) {
		hiddenRegistration.fadeIn(100);
	});
	hiddenRegistration.on('mouseleave', function(event) {
		$(this).fadeOut(100);
	});
	// END:headerActionLogin
});