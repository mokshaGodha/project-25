
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ballSprite,ground,rect1,rect2,rect3,ball, dustbinI,paprI;
function preload()
{
	dustbinI=loadImage("dustbin.png")
	paperI=loadImage("paper.png")
}

function setup() {
	createCanvas(1500, 700);
    var options={
		isStatic:false,
        restitution:0.3,
		friction:1,
		density:1.2
	}

	engine = Engine.create();
	
	world = engine.world;
    groundSprite=createSprite(width/2, height-35, width,5);
	groundSprite.shapeColor=color(255)
	paper=createSprite(110,630,25,25)
	paper.addImage(paperI)
	
    rect1=createSprite(1050,615,20,100);
	rect1.shapeColor=("red")

    rect2=createSprite(1250,615,20,100);
	rect2.shapeColor=("red")


	rect3=createSprite(1150,500,200,20);
	rect3.shapeColor=("red")
	rect3.addImage(dustbinI);
    
	ground = Bodies.rectangle(width/2, height-35,width, 5 , {isStatic:true} );
	 World.add(world, ground);
	 
	 rect2=Bodies.rectangle(1250,615,20,100 , {isStatic:true});
	 World.add(world,rect2);
	 rect1=Bodies.rectangle(1050,615,20,100 , {isStatic:true});
	 World.add(world,rect1);
	 rect3=Bodies.rectangle(1150,660,200,20 , {isStatic:true});
	 World.add(world,rect3);
	
	
	 ball=Matter.Bodies.circle(110,600,30,options);
	 World.add(world,ball);
	
     
	Engine.run(engine);
  
}


function draw() {
  ellipseMode(RADIUS);
  background(215);
  ellipse(ball.position.x,ball.position.y,30,30)
  ball.shapeColor=("pink")
  paper.x=ball.position.x;
  paper.y=ball.position.y;
 // ballSprite.x=ball.position.x;
//ballSprite.y=ball.position.y;
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x:210,y:-210}) 
	}
  }

	




