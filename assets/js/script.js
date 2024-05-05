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

// Product Details Slider

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


// Price History Chart

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["16 Wrz 23", "16 Lis 23", "16 Sty 24", "16 Mar 24"],
    datasets: [
      {
        label: "Price History",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});


// Expand Desctiption

const exdBtn = document.getElementById("exdBtn")
const productDescription = document.getElementById("productDescription")

exdBtn.addEventListener("click", ()=>{
  productDescription.classList.toggle("active")
  exdBtn.style.display = "none"
})

// Expand Technical Data

const exTdBtn = document.getElementById("exTdBtn")
const tdCard = document.getElementById("tdCard")

exTdBtn.addEventListener("click", ()=>{
  tdCard.classList.toggle("active")
  exTdBtn.style.display = "none"
})

