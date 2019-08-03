// Если на проекте jQuery
$( document ).ready(function() {
  // code

  $('.drawer').drawer();
  $( ".slide-basket__btn" ).click(function() {
    $('.drawer').drawer('open');
  });

  $("#product-summary-slider").slick({
      mobileFirst: !0,
      infinite: !0,
      dots: !1,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !0,
      focusOnSelect: !0,
      accessibility: !1,
      responsive: [{
          breakpoint: 767,
          settings: (l = {
              slidesToShow: 4,
              slidesToScroll: 1,
              arrows: !0,
              infinite: !0,
              dots: !1
          },
          l.arrows = !0,
          l.focusOnSelect = !0,
          l.vertical = !0,
          l.asNavFor = ".product-summary-slider-main",
          l)
      }, {
          breakpoint: 1199,
          settings: (c = {
              slidesToShow: 5,
              slidesToScroll: 1,
              arrows: !0,
              infinite: !0,
              dots: !1
          },
          c.arrows = !0,
          c.focusOnSelect = !0,
          c.vertical = !0,
          c.asNavFor = ".product-summary-slider-main",
          c)
      }]
  }),
  $("#product-summary-slider-main").slick({
      mobileFirst: !0,
      infinite: !0,
      dots: !1,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !0,
      focusOnSelect: !0,
      accessibility: !1,
      fade: !0,
      cssEase: "linear",
      responsive: [{
          breakpoint: 767,
          settings: (d = {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: !1,
              infinite: !0,
              dots: !1
          },
          d.arrows = !1,
          d.focusOnSelect = !0,
          d.asNavFor = "#product-summary-slider",
          d)
      }, {
          breakpoint: 1199,
          settings: (p = {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: !1,
              infinite: !0,
              dots: !1
          },
          p.arrows = !1,
          p.focusOnSelect = !0,
          p.asNavFor = "#product-summary-slider",
          p)
      }]
  }),
  $(".product-summary-slider-main .slider-item:not(.slick-cloned) a, .fancy-gallery, .fancy_gallery").fancybox({
      loop: !0,
      animationEffect: "fade",
      btnTpl: {
          slideShow: !1,
          fullScreen: !1,
          thumbs: !1,
          close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',
          smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'
      }
  })
});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
