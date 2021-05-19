
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
    ball1 = new paper(100,600,70)
	rect1 = new dustbin(600,650,200,20)
	rect2 = new dustbin(510,600,20,100)
	rect3 = new dustbin(690,600,20,100)
}


function draw() {
  rectMode(CENTER);
  background(0);
  //keyPressed();
  drawSprites();
  ball1.display();
  rect1.display();
  rect2.display();
  rect3.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:500 , y:-500})
	}
}


