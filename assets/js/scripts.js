/*
Author       : Revtheme
Template Name: Milagro
Version      : 1.0
*/

(function($) {
	"use strict";
	
	jQuery(document).ready(function(){
	
		/*START PRELOADER JS*/
		$(window).load(function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/

		/* START MENU JS */
			$('a[href*=#]').on("click", function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});

			$(window).scroll(function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});
		/* END MENU JS */ 

		
		
	}); 	

  
/* START COUNTERS*/
    $('#counters').on('inview', function(event, visible, visiblePartX, visiblePartY) {
      if (visible) {
        $(this).find('.count').each(function () {
          var $this = $(this);
          $({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 3000,
            easing: 'swing',
            step: function () {
              $this.text(Math.ceil(this.Counter));
            }
          });
        });
        $(this).unbind('inview');
      }
    });
    /* END COUNTERS */
	

	/* START SWIPER SLIDER */ 
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
      	nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        speed: 400,
       autoHeight:true,
       autoplay:8000,
        onInit: function(swiper){
        $('.swiper-slide-active h2, .swiper-slide-active h4, .swiper-slide-active p, .swiper-slide-active .btn-right, .swiper-slide-active .btn-left').css('visibility','hidden');
$(' .swiper-slide-active h4 ').delay(1000).queue(function(next) {
  $(this).addClass('animated fadeInUp ').css('visibility','visible');
  next();
  });
  $('.swiper-slide-active h2').delay(1500).queue(function(next) {
  $(this).addClass('animated fadeInUp').css('visibility','visible');
  next();
});
 $('.swiper-slide-active p').delay(2000).queue(function(next) {
  $(this).addClass('animated fadeInUp').css('visibility','visible');
  next();
});
 $('.swiper-slide-active .btn-left').delay(1).queue(function(next) {
  $(this).addClass('animated fadeInLeft').css('visibility','visible');
  next();
});
 $('.swiper-slide-active .btn-right').delay(1).queue(function(next) {
  $(this).addClass('animated fadeInRight').css('visibility','visible');
  next();
});

       },
       onSlideChangeStart: function(swiper){
        $('.swiper-slide-active h2, .swiper-slide-active h4, .swiper-slide-active p, .swiper-slide-active .btn-right, .swiper-slide-active .btn-left').css('visibility','hidden');
$(' .swiper-slide-active h4 ').delay(800).queue(function(next) {
  $(this).addClass('animated fadeInUp').css('visibility','visible');
  next();
  });
  $('.swiper-slide-active h2').delay(1300).queue(function(next) {
  $(this).addClass('animated fadeInUp').css('visibility','visible');
  next();
});
 $('.swiper-slide-active p').delay(1700).queue(function(next) {
  $(this).addClass('animated fadeInUp').css('visibility','visible');
  next();
});
 $('.swiper-slide-active .btn-left').delay(2500).queue(function(next) {
  $(this).addClass('animated fadeInLeft').css('visibility','visible');
  next();
});
 $('.swiper-slide-active .btn-right').delay(2500).queue(function(next) {
  $(this).addClass('animated fadeInRight').css('visibility','visible');
  next();
});
       },

           onSlideNextStart: function(swiper){
 
 $(' .swiper-slide-active h4 ').removeClass('animated fadeInUp');
 $('.swiper-slide-active h2').removeClass('animated fadeInUp');
 $('.swiper-slide-active p').removeClass('animated fadeInUp');
 $('.swiper-slide-active .btn-left').removeClass('animated fadeInLeft');
 $('.swiper-slide-active .btn-right').removeClass('animated fadeInRight');
  

       },
         onSlidePrevStart: function(swiper){
 
 $(' .swiper-slide-active h4 ').removeClass('animated fadeInUp');
 $('.swiper-slide-active h2').removeClass('animated fadeInUp');
 $('.swiper-slide-active p').removeClass('animated fadeInUp');
 $('.swiper-slide-active .btn-left').removeClass('animated fadeInLeft');
 $('.swiper-slide-active .btn-right').removeClass('animated fadeInRight');
  

       },

    });     

