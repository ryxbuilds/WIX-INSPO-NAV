"use strict";

const nav = document.querySelectorAll(".nav");

const showNav = document.querySelector(".main-icon");
const closeNav = document.querySelector(".icon-switch");
const mainNav = document.querySelector(".nav-dropdown");

// const navFunction = function (nav) {
//   console.log(nav.querySelector(".nav-link"));
// };

// navFunction(nav);

// console.log(dropDown);
// For the drop down when the something in the navigation is clicked
const navDropDown = function (nav) {
  const dropDownIcon = nav.querySelector(".icon-down");
  const dropUpIcon = nav.querySelector(".icon-up");
  const dropContainer = nav.querySelector(".nav-link");
  const dropDown = nav.querySelector(".dropdown");

  console.log(nav);

  // dropContainer.addEventListener("click", function (e) {
  //   console.log("clicked");

  //   e.preventDefault();

  //   dropDownIcon.classList.toggle("hidden");
  //   // if the icon is clicked
  //   dropUpIcon.classList.toggle("hidden");
  //   dropDown.classList.toggle("hidden");
  // });
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
