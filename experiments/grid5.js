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
  let counter = 0;
  for (let i = 0; i < amount; i++) {
    let x = (width - size * amount - gap * (amount - 1)) / 2;
    for (let k = 0; k < amount; k++) {
      push();
      translate(x, y);

      if (counter % 3 === 0) {
        rotate(Math.PI / 30);
        fill(0, 0, 0);
      }
      square(0, 0, size);
      pop();
      counter++;
      x += size + gap;
    }
    y += size + gap;
  }

  noLoop();
}
