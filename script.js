"use strict";

// DOM selection
const grid_range = document.getElementById("range-slider");
const grid_range_text = document.querySelector(".range-nr");
const pen_color = document.getElementById("color-select");
const background_color = document.getElementById("bg-color-select");
const grid_container = document.querySelector(".grid-container");
const clear_btn = document.querySelector(".clear-btn");

// General settings
grid_container.style.backgroundColor = `${background_color.value}`;

// This function changes the grid size textContent
const change_grid_size_text = function (gridRange, gridText) {
  return (gridText.textContent = `${gridRange.value} x ${gridRange.value}`);
};
change_grid_size_text(grid_range, grid_range_text);

// Change the background of the grid-container function
function change_bg_color(div) {
  grid_container.style.backgroundColor = `${div.value}`;
}

// Add the wanted amount of grid-div function
function choose_nr_of_div(gridContainer) {
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
}
choose_nr_of_div(grid_container);

// Clear the grid container of all the rows and columns function
function delete_grid_rows_columns(gridContainer) {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

// Display the current grid-value on change
grid_range.addEventListener("click", function () {
  delete_grid_rows_columns(grid_container);
  change_grid_size_text(grid_range, grid_range_text);
  choose_nr_of_div(grid_container);
  draw_pen_color();
});

let is_mouse_down = false;

// Pen color function
const draw_pen_color = function () {
  background_color.onchange(change_bg_color(background_color));
  grid_container.addEventListener("mouseover", function (e) {
    if (is_mouse_down === true) {
      e.target.style.backgroundColor = `${pen_color.value}`;
    }
  });
};

grid_container.addEventListener("click", () => {
  if (is_mouse_down === false) {
    is_mouse_down = true;
    return draw_pen_color();
  }
  if (is_mouse_down === true) {
    return (is_mouse_down = false);
  }
});

grid_container.addEventListener("mouseleave", function () {
  is_mouse_down = false;
});

// The clear sketch function
clear_btn.addEventListener("click", function () {
  is_mouse_down = false;
  grid_container.childNodes.forEach((el) => {
    el.style.backgroundColor = `${background_color.value}`;
  });
});
