function setup() {
    createCanvas(innerWidth, innerHeight);
}


const size = 100;//size of each element
const layers = 12; //number of rows/ layers in each element

//function manipulate the different layers random, adds a random variant.
function getRandomValue(pos, variance, isUnorganized) { //takes a position
    const varianceReduction = isUnorganized ? 1:8;//Less reduction for unorganized squares
    return pos + map(Math.random(), 0,1,- variance/varianceReduction, variance/varianceReduction); //map, maps from one system to a different system. We get back a random number between 0-1. I reduce the variance number by 8 to create an ordered appearence
} 


//Function to draw the single element
function drawLayers(x, y ,size, layers, isUnorganized) {

    //define a variance
    const variance = size / 10; // here varianve is 10 pixels for every direction// Changed variance to 10
    noFill();
    rectMode(CENTER); //This would center all rectangles within eachother
    for(let i = 0; i < layers; i++) { //A for loop. Add 1 layer until 10
        if(Math.random()> 0.7) { //Randomize look
            continue;
        }    
        const s = (size / layers) * i; //make the rectangle smaller. s= size, original size
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

    // drawLayers(100, 100, size, layers);

    //Now we want to put the rectangle with layers in a grid, just as the original artwork. This is done with a for loop
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
