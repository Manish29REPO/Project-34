const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;
var bottom, leftSide, rightSide;


function setup() {
  var canvas = createCanvas(1000, 1000);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(1000 / 2 - 420, height / 2 - 80, 40, 40);
  blower = new Blower(width / 2 - 420, height / 2 + 300, 150, 20);
  blowerMouth = new BlowerMouth(width / 2 -420, height / 2 + 300, 100, 90);

  bottom = new Bucket(800, 280, 100, 10);
	leftSide = new Bucket(750, 220, 20, 120);
  rightSide  = new Bucket(850, 220, 20, 120);


  
  button = createButton("Click to Shoot");
  button.position(500, height/2 - 100);
  button.class("blowButton");

  button.mousePressed(blow);

}

function draw() {
  background("blue");
  Engine.update(engine);

  blower.show();
  blowerMouth.show();
  ball.show();
  bottom.displayBucket();
  leftSide.displayBucket();
  rightSide.displayBucket();
  
}

function blow() {

  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:+0.069420, y:-0.140});
}

