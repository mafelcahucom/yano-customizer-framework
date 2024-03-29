$(document).ready(function(){

	// calling highlight
	hljs.initHighlightingOnLoad();
	
	// Menu
	$('.mb-menu').click( function() {
		let me = $(this),
			mb_nav = $('.mb-navigation');
		if( me.hasClass('change') == true ) {
			me.removeClass('change');
			mb_nav.removeClass('active');
		}else{
			me.addClass('change');
			mb_nav.addClass('active');
		}
	});

	// Usage Navigation
	$('.btn-usage-nav').click( function() {
		let me 		= $(this),
			target  = $( '#' + me.data('target') ),
			panel 	= $('#usage-content-panel'),
			section = $('#usage-content-section'),
			field   = $('#usage-content-field');

		if( me.hasClass('active') == false ) {

			$('.btn-usage-nav').removeClass('active');
			me.addClass('active');

			panel.removeClass('active');
			section.removeClass('active');
			field.removeClass('active');
			target.addClass('active');

		}
	});


	// Testimonial slider
	$('.testimonial-slider').slick({
		infinite: true,
		dots: true,
		arrows: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		speed: 300,
		autoplay: true,
		autoplaySpeed: 10000,
		customPaging: function( slider, i ) {
			return `<button id="${ i }" class="btn-testimonial-dot"></button>`;
		},
		responsive: [
			{
				breakpoint: 1050,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});


	// Set svg height to fit
	function svg_fit_height( classname ) {
		var svg = document.getElementsByClassName(classname)[0];
		var bbox = svg.getBBox();
		var viewBox = [bbox.x, bbox.y, bbox.width, bbox.height - 2 ].join(" ");
		svg.setAttribute("viewBox", viewBox);
	}
	svg_fit_height('svg-fit');
	
	

});
