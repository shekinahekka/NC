
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(900, 550);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,100,600,20);

	bobObject1 = new Bob(275,400,15);
	bobObject2 = new Bob(225,400,15);
	bobObject3 = new Bob(325,400,15);
	bobObject4 = new Bob(375,400,15);
	bobObject5 = new Bob(175,400,15);
	
	rope1 = new Rope(bobObject1.body,roof.body,0);
	rope2 = new Rope(bobObject2.body,roof.body,-60);
	rope3 = new Rope(bobObject3.body,roof.body,60);
	rope4 = new Rope(bobObject4.body,roof.body,120);
	rope5 = new Rope(bobObject5.body,roof.body,-120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  


  rope1.display();
  fill("cyan");
  bobObject1.display();

  rope2.display();
  fill("lime");
  bobObject2.display();

  rope3.display();
  fill("yellow");
  bobObject3.display();

  rope4.display();
  fill("red")
  bobObject4.display();

  rope5.display();
  fill("pink");
  bobObject5.display();

  fill(253,112,22);
  roof.display();

  drawSprites();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW) {
		Body.applyForce(bobObject5.body,bobObject5.body.position,{x:-250,y:100});
	}
}



