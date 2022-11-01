// Navigation Mobile Menu Script

let menuIcon = document.querySelector(".menu");
let closeIcon = document.querySelector(".close");
let nav = document.querySelector(".mob-nav");
let overlay = document.querySelector(".overlay");
let body = document.getElementsByTagName("BODY")[0];

menuIcon.addEventListener('click', () => {
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    nav.classList.remove('hidden');
    overlay.classList.remove('hidden');
    body.style.position = "fixed";
});

closeIcon.addEventListener('click', () => {
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    nav.classList.add('hidden');
    overlay.classList.add('hidden');
    body.style.position = "static";
});

// Features tabs Script

let tabBtnOne = document.querySelector("#btn-one");
let tabBtnTwo = document.querySelector("#btn-two");
let tabBtnThree = document.querySelector("#btn-three");

let tabOne = document.querySelector("#tab-one");
let tabTwo = document.querySelector("#tab-two");
let tabThree = document.querySelector("#tab-three");

tabBtnOne.addEventListener('click', () => {
  tabOne.classList.remove("hidden");
  tabTwo.classList.add("hidden");
  tabThree.classList.add("hidden");
});

tabBtnTwo.addEventListener('click', () => {
  tabOne.classList.add("hidden");
  tabTwo.classList.remove("hidden");
  tabThree.classList.add("hidden");
});

tabBtnThree.addEventListener('click', () => {
  tabOne.classList.add("hidden");
  tabTwo.classList.add("hidden");
  tabThree.classList.remove("hidden");
});


// Accordion Section Script

let accOne = document.querySelector("#acc-one");
let answerOne = document.querySelector("#a-one");

accOne.addEventListener('click', () => {
  answerOne.classList.toggle("closed");
  answerTwo.classList.add("closed");
  answerThree.classList.add("closed");
  answerFour.classList.add("closed");
});

let accTwo = document.querySelector("#acc-two");
let answerTwo = document.querySelector("#a-two");

accTwo.addEventListener('click', () => {
  answerTwo.classList.toggle("closed");
  answerOne.classList.add("closed");
  answerThree.classList.add("closed");
  answerFour.classList.add("closed");
});

let accThree = document.querySelector("#acc-three");
let answerThree = document.querySelector("#a-three");

accThree.addEventListener('click', () => {
  answerThree.classList.toggle("closed");
  answerTwo.classList.add("closed");
  answerOne.classList.add("closed");
  answerFour.classList.add("closed");
});

let accFour = document.querySelector("#acc-four");
let answerFour = document.querySelector("#a-four");

accFour.addEventListener('click', () => {
  answerFour.classList.toggle("closed");
  answerTwo.classList.add("closed");
  answerThree.classList.add("closed");
  answerOne.classList.add("closed");
});