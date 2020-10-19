const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var ourEngine, ourWorld;
var box1;
var box2;
var ground;
var Pig1;
var Log1;
var box3;
var box4,pig2,log2;
var box5,log3,log4;
var bird1;

function setup() {
  createCanvas(1200,400);
  ourEngine=Engine.create()
  ourWorld=ourEngine.world;
  
  box1=new Box(700,320,70,70);
  //console.log(object.position.x);
  
  box2= new Box(920,320,70,70);

  ground=new Ground(600,380,1200,50)
  Pig1=new Pig (815,320)
  Log1=new Log(815,300,310,PI/2)
  box3=new Box(700,280,70,70);
  box4=new Box(920,280,70,70);
  pig2=new Pig(815,280)
  log2=new Log(815,250,310,PI/2);
  box5=new Box(815,220,70,70);
  log3=new Log(760,220,150,PI/4);
  log4=new Log(870,220,150,-PI/4);
  bird1= new Bird(200,100)
}


function draw() {
  background("black");  
  Engine.update(ourEngine);
  box1.display();
  box2. display();
  ground.display()
  Pig1.display();
  Log1.display();
  box3.display();
  box4.display();
pig2.display();
log2.display();
box5.display();
log3.display();
log4.display();
bird1.display();
}

