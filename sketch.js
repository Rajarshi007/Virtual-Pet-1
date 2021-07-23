//Create variables here
var dog, happyDog, database, foodS, foodStock, dogImg, happyDogImg;
function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");

  
}

function setup() {
	createCanvas(500, 500);
database = firebase.database();

dog = createSprite(250,250);
dog.addImage(dogImg);
dog.scale = 0.25;
  foodStock=database.ref('food');
  foodStock.on("value",readStock)


}

function readStock(data){

foodS = data.val();
console.log(foodS)

}

function draw() {  
createCanvas(500,500);
background(46, 139, 87);

textSize(50);
text(foodS,235,45)

if (keyWentDown(UP_ARROW)){
  database.ref("/").update({food : foodS-1})

}

  drawSprites();
  //add styles here

}



