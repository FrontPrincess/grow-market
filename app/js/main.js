var headerActionLogin = $('#headerActionLogin');
var hiddenRegistration = headerActionLogin.parent().find('.hidden-registration');
var categoryBlockItemHasChildrenItem = $('.category-block__item--has-children');
var categoryBlockItemHasChildrenTitle = categoryBlockItemHasChildrenItem.find('.category-block__item-title');

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

	// categoryBlockItemHasChildrenItem
	categoryBlockItemHasChildrenItem.on('click', '.category-block__item-title', function(event) {
		event.preventDefault();
		$(this).parents('li').toggleClass('active');
	});

	$('body').mouseup(function(event) {
    	if (!categoryBlockItemHasChildrenTitle.is(event.target) && categoryBlockItemHasChildrenItem.has(event.target).length === 0) {
        	categoryBlockItemHasChildrenItem.removeClass('active');
   	}
	});
	// END:categoryBlockItemHasChildrenItem
});