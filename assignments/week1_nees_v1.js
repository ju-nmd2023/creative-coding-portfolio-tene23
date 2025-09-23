// //Schotter By Georg Nees (1968)
//Squares falling
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
  stroke(255, 0, 50);


  let y = (height - size * amountY - gap * (amountY - 1)) / 2;
  let rotation = 0;

  for (let i = 0; i < amountY; i++) {
    let x = (width - size * amountX - gap * (amountX - 1)) / 2;
//Calculate rotation based on Y position (row number)
    // Add some randomness that increases with each row
    let baseRotation = (i / amountY) * 0.5;

    let weight = map(i, 0, amountY - 2, 2, 0.5);
    strokeWeight(weight);

    for (let k = 0; k < amountX; k++) {
      push();
      translate(x, y);
  // Add random rotation that gets stronger in lower rows
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