/*START BRAND CAROUSEL*/
    $(".brand-carousel").owlCarousel({

      items : 5, //Number of  items
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
    });
    /*END BRAND CAROUSEL*/

 /*START TESTIMONIAL CAROUSEL*/
    $(".testimonial-carousel").owlCarousel({
    // Most important owl features
    items :  3,
    itemsCustom : false,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false,
    //autoPlay: 6000,
   

    // Navigation
    navigation : true,
    navigationText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    rewindNav : true,
    scrollPerPage : false,
   // pagination:true,
    paginationSpeed : 800,
    rewindSpeed : 1000,
    slidespeed:800,
 
    // Responsive 
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window

});
    /*END TESTIMONIAL CAROUSEL*/

    /*START BLOG CAROUSEL*/
    $(".blog-carousel").owlCarousel({
    // Most important owl features
    items :  3,
    itemsCustom : false,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false,
    autoPlay: false,
   

    // Navigation
   
    navigationText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    rewindNav : true,
    scrollPerPage : false,
    pagination:true,
    paginationSpeed : 800,
    rewindSpeed : 1000,
    slidespeed:800,
    stopOnHover:true,

 
    // Responsive 
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window

});
    /*END BLOG CAROUSEL*/

        /*START POST_GALLERY CAROUSEL*/
    $(".post-carousel").owlCarousel({
    // Most important owl features
    items :  1,
    itemsCustom : false,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false,
    autoPlay: 8000,
   

    // Navigation
   
    navigationText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    rewindNav : true,
    scrollPerPage : false,
    pagination:true,
    paginationSpeed : 800,
    rewindSpeed : 1000,
    slidespeed:800,
    stopOnHover:true,
    navigation:true,

 
    // Responsive 
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window

});
    /*END POST_GALLERY CAROUSEL*/

    /*START RELATED PROJECTS CAROUSEL*/
    $(".related-carousel").owlCarousel({
    // Most important owl features
    items :  4,
    itemsCustom : false,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false,
    
   

    // Navigation
   
    navigationText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    rewindNav : true,
    scrollPerPage : false,
    pagination:true,
    paginationSpeed : 800,
    rewindSpeed : 1000,
    slidespeed:800,
    stopOnHover:true,
    navigation:true,

 
    // Responsive 
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window

});
    /*END RELATED PROJECTS CAROUSEL*/
   
/*START CONTACT MAP JS*/
    var contact = {"lat":"23.188223", "lon":"72.628098"}; //Change a map coordinate here!
    try {
      $('.map').gmap3({
        key:'AIzaSyBXWbcVJjPWk4E_q9zQxOkDPYGsxcmBs0A', //Google Map API Key
        action: 'addMarker',
        latLng: [contact.lat, contact.lon],
        map:{
          center: [contact.lat, contact.lon],
          zoom: 15
          },
        },
        {action: 'setOptions', args:[{scrollwheel:false}]}
      );
    } catch(err) {}
     /*END CONTACT MAP JS*/



/*START WOW ANIMATION JS*/
      
    new WOW().init(); 
    

  /*END WOW ANIMATION JS*/  



  /*Text rotator*/
  (function($){
    $.fn.extend({ 
        rot: function(options) {
 
            var defaults = {
                fadeSpeed: 900,
                pauseSpeed: 2500,
        child:null
            };
             
            var options = $.extend(defaults, options);
         
            return this.each(function() {
                  var o =options;
                  var obj = $(this);                
                  var items = $(obj.children(), obj);
          items.each(function() {$(this).hide();})
          if(!o.child){var next = $(obj).children(':first');
          }else{var next = o.child;
          }
          $(next).fadeIn(o.fadeSpeed, function() {
            $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
              var next = $(this).next();
              if (next.length == 0){
                  next = $(obj).children(':first');
              }
              $(obj).rot({child : next, fadeSpeed : o.fadeSpeed, pauseSpeed : o.pauseSpeed});
            })
          });
            });
        }
    });
})(jQuery);

 $(document).ready(function() {
        $('.rotate').rot({fadeSpeed:900, pauseSpeed:2500});
 });

 /*Start PrettyPhoto*/

  jQuery(document).ready(function(){
    jQuery("a[rel^='prettyPhoto']").prettyPhoto();
  });

/*END PRETTY PHOTO*/  

})(jQuery);

 
    
