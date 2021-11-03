var player,playerImg,playerGun;
var bg;
var zombie,zombieImg;

function preload() {

  bg=loadImage("self design game haloween.jpg");
  playerImg=loadImage("images/shooter_2.png");
  playerGun=loadImage("images/shooter_3.png");
  zombieImg=loadImage("images/zombie.png")
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  player=createSprite(160,550,70,70);
  player.addImage(playerImg);
  player.scale=0.5
  player.debug=true
  player.setCollider("rectangle",0,0,200,400)
  zombieGroup=new Group ()





}


function draw() {

  background(bg);

  if(keyDown("W")){

    player.y=player.y-10

  }

  if(keyDown("S")){
    player.y=player.y+10
  }
  if(keyDown("space")){
player.addImage(playerGun);

  }
  else if(keyWentUp("space")){
   player.addImage(playerImg)
  }

  if(zombieGroup.isTouching(player)){
    for(i=0;i<zombieGroup.length;i++){
      if(zombieGroup[i].isTouching(player)){
        zombieGroup[i].destroy();
      }
    }
    
  }


  enimy();

  drawSprites();

}

function enimy() {

  if(frameCount%60===0){
    zombie=createSprite(random(1000,1500),random(100,500),70,70);
    zombie.addImage(zombieImg);
    zombie.scale=0.3
  zombie.debug=true
  zombie.setCollider("rectangle",0,0,400,950)
    zombie.velocityX=-5

    zombieGroup.add(zombie)

  }

 
  
}
