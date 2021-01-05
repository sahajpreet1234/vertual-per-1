var dog,dog1,happyDog,datadase,foodS,foodStock;
var database
function preload()
{
  dog=loadImage("images/dogImg.png")
  dog1=loadImage("images/dogImg1.png")
}

function setup() {

	createCanvas(500,500);
  dog=createSprite(250,250)
  dog1=createSprite(250,250)

  
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  readStock(20);
  dog.addImage("images/dogmg.img");

}
  drawSprites();
  text("foodStock")
  textSize("30")
  fill("red")
  stroke("red")
}
  function readStock (data){
    foodS=data.val();
  }

  function writeStock(x){
    if(x<=0){
      x=0;
    }else{
      x=x-1
    }
    database.ref('/').update({
      food:x
    })
  }




