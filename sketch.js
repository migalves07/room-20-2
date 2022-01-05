
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ball2;
var ball3;
var ground;
var angle=60;
var poly;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
  var ball2_options = {
    restitution: 0.01,
    friction:0.1,
    frictionAir:0.3
  }
  var ball3_options = {
    restitution:0.50,
    friction:0.01,
    frictionAir:0.01
  }
  
  var ground_options ={
     isStatic: true
   };
  
  

  ground = Bodies.rectangle(200,390,400,40,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,10,ball_options);
  World.add(world,ball);
  
  ball2 = Bodies.rectangle(350,50,150,40,ball2_options);
  World.add(world,ball2);
  
  ball3 = Bodies.rectangle(200,50,10,60,ball3_options);
  World.add(world,ball3);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("red");
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,30);
  ellipse(ball3.position.x,ball3.position.y,40);
  rect(ground.position.x,ground.position.y,400,20);
 


  
  
}

