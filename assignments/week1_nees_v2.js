// //Schotter By Georg Nees (1968)
//Squares falling
//My attempt on recreating the original artpiece
//waterfall colors with noise
const size = 50;
const gap = 0;
const amountX = 5;
const amountY = 7;

function setup() {
  createCanvas(innerWidth, innerHeight);

  frameRate(30);
}

function draw() {
  background(0);
  noFill();
  stroke(255, 0, 50);


  let y = (height - size * amountY - gap * (amountY - 1)) / 2;
  let time = frameCount * 0.05; // Slow down the animation


  for (let i = 0; i < amountY; i++) {
    let x = (width - size * amountX - gap * (amountX - 4)) / 2;

    // The next line of code was retreived from p5js website. https://p5js.org/reference/p5/map/
    let weight = map(i, 0, amountY - 2, 2, 0.5);
    strokeWeight(weight);

    for (let k = 0; k < amountX; k++) {
      push();
      translate(x, y);


      let redColors = [
        [255, 0, 0],    // Very dark red
        [255, 155, 0],   // Dark red
        [0, 0, 250],   // Medium red
        [145, 40, 240],   // Light red
        [250, 100, 170]    // Bright red
      ];


      let noiseVal = noise(k * 0.1, i * 0.1, time);
      let colorIndex = floor(noiseVal * redColors.length); // Convert noise to array index
      let chosenColor = redColors[colorIndex];
      let ellipseSize = map(i, 0, amountY - 1, size, size * 0.3);
      stroke(chosenColor[0], chosenColor[1], chosenColor[2]);
      ellipse(0, 0, ellipseSize);
      pop();
      x += size + gap;
    //   rotation += 0.02;
    }
    y += size + gap;
  }

  //noLoop();
}
