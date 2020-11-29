var dog,happydog,database,foodS,foodstock,dogImage,happydogImage;

function preload()
{
  dogImage = loadImage("images/dogImg.png");
  happydogImage = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  dog = createSprite(200,200);
 dog.addImage(dogImage);
 dog.scale = 0.5;
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
writeStocks(foodS);
dog.addImage(happydogImage);
}
  drawSprites();

  fill("red");
  stroke(5);
  text("press up arrow to feed dog",200,20)
  text("food left"+foodS,400,250)
  

}


function readStock(data){
foodS = data.val();
}

function writeStocks(x){
if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
 database.ref('/').update({
  food:x 
 }) 
}



