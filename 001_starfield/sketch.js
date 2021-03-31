let stars = [];
let speed;

function setup() {
  createCanvas(800, 800);
  
  for (let i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background(0);

  // control center by mouse
  let x = map(mouseX, 0, width, 0, width);
  let y = map(mouseY, 0, height, 0, height);
  translate(x, y);
  
  
  // control speed by mouse
  speed = map(mouseX, 0, width, 0, 20)
  
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}