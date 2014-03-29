// Vertical Slider
$(function() {
	'use strict';
    //caching
	//next and prev buttons
	var $cn_next	= $('#cn_next');
	var $cn_prev	= $('#cn_prev');
	//wrapper of the left items
	var $cn_list	= $('#cn_list');
	var $pages		= $cn_list.find('.cn_page');
	//how many pages
	var cnt_pages	= $pages.length;
	//the default page is the first one
	var page		= 1;
	//list of news (left items)
	var $items		= $cn_list.find('.cn_item');
	//the current item being viewed (right side)
	var $cn_preview = $('#cn_preview');
	//index of the item being viewed. 
	//the default is the first one
	var current		= 1;
	
	/*
	for each item we store its index relative to all the document.
	we bind a click event that slides up or down the current item
	and slides up or down the clicked one. 
	Moving up or down will depend if the clicked item is after or
	before the current one
	*/
	$items.each(function(i){
		var $item = $(this);
		$item.data('idx',i+1);
		
		$item.bind('click',function(){
			var $this		= $(this);
			$cn_list.find('.selected').removeClass('selected');
			$this.addClass('selected');
			var idx			= $(this).data('idx');
			var $current	= $cn_preview.find('.cn_content:nth-child('+current+')');
			var $next		= $cn_preview.find('.cn_content:nth-child('+idx+')');
			
			if(idx > current){
				$current.stop().animate({'top':'-350px'},300,'swing',function(){
					$(this).css({'top':'350px'});
				});
				$next.css({'top':'350px'}).stop().animate({'top':'0'},300,'swing');
			}
			else if(idx < current){
				$current.stop().animate({'top':'350px'},300,'swing',function(){
					$(this).css({'top':'350px'});
				});
				$next.css({'top':'-350px'}).stop().animate({'top':'0'},300,'swing');
			}
			current = idx;
		});
	});
	
	/*
	shows next page if exists:
	the next page fades in
	also checks if the button should get disabled
	*/
	$cn_next.bind('click',function(e){
		var $this = $(this);
		$cn_prev.removeClass('disabled');
		++page;
		if(page == cnt_pages)
			$this.addClass('disabled');
		if(page > cnt_pages){ 
			page = cnt_pages;
			return;
		}	
		$pages.hide();
		$cn_list.find('.cn_page:nth-child('+page+')').fadeIn();
		e.preventDefault();
	});
	/*
	shows previous page if exists:
	the previous page fades in
	also checks if the button should get disabled
	*/
	$cn_prev.bind('click',function(e){
		var $this = $(this);
		$cn_next.removeClass('disabled');
		--page;
		if(page == 1)
			$this.addClass('disabled');
		if(page < 1){ 
			page = 1;
			return;
		}
		$pages.hide();
		$cn_list.find('.cn_page:nth-child('+page+')').fadeIn();
		e.preventDefault();
	});
	
});

