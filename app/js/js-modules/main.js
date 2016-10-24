//= js-assets/variables

$(document).ready(function() {
	// .header-toggle
	$('.header-toggle__btn').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$('.header-nav').toggleClass('active');
	});
	// END: .header-toggle

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

	// form validate
	$('.form-block__form').validate({
  debug: true,
  // errorPlacement: function(label, element) {
  //   $('<div class="error-wrapper"></div>').insertAfter(element).append(label);
  // },
  rules: {
    name: {
      required: true,
    },
    email: {
      required: true
    },
  },
  messages: {
    name: {
      required: "Заполните, пожалуйста, это поле",
    },
    email: {
      required: "Заполните, пожалуйста, это поле",
    },
  }
});
	// END: form validate
});

