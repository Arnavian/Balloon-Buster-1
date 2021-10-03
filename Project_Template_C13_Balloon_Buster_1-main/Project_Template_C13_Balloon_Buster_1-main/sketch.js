var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var blueBalloon, redBalloon, pinkBalloon, greenBalloon;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_baloonImage = loadImage("blue_balloon0.png")
  green_balloonImage = loadImage("green_balloon0.png")
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
  }
  
  
}


// Creating  arrows for bow
 function createArrow() {
  var arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function SpawnRedBalloon() {
  var redBalloon = createSprite(0,Math.round(random(20, 370)), 10, 10);
  redBalloon.addImage(red_balloonImage);
  redBalloon.velocityX = 3;
  redBalloon.lifetime = 150;
  redBalloon.scale = 0.1;

}

function SpawnBlueBalloon(){
var blueBalloon = createSprite(0,Math.round(random(20,370,)),10,10)
blueBalloon.addImage(blue_balloonImage)
blueBalloon.velocityX = 3;
blueBalloon.lifetime = 150;
blueBalloon.scale = 0.1;
}

function SpawnGreenBalloon(){
var greenBalloon = createSprite(0,Math.round(random(20,370)),10,10)
greenBalloon.addImage(green_balloonImage)
greenBalloon.velocityX = 3;
greenBalloon.lifetime = 150;
greenBalloon.scale = 0.1;
}

function SpawnPinkBalloon(){
var pinkBalloon = createSprite(0,Math.round(random(20,370)),10,10)
pinkBalloon.addImage(pink_balloonImage)
pinkBalloon.velocityX = 3;
pinkBalloon.lifetime = 150;
pinkBalloon.scale = 0.1;
}

function blueBalloon() {
  //write code for spawning blue balloons
  
  if (frameCount % 60 === 0){
  SpawnBlueBalloon();
  }
}



function greenBalloon() {
  //write code for spawning green balloons

  if (frameCount % 30 === 0){
  SpawnGreenBalloon();
  }
}

function pinkBalloon() {
  //write code for spawning pink balloons

  if (frameCount % 70 === 0){
  SpawnPinkBalloon();
  }
}

//Draw Sprites
draw();