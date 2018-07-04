// (() => {
//   $(".response-slider").owlCarousel({
//    items : 1,
//    itemsCustom : true,
//
//    loop: true,
//
//    autoHeight : false,
//
//    margin : 5,
//    nav: true,
//    navText: ["<img src='img/sec-06/larr.png'>","<img src='img/sec-06/rarr.png'>"],
//    dots: false,
//    animateOut: 'slideOutDown',
//    animateIn: 'flipInX',
//    mouseDrag: false
//   });
// })();

(() => {
  $(".cooperation__slider").owlCarousel({
   items : 1,
   itemsCustom : true,

   loop: true,

   autoHeight : false,

   margin : 5,
   nav: false,
   navText: ["",""],
   dots: true,

   responsiveClass:true,
   responsive:{
       0:{
           items:1,
           nav:true
       },
       768:{
           items:2,
           nav:true,
           margin: 10,
           dots: true
       },
       1200:{
           items:4,
           nav:true,
           margin: 30,
           dots: true
       }
   }
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

// (() => {
//   $(".sec-14__slider").owlCarousel({
//    items : 1,
//    itemsCustom : true,
//
//    loop: true,
//
//    autoHeight : false,
//
//    margin : 5,
//    nav: true,
//    navText: ["<img src='img/sec-06/larr.png'>","<img src='img/sec-06/rarr.png'>"],
//    dots: false,
//
//    responsiveClass:true,
//    responsive:{
//        0:{
//            items:1,
//            nav:true
//        },
//        768:{
//            items:1,
//            nav:true,
//            margin: 10,
//        },
//        1200:{
//            items:1,
//            nav:true,
//            margin: 20
//        }
//    }
//   });
// })();
