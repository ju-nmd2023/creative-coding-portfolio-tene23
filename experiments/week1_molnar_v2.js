//Conflicting method and emotion
//Using variation. Every third item is different
//Based on the code from my: week1_molnar_og.js
function setup() {
    createCanvas(600, 600);
}


const size = 100;
const layers = 12; 

//function manipulate the different layers random, adds a random variant.
function getRandomValue(pos, variance, isUnorganized) { //takes a position
    const varianceReduction = isUnorganized ? 1:8;//Less reduction for unorganized squares
    // The next line of code was retreived from p5js website. https://p5js.org/reference/p5/map/
    return pos + map(Math.random(), 0,1,- variance/varianceReduction, variance/varianceReduction); //map, maps from one system to a different system. We get back a random number between 0-1. I reduce the variance number by 8 to create an ordered appearence
} 


function drawLayers(x, y ,size, layers, isUnorganized) {

    const variance = size / 10; 
    noFill();
    rectMode(CENTER); 
    for(let i = 0; i < layers; i++) { 
        if(Math.random()> 0.7) { 
            continue;
        }    
        const s = (size / layers) * i; 
        const half = s / 2;
        beginShape();
        vertex(
            getRandomValue(x - half, variance, isUnorganized), 
            getRandomValue(y - half, variance, isUnorganized)
        );//creates layers on upper side
        
        vertex(
            getRandomValue(x + half, variance, isUnorganized), 
            getRandomValue(y - half, variance, isUnorganized)
        );//Creates layers on right side
        
        vertex(
            getRandomValue(x + half, variance, isUnorganized), 
            getRandomValue(y + half, variance, isUnorganized)
        );//creates layers on under side
        
        vertex(getRandomValue(x - half, variance, isUnorganized),
        getRandomValue(y + half, variance, isUnorganized)
    );
        
    endShape(CLOSE);//closes the shape
        // rect(x-half, y-half, s, s);// draw rectangle. (x,y,width,height)
    }
}



function draw() {
    background(214,76,60); 

    let squareIndex = 0;

    const padding = 50;
//every third square should be unorganized = i use a for loop
    for(let y = 0; y < 10; y++) {
        for(let x = 0; x <10; x++) {
            let isUnorganized = (squareIndex % 3 ===0);

            drawLayers(
            size / 2 + x * size, 
            size / 2 + y * size, 
            size, layers, isUnorganized);
            squareIndex++;

            
        }
    }

    noLoop();
}
