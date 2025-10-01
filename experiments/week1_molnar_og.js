//Recreation of the original work Dialogue between emotions by Vera Molnar
//Based on Garrits code and recording: https://play.ju.se/media/Noise+examples,+and+Vera+Moln%C3%A1r/0_3pcpvm3q
//Using random for color and appearence
function setup() {
    createCanvas(600, 600);
    background(0);
}


const size = 100;
const layers = 10; 
const gridSize = 6;

const colors = [
     [240,24,24],//red   
     [104, 167, 186], //lightblue
     [255, 255, 255],    
     [40, 47, 97], //purple
     [65, 138, 17],//green
     [194, 114, 166],//pink 
     [255, 255, 0] //yellow
 ];
//function manipulate the different layers random, adds a random variant.
function getRandomValue(pos, variance) { //takes a position
    return pos + map(Math.random(), 0,1,- variance, variance); //map, maps from one system to a different system. We get back a random number between 0-1
}

      
//Function to draw the single element
function drawLayers(x, y ,size, layers) {
    let colorIndex = Math.floor(Math.random() * colors.length);
    let chosenColor = colors[colorIndex];                        
    stroke(chosenColor[0], chosenColor[1], chosenColor[2]);  
    strokeWeight(3);  
  
    const variance = size / 6;
    noFill();
   
    for(let i = 0; i < layers; i++) { //for loop. Add 1 layer until 10
        if(Math.random()> 10) { //Randomize look
            continue;
        }      
        const s = (size / layers) * i; //make the rectangle smaller. s= size, original size
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
    background(0); 

    //Put the rectangle with layers in a grid = using a for loop
    for(let y = 0; y < gridSize; y++) {
        for(let x = 0; x < gridSize; x++) {
            drawLayers(size / 2 + x * size, size / 2 + y * size, size, layers);
        }
    }

    noLoop();
}
