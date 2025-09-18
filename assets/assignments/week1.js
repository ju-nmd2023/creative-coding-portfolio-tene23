const size = 60;
const gap = 20;
const amount = 5;

const colors = [
    [240,24,24],
    [140, 100, 90],
    [200, 50, 30],
    [80, 160, 80],
    [50, 150, 200]
];

function setup() {
  createCanvas(innerWidth, innerHeight); 
}

function draw() {
  
let colorIndex = Math.floor(Math.random() * colors.length);//Picks a random number (0, 1, 2, 3, 4, or 5) to choose which color from the array
let chosenColor = colors[colorIndex];                        // Get the color array at that index
stroke(chosenColor[0], chosenColor[1], chosenColor[2]);     // Use R, G, B values

background(0, 0, 0);
noFill();
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
