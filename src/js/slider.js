(() => {
  $(".cooperation__slider").owlCarousel({
   items : 1,
   itemsCustom : true,

   loop: true,

   autoHeight : false,
   autoplay: true,
   autoplayTimeout: 4000,

   margin : 5,
   nav: false,
   navText: ["",""],
   dots: true,
  });

$(".cooperation__slider").on('changed.owl.carousel', function (event) {
    let index = event.item.index;

    if (index == 3) {
      $('.cooperation__slider-count').text('02');
    } else if (index == 2) {
      $('.cooperation__slider-count').text('01');
    } else if (index == 4) {
      $('.cooperation__slider-count').text('03');
    } else if (index == 5) {
      $('.cooperation__slider-count').text('01');
    }
  });
})();

(() => {
  $(".portfolio__slider").owlCarousel({
   items : 1,
   itemsCustom : true,

   loop: true,

   autoHeight : false,
   autoplay: true,
   autoplayTimeout: 4000,

   margin : 5,
   nav: true,
   navText: ["<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175'><path d='M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z'/></svg>","<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175'><path d='M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z'/></svg>"],
   dots: true,
  });

$(".portfolio__slider").on('changed.owl.carousel', function (event) {
    let index = event.item.index;

    if (index == 3) {
      $('.portfolio__slider-count').text('01');
    } else if (index == 2) {
      $('.portfolio__slider-count').text('01');
    } else if (index == 4) {
      $('.portfolio__slider-count').text('02');
    } else if (index == 5) {
      $('.portfolio__slider-count').text('03');
    } else if (index == 6) {
      $('.portfolio__slider-count').text('04');
    } else if (index == 7) {
      $('.portfolio__slider-count').text('05');
    } else if (index == 8) {
      $('.portfolio__slider-count').text('01');
    }
  });

let owlNext = $('.portfolio .owl-nav .owl-next');
let owlPrev = $('.portfolio .owl-nav .owl-prev');
let index = 1;

owlNext.on('click', function (event) {
    index++;
    if (index > 5) {
      $('.portfolio__slider-count').text('0' + (index - 5));
      index = 1;
    } else {
      $('.portfolio__slider-count').text('0' + index);
    }
});

owlPrev.on('click', function (event) {
    index--;
    if (index == 0) {
      $('.portfolio__slider-count').text('0' + (index + 5));
      index = 5;
    } else {
      $('.portfolio__slider-count').text('0' + index);
    }
});
})();

(() => {
  $(".discounts__slider").owlCarousel({
   items : 1,
   itemsCustom : true,

   loop: true,

   autoHeight : false,

   margin : -70,
   // nav: true,
   navText: ["<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175'><path d='M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z'/></svg>","<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175'><path d='M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z'/></svg>"],
   dots: true,

   responsiveClass:true,
   responsive:{
       0:{
        nav: false,
        items: 1
       },
       768:{
         nav: true
       },
       1200:{
           items:3,
           nav: true,
           margin: 30
       }
     }
  });
})();

(() => {
  $('.plaster-type__more-btn').on('click', function () {
    let browserWidth = document.documentElement.clientWidth;

    if ($('.plaster-type__more-btn').text() == 'СКРЫТЬ') {
      $('.plaster-type__more-btn').text('ПОСМОТРЕТЬ ВСЕ');
    } else {
      $('.plaster-type__more-btn').text('СКРЫТЬ');
    }
	   if (browserWidth >= 768) {
       let cards = $('.plaster-type__card:nth-of-type(n+7)');

       cards.slideToggle(500);
     } else {
       let cards = $('.plaster-type__card:nth-of-type(n+4)');

       cards.slideToggle(500);
     }
  });
})();
