"use strict";

const dropDownIcon = document.querySelector(".icon-down");
const dropUpIcon = document.querySelector(".icon-up");
const dropContainer = document.querySelector(".nav-link");
const dropDown = document.querySelector(".dropdown");

const showNav = document.querySelector(".main-icon");
const closeNav = document.querySelector(".icon-switch");
const mainNav = document.querySelector(".nav-dropdown");

// console.log(dropDown);
dropContainer.addEventListener("click", function (e) {
  console.log("clicked");

  e.preventDefault();

  dropDownIcon.classList.toggle("hidden");
  // if the icon is clicked
  dropUpIcon.classList.toggle("hidden");
  dropDown.classList.toggle("hidden");
});

showNav.addEventListener("click", function (e) {
  console.log("show nav is running");
  e.preventDefault();

  mainNav.classList.toggle("hidden");
  showNav.classList.toggle("hidden");
  closeNav.classList.toggle("hidden");
});

closeNav.addEventListener("click", function (e) {
  e.preventDefault();

  mainNav.classList.toggle("hidden");
  showNav.classList.toggle("hidden");
  closeNav.classList.toggle("hidden");
});
