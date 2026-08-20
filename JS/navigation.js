"use strict";

const nav = document.querySelectorAll(".nav");

const showNav = document.querySelector(".main-icon");
const closeNav = document.querySelector(".icon-switch");
const mainNav = document.querySelector(".nav-dropdown");

const lang = document.querySelectorAll(".language-name");
// const theLanguages = document.querySelector(".language-name");
// const checkIcon = document.querySelector(".icon-check");

// For the drop down when the something in the navigation is clicked
const navDropDown = function (nav) {
  const dropDownIcon = nav.querySelector(".icon-down");
  const dropUpIcon = nav.querySelector(".icon-up");
  const dropContainer = nav.querySelector(".nav-link");
  const dropDown = nav.querySelector(".dropdown");

  // console.log(nav);

  dropContainer.addEventListener("click", function (e) {
    console.log("clicked");

    e.preventDefault();

    dropDownIcon.classList.toggle("hidden");
    // if the icon is clicked
    dropUpIcon.classList.toggle("hidden");
    dropDown.classList.toggle("hidden");
  });
};
nav.forEach(navDropDown);

// For what gets shown when the when the menu icon gets clicked
const NavMenuAppearance = function (e) {
  console.log("show nav is running");

  e.preventDefault();

  mainNav.classList.toggle("hidden");
  showNav.classList.toggle("hidden");
  closeNav.classList.toggle("hidden");
};

closeNav.addEventListener("click", NavMenuAppearance);
showNav.addEventListener("click", NavMenuAppearance);

// For the language icons

const langSelection = function (lang) {
  console.log("language code is running");

  // const theLanguages = lang.querySelector(".language-name");
  const checkIcon = lang.querySelector(".icon-check");

  const italy = lang.querySelector(".italia");
  const english = lang.querySelector(".English");
  const german = lang.querySelector(".german");
  const french = lang.querySelector(".french");
  const spanish = lang.querySelector(".spanish");

  lang.addEventListener("click", function (e) {
    if (checkIcon === true) {
      checkIcon.classList.add("hidden");
    }
    if (checkIcon === false) {
      checkIcon.classList("hidden");
    }
  });
};

lang.forEach(langSelection);
