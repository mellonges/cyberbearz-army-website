(function ($) {

	$(document).ready(function(a) {
		
		// Responsive
	
		var viewport = new ResponsiveTester({
				screenTypes: ['xs', 'sm', 'md', 'lg'],
				screenTest: {
					'xs': 'visible-xs-block',
					'sm': 'visible-sm-block',
					'md': 'visible-md-block',
					'lg': 'visible-lg-block'
				}
		});
		
		// Type Section
		
		$('.node-type-section .main-container').remove();
		
		// Breadcrumb
		
		$('.breadcrumb-home-img').appendTo('.breadcrumb .first a');
		
		// Page
		
		if (viewport.is('>xs')) {
			
			// Chapternav
			
			$('.affix-top').affix({
				offset: {
					top: 55,
					bottom: function () {
						return (this.bottom = $('footer').outerHeight(true))
					}
				}
			});
		}
		
		// Chapternav
		
		if ($('.chapternav-auto')) {

			// Dynamic theme
			
			var stickyOffset = $('.chapternav-auto').offset();
			var $contentDivs = $('section.section');
			
			$(document).scroll(function() {
					$contentDivs.each(function(k) {
							var _thisOffset = $(this).offset();
							var _actPosition = _thisOffset.top - $(window).scrollTop();
							if (_actPosition < (stickyOffset.top + $('.chapternav-auto').height()/2) && _actPosition + $(this).height() - $('.chapternav-auto').height()/2 > 0) {
									$('.chapternav-auto').removeClass('chapternav-dark chapternav-light').addClass($(this).hasClass('section-theme-inverse') ? 'chapternav-dark' : 'chapternav-light');
									return false;
							}
					});
			});

		}

		$('.chapternav-link-scroll').each(function(i,x1) {
  		$(x1).attr('data-scroll-nav',+i)
		});
		
		$('.chapternav-link-index').each(function(i,x1) {
  		$(x1).attr('data-scroll-index',+i)
		});
		
  	$.scrollIt({
		  upKey: 38,             // key code to navigate to the next section
			downKey: 40,           // key code to navigate to the previous section
			easing: 'swing',      // the easing function for animation
			scrollTime: 500,       // how long (in ms) the animation takes
			activeClass: 'active', // class given to the active nav element
			onPageChange: null,    // function(pageIndex) that is called when page is changed
			topOffset: 0 //-55           // offste (in px) for fixed top navigation
		});
		
		if (viewport.is('=xs')) {
			
			// Navbar
			
			$('.navbar-nav-wrapper').appendTo('body').wrapAll('<div class="col-xs-12 navbar-inverse sidebar">');
			
			$('.navbar-nav li').click(function() {
				//e.preventDefault(); .not('.dropdown')			
				$('.navbar-nav li').removeClass('open');
        $(this).not('.dropdown').toggleClass('open');
      })
			
			$('.navbar-toggle').click(function() {
				$('.navbar-nav li').removeClass('open')
      })
			
			// Chapternav
			
			if ( $('.chapternav-wrapper') ) {
				
				$('.chapternav-wrapper .collapse').collapse();
				
				$('.affix-top').affix({
					offset: {
						top: 44
					}
				});
				
				$('.chapternav-item .chapternav-link-btn').parent().addClass('chapternav-item-btn');
				
				$('.chapternav-item:not(.chapternav-item-btn):not(.chapternav-item-header)').appendTo('.chapternav-wrapper .col-xs-12').wrapAll('<ul class="chapternav-item-more-menu collapse" id="chapternavmore">');
				
				if ($('.chapternav-item-more-menu').length == 1) {
					
					$('.chapternav-items').prepend('<li class="chapternav-item chapternav-item-more"><a class="chapternav-link chapternav-link-more collapsed" data-toggle="collapse" href="#chapternavmore" aria-expanded="false" aria-controls="chapternavmore"><span class="chapternav-link-more-chevron"></span></a></li>');
				
					$('.chapternav-item-more').click(function() {
						$('.chapternav-wrapper').toggleClass('open')
					});

					$(window).scroll(function() {
						$('.chapternav-item-more-menu').collapse('hide');
					});

					$('.chapternav-item-more-menu').on('click', 'a', function (event) {
						$('.chapternav-item-more-menu').collapse('hide')
					});		
				}	
			}		
		}
		
		// Section
		
		$('.section').each(function(i,x1) {
  		if ( $(x1).addClass('section-i'+i) ) {
				if ( $('.section-i'+i + ' .section-option').hasClass('section-option-tabnav') ) {
					$('.section-i'+i + ' .section-option-titles').addClass('section-option-titles-tabnav')
				}
				
				// Gallery "rel"
				
				$('.section-i'+i + ' a.colorbox').attr('data-colorbox-gallery', 'gallery-id-'+i);
				$('.section-i'+i + ' a.colorbox img').attr('data-rjs', '2')
			}
		});
		
		// Tabnav
		
		$('.tabnav-tabs').each(function(i,x1) {
  		if ( $(x1).addClass('tabnav-tabs-'+i) ) {
				$('.tabnav-tabs-'+i + ' li a:first').tab('show');
			}
		});
		
		// Gallery
		
		var swiper = new Swiper('.swiper-container', {
			slidesPerView: 'auto',
			centeredSlides: true,
			spaceBetween: 22,
			loop: true,
			speed: 600,
			//simulateTouch: false,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.gallery-button-next',
				prevEl: '.gallery-button-prev',
			},
		});
		
		// Colorbox		
			
		$('#cboxOverlay').append('<button type="button" class="cboxClose"></button>');
		$('.cboxClose').click(function() {
			$('#cboxClose').click();
		});

	});

	// Colorbox
	
	Drupal.behaviors.initColorboxPlainStyle = {
  attach: function (context, settings) {
    $(context).bind('cbox_complete', function () {
			$('#cboxPrevious, #cboxNext', context).appendTo('#cboxOverlay');
      $('#cboxClose, #cboxSlideshow, #cboxCurrent', context).addClass('element-invisible');
    });
		}
	};
	
}) (jQuery);

