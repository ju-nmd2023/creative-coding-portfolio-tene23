//Work inspired by Vera Molnar
//Dialog Between Emotion and Method | Vera Molnár (1986)

const size = 40;
const gap = 20;
const amount = 5;

function setup() {
    createCanvas(innerWidth, innerHeight);
}


function draw() {
    background(0,0,0);
    noFill();
    strokeWeight(1);
}

let y = (height - size * amount - gap * (amount - 1)) / 2;
let x = (width - size * amount - gap * (amount - 1)) / 2;


function drawElement() {
    //
}

