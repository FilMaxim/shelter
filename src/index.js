import "./style.scss";

console.log(`1. Реализация burger menu на обеих страницах: +26
2. Реализация слайдера-карусели на странице Main: +36
3. Реализация пагинации на странице Pets: +36
4. Реализация попап на обеих страницах: +12
SCORE: 110 `)

//-----burger menu-----
const body = document.body;
const iconBurger = document.querySelector("#hamb");
const listBurger = document.querySelector(".header__list");
const popup = document.querySelector(".popup");
const itemLink = document.querySelectorAll(".header__item");

const clickMenu = () => {
  iconBurger.classList.toggle("header__burger--active");
  listBurger.classList.toggle("header__list--active");
  popup.classList.toggle("popup--active");
  body.classList.toggle("unscroll");
};

iconBurger.addEventListener("click", clickMenu);
popup.addEventListener("click", clickMenu);
itemLink.forEach((el) => el.addEventListener("click", clickMenu));

//-----slaider-----
const slider = document.querySelector(".friends__slider");
const btnPrev = document.querySelector(".button__prev");
const btnNext = document.querySelector(".button__next");
const modalPopap = document.querySelector(".modal__popap");
const itemPets = document.querySelectorAll(".friends__item");
const btnClose = document.querySelector(".modal__batton");
const modalFade = document.querySelector(".modal__fade");

let y = require("./pets.json");
let data = JSON.parse(JSON.stringify(y));

// перемешать массив
function shuffle(array) {
  let changrArr = array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
  return changrArr
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
}
function renderPets(arr) {
  const listSlider = document.createElement("ul");
  listSlider.classList.add("friends__list");
  arr.forEach((cart) => {
    const pet = document.createElement("li");
    pet.classList.add("friends__item");

    pet.addEventListener("click", () => {
      const objClick = data.filter((el) => el.id === Number(cart.id));
      renderModal(objClick);
      modalPopap.classList.add("modal--active");
      modalFade.classList.add("modal__fade--active");
      body.classList.add("unscroll__modal");
    });

    const imagePet = document.createElement("div");
    imagePet.classList.add("friends__image");
    const photoPet = document.createElement("img");
    photoPet.classList.add("friend__photo");
    photoPet.src = cart.img;
    photoPet.alt = cart.name;
    photoPet.width = 270;
    photoPet.height = 270;
    imagePet.append(photoPet);
    const titlePet = document.createElement("h4");
    titlePet.classList.add("friends__name");
    titlePet.innerHTML = cart.name;
    const buttonPet = document.createElement("button");
    buttonPet.classList.add("button");
    buttonPet.classList.add("friends__more");
    buttonPet.type = "button";
    buttonPet.innerHTML = "Learn more";
    pet.append(imagePet, titlePet, buttonPet);
    listSlider.append(pet);
  });
  return listSlider;
}

let countPet = 3;
let arrSlides = [];
data = shuffle(data);
let curentCard = data.slice(0, countPet); //3
let residue = shuffle(data.filter((el) => !curentCard.includes(el))); //5
let nextCard = residue.slice(0, countPet); //3
let prevCard = shuffle(residue).slice(0, countPet);

let a = renderPets(prevCard);
let b = renderPets(curentCard);
let c = renderPets(nextCard);

//---- медиа запрос на  меньше 768px и меньше 320px
const addRenderNewCards = (countPet) => {
  curentCard = data.slice(0, countPet); //3
  residue = shuffle(data.filter((el) => !curentCard.includes(el))); //5
  nextCard = residue.slice(0, countPet); //3
  prevCard = shuffle(residue).slice(0, countPet);
  arrSlides = [];
  slider.innerHTML = "";
  slider.append(
    renderPets(prevCard),
    renderPets(curentCard),
    renderPets(nextCard)
  );
  arrSlides.push(prevCard, curentCard, nextCard);  
};

//----медиа запрос на  768px 320px------------------
const 
  screen = {
    1 : null,
    2 : window.matchMedia('(min-width: 321px)'),
    3 : window.matchMedia('(min-width: 769px)')
  };

