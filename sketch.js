var planeImage,questionsImage;
var gameState="begin";
var security,system;

const accessCode1 = "TWO";
const accessCode2 = "RADAR";
const accessCode3 = "RUNWAY";
const accessCode4 ="CONTROL ROOM"

var score=0;

function preload(){
planeImage=loadImage("plane1.jpg")
questionsImage=loadImage("planeq.jpg")

}

function setup(){
createCanvas(700,600);
system=new System();
security=new Security();
}

function draw(){
  if( gameState === "begin"){
    
  background(planeImage);
  security.hide();
  textSize(40);
  fill("black");
  text("Instructions",300,80);
  textSize(25);
  fill("red")
  text("Answer all the questions correctly",20,150)
  text("then you will get a chance to catch the theif",20,200)
  text("and save the passengers",20,250)
  stroke(20)
  fill("green")
  text("Press the spaceBar to start playing the game",20,350)
  }

  if (keyDown("SPACE")){
    gameState="question";
  }

  if(gameState=== "question")
  {
    background(questionsImage)
    
   security.show();
  


   clues();
   security.display();
   textSize(20);
   fill("red");
   text("Score: " + score, 450, 50);
 // add code for changing the background to the treasure background
   if(score === 4) {
     clear()  

    fill("black")
    textSize(40);
    text("CONGRATULATIONS,NOW YOU CAN GO TO NEXT LEVEL",250, 200);
    fill("violet")
    text("PRESS L TO GO TO NEXT LEVEL",250,250)
  }
  
  }
   
 
}