var man,manAnimation;
var thunder,thunderAnimation;


function preload(){
  manAnimation = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");  
  thunderAnimation = loadAnimation("images/thunderbolt/1.png","images/thunderbolt/2.png","images/thunderbolt/3.png","images/thunderbolt/4.png")
}

function setup(){
   createCanvas(1000,1000);
   man = createSprite(500,600);
   man.addAnimation("man",manAnimation);

   thunder = createSprite(800,200);
   thunder.addAnimation("thunder",thunderAnimation);
   thunder.scale=1/2;
    
}

function draw(){
  background("black");
  drawSprites();

}   