for (let [scr, mq] of Object.entries(screen)) {
  if (mq) mq.addEventListener('change', mqHandler);
}

mqHandler();
  
function mqHandler() {  
  let size = null;
  for (let [scr, mq] of Object.entries(screen)) {
    if (!mq || mq.matches) size = scr;
  }
  console.log(size)
  countPet = Number(size);
    addRenderNewCards(countPet);  
}


//---- click next/prev ----
const shiftNext = () => {
  slider.classList.add("activeNext");
  btnNext.removeEventListener("click", shiftNext);
};

const shiftPrev = () => {
  slider.classList.add("activePrev");
  btnPrev.removeEventListener("click", shiftPrev);
};

btnNext.addEventListener("click", shiftNext);
btnPrev.addEventListener("click", shiftPrev);

slider.addEventListener("animationend", () => {
  if (slider.classList.contains("activeNext")) {
    slider.classList.remove("activeNext");
    residue = shuffle(
      data.filter((el) => !arrSlides[arrSlides.length - 1].includes(el))
    );
    arrSlides.shift();
    arrSlides.push(shuffle(residue).slice(0, countPet));
    slider.firstElementChild.remove();
    slider.append(renderPets(arrSlides[arrSlides.length - 1]));
    btnNext.addEventListener("click", shiftNext);
  }
  if (slider.classList.contains("activePrev")) {
    slider.classList.remove("activePrev");
    residue = shuffle(data.filter((el) => !arrSlides[0].includes(el)));
    arrSlides.pop();
    arrSlides.unshift(shuffle(residue).slice(0, countPet));
    slider.lastElementChild.remove();
    slider.prepend(renderPets(arrSlides[0]));
    btnPrev.addEventListener("click", shiftPrev);
  }
});



//--- попап с описанием pets ---
function renderModal(arr) {
  modalPopap.innerHTML = "";
  const modalWrapper = document.createElement("div");
  modalWrapper.classList.add("modal__wrapper");

  const buttonModal = document.createElement("button");
  buttonModal.classList.add("modal__batton");
  buttonModal.addEventListener("click", closeModal);

  const imageModal = document.createElement("div");
  imageModal.classList.add("modal__image");
  const photoModal = document.createElement("img");
  photoModal.classList.add("modal__photo");
  photoModal.src = arr[0].img;
  photoModal.alt = arr[0].name;
  imageModal.append(photoModal);

  const descModal = document.createElement("div");
  descModal.classList.add("modal__desc");
  const titleModal = document.createElement("h3");
  titleModal.classList.add("title");
  titleModal.classList.add("modal__title");
  titleModal.textContent = arr[0].name;
  const typeModal = document.createElement("h4");
  typeModal.classList.add("modal__type");
  typeModal.textContent = arr[0].type + " - " + arr[0].breed;
  const spanModal = document.createElement("span");
  spanModal.classList.add("modal__span");
  spanModal.textContent = arr[0].description;
  const listModal = document.createElement("ul");
  listModal.classList.add("modal__list");
  const param = ["age", "inoculations", "diseases", "parasites"];
  param.forEach((el) => {
    const itemModal = document.createElement("li");
    itemModal.classList.add("modal__item");
    itemModal.textContent = el + ": ";
    const spanItem = document.createElement("span");
    spanItem.textContent = arr[0][el];
    itemModal.append(spanItem);
    listModal.append(itemModal);
  });
  descModal.append(titleModal, typeModal, spanModal, listModal);
  modalWrapper.append(buttonModal, imageModal, descModal);
  modalPopap.append(modalWrapper);
}

const closeModal = () => {
  modalPopap.classList.remove("modal--active");
  modalFade.classList.remove("modal__fade--active");
  body.classList.remove("unscroll__modal");
};

modalFade.addEventListener("click", closeModal);
modalPopap.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal__popap")) {
    closeModal();
  }
});
