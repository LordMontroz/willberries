const mySwiper = new Swiper(".swiper-container", {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
});

const buttonCart = document.querySelector(".button-cart");
const modalCart = document.querySelector("#modal-cart");
const modalClose = document.querySelector(".modal-close");

const openModal = function () {
  modalCart.classList.add("show");
};

const closeModal = function () {
  modalCart.classList.remove("show");
};

buttonCart.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);

modalCart.addEventListener("click", (event) => {
  const target = event.target;
  if (
    event.target.classList.contains("overlay") ||
    target.classList.contains("modal-close")
  ) {
    closeModal();
  }
});

// scroll smooth
(function () {
  const scrollLinks = document.querySelectorAll("a.scroll-link");

  for (let i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener("click", function (event) {
      event.preventDefault();
      const id = scrollLinks[i].getAttribute("href");
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
})();

// goods

const more = document.querySelector(".more");
const navigationItem = document.querySelectorAll("navigation-item");
const longGoodsList = document.querySelector("long-goods-list");

const getGoods = async function () {
  const result = await fetch("db/db.json");
  if (!result.ok) {
    throw "Ошибочка вышла: " + result.status;
  }
  return await result.json();
};

const createCard = function (objCard) {
  const card = document.createElement("div");
  card.className = "col-lg-3 col-sm-6";

  card.innerHTML = ` 
        <div class="goods-card">
					<span class="label">New</span>
				<img src="img/image-120.jpg" alt="image: Faded Beach Trousers" class="goods-image">
					<h3 class="goods-title">Faded Beach Trousers</h3>
					<p class="goods-description">Navy/Ochre/Black/Khaki</p>
					<button class="button goods-card-btn add-to-cart" data-id="011">
						<span class="button-price">$139</span>
					</button>
				</div>
                `;


  return card;
};

const renderCards = function (data) {

  longGoodsList.textContent = "";
  
};

renderCards();
