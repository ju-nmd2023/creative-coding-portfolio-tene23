// //Schotter By Georg Nees (1968)
// //My attempt on recreating the original artpiece
const size = 60;
const gap = 0;
const amountX = 5;
const amountY = 7;

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(255, 255, 255);
  noFill();
  stroke(0, 0, 0);
  strokeWeight(1);

  let y = (height - size * amountY - gap * (amountY - 1)) / 2;
  let rotation = 0;

  for (let i = 0; i < amountY; i++) {
    let x = (width - size * amountX - gap * (amountX - 1)) / 2;

    let baseRotation = (i / amountY) * 0.5;

    for (let k = 0; k < amountX; k++) {
      push();
      translate(x, y);

      let randomRotation = random (- baseRotation, baseRotation);
      rotate(randomRotation);
      
      square(0, 0, size);
      pop();
      x += size + gap;
    //   rotation += 0.02;
    }
    y += size + gap;
  }

  noLoop();
}
