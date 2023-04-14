import "./pets.scss";
console.log(`1. Реализация burger menu на обеих страницах: +26
2. Реализация слайдера-карусели на странице Main: +36
3. Реализация пагинации на странице Pets: +36
4. Реализация попап на обеих страницах: +12
SCORE: 110 `);

console.log(
  `Для удобства кросчека в консоль выведен массив из страниц с карточками, при изменении ширины массив будет обновляться`
);
// burger menu

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

// ----pagination----

const listPagination = document.querySelector(".friends__list");
const btnNextPage = document.querySelector(".next__element");
const btnPrevPage = document.querySelector(".prev__element");
const numderPageCurent = document.querySelector(".number__page");
const firstPage = document.querySelector(".prev__page");
const lastPage = document.querySelector(".next__page");
const modalPopap = document.querySelector(".modal__popap");
const modalFade = document.querySelector(".modal__fade");
btnPrevPage.classList.add("no-active");
firstPage.classList.add("no-active");

let y = require("../pets.json");
let data = JSON.parse(JSON.stringify(y));
data = shuffle(data);

let countPetsOnPage = 8;
let arrPets = createArrPagination(data, countPetsOnPage);

renderPets(arrPets[0]);
let curentPage = 1;
let statusfirstPage = false;
let statusLastPage = true;

const arrPets1280 = createArrPagination(data, 8);
const arrPets768 = createArrPagination(data, 6);
const arrPets320 = createArrPagination(data, 3);

//----медиа запрос на  768px 320px------------------
const screen = {
  3: null,
  6: window.matchMedia("(min-width: 321px)"),
  8: window.matchMedia("(min-width: 769px)"),
};

for (let [scr, mq] of Object.entries(screen)) {
  if (mq) mq.addEventListener("change", mqHandler);
}

mqHandler();

function mqHandler() {
  let size = null;
  for (let [scr, mq] of Object.entries(screen)) {
    if (!mq || mq.matches) size = scr;
  }
  if (Number(size) === 3) arrPets = arrPets320;
  if (Number(size) === 6) arrPets = arrPets768;
  if (Number(size) === 8) arrPets = arrPets1280;
  if (curentPage > arrPets.length) {
    curentPage = arrPets.length;
    numderPageCurent.textContent = curentPage;
  }
  if (curentPage < arrPets.length) {
    statusLastPage = true;
    btnNextPage.classList.remove("no-active");
    lastPage.classList.remove("no-active");
  }
  console.log(arrPets);
  renderPets(arrPets[curentPage - 1]);
}

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

function createArrPagination(data, countPetsOnPage) {
  const countPets = 48;
  const countPage = countPets / countPetsOnPage;
  const arrPets = [];
  for (let i = 0; i < countPets / data.length; i++) {
    arrPets.push(data);
  }
  let arrUnite = [].concat(...arrPets);
  let res = [];
  for (let i = 0; i < arrUnite.length; i += countPetsOnPage) {
    const chunk = arrUnite.slice(i, i + countPetsOnPage);
    res.push(shuffle(chunk));
  }
  return res;
}

function renderPets(arr) {
  listPagination.innerHTML = "";
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
    photoPet.src = `.${cart.img}`;
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
    listPagination.append(pet);
  });
  return listPagination;
}

btnNextPage.addEventListener("click", () => {
  if (statusLastPage) {
    curentPage++;
    statusfirstPage = true;
    numderPageCurent.textContent = curentPage;
    renderPets(arrPets[curentPage - 1]);
    firstPage.classList.remove("no-active");
    btnPrevPage.classList.remove("no-active");
    if (curentPage === arrPets.length) {
      statusLastPage = false;
      btnNextPage.classList.add("no-active");
      lastPage.classList.add("no-active");
    }
  }
});

btnPrevPage.addEventListener("click", () => {
  if (statusfirstPage) {
    curentPage--;
    statusLastPage = true;
    numderPageCurent.textContent = curentPage;
    renderPets(arrPets[curentPage - 1]);
    btnNextPage.classList.remove("no-active");
    lastPage.classList.remove("no-active");
    if (curentPage === 1) {
      statusfirstPage = false;
      btnPrevPage.classList.add("no-active");
      firstPage.classList.add("no-active");
    }
  }
});

firstPage.addEventListener("click", () => {
  if (statusfirstPage) {
    curentPage = 1;
    numderPageCurent.textContent = curentPage;
    renderPets(arrPets[0]);
    statusLastPage = true;
    statusfirstPage = false;
    btnPrevPage.classList.add("no-active");
    firstPage.classList.add("no-active");
    btnNextPage.classList.remove("no-active");
    lastPage.classList.remove("no-active");
  }
});

lastPage.addEventListener("click", () => {
  if (statusLastPage) {
    curentPage = arrPets.length;
    numderPageCurent.textContent = curentPage;
    renderPets(arrPets[curentPage - 1]);
    statusLastPage = false;
    statusfirstPage = true;
    btnNextPage.classList.add("no-active");
    lastPage.classList.add("no-active");
    btnPrevPage.classList.remove("no-active");
    firstPage.classList.remove("no-active");
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
  photoModal.src = `.${arr[0].img}`;
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
