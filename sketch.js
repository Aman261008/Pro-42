var iss,issImg;
var spacecraft,sc1,sc2,sc3,sc4;
var hasDocked=false;
var bg;

function preload(){

bg=loadImage("spacebg.jpg")
issImg=loadImage("iss.png");
sc1=loadImage("spacecraft1.png");
sc2=loadImage("spacecraft2.png");
sc3=loadImage("spacecraft3.png");
sc4=loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,500);
  
  spacecraft=createSprite(400,400,50,50);
  hasDocked.x=random(60,100);
  hasDocked.y=random(60,100);
  spacecraft.scale=0.15;
  iss=createSprite(400,210,50,50);
  iss.addImage(issImg);
  iss.scale=0.8;
}

function draw() {
  background(bg); 

  spacecraft.addImage(sc1);

  if(keyIsDown(UP_ARROW)){
  spacecraft.y=spacecraft.y-2;
  spacecraft.addImage(sc1);
  }
  if(keyIsDown(DOWN_ARROW)){
  spacecraft.y=spacecraft.y+2;
  spacecraft.addImage(sc2);
  }
  if(keyIsDown(LEFT_ARROW)){
  spacecraft.x=spacecraft.x-2;
  spacecraft.addImage(sc3);
  }
  if(keyIsDown(RIGHT_ARROW)){
  spacecraft.x=spacecraft.x+2;
  spacecraft.addImage(sc4);
  }


  
  text("docking successfull",350,400);

  drawSprites();
}