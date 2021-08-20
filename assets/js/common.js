/**************************************************************************
* Common js

**************************************************************************/
jQuery(document).ready(function() {
   "use strict"; /* Navigation */
/* Mega Menu */
	jQuery('.mega-menu-title').on('click',function(){
		if(jQuery('.mega-menu-category').is(':visible')){
			jQuery('.mega-menu-category').slideUp();
		} else {
			jQuery('.mega-menu-category').slideDown();
		}
	});
    
    
    
	

    
    
	jQuery('.mega-menu-category .nav > li.view-more-cat').on('click',function(e){
		if(jQuery('.mega-menu-category .nav > li.more-menu').is(':visible')){
			jQuery('.mega-menu-category .nav > li.more-menu').stop().slideUp();
			jQuery(this).find('a').text('More');
		} else { 
			jQuery('.mega-menu-category .nav > li.more-menu').stop().slideDown();
			jQuery(this).find('a').text('Close menu');
			 jQuery(this).find('a').addClass('menu-hide');
			
		}
		e.preventDefault();
	});

 /*  tabs slider */	
jQuery('.home-owl-carousel').each(function(){

    var owl = $(this);
    var  itemPerLine = owl.data('item');
    if(!itemPerLine){
        itemPerLine = 4;
    }
    owl.owlCarousel({
        items : 4,
            itemsDesktop: [1024, 3],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [767, 2],
            itemsMobile: [479, 1],
        navigation : true,
        pagination : false,

        navigationText: ["", ""]
    });
});	

 /*  Best Seller Slider */
        jQuery("#top-categories .slider-items").owlCarousel({
            items: 8,
            itemsDesktop: [1024, 6],
            itemsDesktopSmall: [900, 4],
            itemsTablet: [600, 2],
            itemsMobile: [320, 2],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1
        }),

    /* Bestsell slider */
    jQuery("#bestsell-slider .slider-items").owlCarousel({
        items: 5, //10 items above 1000px browser width
        itemsDesktop: [1024, 5], //5 items between 1024px and 901px
        itemsDesktopSmall: [991, 3], // 3 items betweem 900px and 601px
        itemsTablet: [767, 2], //2 items between 600 and 0;
        itemsMobile: [360, 1],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });
	
	    /* Bestsell slider */
    jQuery("#recent-pro-slider .slider-items").owlCarousel({
        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1024, 2], //5 items between 1024px and 901px
        itemsDesktopSmall: [991, 2], // 3 items betweem 900px and 601px
        itemsTablet: [767, 2], //2 items between 600 and 0;
        itemsMobile: [360, 1],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });
	
    /* Featured slider */
    jQuery("#featured-slider .slider-items").owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1024, 3], //5 items between 1024px and 901px
        itemsDesktopSmall: [900, 3], // 3 items betweem 900px and 601px
        itemsTablet: [768, 2], //2 items between 600 and 0;
        itemsMobile: [360, 1],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });
    /* New arrivals slider */
    jQuery("#new-arrivals-slider .slider-items").owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1024, 4], //5 items between 1024px and 901px
        itemsDesktopSmall: [768, 3], // 3 items betweem 900px and 601px
        itemsTablet: [767, 2], //2 items between 600 and 0;
        itemsMobile: [360, 1],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });
    /* Brand logo slider */
    jQuery("#brand-logo-slider .slider-items").owlCarousel({
        autoPlay: true,
        items: 6, //10 items above 1000px browser width
        itemsDesktop: [1024, 4], //5 items between 1024px and 901px
        itemsDesktopSmall: [900, 3], // 3 items betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0;
        itemsMobile: [320, 1],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });
    /* Category desc slider */
    jQuery("#category-desc-slider .slider-items").owlCarousel({
        autoPlay: true,
        items: 1, //10 items above 1000px browser width
        itemsDesktop: [1024, 1], //5 items between 1024px and 901px
        itemsDesktopSmall: [900, 1], // 3 items betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0;
        itemsMobile: [320, 1],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });
    /* Related products slider */
    jQuery("#related-products-slider .slider-items").owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1024, 4], //5 items between 1024px and 901px
        itemsDesktopSmall: [900, 3], // 3 items betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0;
        itemsMobile: [360, 1],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });
    /* Upsell products slider */
    jQuery("#upsell-products-slider .slider-items").owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1024, 4], //5 items between 1024px and 901px
        itemsDesktopSmall: [900, 3], // 3 items betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0;
        itemsMobile: [360, 1],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });
    /* testimonials slider */
    jQuery("#testimonials-slider .slider-items").owlCarousel({
        autoPlay: true,
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [900, 1],
        itemsTablet: [640, 1],
        itemsMobile: [390, 1],
        navigation: false,
        navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
        slideSpeed: 500,
        pagination: false

    });
	
	jQuery(document).ready(function() {
		"use strict";
	jQuery("#bestsellers4 .slider-items").owlCarousel({
		items : 1, //10 items above 1000px browser width
		itemsDesktop : [1024,1], //5 items between 1024px and 901px
		itemsDesktopSmall : [900,1], // 3 items betweem 900px and 601px
		itemsTablet: [767,1], //2 items between 600 and 0;
		itemsMobile : [360,1],
		navigation : false,
		navigationText : ["<a class=\"flex-prev\"></a>","<a class=\"flex-next\"></a>"],
		slideSpeed : 500,
		pagination : true
	});
	
	});	
	
