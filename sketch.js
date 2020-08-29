const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var packageBody,ground;
var box1,box2,box3,paper;
var engine,world;
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 500, 1000, 10 , {isStatic:true} );
 	World.add(world, ground);

	box1 = new Bin(700,450,10,150);
	box2 = new Bin(820,490,250,10);
	box3 = new Bin(950,450,10,150);
	
	paper = new Ball(100,300,10);
  
}


function draw() {
  background(120);
  Engine.update(engine);
  fill("red");
  textSize(30);
  text("Ball in Dustbin 1", 450,50);
  textSize(12);
  text("Press the arrow up key after ball lands.(arrow down to restart)", 400,250);

  box1.display(0);
  box2.display(1);
  box3.display(0);
  
  paper.display();
}

function keyPressed(){
	if(keyCode === 38){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:70,y:-70})
	}
	if(keyCode === 40){
		Matter.Body.setPosition(paper.body,{x:100,y:300});
	}
}


