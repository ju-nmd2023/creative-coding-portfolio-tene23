function setup() {
    createCanvas(1000, 1000);
}


const size = 100;//size of each element
const layers = 10; //number of rows/ layers in each element

const colors = [
     [240,24,24],//red
     [0, 20, 250], //blue
     [255, 100, 250],
     [30, 160, 80],
     [255, 255, 0] //yellow
 ];
//function manipulate the different layers random, adds a random variant.
function getRandomValue(pos, variance) { //takes a position
    return pos + map(Math.random(), 0,1,- variance, variance); //map, maps from one system to a different system. We get back a random number between 0-1
}


//Function to draw the single element
function drawLayers(x, y ,size, layers) {
    let colorIndex = Math.floor(Math.random() * colors.length);//Picks a random number (0, 1, 2, 3, 4, or 5) to choose which color from the array
    let chosenColor = colors[colorIndex];                        // Get the color array at that index
    stroke(chosenColor[0], chosenColor[1], chosenColor[2]);     // Use R, G, B values

    // const half = size / 2;
    //define a variance
    const variance = size / 20; // here varianve is 10 pixels for every direction
    noFill();
    //rectMode(CENTER); This would center all rectangles within eachother
    for(let i = 0; i < layers; i++) { //A for loop. Add 1 layer until 10
        if(Math.random()> 0.7) { //Randomize look
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
        // rect(x-half, y-half, s, s);// draw rectangle. (x,y,width,height)
    }
}



function draw() {
    background(0,0,0); 

    // drawLayers(100, 100, size, layers);

    //Now we want to put the rectangle with layers in a grid, just as the original artwork. This is done with a for loop
    for(let y = 0; y < 10; y++) {
        for(let x = 0; x <10; x++) {
            drawLayers(size / 2 + x * size, size / 2 + y * size, size, layers);
        }
    }

    noLoop();
}
