$(document).ready( function() {

	// json data for search filter
	let pages = [
		{
			"page_name": "Getting Started",
			"page_link": "getting-started.html",
			"status": "parent",
			"location": "docs"
		},
		{
			"page_name": "Installation",
			"page_link": "installation.html",
			"status": "child",
			"location": "docs"
		},
		{
			"page_name": "Download",
			"page_link": "download.html",
			"status": "child",
			"location": "docs"
		},
		{
			"page_name": "Essentials",
			"page_link": "",
			"status": "parent",
			"location": "docs"
		},
		{
			"page_name": "Panel",
			"page_link": "panel.html",
			"status": "child",
			"location": "essential"
		},
		{
			"page_name": "Section",
			"page_link": "section.html",
			"status": "child",
			"location": "essential"
		},
		{
			"page_name": "Field",
			"page_link": "",
			"status": "parent",
			"location": "field"
		},
		{
			"page_name": "Audio Uploader",
			"page_link": "audio-uploader.html",
			"status": "child",
			"location": "field"
		},
		{
			"page_name": "Button Set",
			"page_link": "button-set.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Checkbox",
			"page_link": "checkbox.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Checkbox Multiple",
			"page_link": "checkbox-multiple.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Checkbox Pill",
			"page_link": "checkbox-pill.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Code Editor",
			"page_link": "code-editor.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Color Picker",
			"page_link": "color-picker.html",
			"status": "child",
			"location": "field"
		},
		{
			"page_name": "Color Set",
			"page_link": "color-set.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Content Editor",
			"page_link": "content-editor.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Date Picker",
			"page_link": "date-picker.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Dropdown Custom Post",
			"page_link": "dropdown-custom-post.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Dropdown Page",
			"page_link": "dropdown-page.html",
			"status": "child",
			"location": "field"
		},
		{
			"page_name": "Dropdown Post",
			"page_link": "dropdown-post.html",
			"status": "child",
			"location": "field"
		},
		{
			"page_name": "Email",
			"page_link": "email.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "File Uploader",
			"page_link": "file-uploader.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Image Checkbox",
			"page_link": "image-checkbox.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Image Radio",
			"page_link": "image-radio.html",
			"status": "child",
			"location": "field"
		},
		{
			"page_name": "Image Uploader",
			"page_link": "image-uploader.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Markup",
			"page_link": "markup.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Numeric",
			"page_link": "numeric.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Radio",
			"page_link": "radio.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Range",
			"page_link": "range.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Select",
			"page_link": "select.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Size",
			"page_link": "size.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Sortable",
			"page_link": "sortable.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Switch",
			"page_link": "switch.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Tagging",
			"page_link": "tagging.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Tagging Select",
			"page_link": "tagging-select.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Text",
			"page_link": "text.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Textarea",
			"page_link": "textarea.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Time Picker",
			"page_link": "time-picker.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Toggle",
			"page_link": "toggle.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Url",
			"page_link": "url.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Video Uploader",
			"page_link": "video-uploader.html",
			"status": "child",
			"location": "field" 
		},
		{
			"page_name": "Helper",
			"page_link": "",
			"status": "parent",
			"location": "helper" 
		},
		{
			"page_name": "Active Callback",
			"page_link": "active-callback.html",
			"status": "child",
			"location": "helper" 
		},
		{
			"page_name": "Utilities",
			"page_link": "utilities.html",
			"status": "child",
			"location": "helper" 
		},
		{
			"page_name": "Validation",
			"page_link": "validation.html",
			"status": "child",
			"location": "helper" 
		},
	];

	// calling highlight
	hljs.initHighlightingOnLoad();

	// Searching Filter
	$('.search__input').keyup( function() {
		let value = $(this).val(),
			div_results = $('.search__results'),
			div_results_list = $('.search__results > ul');

		// filter matches
		let matches = pages.filter( pages =>  {
			const regex = new RegExp( `^${value}`, 'gi' );
			return pages.page_name.match( regex );
		});

		// clear matches if value is empty
		if( value.length === 0 ) {
			matches = [];
		}

		// appending result to dom
		if( matches.length > 0 ) {
			div_results.show();
			const result = matches.map( function( page ) {
				if( page.page_link != "" ) {
					return `<li>
								<a href="${ get_route_url( page ) }">${ page.page_name }</a>
							</li>`;
				}
			});
			div_results_list.html( result );
		}else{
			div_results.hide();
		}
	});

	// Show Search in Mobile
	$('#btn-more').click( function() {
		let me = $(this),
			status = me.attr('data-status');
		if( status == 'hidden' ) {
			me.attr('data-status', 'visible');
			$('#header__search_mobile_panel').addClass('show');
			$('.search__input').val('');
			$('.search__results').hide();
		}else{
			me.attr('data-status', 'hidden');
			$('#header__search_mobile_panel').removeClass('show');
		}
	});

	// Accordion
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

	// Show Sidebar in Mobile
	$('#btn-open-nav').click( function() {
		$('.mb-sidebar').fadeIn();
		setTimeout( function() {
			$('.mb-sidebar-panel').addClass('slide');
		}, 100);
	});
	// Hide Sidebar in Mobile
	$('#btn-close-navigation').click( function() {
		$('.mb-sidebar-panel').removeClass('slide');
		setTimeout( function() {
			$('.mb-sidebar').fadeOut();
		}, 100);
	});
	$('.mb-sidebar').click( function() {
		$('.mb-sidebar-panel').removeClass('slide');
		setTimeout( function() {
			$('.mb-sidebar').fadeOut();
		}, 100);
	});

	// creating navigation
	function create_navigation() {
		let output = '';
		pages.forEach( function( page ) {
			let attr_class = 'cs_link';
			if( page.status == 'parent' ) {
				attr_class = 'cs_link parent';
			}
			if( page.page_link == "" ) {
				output += `
					<li>
						<span class="parent">${ page.page_name }</span>
					</li>
				`;
			}else{
				output += `
					<li>
						<a class="${ attr_class }" href="${ get_route_url( page ) }">${ page.page_name }</a>
					</li>
				`;
			}
		});
		$('.side-navigation').html( output );
	}
	create_navigation();


	// adding activated page base on h1 text
	function sidebar_activated_link() {
		let page_title = $('h1').text();
		$('.cs_link').each( function( index, element ) {
			if( page_title == $(this).text() ) {
				$(this).addClass('active');
			}
		});
	}
	sidebar_activated_link();

	// get the current folder location
	function get_current_location() {
		let loc = window.location.pathname,
			dir = loc.substring(0, loc.lastIndexOf('/')).split('/');
		return dir[ dir.length - 1 ];
	}

	// get routed url
	function get_route_url( page ) {
		let path_location = get_current_location(),
			url = '';
		if( page.location == "docs" ) {
			// for status docs
			if( path_location == "docs" ) {
				url = page.page_link;
			}else{
				url = "../" + page.page_link;
			}

		}else if( page.location == "field" ) {
			// for status field
			if( path_location == "field" ) {
				url = page.page_link;
				
			}else if( path_location == "docs" ){
				url = "field/" + page.page_link;
			}else if( path_location == "essential" || path_location == "helper" ) {
				url = "../field/" + page.page_link;
			}
		}else if( page.location == "essential" ) {
			// for status essential
			if( path_location == "essential" ) {
				url = page.page_link;
			}else if( path_location == "docs" ){
				url = "essential/" + page.page_link;
			}else if( path_location == "field" || path_location == "helper" ) {
				url = "../essential/" + page.page_link;
			}
		}else if( page.location == "helper" ) {
			// for status helper
			if( path_location == "helper" ) {
				url = page.page_link;
			}else if( path_location == "docs" ) {
				url = "helper/" + page.page_link;
			}else if( path_location == "field" || path_location == "essential" ) {
				url = "../helper/" + page.page_link;
			}
		}
		return url;
	}
	
});