// Parallax Slider
$(document).ready(function(){

	// Main Slider
		'use strict';
		var options = {
			autoPlay: true,
			nextButton: true,
			prevButton: true,
			navigationSkip: true,
			animateStartingFrameIn: true,
			autoPlayDelay:3000,
			pauseOnHover : false,
			transitionThreshold:1500,
			preloader: true,
			preloadTheseImages: [
			    "../images/main_slide/home_banner1.jpg",
			    "../images/main_slide/home_banner2.jpg",
			    "../images/main_slide/home_banner3.jpg",
			    "../images/main_slide/home_banner4.jpg"
			],
			reverseAnimationsWhenNavigatingBackwards : false,	
			preventDelayWhenReversingAnimations : true
		};
		try{
			var sequence = $("#sequence").sequence(options).data("sequence");
		}
		catch(err){}	


		// Main Slider 2

		var options = {
			autoPlay: true,
			nextButton: true,
			prevButton: true,
			navigationSkip: true,
			animateStartingFrameIn: true,
			autoPlayDelay: 99999,
			pauseOnHover : false,
			transitionThreshold: 0,
			preloader: true,
			preloadTheseFrames: [1,2,3],
			preloadTheseImages: [
			    "../images/main_slide_2/bg_frame_1.jpg.jpg",
			    "../images/main_slide_2/bg_frame_2.jpg.jpg",
			    "../images/main_slide_2/bg_frame_3.jpg.jpg"
			],
			reverseAnimationsWhenNavigatingBackwards : false,	
			preventDelayWhenReversingAnimations : true		
		};
		try{
			var sequence = $("#sequence-2").sequence(options).data("sequence");
		}
		catch(err){}

	// Shop Slider
		'use strict';
		var options = {
			autoPlay: true,
			nextButton: true,
			prevButton: true,
			navigationSkip: true,
			animateStartingFrameIn: true,
			autoPlayDelay:3000,
			pauseOnHover : false,
			transitionThreshold:1500,
			preloader: true,
			preloadTheseImages: [
			    "../images/shop/banners/main_banner_shop_1.jpg",
			    "../images/shop/banners/main_banner_shop_2.jpg",
			    "../images/shop/banners/main_banner_shop_3.jpg",
			],
			reverseAnimationsWhenNavigatingBackwards : false,	
			preventDelayWhenReversingAnimations : true
		};
		try{
			var sequence = $("#sequence-shop").sequence(options).data("sequence");
		}
		catch(err){}			

	// Sub Slider
	var options = {
		autoPlay: false,
		nextButton: true,
		prevButton: true,
		preloader: true,
		navigationSkip: true,
		animateStartingFrameIn: true,
		autoPlayDelay:1000,
		pauseOnHover : false,
		transitionThreshold:2000,
		reverseAnimationsWhenNavigatingBackwards : false,	
		preventDelayWhenReversingAnimations : true			
	};
	try{
		var sequence = $("#sequence-sub-slider").sequence(options).data("sequence");
		sequence.afterLoaded = function(){ $(".sequence-prev, .sequence-next").fadeIn(100);}
	}
	catch(err){}


	// Twitter Slider
	var options = {
		autoPlay: false,
		nextButton: true,
		prevButton: true,
		preloader: true,
		navigationSkip: true,
		animateStartingFrameIn: false,
		autoPlayDelay:3000,
		pauseOnHover : false,
		transitionThreshold:200
	};
	try{
		var sequence = $("#sequence-twitter").sequence(options).data("sequence");
		sequence.afterLoaded = function(){$(".sequence-prev, .sequence-next").fadeIn(100);}
	}
	catch(err){}

	// Search Popup
	var searchbox = $('.popup_form');
	$(searchbox).hide();
	$( ".search_btn" ).click(function() {
		$( ".cart-popup" ).fadeOut("fast", "swing");
		$('.md-modal').removeClass('md-show');
		$( ".popup_form" ).fadeToggle( "fast", "swing" );
		return false;

	});

	// Cart Popup
	var cartbox = $('.cart-popup');
	$(cartbox).hide();
	$( ".cart-click" ).click(function() {

		if($(window).width() >480 ){
			$( ".popup_form" ).fadeOut("fast", "swing");
			$('.md-modal').removeClass('md-show');
			$( ".cart-popup" ).fadeToggle( "fast", "swing" );
			return false;

		}

	});

	$('.cart-popup .popup-item').each(
		function(e){

			$('.remove-it',$(this)).click(function(i,el){
				$(this).parent().parent().parent().animate({'opacity':0,'height':0},200,function(){
					$(this).remove();
				});
				return false;
			});

	});


	$('body').click(function(event){

		if (!$(event.target).is(".cart-popup,.cart-popup *,.popup_form, .popup_form *")) {
			$( ".cart-popup,.popup_form" ).fadeOut("fast", "swing");
    	}
	});


});


// BS3 subMenu on hover
$(window).resize(function(){	
	'use strict';

	if ($(".jquery-media-detect").css("display") == "block" ){
		$("ul.nav li.dropdown").hover(function() {
			$(".dropdown-menu", this).fadeIn()
		}, function() {
			$(".dropdown-menu", this).fadeOut("fast")
		})
	}

	// Full width and height img background
	// Full Screen Slider
	$('.slide-bg').css({
		marginLeft: - ($(window).width() - $('.slide-frame').outerWidth())/2,
		height: ($(window).height()),
		width : ($(window).width()) + 200
	}); 



	// Slider 2
	$('.slide-2-bg').css({
		marginLeft: - ($(window).width() - $('.slide-frame').outerWidth())/2,
		width : ($(window).width())
	}); 

	// Centering Modal

/*	$('.md-modal').each(function(e,i){

		$(this).imagesLoaded(function(){

		     $(this).css({
		           position:'fixed',
		           transform:'none',
		          left: ($(window).width() - $(this).outerWidth(true))/2,
		          top: ($(window).height() - $(this).outerHeight(true))/2,
		          'z-index':99999
		     });

		});

	});
*/

});


// Toggle menu on 2px scoll

$(document).scroll(function () {
	'use strict';
	var y = $(this).scrollTop();
	if (y > 2) {
		$('.home .navbar-default').fadeIn();
	} else {
		$('.home .navbar-default').fadeOut();
	}
});

// Click to scroll on targeted div
$(function() { //When the document loads
	'use strict';
	$(".btn-cta").bind("click", function() {
    $('html, body').animate({scrollTop: $(".scroll-target").offset().top - 68}, 1500, 'swing'); //68px is the navbar width
	});
});


// Animate object on viewport

(function(iniframe){
	'use strict';
	document.writeln('<script type="text/javascript" src="/js/core.js"></script>');
	document.writeln('<script type="text/javascript" src="/js/scrollspy.js"></script>');
	//document.writeln('<script type="text/javascript" src="/static/js/core.js"></script>');
	//document.writeln('<script type="text/javascript" src="/static/js/scrollspy.js"></script>');
})(window !== window.parent);
/* --- Counter Functions--- */
function dtDoCounter($this,$to) {
    "use strict";
    $j($this).css('opacity', '1');
    $j($this).countTo({
        from: 0,
        to: $to,
        speed: 1500,
        refreshInterval: 50
    })
}

function dtCounter() {
    "use strict";
    if ($j('.dt-counter').length) {
        $j('.dt-counter').each(function () {
            $j(this).appear(function () {
                var $countTo = $j(this).text();
                if ($(window).width()>480) {
                    dtDoCounter($j(this),$countTo);
                }
            }, {
                accX: 0,
                accY: -100
            })
        })
    }

}

