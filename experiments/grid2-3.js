const size = 60; //size of the squares
const gap = 20; //gap between the squares
const amount = 5; //5 squares

function setup() {
  createCanvas(innerWidth, innerHeight); //inner width, inner height, gör canvas lika stort som mitt fönster
}

function draw() {
  background(255, 255, 255);
  noFill();
  stroke(0, 0, 0);
  strokeWeight(2);

  //5 squares next to each other
  // calculate the starting position based on the amount of squares and the screen width
//   let x = (width - size * amount - gap * (amount - 1)) / 2;
//   const y = (height - size) / 2;
//   for (let i = 0; i < amount; i++) { //for loop, startar med 0
//     square(x, y, size);
//     x += size + gap;
//   }

//5 x 5 squares in a grid
  let y = (height - size * amount - gap * (amount - 1)) / 2;
  for (let i = 0; i < amount; i++) {
    let x = (width - size * amount - gap * (amount - 1)) / 2;
    for (let k = 0; k < amount; k++) {
      square(x, y, size);
      x += size + gap;
    }
    y += size + gap;
  }
  noLoop();
}
