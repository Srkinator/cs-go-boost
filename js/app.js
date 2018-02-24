jQuery(function ($) {

	//#main-slider
	var slideHeight = $(window).height();
	$('#home-slider .item').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#home-slider .item').css('height',slideHeight);
	});

	//Scroll Menu
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>slideHeight ){
			$('.main-nav').addClass('main-nav-change');
		} else {
			$('.main-nav').removeClass('main-nav-change');
		}
	});

	// Navigation Scroll
	$(window).scroll(function(event) {
		Scroll();
	});

	//menu active on click
	$('.toggle-menu').jPushMenu();

	//initlize onepagenav
	$('#main-navigation').onePageNav({
	    filter: ':not(.external)'
	});

	// Contact form validation
	var form = $('.contact-form');
	form.submit(function () {'use strict',
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			var msg;
			if (data.type == 'success') {
				msg = '<div class="alert alert-success" role="alert">'+ data.message +'</div>';
			}else{
				msg = '<div class="alert alert-danger" role="alert">'+ data.message +'</div>';
			}

			$this.prev().append(msg).fadeIn();
		},'json');

		return false;
	});

	// User define function
	function Scroll() {
		var contentTop      =   [];
		var contentBottom   =   [];
		var winTop      =   $(window).scrollTop();
		var rangeTop    =   200;
		var rangeBottom =   500;
		$('.nav-menu').find('a').each(function(){
			contentTop.push( $( $(this).attr('href') ).offset().top);
			contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
		})
		$.each( contentTop, function(i){
			if ( winTop > contentTop[i] - rangeTop ){
				$('.nav-menu li.scroll')
				.removeClass('current')
				.eq(i).addClass('current');			
			}
		})
	};

	//Initiat WOW JS
	new WOW().init();

	//smoothScroll
	smoothScroll.init();
	
	//Countdown
	$('#count-down').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.counter').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});

	//content slider
	$('.bx-slider').bxSlider({
  	  pager: false,		  	
	  nextSelector: '#slider-next',
	  prevSelector: '#slider-prev',
	  nextText: '<i class="fa fa-angle-right"></i>',
	  prevText: '<i class="fa fa-angle-left"></i>'
	});


	//isotope
	$(window).load(function(){'use strict';
		var $achievment_selectors = $('.achievment-filter >li>a');
		var $achievment = $('.achievment-items');
		$achievment.isotope({
			itemSelector : '.achievment-item',
			layoutMode : 'fitRows'
		});
		
		$achievment_selectors.on('click', function(){
			$achievment_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$achievment.isotope({ filter: selector });
			return false;
		});
	});
});

