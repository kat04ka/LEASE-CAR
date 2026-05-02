const tabs = document.querySelectorAll(".catalog__tab");
const cards = document.querySelectorAll(".catalog__item");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((btn) => btn.classList.remove("catalog__tab--active"));
    tab.classList.add("catalog__tab--active");

    const category = tab.dataset.tab;

    cards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  simulateTouch: true,
  grabCursor: true,
});
