$(".owl-carousel").owlCarousel({
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
