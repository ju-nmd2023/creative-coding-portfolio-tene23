//Disco dancefloor
//Using random for color, look and movement
//Based on the code from my: week1_molnar_og.js
function setup() {
    createCanvas(600, 600);
    frameRate(3);
    background(0);

}


const size = 100;
const layers = 12; //number of rows/ layers in each element

const colors = [
     [208,0,255],//purple
     [93, 187, 245], //blue
     [255, 8, 250],//pink
     [252, 195, 71],//orange
     [208, 255, 0] //yellow
 ];
//function manipulate the different layers random, adds a random variant.
// The next line of code was retreived from p5js website. https://p5js.org/reference/p5/map/
function getRandomValue(pos, variance) { //takes a position
    return pos + map(Math.random(), 0,1,- variance/4, variance/4); //map, maps from one system to a different system. We get back a random number between 0-1. I reduce the variance, divided by 4 to get a more organized look
}


//Function to draw the single element
function drawLayers(x, y ,size, layers) {
    let colorIndex = Math.floor(Math.random() * colors.length);
    let chosenColor = colors[colorIndex];                        
    stroke(chosenColor[0], chosenColor[1], chosenColor[2]);    
    strokeWeight(random(1,3));

   
    const variance = size / 20; 
    noFill();
    rectMode(CENTER); //This center all rectangles within eachother giving it a more organized appearence
    for(let i = 0; i < layers; i++) { 
        if(Math.random()> 0.7) { 
            continue;
        }    
        const s = (size / layers) * i; 
        const half = s / 2;
        beginShape();
        vertex(
            getRandomValue(x - half, variance), 
            getRandomValue(y - half, variance)
        );//creates layers on upper side
        
        vertex(
            getRandomValue(x + half, variance), 
            getRandomValue(y - half, variance)
        );//Creates layers on right side
        
        vertex(
            getRandomValue(x + half, variance), 
            getRandomValue(y + half, variance)
        );//creates layers on under side
        
        vertex(getRandomValue(x - half, variance),
        getRandomValue(y + half, variance)
    );
        
    endShape(CLOSE);//closes the shape
    
    }
}



function draw() {
    background(0,0,0); 


    for(let y = 0; y < 6; y++) {
        for(let x = 0; x <6; x++) {
            drawLayers(size / 2 + x * size, size / 2 + y * size, size, layers);
        }
    }

     //noLoop();
}
