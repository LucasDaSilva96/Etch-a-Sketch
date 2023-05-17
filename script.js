"use strict";

// DOM selection
const grid_range = document.getElementById("range-slider");
const grid_range_text = document.querySelector(".range-nr");
const pen_color = document.getElementById("color-select");
const background_color = document.getElementById("bg-color-select");
const grid_container = document.querySelector(".grid-container");

// General settings
grid_container.style.backgroundColor = `${background_color.value}`;

// Change the background of the grid-container function
const change_bg_color = function (div) {
  grid_container.style.backgroundColor = `${div.value}`;
};

// Add the wanted amount of grid-div function

const choose_nr_of_div = function (gridContainer) {
  const rows = Number(grid_range.value);
  const columns = Number(grid_range.value);
  gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

  gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      gridContainer.appendChild(cell);
    }
  }
};
// Display the current grid-value on change
grid_range.addEventListener("click", function () {
  grid_range_text.textContent = `${grid_range.value} x ${grid_range.value}`;
  choose_nr_of_div(grid_container);
});
