var vhbrick1=[];
var hbrick1=[];
var brick1=[];
var vhbrick2=[]
var hbrick2=[];
var brick2=[];
var brick3=[];
var mbrick,mbrickFrame=0;
var paddle,ball,ballimg,paddleimg,ballAnimation;
var gameState=0;

function preload(){
  brickimg=loadImage('images/bricktest.png');
  ballimg=loadImage('images/hammer.png');
  ballAnimation=loadAnimation('images/hammer.png','images/hammer1.png','images/hammer2.png','images/hammer3.png');


}

function setup() {

  createCanvas(displayWidth,displayHeight);

  paddle=createSprite(displayWidth/21,displayHeight/2,25,90);

  ball=createSprite(displayWidth/12,displayHeight/2,10,10);
  ball.addImage(ballimg);
  ball.addAnimation('1',ballAnimation);
  ball.scale=0.15;
  
  for(var i=65;i<displayHeight-40;i+=110){
    vhbrick1.push(new Brick(displayWidth-40,i,'white'))
  }
  for(var i=120;i<displayHeight-40;i+=110){
    vhbrick2.push(new Brick(displayWidth-120,i,'white'))
  }
  for(var i=175;i<displayHeight-80;i+=110){
    hbrick1.push(new Brick(displayWidth-200,i,'lightBlue'))
  }
  for(var i=230;i<displayHeight-100;i+=110){
    hbrick2.push(new Brick(displayWidth-280,i,'lightBlue'))
  }
  for(var i=285;i<displayHeight-180;i+=110){
    brick1.push(new Brick(displayWidth-360,i,'orange'))
  }
  for(var i=340;i<displayHeight-220;i+=110){
    brick2.push(new Brick(displayWidth-440,i,'orange'))
  }
  for(var i=395;i<displayHeight-280;i+=110){
    brick3.push(new Brick(displayWidth-520,i,'orange'))
  }
  

 
  
  
 
  
}

function draw() {
  background(0);  

  if(frameCount%100===0){
    mbrick=new Brick(random(displayWidth/2,displayWidth/3),random(0,displayHeight),'red');
    mbrickFrame=frameCount;

  }
  if(mbrickFrame+50===frameCount&&mbrick){
    mbrick.destroy();
  }
  if(gameState===0){
    ball.addImage(ballimg);
  }
  if(keyDown(32)&&gameState===0){
    ball.changeAnimation('1',ballAnimation);
    ball.velocityX=4;
    gameState=1;
    
  }


  drawSprites();
}