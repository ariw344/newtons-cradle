
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roof;
var ropeObject1, ropeObject2, ropeObject3, ropeObject4, ropeObject5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Paper(200, 500);
	bobObject2 = new Paper(270, 500);
	bobObject3 = new Paper(340, 500);
	bobObject4 = new Paper(410, 500);
	bobObject5 = new Paper(480, 500);
	roof = new Roof(340, 300, 300, 30);
	ropeObject1 = new Rope(roof, bobObject1);
	ropeObject2 = new Rope(roof, bobObject2);
	ropeObject3 = new Rope(roof, bobObject3);
	ropeObject4 = new Rope(roof, bobObject4);
	ropeObject5 = new Rope(roof, bobObject5);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  drawSprites();
	
}



