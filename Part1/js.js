const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let colorInput = document.querySelector("#color-choice");
let lineWidthInput = document.querySelector("#line-size");

// Keep track of whether the mouse button has been pressed down or not.
// Think of this as whether the user is drawing or not, is their brush on the canvas?
let mousedown = false;

canvas.addEventListener("mousedown", function () {
  mousedown = true;
});

canvas.addEventListener("mouseup", function () {
  mousedown = false;
});

// If mouse leaves the canvas then stop drawing
canvas.addEventListener("mouseout", function () {
  mousedown = false;
});

canvas.addEventListener("mousemove", function () {
  // If the mouse button is not pressed down, do not draw.
  if (!mousedown) {
    return;
  }

  // event is a built-in variable, contains the event that triggered this function
  // get the x, y location of the event
  let x = event.offsetX;
  let y = event.offsetY; //offsetX, offsetY, may not work in older browsers

  //Draw a filled rectangle centered under the mouse click
  //x, y is the top left corner, so shift up and left by 5 to center it under the mouse.
  //   ctx.fillRect(x - 5, y - 5, 10, 10);

  // ctx.beginPath();
  // ctx.arc(x - 5, y - 5, 10, 10);
  // ctx.stroke();
  let color = colorInput.value;
  let width = lineWidthInput.value;
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.arc(x - 5, y - 5, width, 0, 6.3);
  ctx.stroke();
});

//
