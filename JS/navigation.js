"use strict";

const dropDownIcon = document.querySelector(".icon-down");
const dropUpIcon = document.querySelector(".icon-up");
const dropContainer = document.querySelector(".nav");
const dropDown = document.querySelector(".dropdown");

// console.log(dropDown);
dropContainer.addEventListener("click", function (e) {
  console.log("clicked");

  dropDownIcon.classList.toggle("hidden");
  // if the icon is clicked
  dropUpIcon.classList.toggle("hidden");
  dropDown.classList.toggle("hidden");
});
