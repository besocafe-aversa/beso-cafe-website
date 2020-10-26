(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });
  
  // Accordions
  $('.collapse').on('shown.bs.collapse', function () {
    $(this).parent().find('.ti-angle-right').removeClass('ti-angle-right').addClass('ti-angle-down');
  }).on('hidden.bs.collapse', function () {
    $(this).parent().find('.ti-angle-down').removeClass('ti-angle-down').addClass('ti-angle-right');
  });

 // slick slider
 $('.gallery-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'fa fa-angle-left\'></i></button>',
  nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'fa fa-angle-right\'></i></button>',
  autoplay: true,
  responsive: [{
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 401,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
});

})(jQuery);