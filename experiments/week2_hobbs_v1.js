//Recreation of Slow Lessons by Tyler Hobbs
let menY = 80;

function setup() {
    createCanvas(600,800);
    background(255);
    field = generateField();
    generateAgents();
    
}

const colors = [
  [92, 139, 173],
  [230, 230, 230],
  [145, 180, 194],
  [71, 111, 148],
  [45, 83, 133],
  [33, 57, 110]
];

class Agent {
  constructor(x, y, maxSpeed, maxForce) {
    this.position = createVector(x, y);
    this.lastPosition = createVector(x, y);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.maxSpeed = maxSpeed;
    this.maxForce = maxForce;
    this.color = random(colors);
  }

  follow(desiredDirection) {
    desiredDirection = desiredDirection.copy();
    desiredDirection.mult(this.maxSpeed);
    let steer = p5.Vector.sub(desiredDirection, this.velocity);
    steer.limit(this.maxForce);
    this.applyForce(steer);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.lastPosition = this.position.copy();

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  checkBorders() {
    if (this.position.x < 0) {
      this.position.x = innerWidth;
      this.lastPosition.x = innerWidth;
    } else if (this.position.x > innerWidth) {
      this.position.x = 0;
      this.lastPosition.x = 0;
    }
    if (this.position.y < 0) {
      this.position.y = innerHeight;
      this.lastPosition.y = innerHeight;
    } else if (this.position.y > innerHeight) {
      this.position.y = 0;
      this.lastPosition.y = 0;
    } 
  }

  draw() {
    push();
    stroke(this.color[0], this.color[1], this.color[2]);
    strokeWeight(3);
    line(
      this.lastPosition.x,
      this.lastPosition.y,
      this.position.x,
      this.position.y
    );
    pop();
  }
}

function generateField() {
  let field = [];
  noiseSeed(Math.random() * 100);   
  for (let x = 0; x < maxCols; x++) {
    field.push([]);
    for (let y = 0; y < maxRows; y++) {
      const value = (noise(x / divider, y / divider) * 1) * -0.5;
      const directionDown = PI / 2 + value ;
     field[x].push(p5.Vector.fromAngle(directionDown));
    }
  }
  return field;
}

function generateAgents() {
  for (let i = 0; i < 200; i++) {
    let agent = new Agent(
      Math.random() * innerWidth,
      Math.random() * innerHeight,
      3,
      0.1
    );
    agents.push(agent);
  }
}

const fieldSize = 50;
const maxCols = Math.ceil(innerWidth / fieldSize);
const maxRows = Math.ceil(innerHeight / fieldSize);
const divider = 4;
let field;
let agents = [];

function draw() {
  for (let agent of agents) {
    const x = Math.floor(agent.position.x / fieldSize);
    const y = Math.floor(agent.position.y / fieldSize);
    const desiredDirection = field[x][y];
    agent.follow(desiredDirection);
    agent.update();
    agent.checkBorders();
    agent.draw();
    // arc();
  }
 
  //The following 3 lines of code was gathered from Claude.ai 30-09-2025
  menY += 2;
  if(menY > height + 50) {
    menY = -40;
  }

  textSize(80);
  textAlign();
  text("🧍🏻‍♂️", 150, menY);
  text("🧍🏻‍♂️", 350, menY);
  textSize(50);
  text("☂️", 450, 80);   
  text("☂️", 100, 140);
  text("☂️", 300, 250);
  text("☂️", 70, 400);
  text("☂️", 600, 500);

}  

//noLoop();