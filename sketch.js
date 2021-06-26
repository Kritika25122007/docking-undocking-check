

var spacebg,scraft1,scraft2,scraft3,scraft4;
var issImg;
var iss,spacecraft,hasDocked;


function preload(){
  spacebg=loadImage('spacebg.jpg')
  scraft1=loadImage('spacecraft1.png')
  scraft2=loadImage('spacecraft2.png')
  scraft3=loadImage('spacecraft3.png')
  scraft4=loadImage('spacecraft4.png')
  issImg=loadImage('iss.png')
}

function setup() {
  createCanvas("spacebg",800,400);
  
  iss=createSprite(400, 200, 50, 50);
  iss.addAnimation(issImg)
  
  spacecraft=createSprite(500, 400, 50, 50);
  spacecraft.addAnimation(scraft1)
}

function draw() {
  background(255,255,255); 
  if(!hasDocked){
    spacecraft.x=200
    
    if(keyDown("left_arrow")){
     spacecraft.x=spacecraft.x-4;
     scraft2.visible=true;
    }
    
     
    if(keyDown("right_arrow")){
     spacecraft.x=spacecraft.x+4;
     scraft3.visible=true;
    }
    
     
    if(keyDown("down_arrow")){
     scraft4.visible=true;
    }
  }
  
  drawSprites();
}