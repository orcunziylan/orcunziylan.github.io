(function ($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Dropdowns.
	// $('#nav > ul').dropotron({
	// 	mode: 'fade',
	// 	noOpenerFade: true,
	// 	alignment: 'center',
	// 	detach: false
	// });

	// Nav.

	// Title Bar.
	$(
		'<div id="titleBar">' +
		'<a href="#navPanel" class="toggle"></a>' +
		'<span class="title">' + $('#logo h1').html() + '</span>' +
		'</div>'
	).appendTo($body);

	// Panel.
	$(
		'<div id="navPanel">' +
		'<nav>' +
		$('#nav').navList() +
		'</nav>' +
		'</div>'
	).appendTo($body).panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'navPanel-visible'
	});

	// Smooth Scrolling
	$('a[data-scroll]').on('click', function (e) {
		e.preventDefault();
		var target = $($(this).attr('data-scroll'));
		if (target.length) {
			var offset = target.offset().top - 80; // Adjust '80' to account for navbar height
			var maxScroll = $(document).height() - $(window).height(); // Maximum scrollable area
			var scrollPosition = Math.min(offset, maxScroll); // Ensure we don't scroll past the end
			$('html, body').animate({
				scrollTop: scrollPosition
			}, 500); // Adjust '500' to control animation speed (milliseconds)
		}
	});

	// Back to Top Button
	var $backToTop = $('<div id="backToTop"><a href="#header" data-scroll="#header"><i class="fas fa-chevron-up"  style="color: white;"></i></a></div>').appendTo($('body'));

	$backToTop.css({
		position: 'fixed',
		bottom: '20px',
		right: '20px',
		'z-index': 1000, 
		cursor: 'pointer'
	});

	$backToTop.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 500); // Adjust speed as needed
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) { 
			$backToTop.addClass('visible');
		} else {
			$backToTop.removeClass('visible');
		}
	});

})(jQuery);