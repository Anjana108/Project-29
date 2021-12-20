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
var ground, bridge;
var leftWall, rightWall;
var jointPoint;
var jointLink;
var bg, boyscare, boy, boyrelief;

var stones = [];

function preload() {
  bg = loadImage("forest-web.jpg");
  boyscare = loadImage("scared.jpg");
  boyrelief = loadImage("relief.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(0, height - 10, width * 2, 20, "#795548", true);
  leftWall = new Base(300, height / 2 + 50, 1000, 100, "#8d6e63", true);
  rightWall = new Base(width - 300, height / 2 + 50, 600, 100, "#8d6e63", true);

  /*bridge = new Base(15, { x: width / 2 - 400, y: height / 2 });
  jointPoint = new Base(width - 600, height / 2 + 10, 40, 20, "#8d6e63", true);*/

  bridge = new Bridge(15, { x: width / 2 - 400, y: height / 2 });
  jointPoint = new Base(width - 600, height / 2 + 10, 40, 20, "#8d6e63", true);

  /*bridge = new Base(15, { x: width / 2 - 400, y: height / 2 });
  jointPoint = new Bridge(width - 600, height / 2 + 10, 40, 20, "#8d6e63", true);*/

  /*bridge = new Bridge(15, { x: width / 2 - 400, y: height / 2 });
  jointPoint = new Bridge(width - 600, height / 2 + 10, 40, 20, "#8d6e63", true);*/

  
  //Matter.Composite.add(bridge.body, jointPoint);

  //Matter.Composite.add(jointPoint);
  
  //Matter.Composite.add(jointPoint, bridge.body);
  
  //Matter.Composite.add(bridge.body);

  boy = Bodies.rectangle(width/2, height-100, 50, 80);



  jointLink = new Link(bridge, jointPoint);

  for (var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }
}

function draw() {
  background(bg);
  Engine.update(engine);

  ground.show();
  bridge.show();
  leftWall.show();
  rightWall.show();
  jointPoint.show();

  imageMode (CENTER);
  image(boyscare, width/2, height-200, 750, 1000);
  
  for (var stone of stones) {
    stone.show();
  }
}
