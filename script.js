"use strict";

// DOM selection
const grid_range = document.getElementById("range-slider");
const grid_range_text = document.querySelector(".range-nr");
const pen_color = document.getElementById("color-select");
const background_color = document.getElementById("bg-color-select");
const grid_container = document.querySelector(".grid-container");

// Display the current grid-value on change
grid_range.addEventListener("click", function () {
  grid_range_text.textContent = `${grid_range.value} x ${grid_range.value}`;
});

// Change the background of the grid-container function
const change_bg_color = function (div) {
  grid_container.style.backgroundColor = `${div.value}`;
};
