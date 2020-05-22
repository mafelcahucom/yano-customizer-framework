$(document).ready( function() {

	// calling highlight
	hljs.initHighlightingOnLoad();

	// opening navigation
	$('#btn-open-nav').click( function() {
		$('#mobile-nav').fadeIn();
	});

	// closing navigation
	$('#btn-close-nav').click( function() {
		$('#mobile-nav').fadeOut();
	});

	// accordion
	$('.accordion-head').click( function() {
		let s = this.getAttribute('data-s'),
			i = $(this).find('i'),
			content = $(this).next('.accordion-content');
		if( s == 0 ) {
			content.slideDown();
			i.removeClass('la-angle-down').addClass('la-angle-up');
			$(this).attr( 'data-s', 1 );
		}else{
			content.slideUp();
			i.removeClass('la-angle-up').addClass('la-angle-down');
			$(this).attr( 'data-s', 0 );
		}
	});
});