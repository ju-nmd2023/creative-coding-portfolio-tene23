//Recreation of Slow Lessons by Tyler Hobbs
let position;
let velocity;
let acceleration;

const colors = [
  [92, 139, 173],
  [230, 230, 230],
  [145, 180, 194],
  [71, 111, 148],
  [45, 83, 133],
  [33, 57, 110]
];

function setup() {
    createCanvas(innerWidth,innerHeight);
    background(255);
    field = generateField();
    generateAgents();
    frameRate();
    position = createVector (100,100);
    velocity = createVector (5,8);
    stroke(colors);
    
}


class Agent {
  constructor(x, y, maxSpeed, maxForce) {
    this.position = createVector(x, y);
    this.lastPosition = createVector(x, y);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.maxSpeed = maxSpeed;
    this.maxForce = maxForce;
    this.color = random (colors);
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

  //The following lines of code (61-69) was gathered from chat gpt 30-09-2025
  followMouse(strength = 4, radius = 300) {
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(mouse, this.position);
    let d = dir.mag();

    if (d < radius) {
        dir.normalize();
        dir.mult(strength);
        this.applyForce(dir);
    }
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
    strokeWeight(8);
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
      const value = (noise(x / divider, y / divider) * 0.7) * -0.5;
      field[x].push(p5.Vector.fromAngle(value));
    }
  }
  return field;
}

function generateAgents() {
  for (let i = 0; i < 100; i++) {
    let agent = new Agent(
      Math.random() * innerWidth,
      Math.random() * innerHeight,
      2,
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

    agent.followMouse(0.3, 150);

    agent.update();
    agent.checkBorders();
    agent.draw();
  }
   
  

}

// noLoop();