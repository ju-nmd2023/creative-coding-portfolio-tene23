//Here I am using the code and artwork from week two and i add sound using tone.js
//To my help i have been using https://tonejs.github.io/
// and Garrits code for poly synth: https://codepen.io/pixelkind/pen/RwEVVaw?editors=1010


let synth;

function setup() {
    createCanvas(600, 600);
    // synth = new Tone.Synth().toDestination();
    synth = new Tone.PolySynth().toDestination();
}

const size = 100;
const layers = 12; 
//function manipulate the different layers random, adds a random variant.
function getRandomValue(pos, variance, isUnorganized) {
    const varianceReduction = isUnorganized ? 1:8;
    // The next line of code was retreived from p5js website. https://p5js.org/reference/p5/map/
    return pos + map(Math.random(), 0,1,- variance/varianceReduction, variance/varianceReduction); //map, maps from one system to a different system. We get back a random number between 0-1. I reduce the variance number by 8 to create an ordered appearence
}


//Function to draw the single element
function drawLayers(x, y ,size, layers, isUnorganized) {
    //define a variance
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
    
    }
}



function draw() {
    background(109,148,106); 

    let squareIndex = 0;

    const padding = 50;


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

//The following lines of code was gathered from claude.ai 01-10-2025
function mousePressed() {
    Tone.start();
    
    // Figure out which square was clicked
    let col = floor(mouseX / size);
    let row = floor(mouseY / size);
    
    // Make sure click is within grid
    if(col >= 0 && col < 10 && row >= 0 && row < 10) {
        let squareIndex = row * 10 + col;
        let isUnorganized = (squareIndex % 3 === 0);
        
        const notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"];
        
        if(isUnorganized) {
            synth.triggerAttackRelease("C3", "8n");
        } else {
            let noteIndex = squareIndex % notes.length;
            synth.triggerAttackRelease(notes[noteIndex], "8n");
        }
    }
}