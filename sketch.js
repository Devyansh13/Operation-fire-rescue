var player,player_img,screen,screen_img,button,img,imgimg,score;
//var start,play;
var welcome_screen,welcome_img;
var button_img,vic,roy;
var gameState;
var obImg;
var bulletgrp;
var lose,win,lose_img,win_img,retry,retry_img,reddy;
var house,house_img;

function setup() {
  createCanvas(displayWidth,displayHeight-110);
  scroll=false;
  score=0;
  gameState="start";
  welcome_screen=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  welcome_screen.addImage(welcome_img);
  welcome_screen.scale=2.5;

  button=createSprite(displayWidth/2,500,200,200);
  button.addImage(button_img);
  button.scale=0.15;

  bulletgrp=new Group();
  

     screen=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
     screen.addImage(screen_img);
     screen.visible=false;
     screen.scale=3.0;

    
    player=createSprite(200,500,50,50)
    player.addImage(player_img)
    player.visible=false;
    player.scale=0.5;

    imgimg=createSprite(650,200,50,50)
  imgimg.addImage(img)
  imgimg.scale=1;
  
  
    

}
 function preload(){
 welcome_img=loadImage("welc_screen.jpg");
  screen_img=loadImage("back.jpg")
  button_img=loadImage("buttons_PNG34.png");
  img=loadImage("superhero-marvel-super-heroes-batman-comic-book-class-of-2018-removebg-preview (1).png")
  player_img=loadImage("sup-removebg-preview.png")
  obImg=loadImage("spaceship-removebg-preview.png")
  lose_img=loadImage("you lose.png.png")
  retry_img=loadImage("not.png")
  reddy=loadImage("red.jpg")
  win_img=loadImage("you win.jpg")
  house_img=loadImage("fire.png")
  roy=loadImage("vic roy.gif")
 }
 
function draw() {
  background("black");  
  
  
  

  if(mousePressedOver(button)){
   gameState="play";
  }
  
  if(gameState==="play"){
    player.visible=true;
    screen.visible=true;
    screen.addImage(screen_img)
    //lose.visible=false;
    //win.visible=false;
    //retry.visible=false;
    imgimg.visible=false;
   // imgimg.visible=false;
    screen.velocityX=-3;
    score = score + Math.round(frameRate()/60);
    if(screen.x<0){
      screen.x=displayWidth/2;
    }

    if(keyDown("space")){
      player.velocityY=-10;
    }
    player.velocityY=player.velocityY+0.9;

     
   
    spawnObstacles();
}



drawSprites();
if(gameState==="start"){
  textSize(70)
  fill("red")
  stroke("yellow")
  text("PLAY",displayWidth/2-80,520)
  }
  if(bulletgrp.isTouching(player)){
    gameState="end";
    lose=createSprite(displayWidth/2,displayHeight/2-250,50,50);
    lose.addImage(lose_img)
    lose.scale=0.5;

    textSize(50)
    fill("red")
    stroke("yellow")
    text("You were not able to save the citizens!",displayWidth/2-400,325);
    text("           Press retry for another go.",displayWidth/2-400,375);

   retry=createSprite(displayWidth/2,510);
   retry.addImage(retry_img);
   retry.scale=0.2;
   screen.addImage(reddy)
  }
  if(gameState==="end"){
    console.log("end")
    screen.velocityX=0;
    player.velocityY=0;
    bulletgrp.setVelocityXEach(0);
   
  }
  if(score===550){
    gameState="win";
  }
  if(score===500){
  house =createSprite(displayWidth,displayHeight/2+90,50,50)
  house.addImage(house_img);
  house.velocityX=-8;
  house.scale=0.5;

  }
  if(gameState==="win"){
    screen.velocityX=0;
    player.velocityY=0;
    bulletgrp.setVelocityXEach(0);
    
    win=createSprite(displayWidth/2-30,displayHeight/2-80,50,50);
    win.addImage(win_img)
    win.scale=2.28;

    textSize(50)
    fill("blue")
    stroke("aqua")
    text("  You saved the citizens!",displayWidth/2-650,550);
    text("Press replay to play again.",displayWidth/2-650,600);

   retry=createSprite(displayWidth/2+450,530);
   retry.addImage(retry_img);
   retry.scale=0.2;
   screen.addImage(reddy)
   

   
  }
  
 text(score,20,20)
}

function spawnObstacles(){
  if(frameCount % 40===0){
   bullet=createSprite(displayWidth,random(20,displayHeight-50),40,40)
   bullet.addImage(obImg);
   bullet.scale=0.2;
   bullet.velocityX=-25;
   bulletgrp.add(bullet);
   bullet.velocityX =-(20 + score/100);
  }
}
//setTimeout(home,30000);
//var h1; setTimeout(home,30000); function draw() { background("white"); drawSprites(); } function home(){ h1=createSprite(200,200,50,50); h1.setAnimation("book"); }