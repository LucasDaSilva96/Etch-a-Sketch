"use strict";

// DOM selection
const grid_range = document.getElementById("range-slider");
const grid_range_text = document.querySelector(".range-nr");

// Display the current grid-value on change
grid_range.addEventListener("click", function () {
  grid_range_text.textContent = `${grid_range.value} x ${grid_range.value}`;
});
