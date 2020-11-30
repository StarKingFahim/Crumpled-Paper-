
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var paper,ground,side1,side2,side3;


function preload()
{
	
}

function setup() 
{
	 createCanvas(800, 700);
  
	
	 engine = Engine.create();
	 world = engine.world;

	 paper = new Paper(100, 600, 20);

   ground = new Ground(400, 680, 800, 20);
  
	 side1 = new Bin(570, 620, 20, 100);
   side2 = new Bin(635, 660, 150, 20);
   side3 = new Bin(700, 620, 20, 100);


     Engine.run(engine);
  
}


function draw() 
{

  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();

  ground.display();

  side1.display();
  side2.display();
  side3.display();

  fill("Lime")
  stroke("White")
  textSize(30);
  text("Press All Arrow Keys to see what they do",100,250)

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW)  
  {
	   Matter.Body.applyForce(paper.body, paper.body.position, {x:30, y: -30})
  }
  if(keyCode === DOWN_ARROW)  
  {
	   Matter.Body.applyForce(paper.body, paper.body.position, {x:-30, y: -30})
  }
  if(keyCode === RIGHT_ARROW)  
  {
	   Matter.Body.applyForce(paper.body, paper.body.position, {x:30, y: 0 })
  }
  if(keyCode === LEFT_ARROW)  
  {
	   Matter.Body.applyForce(paper.body, paper.body.position, {x:-30, y: 0})
  }


  }


