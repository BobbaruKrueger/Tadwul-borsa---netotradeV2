jQuery(document).ready(function ($) {

	// audio slides
	$('#audio-slideshow').audioSlideshow();
	
	$('.audio-mute').click(function(){
		$(this).addClass('hide').removeClass('show');
		$('.audio-unmute').addClass('show').removeClass('hide');
	});
	$('.audio-unmute').click(function(){
		$(this).addClass('hide').removeClass('show');
		$('.audio-mute').addClass('show').removeClass('hide');
	});
	
	// Back to form
	if ($('#btfStick').length) {
		var scrollTrigger = 400, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#btfStick').fadeIn();
				} else {
					$('#btfStick').fadeOut();
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
	}
	
	$('.back-to-form').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('.form-wrap').offset().top
        }, 700);
    });
	
	

});