var fighter,fighterImg;
var image1


function preload()
{
//  fighterImg =createImg("fighter.gif");
fighterImg = loadImage("fighter.gif")
 image1 = loadImage("boss1.gif")
}

function setup() {
  createCanvas(1600,800);
  fighter = createSprite(600,200)
   fighter.addImage(fighterImg);
   fighter.scale = 0.3;
   
  
  boss1 = createSprite(300,200);
  boss1.addImage(image1)
  boss1.scale = 1.5
  boss1.velocityX = -2
  boss1.velocityY = 2
}

function draw() {
  background("black"); 
//  fighterImg.position(900,40);
 edges = createEdgeSprites();
  fighter.bounceOff(edges);
  boss1.bounceOff(edges)
  
  
  drawSprites();
}

