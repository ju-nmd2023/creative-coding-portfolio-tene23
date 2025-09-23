const size = 60;
const gap = 20;
const amount = 5;

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(255, 255, 255);
  noFill();
  stroke(0, 0, 0);
  strokeWeight(2);

  let y = (height - size * amount - gap * (amount - 1)) / 2;
  let rotation = 0;
  for (let i = 0; i < amount; i++) {
    let x = (width - size * amount - gap * (amount - 1)) / 2;
    for (let k = 0; k < amount; k++) {
      push();
      translate(x, y);
      rotate(rotation);
      square(0, 0, size);
      pop();
      x += size + gap;
      rotation += 0.02;
    }
    y += size + gap;
  }

  noLoop();
}

