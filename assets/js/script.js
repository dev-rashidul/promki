// Product Slider

$(".product-slider").owlCarousel({
  stagePadding: 100,
  margin: 100,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
      margin: 60,
      stagePadding: 50,
    },
    768: {
      items: 1,
      margin: 60,
      stagePadding: 50,
    },
    992: {
      items: 2,
      margin: 80,
    },
    1200: {
      items: 3,
    },
  },
});

$(".product-details-slider").owlCarousel({
  loop: true,
  nav: true,
  dots: true,
  items: 1,
  navText: [
    '<i class="fa-solid fa-arrow-left-long"></i>',
    '<i class="fa-solid fa-arrow-right-long"></i>',
  ],
});
