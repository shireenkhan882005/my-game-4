/*const Engine= Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies*/

var engine,world,database,flowerflower1img,flower2img,flower3img,player,playerimg
var invisibleground,flowerGroup,butterflyGroup,flowersound,backsound;
var score=0;

function preload(){
  bg= loadImage("images/background.png")
  basketImg = loadImage ("images/basket2.png")
  butterflyimg= loadAnimation ("images/ba1.png","images/ba2.png", "images/ba3.png","images/ba4.png","images/ba5.png","images/ba6.png","images/ba7.png","images/ba8.png","images/ba9.png","images/ba10.png","images/ba11.png","images/ba12.png","images/ba13.png","images/ba14.png")
  flower1img=loadAnimation("images/fs.png","images/fs2.png","images/fs.png","images/fs4.png","images/fs5.png","images/fs6.png","images/fs7.png")
  flower2img=loadAnimation("images/flower2.png")
  flowersound= loadSound("flowerCatch.mp3")
  backsound=loadSound("background.mp3")
  backsound.volume=0.2
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  
  player=createSprite(width/4,height-100,50,50)
  player.addImage(basketImg) 

  invisibleground= createSprite(width/2,70,width,20)
invisibleground.visible=false

flowerGroup=new Group()
butterflyGroup = new Group()


//butterfly=createSprite((Math.round(random(100,width-100)), 50,50,50))

}

function draw() {
  background(bg);
//backsound.volume=0.1

 //backsound.play()

  if(keyDown(LEFT_ARROW)){
    player.x -=5
  }

  if(keyDown(RIGHT_ARROW)){
    player.x +=5
  }

 /* if(keyDown("space")){
    player.velocityY -=5
  }

  player.velocityY +=0.5*/



player.collide(invisibleground)


  spawnflowers()

  drawSprites();
  textSize(20)
  stroke("white")
  strokeWeight(5)

fill("red")
text("Score : "+score,width-200,100)

}



function spawnflowers(){
  if(frameCount%80===0){
    flower=createSprite(400, 200, 50, 50);
    flower.velocityY=5
    flower.visible=false

    butterfly=createSprite(350, 200, 50, 50);
    butterfly.velocityX=3
    butterfly.y=Math.round(random(height-40,50))
    butterfly.visible=false

    flower.x=Math.round(random(width-10,50))

  // flower.addImage(flower2img)
    flower.scale=0.5


 var rand=Math.round(random(1,3))
    if (rand==1){
 flower.addAnimation("flower1",flower1img)
 flower.visible=true
}
     
 if (rand==2){
  flower.addAnimation("flower2",flower2img)
  flower.visible=true
}

  else if(rand==3){
butterfly.addAnimation("butterfly",butterflyimg)
butterfly.visible=true
  }
 
  flowerGroup.add(flower)
  butterflyGroup.add(butterfly)
  }


  

for(var i=0;i<flowerGroup.length;i++){
  if(flowerGroup.get(i).isTouching(player)){
    flowerGroup.get(i).destroy();
    score=score+1
    flowersound.play()
    
    
  }
}

/*for(var a=0;a<butterflyGroup.length;a++){
  if(butterflyGroup.get(a).isTouching(player)){
    butterflyGroup.get(a).destroy()
   alert("Do not harm nature")
  }
}*/


  }