/* --- Parallax Background Function--- */
function dtParallax() {
    "use strict";
    var $window = $(window);
    var minwidthparallax = 768;

    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
     
        $window.scroll(function() {
            //alert($(this).width());
            if ($(this).width()>minwidthparallax) {
                var position=$bgobj.position();
                var yPos = (($(document).scrollTop() - position.top) / $bgobj.data('speed'));

                // Put together our final background position
                var coords = '50% '+ yPos + 'px';
     
                // Move the background
                $bgobj.css({ backgroundPosition: coords });
            }
        }); 
    });    


    $('div[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
     
        $window.scroll(function() {
            //alert($(this).width());
            if ($(this).width()>minwidthparallax) {
                var position=$bgobj.position();
                var yPos = (($(document).scrollTop() - position.top) / $bgobj.data('speed'));

                // Put together our final background position
                var coords = '50% '+ yPos + 'px';
     
                // Move the background
                $bgobj.css({ backgroundPosition: coords });
            }
        }); 
    });    
}

$(document).ready(function(){
    "use strict";
    dtParallax();
    dtCounter();

    $('.view-cart-table tbody tr').each(
        function(e){

            $('.remove-item',$(this)).click(function(i,el){
                $(this).parent().parent().animate({'opacity':0,'height':0},200,function(){
                    $(this).remove();
                });
                return false;
            });

        }
    );

    $('.view-cart-table tbody tr').each(
        function(e){

            $('.btn-plusquantity',$(this)).click(function(i,el){
                var initialVal = $(this).prev().val();
                initialVal++;
                $(this).prev().val(initialVal);
            });

        }
    );

    $('.view-cart-table tbody tr').each(
        function(e){

            $('.btn-minusquantity',$(this)).click(function(i,el){
                var initialVal = $(this).next().val();
                if (initialVal>1) {
                    initialVal--;
                    $(this).next().val(initialVal);
                }
            });

        }
    );

    $('.plus-minus-container').each(
        function(e){

            $('.btn-plusquantity',$(this)).click(function(i,el){
                var initialVal = $(this).prev().val();
                initialVal++;
                $(this).prev().val(initialVal);
            });

        }
    );

    $('.plus-minus-container').each(
        function(e){

            $('.btn-minusquantity',$(this)).click(function(i,el){
                var initialVal = $(this).next().val();
                if (initialVal>1) {
                    initialVal--;
                    $(this).next().val(initialVal);
                }
            });

        }
    );

    // validate comment form 
    /* $("#dt-comment-form").validate({
        rules: {
            inputFullname: "required",
            inputEmail: {
                required: true,
                email: true
            },
            inputMessage: "required"
        },
        messages: {
            inputFullname: "Please enter your full name",
            inputMessage: "Please enter a message",
            inputEmail: "Please enter a valid email address"
        }
    });

    // validate contact form 
    $("#dt-contact-form").validate({
        rules: {
            inputFullname: "required",
            inputEmail: {
                required: true,
                email: true
            },
            inputMessage: "required",
            captcha: {
                required: true,
                captcha: true
            }
        },
        messages: {
            inputFullname: "Please enter your full name",
            inputMessage: "Please enter a message",
            inputEmail: "Please enter a valid email address",
            captcha: "Please enter correct answer"
        }
    });

    // validate contact form 
    $("#dt-checkout-form").validate({
        rules: {
            billing_country: "required",
            billing_first_name: "required",
            billing_last_name: "required",
            billing_address_1: "required",
            billing_postcode: "required",
            billing_city: "required",
            billing_email: {
                required: true,
                email: true
            },
            billing_phone: "required",
            shipping_country: "required",
            shipping_first_name: "required",
            shipping_last_name: "required",
            shipping_address_1: "required",
            shipping_postcode: "required",
            shipping_city: "required"
        },
        messages: {
            billing_country: "Please select your Country",
            billing_first_name: "Please enter your First Name",
            billing_last_name: "Please enter your Last Name",
            billing_address_1: "Please enter your Address",
            billing_postcode: "Please enter your Post Code",
            billing_city: "Please enter your Town/City",
            billing_email: "Please enter a valid email address",
            billing_phone: "Please enter your Phone Number",
            shipping_country: "Please select your Country",
            shipping_first_name: "Please enter your First Name",
            shipping_last_name: "Please enter your Last Name",
            shipping_address_1: "Please enter your Address",
            shipping_postcode: "Please enter your Post Code",
            shipping_city: "Please enter your Town/City"
        }
    }); */

    //Checkout Page
    $("#shiptobilling-checkbox").change(function() {
        $("#shipping_address").toggle();
    });

    $("#payment_method_cheque").change(function() {
        $(".payment_box").each(function(){
            $(this).hide();
        });
        $("#payment_box_cheque").toggle();
    });

    $("#payment_method_paypal").change(function() {
        $(".payment_box").each(function(){
            $(this).hide();
        });
        $("#payment_box_paypal").toggle();
    });

    $("#payment_method_visa").change(function() {
        $(".payment_box").each(function(){
            $(this).hide();
        });

        $("#payment_box_visa").toggle();
    });

    $("#payment_method_mastercard").change(function() {
        $(".payment_box").each(function(){
            $(this).hide();
        });

        $("#payment_box_mastercard").toggle();
    });
    
    $("#num1").val(Math.floor((Math.random()*10)));
    $("#num2").val(Math.floor((Math.random()*10)));
});