/*  menu highlight  */	
	 jQuery( ".nav>li" ).mouseover(function() 
        {if (jQuery(this).find(".wrap-popup").length > 0){
		jQuery( ".container-fluid, .main-container" ).addClass( "overlay" );
      	}
		}
		 );
	  
	jQuery( ".nav>li" ).mouseleave(function()
		
		 {
          jQuery( ".container-fluid, .main-container" ).removeClass( "overlay" );
        }
        ); 
		
/*  sticky header  
    jQuery(window).scroll(function() {
        jQuery(this).scrollTop() > 250 ? jQuery("nav").addClass("sticky-header") : jQuery("nav").removeClass("sticky-header")
        jQuery(this).scrollTop() > 300 ? jQuery("nav").addClass("sticky-header-bar") : jQuery("nav").removeClass("sticky-header-bar")
    });		
*/
    /* Mobile menu */
    jQuery("#mobile-menu").mobileMenu({
        MenuWidth: 250,
        SlideSpeed: 300,
        WindowsMaxWidth: 767,
        PagePush: true,
        FromLeft: true,
        Overlay: true,
        CollapseMenu: true,
        ClassName: "mobile-menu"
    });
    /* side nav categories */
    if (jQuery('.subDropdown')[0]) {
        jQuery('.subDropdown').on("click", function() {
            jQuery(this).toggleClass('');
            jQuery(this).toggleClass('minus');
            jQuery(this).parent().find('ul').slideToggle();
        });
    }
    jQuery.extend(jQuery.easing, {
        easeInCubic: function(x, t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOutCubic: function(x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
    });
    (function(jQuery) {
        jQuery.fn.extend({
            accordion: function() {
                return this.each(function() {
                    function activate(el, effect) {
                        jQuery(el).siblings(panelSelector)[(effect || activationEffect)](((effect == "show") ? activationEffectSpeed : false), function() {
                            jQuery(el).parents().show();
                        });
                    }
                });
            }
        });
    })(jQuery);
    jQuery(function(jQuery) {
        jQuery('.accordion').accordion();
        jQuery('.accordion').each(function(index) {
            var activeItems = jQuery(this).find('li.active');
            activeItems.each(function(i) {
                jQuery(this).children('ul').css('display', 'block');
                if (i == activeItems.length - 1) {
                    jQuery(this).addClass("current");
                }
            });
        });
    });
    /* Top Cart js */
    function slideEffectAjax() {
        jQuery('.top-cart-contain').mouseenter(function() {
            jQuery(this).find(".top-cart-content").stop(true, true).slideDown();
        });
        jQuery('.top-cart-contain').mouseleave(function() {
            jQuery(this).find(".top-cart-content").stop(true, true).slideUp();
        });
    }
    jQuery(document).ready(function() {
        slideEffectAjax();
    });

});
/*  Price Filter */

var lowerSlider = document.querySelector('#lower');
var  upperSlider = document.querySelector('#upper');

document.querySelector('#two').value=upperSlider.value;
document.querySelector('#one').value=lowerSlider.value;

var  lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
        }
    }
    document.querySelector('#two').value=this.value
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
    }
    document.querySelector('#one').value=this.value
}; 


/*  UItoTop */
jQuery.fn.UItoTop = function(options) {
    var defaults = {
        text: '',
        min: 200,
        inDelay: 600,
        outDelay: 400,
        containerID: 'toTop',
        containerHoverID: 'toTopHover',
        scrollSpeed: 1200,
        easingType: 'linear'
    };
    var settings = jQuery.extend(defaults, options);
    var containerIDhash = '#' + settings.containerID;
    var containerHoverIDHash = '#' + settings.containerHoverID;
    jQuery('body').append('<a href="#" id="' + settings.containerID + '">' + settings.text + '</a>');
    jQuery(containerIDhash).hide().on("click", function() {
        jQuery('html, body').animate({
            scrollTop: 0
        }, settings.scrollSpeed, settings.easingType);
        jQuery('#' + settings.containerHoverID, this).stop().animate({
            'opacity': 0
        }, settings.inDelay, settings.easingType);
        return false;
    }).prepend('<span id="' + settings.containerHoverID + '"></span>').hover(function() {
        jQuery(containerHoverIDHash, this).stop().animate({
            'opacity': 1
        }, 600, 'linear');
    }, function() {
        jQuery(containerHoverIDHash, this).stop().animate({
            'opacity': 0
        }, 700, 'linear');
    });
    jQuery(window).scroll(function() {
        var sd = jQuery(window).scrollTop();
        if (typeof document.body.style.maxHeight === "undefined") {
            jQuery(containerIDhash).css({
                'position': 'absolute',
                'top': jQuery(window).scrollTop() + jQuery(window).height() - 50
            });
        }
        if (sd > settings.min) jQuery(containerIDhash).fadeIn(settings.inDelay);
        else jQuery(containerIDhash).fadeOut(settings.Outdelay);
    });
};
/* mobileMenu */
var isTouchDevice = ('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0);
jQuery(window).on("load", function() {
    if (isTouchDevice) {
        jQuery('#nav a.level-top').on("click", function(e) {
            jQueryt = jQuery(this);
            jQueryparent = jQueryt.parent();
            if (jQueryparent.hasClass('parent')) {
                if (!jQueryt.hasClass('menu-ready')) {
                    jQuery('#nav a.level-top').removeClass('menu-ready');
                    jQueryt.addClass('menu-ready');
                    return false;
                } else {
                    jQueryt.removeClass('menu-ready');
                }
            }
        });
    }
    jQuery().UItoTop();
});