$(".cooperation__slider").owlCarousel({items:1,itemsCustom:!0,loop:!0,autoHeight:!1,autoplay:!0,autoplayTimeout:4e3,margin:5,nav:!1,navText:["",""],dots:!0}),$(".cooperation__slider").on("changed.owl.carousel",function(t){let o=t.item.index;3==o?$(".cooperation__slider-count").text("02"):2==o?$(".cooperation__slider-count").text("01"):4==o?$(".cooperation__slider-count").text("03"):5==o&&$(".cooperation__slider-count").text("01")}),(()=>{$(".portfolio__slider").owlCarousel({items:1,itemsCustom:!0,loop:!0,autoHeight:!1,autoplay:!0,autoplayTimeout:4e3,margin:5,nav:!0,navText:["<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175'><path d='M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z'/></svg>","<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175'><path d='M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z'/></svg>"],dots:!0}),$(".portfolio__slider").on("changed.owl.carousel",function(t){let o=t.item.index;3==o?$(".portfolio__slider-count").text("01"):2==o?$(".portfolio__slider-count").text("01"):4==o?$(".portfolio__slider-count").text("02"):5==o?$(".portfolio__slider-count").text("03"):6==o?$(".portfolio__slider-count").text("04"):7==o?$(".portfolio__slider-count").text("05"):8==o&&$(".portfolio__slider-count").text("01")});let t=$(".portfolio .owl-nav .owl-next"),o=$(".portfolio .owl-nav .owl-prev"),e=1;t.on("click",function(t){++e>5?($(".portfolio__slider-count").text("0"+(e-5)),e=1):$(".portfolio__slider-count").text("0"+e)}),o.on("click",function(t){0==--e?($(".portfolio__slider-count").text("0"+(e+5)),e=5):$(".portfolio__slider-count").text("0"+e)})})(),$(".discounts__slider").owlCarousel({items:1,itemsCustom:!0,loop:!0,autoHeight:!1,margin:-70,navText:["<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175'><path d='M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z'/></svg>","<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175'><path d='M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z'/></svg>"],dots:!0,responsiveClass:!0,responsive:{0:{nav:!1,items:1},768:{nav:!0},1200:{items:3,nav:!0,margin:30}}}),$(".plaster-type__more-btn").on("click",function(){let t=document.documentElement.clientWidth;"СКРЫТЬ"==$(".plaster-type__more-btn").text()?$(".plaster-type__more-btn").text("ПОСМОТРЕТЬ ВСЕ"):$(".plaster-type__more-btn").text("СКРЫТЬ"),t>=768?$(".plaster-type__card:nth-of-type(n+7)").slideToggle(500):$(".plaster-type__card:nth-of-type(n+4)").slideToggle(500)}),(()=>{let t=$(".location__left-geolocation-text:first-of-type span");$(".location__left-geolocation-text:last-of-type span").on("click",function(){$(".location__map iframe").detach(),$(".location__map").append('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2223.292003500938!2d47.29187431631474!3d56.13476298065723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415a37744f5df5c1%3A0xa73446645e6cfb6!2z0KfRg9Cy0LDRiNCz0L7RgdGB0L3QsNCx!5e0!3m2!1sru!2sua!4v1531317122718" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>')}),t.on("click",function(){$(".location__map iframe").detach(),$(".location__map").append('<iframe id="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2228.615629877486!2d47.30225861631197!3d56.04264378063192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415a4a191225afb1%3A0xc1ab41f5a15add8!2z0YPQuy4g0JzQsNC60YHQuNC80LAg0JPQvtGA0YzQutC-0LPQviwgMjYsINCa0YPQs9C10YHQuCwg0KfRg9Cy0LDRiNGB0LrQsNGPINCg0LXRgdC_Liwg0KDQvtGB0YHQuNGPLCA0Mjk1MDA!5e0!3m2!1sru!2sua!4v1530807548757" frameborder="0" allowfullscreen></iframe>')})})();