/* Form Validation */
/*$.validator.addMethod('captcha',
  function(value) {
    $result = ( parseInt($('#num1').val()) + parseInt($('#num2').val()) == parseInt($('#captcha').val()) ) ;
    $('#spambot').fadeOut('fast');
        return $result;
    },
        'Incorrect value, please try again.'
    );

$.validator.setDefaults({
    submitHandler: function() { 
        "use strict";
        /*var data = {
            name: $("#inputFullname").val(),
            email: $("#inputEmail").val(),
            phone: $("#inputPhone").val(),
            message: $("#inputMessage").val()
        };*/

        /*var thedata = $('#dt-contact-form').serialize();

        $.ajax({
            type: "POST",
            url: "sendemail.php",
            data: thedata,
            success: function(){
                $('.success').fadeIn(1000);
            },
            error: function(){
                $('.fail').fadeIn(1000);
            }
        });
    }
});

$('#dt-contact-form').submit(function(e){
    "use strict";
    e.preventDefault();
});

/*$('#dt-contact-form').on('valid', function() {
    "use strict";
    
    var thescript = $(this).attr('action');
    var thedata = $(this).serialize();
    
    $.ajax({
        type: "POST",
        url: thescript,
        data: thedata,
        success: function(){
            $('.success').fadeIn(1000);
        },
        error: function(){
            $('.fail').fadeIn(1000);
        }
    });
});*/

  // modified Isotope methods for gutters in masonry
 $.Isotope.prototype._getMasonryGutterColumns = function() {
    var gutter = this.options.masonry && this.options.masonry.gutterWidth || 0;
        containerWidth = this.element.width();
  
    this.masonry.columnWidth = this.options.masonry && this.options.masonry.columnWidth ||
                  // or use the size of the first item
                  this.$filteredAtoms.outerWidth(true) ||
                  // if there's no items, use size of container
                  containerWidth;

    this.masonry.columnWidth += gutter;

    this.masonry.cols = Math.floor( ( containerWidth + gutter ) / this.masonry.columnWidth );
    this.masonry.cols = Math.max( this.masonry.cols, 1 );
  };

  $.Isotope.prototype._masonryReset = function() {
    // layout-specific props
    this.masonry = {};
    // FIXME shouldn't have to call this again
    this._getMasonryGutterColumns();
    var i = this.masonry.cols;
    this.masonry.colYs = [];
    while (i--) {
      this.masonry.colYs.push( 0 );
    }

};

  $.Isotope.prototype._masonryResizeChanged = function() {
    var prevSegments = this.masonry.cols;
    // update cols/rows
    this._getMasonryGutterColumns();
    // return if updated cols/rows is not equal to previous
    return ( this.masonry.cols !== prevSegments );
  };


 $(function() {
	'use strict';
	/* recent blog post slide */
	var owl = $("#recent-blog-post");

        owl.owlCarousel({

		items		: 4, //10 items above 1000px browser width
		itemsDesktop	: [1199,3], //5 items between 1000px and 901px
		itemsDesktopSmall : [991,2], // 3 items betweem 900px and 601px
		itemsTablet	: false, //2 items between 600 and 0;
		itemsTabletSmall:[640,1],
		itemsMobile	: 1, // itemsMobile disabled - inherit from itemsTablet option
		pagination	: false,
		slideSpeed	: 400

    });

    owl.parent().find(".next").click(function(){
        owl.trigger('owl.next');
      });
    owl.parent().find(".prev").click(function(){
        owl.trigger('owl.prev');
      });

   	// recent featured work slide
	var ftr = $("#featured-work");

	try{

   ftr.owlCarousel({

		items		: 3, //10 items above 1000px browser width
		itemsDesktop	: [1023,2], //5 items between 1000px and 901px
		itemsDesktopSmall : [768,2], // 3 items betweem 900px and 601px
		itemsTablet	: [600,1], //2 items between 600 and 0;
		itemsMobile	: false, // itemsMobile disabled - inherit from itemsTablet option
		pagination	: false,
		slideSpeed	: 400
    });

   }
	catch(err){}


    ftr.parent().find(".next").click(function(){
        ftr.trigger('owl.next');
      });
    ftr.parent().find(".prev").click(function(){
        ftr.trigger('owl.prev');
      });

    ftr.owlCarousel('reload');

	$(".owl-slide",ftr)
		.each(function(){

				this.slide = $(this).find('.top-image img');
				this.slide.height($(this).width());
				$(this).height($(this).width());
				this.desc = $(this).find('.description').height(this.slide.height());
		})
		.hover(function(){
				this.desc.animate({'margin-top':-this.slide.height()});
		},function(){
				this.desc.animate({'margin-top':'0px'});
		});


    // recent post //
    var rct=$('#recent-post');

    try{
	    rct.owlCarousel({

			items		: 1, //10 items above 1000px browser width
			itemsDesktop	: [1000,1], //5 items between 1000px and 901px
			itemsDesktopSmall : [900,1], // 3 items betweem 900px and 601px
			itemsTablet	: [600,1], //2 items between 600 and 0;
			itemsMobile	: false, // itemsMobile disabled - inherit from itemsTablet option
			pagination	: true,
			slideSpeed	: 400
	    });
	}
	catch(err){}

	// featured work 2

	var data= $('#featured-work-2'),colWidth=(data.outerWidth(true)/3)-60;

	if($(window).width() >= 480 && $(window).width() < 768){
			colWidth=(data.outerWidth(true)/2)-40;	

	}else if($(window).width() < 480){
			colWidth=data.outerWidth(true)-40;	
	}


	$(".featured-item",data)
		.each(function(){
				this.slide = $(this).find('.top-image img');
				this.slide.height(colWidth);
				$(this).width(colWidth).height(colWidth);
				this.desc = $(this).find('.description').height(colWidth);
		})
		.hover(function(){
				this.desc.animate({'margin-top':-this.slide.height()});
		},function(){
				this.desc.animate({'margin-top':'0px'});
		});


	try{

		data.isotope({
		      itemSelector: '.featured-item',
			  resizable: false, 
			  layoutMode: 'masonry',
			  masonry: { 
			  columnWidth: colWidth,
			  gutterWidth: 40
			  },
				getSortData : {
					group : function ( $elem ) {
					  return $elem.attr('group');
					},
					
					random: function ($elem) {
				        if($elem.hasClass('ignore-shuffle')) {
				             return -1;   
				        }
						else if($elem.hasClass('more-post')){
							return 1; 
						}
				        return Math.random();
				    },
					blograndom: function ($elem) {
				        if($elem.hasClass('filter_title')) {
				             return -1;   
				        }
						else if($elem.hasClass('more-post')){
							return 1; 
						}
				        
						return Math.random();
				    }
			  	}
	    });

	}
	catch(err){

	}

	$(window).smartresize(function(){
		'use strict';

		var colWidth=(data.outerWidth(true)/3)-60;

			if($(window).width() >= 480 && $(window).width() < 768){
					colWidth=(data.outerWidth(true)/2)-40;	

			}else if($(window).width() < 480){
					colWidth=data.outerWidth(true)-40;	
			}

		$(".featured-item",data)
		.each(function(){
				$(this).width(colWidth).height(colWidth);

				this.slide = $(this).find('.top-image img');
				this.slide.height(colWidth);
				this.desc = $(this).find('.description').height(colWidth);
		});


		try{
			data.isotope({						   
			  masonry: { 
			  columnWidth: colWidth,
			  gutterWidth: 40
			  }
			});
		}
		catch(err){

		}


	});

    var filter=jQuery('.featured-work-2 #featured-filter a');
	
	if(filter.length && data.length){


		
				filter.click(function(e){
				
				var selector = $(this).data('filter');

				if(selector!==undefined){
					
				
						e.preventDefault();

								if(selector=='*'){


										data.isotope( {filter:selector}).isotope('reloadItems');
								}else{
									data.isotope( {filter:selector} );

								}							
				}

				$(this).parents('ul').find('a,li').removeClass('active');
				$(this).addClass('active').parent().addClass('active');
				return false;
						
			});
				
	}

	/* client testimonial */

	var testimoni= $('#client-testimonial');

	try{
	    testimoni.owlCarousel({

			items		: 1, //10 items above 1000px browser width
			itemsDesktop	: false, //5 items between 1000px and 901px
			itemsDesktopSmall : false, // 3 items betweem 900px and 601px
			itemsTablet	: false, //2 items between 600 and 0;
			itemsMobile	: false, // itemsMobile disabled - inherit from itemsTablet option
			pagination	: false,
			slideSpeed	: 400
	    });

        $(".client-testimoni .next").click(function(){
	        testimoni.trigger('owl.next');
 	     });

    	$(".client-testimoni .prev").click(function(){
        	testimoni.trigger('owl.prev');
      	});


	}
	catch(err){}


	/* portfolio 4 and 5 col */

	var portfolio=$('#portfolios'),masonryCol=portfolio.hasClass('portfolio-5col')?5 : 4;

	if($(window).width() >= 480 && $(window).width() < 768){
			masonryCol=masonryCol -1;

	}else if($(window).width() < 480){
			masonryCol=1;	
	}

	masonryCol=(portfolio.outerWidth(true)-(20*(masonryCol - 1)))/masonryCol;

	$(".portfolio-item",portfolio)
		.each(function(){

			if(portfolio.is('.portfolio-with-desc')){

					if($(window).width() < 480){

							$(this).width(masonryCol);
							$(this).find('img').width($(this).width());
					}
					else{

						if($(this).is('.landscape')){
							$(this).width(((masonryCol*2)+20));
						}
						else{
							$(this).width(masonryCol);
						}
						$(this).find('img').width($(this).width()).height(masonryCol);

					}

				}
				else{

					if($(window).width() < 480){

						if($(this).is('.big-square')){

							$(this).width(masonryCol).height(masonryCol);
						}
						else if($(this).is('.landscape')){
							$(this).width(masonryCol);
						}

						else if($(this).is('.portrait')){
							$(this).width(masonryCol).height(masonryCol);
						}
						else{
							$(this).width(masonryCol).height(masonryCol);
						}
					}
					else{

						if($(this).is('.big-square')){

							$(this).width(((masonryCol*2)+20)).height(((masonryCol*2)+20));
						}
						else if($(this).is('.landscape')){
							$(this).height(masonryCol).width(((masonryCol*2)+20));
						}

						else if($(this).is('.portrait')){
							$(this).width(masonryCol).height(((masonryCol*2)+20));
						}
						else{
							$(this).width(masonryCol).height(masonryCol);
						}

					}
				}
	});

	try{



		var reloadMore=function(){

			'use strict';

			jQuery('.more-post',portfolio).unbind('click').click(function(e){
													   
				e.preventDefault();
													   
				var scriptUrl=jQuery(this).find('a').attr('href'),hashChanged=true,removeItem = jQuery(this);

				portfolio.isotope('remove', removeItem);

				$.ajax({
					url: scriptUrl+'?'+$.now(),
					type: 'get',
					dataType: 'html',
					async: false,
					success: function(html) {

						var filtered=jQuery(html).find('.portfolio-item');	
						
						filtered.each(function(i,el){

							if(portfolio.is('.portfolio-with-desc')){


										if($(window).width() < 480){

												$(el).width(masonryCol);
												$(el).find('img').width($(el).width());
										}
										else{

											if($(el).is('.landscape')){
												$(el).width(((masonryCol*2)+20));
											}
											else{
												$(el).width(masonryCol);
											}
											$(el).find('img').width($(el).width()).height(masonryCol);

										}
							}
							else{

								if($(window).width() < 480){

									if($(el).is('.big-square')){

										$(el).width(masonryCol).height(masonryCol);
									}
									else if($(el).is('.landscape')){
										$(el).width(masonryCol);
									}

									else if($(el).is('.portrait')){
										$(el).width(masonryCol).height(masonryCol);
									}
									else{
										$(el).width(masonryCol).height(masonryCol);
									}

								}
								else{

									if($(el).is('.big-square')){

										$(el).width(((masonryCol*2)+20)).height(((masonryCol*2)+20));
									}
									else if($(el).is('.landscape')){
										$(el).height(masonryCol).width(((masonryCol*2)+20));
									}

									else if($(el).is('.portrait')){
										$(el).width(masonryCol).height(((masonryCol*2)+20));
									}
									else{
										$(el).width(masonryCol).height(masonryCol);
									}

								}

							}

							




							portfolio.isotope('insert',$(el));
						});
						var popup=jQuery(html).find('.popup-gallery');	
						if($(popup).length){
							popup.each(function(i,el){
								$(el).insertBefore('.md-overlay');
							});
	
							initModal();

						}

						reloadMore();
						hashChanged=false;
					} 
				 });

			});

			$(".portfolio-item.hover-this",portfolio)
			.each(function(){
					this.slide = $(this);
					this.slide.find('.top-image').height(this.slide.height());
					this.desc 	= $(this).find('.description').height(this.slide.height());
			})
			.hover(function(){
					this.desc.animate({'margin-top':-this.slide.height()});
			},function(){
					this.desc.animate({'margin-top':'0px'});
			});

		},

		initModal=function () {

		var overlay = document.querySelector( '.md-overlay' );

		[].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

			var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
				close = modal.querySelector( '.md-close' );

			function removeModal( hasPerspective ) {
				classie.remove( modal, 'md-show' );

				if( hasPerspective ) {
					classie.remove( document.documentElement, 'md-perspective' );
				}
			}

			function removeModalHandler() {
				removeModal( classie.has( el, 'md-setperspective' ) ); 
			}

			el.addEventListener( 'click', function( ev ) {
				classie.add( modal, 'md-show' );
				overlay.removeEventListener( 'click', removeModalHandler );
				overlay.addEventListener( 'click', removeModalHandler );

				if( classie.has( el, 'md-setperspective' ) ) {
					setTimeout( function() {
						classie.add( document.documentElement, 'md-perspective' );
					}, 25 );
				}
			});

			close.addEventListener( 'click', function( ev ) {
				ev.stopPropagation();
				removeModalHandler();
			});

		} );

	};



		portfolio.isotope({
				      itemSelector: '.portfolio-item',
					  resizable: false, 
					  layoutMode: 'masonry',
					  masonry: { 
					  	columnWidth: masonryCol,
					  	gutterWidth:20	
					  },
					  sortBy:'sortir',
						getSortData : {
							group : function ( $elem ) {
							  return $elem.attr('group');
							},
							
							sortir: function ($elem) {
						        if($elem.hasClass('ignore-shuffle')) {
						             return -1;   
						        }
								else if($elem.hasClass('more-post')){
									return 1; 
								}
						        return 0;
						    },
							blograndom: function ($elem) {
						        if($elem.hasClass('filter_title')) {
						             return -1;   
						        }
								else if($elem.hasClass('more-post')){
									return 1; 
								}
						        
								return Math.random();
						    }
					  	},
			    
					  filter:'*:not(.more-post)'

		 });

	 	reloadMore();




	 	$(window).smartresize(function(){
		'use strict';
		try{

			masonryCol=portfolio.hasClass('portfolio-5col')?5 : 4;


			if($(window).width() >= 480 && $(window).width() < 768){
					masonryCol=masonryCol -1;

			}else if($(window).width() < 480){
					masonryCol=1;	
			}

			masonryCol=(portfolio.outerWidth(true)-(20*(masonryCol - 1)))/masonryCol;

				if(portfolio.is('.portfolio-with-desc')){

				$(".portfolio-item",portfolio)
					.each(function(){

					if($(window).width() < 480){

							$(this).width(masonryCol);
							$(this).find('img').width($(this).width());
					}
					else{

						if($(this).is('.landscape')){
							$(this).width(((masonryCol*2)+20));
						}
						else{
							$(this).width(masonryCol);
						}
						$(this).find('img').width($(this).width()).height(masonryCol);

					}
				});

				}
				else{

				$(".portfolio-item",portfolio)
					.each(function(){

					if($(window).width() < 480){

						if($(this).is('.big-square')){

							$(this).width(masonryCol).height(masonryCol);
						}
						else if($(this).is('.landscape')){
							$(this).height(masonryCol/2)
							.width(masonryCol);
						}

						else if($(this).is('.portrait')){
							$(this).width(masonryCol).height(masonryCol);
						}
						else{
							$(this).width(masonryCol).height(masonryCol);
						}
					}
					else{

						if($(this).is('.big-square')){

							$(this).width(((masonryCol*2)+20)).height(((masonryCol*2)+20));
						}
						else if($(this).is('.landscape')){
							$(this).height(masonryCol).width(((masonryCol*2)+20));
						}

						else if($(this).is('.portrait')){
							$(this).width(masonryCol).height(((masonryCol*2)+20));
						}
						else{
							$(this).width(masonryCol).height(masonryCol);
						}

					}
				});

				}

				

				portfolio.isotope({						   
			  	masonry: { 
					columnWidth: masonryCol,
					gutterWidth: 20
				}
			});
			reloadMore();	
  
		}
		catch(err){

		}




		});

	}
	catch(err){

	}





	var filter=jQuery('.portfolio #featured-filter a');
	
	if(filter.length && portfolio.length){
		
				filter.click(function(e){
				
				var selector = $(this).data('filter');

				if(selector!==undefined){
					
				
						e.preventDefault();

								if(selector=='*'){
			
										portfolio.isotope( {filter:'*:not(.more-post)'}).isotope('reloadItems');
								}else{
									portfolio.isotope({filter:selector});
								}							
				}

				$(this).parents('ul').find('a,li').removeClass('active');
				$(this).addClass('active').parent().addClass('active');
				return false;
						
			});
				
	}

	/* portfolio-carousel - detail portfolio */

	$('#portfolio-carousel').carousel();


	/* bog masonry 2, 3 & 4 col */ 


	var $masonry= $('#blog-masonry'),masonryCol=$masonry.hasClass('col-4')? 4 : $masonry.hasClass('col-2')?2:3;

	if($(window).width() >= 768 && $(window).width() < 1024){
		masonryCol=$masonry.hasClass('col-2')?2:3;

	}else if($(window).width() >= 480 && $(window).width() < 768){
		masonryCol=2;

	}else if($(window).width() < 480){
		masonryCol=1;
	}

	colWidth=($masonry.outerWidth(true)-(40*(masonryCol - 1)))/masonryCol;

	$(".masonry-item",$masonry)
		.each(function(){
				$(this).width(colWidth);
		});

	try{

		$masonry.isotope({
		      itemSelector: '.masonry-item',
			  resizable: false, 
			  layoutMode: 'masonry',
			  masonry: { 
			  columnWidth: colWidth,
			  gutterWidth: 40
			  },
				getSortData : {
					group : function ( $elem ) {
					  return $elem.attr('group');
					},
					
					random: function ($elem) {
				        if($elem.hasClass('ignore-shuffle')) {
				             return -1;   
				        }
						else if($elem.hasClass('more-post')){
							return 1; 
						}
				        return Math.random();
				    },
					blograndom: function ($elem) {
				        if($elem.hasClass('filter_title')) {
				             return -1;   
				        }
						else if($elem.hasClass('more-post')){
							return 1; 
						}
				        
						return Math.random();
				    }
			  	}
	    });

	}
	catch(err){

	}



	$(window).smartresize(function(){
		'use strict';

		var masonryCol=$masonry.hasClass('col-4')? 4 : $masonry.hasClass('col-2')?2:3;

		if($(window).width() >= 768 && $(window).width() < 1024){
			masonryCol=$masonry.hasClass('col-2')?2:3;

		}else if($(window).width() >= 480 && $(window).width() < 768){
			masonryCol=2;

		}else if($(window).width() < 480){
			masonryCol=1;
		}

		colWidth=($masonry.outerWidth(true)-(40*(masonryCol - 1)))/masonryCol;

		$(".masonry-item",$masonry)
		.each(function(){
				$(this).width(colWidth);
		});


		try{
			$masonry.isotope({						   
			  masonry: { 
			  columnWidth: colWidth,
			  gutterWidth: 40
			  }
			});
		}
		catch(err){

		}


	});


	/* shop category */

	var shopcat = $(".dt-shop-category .shop-items");

	try{

	   shopcat.owlCarousel({

			items		: 4, //10 items above 1000px browser width
			itemsDesktop	: [992,3], //5 items between 1000px and 901px
			itemsDesktopSmall : [768,2], // 3 items betweem 900px and 601px
			itemsTablet	: [600,2], //2 items between 600 and 0;
			itemsMobile	: [480,1], // itemsMobile disabled - inherit from itemsTablet option
			pagination	: false,
			slideSpeed	: 400
	    });


	    shopcat.parent().find(".next").click(function(){
        	shopcat.trigger('owl.next');
      	});
	
	    shopcat.parent().find(".prev").click(function(){
        	shopcat.trigger('owl.prev');
      	});



   }
	catch(err){}

	/* shop detail */

	var thumbsProduct=$('.shop-detail-product .small-thumbnails');
	if(thumbsProduct.children().length > 4){

		thumbsProduct.children().removeClass('col-xs-3').addClass('col-xs-12');

		var navigation=$('<div></div>').addClass('owl-carousel-navigation'),
		prevBtn=$('<a></a>').addClass('btn btn-owl'),
		nextBtn=prevBtn.clone();

		navigation.append(prevBtn.addClass('prev'),nextBtn.addClass('next'));

		thumbsProduct.parent().append(navigation);

		try{

			thumbsProduct.owlCarousel({

				items		: 4, //10 items above 1000px browser width
				itemsDesktop	: [1200,3], //5 items between 1000px and 901px
				itemsDesktopSmall : [992,3], // 3 items betweem 900px and 601px
				itemsTablet	: [768,4], //2 items between 600 and 0;
				itemsMobile	: [480,3], // itemsMobile disabled - inherit from itemsTablet option
				pagination	: false,
				slideSpeed	: 400
		    });

		    prevBtn.click(function(){
		    	thumbsProduct.trigger('owl.prev');
		    });
		    nextBtn.click(function(){
		    	thumbsProduct.trigger('owl.next');
		    });

		}
		catch(err){}

	}


	/* shop featured */

	var shopfeat = $(".dt-featured-product .shop-items");

	var navigation=$('<div></div>').addClass('owl-carousel-navigation'),
		prevBtn=$('<a></a>').addClass('btn btn-owl'),
		nextBtn=prevBtn.clone();

		navigation.append(prevBtn.addClass('prev'),nextBtn.addClass('next'));

		shopfeat.parent().append(navigation);


	try{

	   shopfeat.owlCarousel({

			items		: 4, //10 items above 1000px browser width
			itemsDesktop	: [992,3], //5 items between 1000px and 901px
			itemsDesktopSmall : [768,2], // 3 items betweem 900px and 601px
			itemsTablet	: [600,2], //2 items between 600 and 0;
			itemsMobile	: [480,1], // itemsMobile disabled - inherit from itemsTablet option
			pagination	: false,
			slideSpeed	: 400
	    });


			prevBtn.click(function(){
		    	shopfeat.trigger('owl.prev');
		    });
		    nextBtn.click(function(){
		    	shopfeat.trigger('owl.next');
		    });
   }
	catch(err){}

	/* shop rating */

	$('.rating:NOT(.small)').not('small').jRating({});
	$('.rating.small').jRating({type:'small'});


	/* shop masonry */


	var products=$('#featured-shop'),cellColl=products.hasClass('col-5')?5 : 4;


	if($(window).width() >= 768 && $(window).width() < 1024){
		cellColl=cellColl - 1;

	}else if($(window).width() >= 480 && $(window).width() < 768){
		cellColl=cellColl - 2;

	}else if($(window).width() < 480){
		cellColl=1;
	}


	var cellWidth=(products.outerWidth(true)-(20*(cellColl - 1)))/cellColl;


	$(".masonry-item",products)
		.each(function(){
			$(this).width(cellWidth);
	});

	try{

		products.isotope({
				      itemSelector: '.masonry-item',
					  resizable: false, 
					  layoutMode: 'masonry',
					  masonry: { 
					  	columnWidth: cellWidth,
					  	gutterWidth:20	
					  }
		 });


	 	$(window).smartresize(function(){
		'use strict';

			cellColl=products.hasClass('col-5')?5 : 4;


			if($(window).width() >= 768 && $(window).width() < 1024){
				cellColl=cellColl - 1;

			}else if($(window).width() >= 480 && $(window).width() < 768){
				cellColl=cellColl - 2;

			}else if($(window).width() < 480){
				cellColl=1;
			}



			var cellWidth=(products.outerWidth(true)-(20*(cellColl - 1)))/cellColl;


		$(".masonry-item",products)
			.each(function(){
			$(this).width(cellWidth);
		});

		try{
			products.isotope({						   
			  	masonry: { 
					columnWidth: cellWidth,
					gutterWidth: 20
				}
			});
		}
		catch(err){

		}




		});

	}
	catch(err){

	}

	var filter=jQuery('.dt-featured-product #featured-filter a');
	
	if(filter.length && products.length){
		
				filter.click(function(e){
				
				var selector = $(this).data('filter');

				if(selector!==undefined){
					
				
						e.preventDefault();
						products.isotope({filter:selector}).isotope('reloadItems');									
				}

				$(this).parents('ul').find('a,li').removeClass('active');
				$(this).addClass('active').parent().addClass('active');
				return false;
						
			});
				
	}


});

$(function() {

	$(window).resize();
});