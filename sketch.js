
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbinLeft,dustbinRight,dustbinBottom;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    paper = new Paper(50,500,15);
	ground = new Ground(width/2,700,width,20);
	
    boxPosition=width/2-100
	boxY=610;
	 
	dustbinLeft = new Dustbin(boxPosition+20,boxY,20,100);
	dustbinBottom = new Dustbin(boxPosition+100, boxY+45, 180,20);
	dustbinRight = new Dustbin(boxPosition+200-20 , boxY, 20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(paper.y);
 


  paper.display();
  ground.display();

  dustbinRight.display();
  dustbinLeft.display();
  dustbinBottom.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-30});
	}
	
	if (keyCode === LEFT_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:-30,y:-30});
	}
}

