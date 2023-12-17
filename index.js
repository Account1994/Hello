console.log("thumbs up copy"); //very cool thumb

const section = document.querySelector("section");
const logo1 = document.querySelectorAll(".logo")[0];
const logo2 = document.querySelectorAll(".logo")[1];
const FPS = 60;

section.style.height = window.innerHeight + "px";
section.style.width = window.innerWidth + "px";

// Logo1 moving velocity Variables
let xPosition1 = 10;
let yPosition1 = 10;
let xSpeed1 = 4;
let ySpeed1 = 4;

// Logo2 moving velocity Variables
let xPosition2 = 100;
let yPosition2 = 100;
let xSpeed2 = 3;
let ySpeed2 = 3;

function update() {
  logo1.style.left = xPosition1 + "px";
  logo1.style.top = yPosition1 + "px";
  logo2.style.left = xPosition2 + "px";
  logo2.style.top = yPosition2 + "px";
}

setInterval(() => {
  // Logo1 movement
  if (xPosition1 + logo1.clientWidth >= window.innerWidth || xPosition1 <= 0) {
    xSpeed1 = -xSpeed1;
  }
  if (yPosition1 + logo1.clientHeight >= window.innerHeight || yPosition1 <= 0) {
    ySpeed1 = -ySpeed1;
  }

  xPosition1 += xSpeed1;
  yPosition1 += ySpeed1;

  // Logo2 movement
  if (xPosition2 + logo2.clientWidth >= window.innerWidth || xPosition2 <= 0) {
    xSpeed2 = -xSpeed2;
  }
  if (yPosition2 + logo2.clientHeight >= window.innerHeight || yPosition2 <= 0) {
    ySpeed2 = -ySpeed2;
  }

  xPosition2 += xSpeed2;
  yPosition2 += ySpeed2;

  update();
}, 1000 / FPS);

window.addEventListener("resize", () => {
  xPosition1 = 10;
  yPosition1 = 10;
  xPosition2 = 100;
  yPosition2 = 100;

  section.style.height = window.innerHeight + "px";
  section.style.width = window.innerWidth + "px";
});



