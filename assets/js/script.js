$(".owl-carousel").owlCarousel({
  stagePadding: 100,
  loop: true,
  margin: 100,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    9920: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});
