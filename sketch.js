var gameState = "FORM";
var bg, backgroundImg;
var form, instructions;
var human, human_walking, human_jumping;
var coin, coinImg, coinsCollected = 0, coinsGroup;
var invisibleGround;
var clue, clueImg, clue1, clue2, clue3, clue4, clue5, cluesGroup;
var obstacle, obstaclesGroup, obstacle1Img, obstacle2Img, obstacle3Img, obstacle4Img, obstacle5Img, obstacle6Img, obstacle7Img, obstacle8Img, obstacle9Img;

  // Loading Images & Animations
  function preload(){
    human_walking = loadAnimation("../images/walking/man_walking1.png",
     //"../images/walking/man_walking2.png",
      //"../images/walking/man_walking3.png",
       //"../images/walking/man_walking4.gif",
        "../images/walking/man_walking5.gif",
         //"../images/walking/man_walking6.png",
           "../images/walking/man_walking7.png");
           //"../images/walking/man_walking8.png");

    human_jumping = loadAnimation("../images/walking/man_walking4.gif");

    coinImg = loadImage("../images/coin.png");

    clueImg = loadImage("../images/clueBox.PNG");

    obstacle1Img = loadImage("../images/obstacle/obstacle1.png");
    obstacle2Img = loadImage("../images/obstacle/obstacle2.png");
    obstacle3Img = loadImage("../images/obstacle/obstacle3.png");
    obstacle4Img = loadImage("../images/obstacle/obstacle4.png");
    obstacle5Img = loadImage("../images/obstacle/obstacle5.png");
    obstacle6Img = loadImage("../images/obstacle/obstacle6.png");
    obstacle7Img = loadImage("../images/obstacle/obstacle7.png");
    obstacle8Img = loadImage("../images/obstacle/obstacle8.png");
    obstacle9Img = loadImage("../images/obstacle/obstacle9.png");

    getBackgroundImg();
  }

function setup() {
  createCanvas(displayWidth,displayHeight);
 
    form = new Form();
    instructions = new Instructions();

    human = createSprite(displayWidth / 4 - 50, displayHeight - 200,100,100);
    human.addAnimation("walking", human_walking);
    human.visible = false;

    invisibleGround = createSprite(displayWidth / 2, displayHeight - 30, displayWidth, 20);
    invisibleGround.visible = false;

    cluesGroup = new Group();
    obstaclesGroup = new Group();
    coinsGroup = new Group();

    clue1 = new Clue1();

}

function draw() {
  if(backgroundImg)
  background(backgroundImg);

  localStorage.setItem("name", document.getElementById("play").value); 

  if(gameState === "PLAY"){

    if(bg === "images/background/daytime.PNG"){
      textSize(30);
      fill("black");
      stroke("black");
      strokeWeight(2);
      text("Player Name: " + localStorage.getItem("name"), 100,100);
      text("Coins Collected: " + coinsCollected, 400, 100);
    }
    else if(bg === "images/background/nighttime.PNG"){
      fill("white");
      stroke("white");
      textSize(30);
      strokeWeight(2);
      text("Player Name: " + localStorage.getItem("name"), 100,100);
      text("Coins Collected: " + coinsCollected, 400, 100);
    }

  bg.velocityX = -8;

  if(bg.x < 0){    
    bg.x = bg.displayWidth / 2;
  }

  if(keyDown("space") && human.y >= displayHeight / 2 + 150){
    human.velocityY = -20;
    human.changeAnimation("jumping", human_jumping);
  }

  human.velocityY = human.velocityY + 1;
  human.collide(invisibleGround);
  
  human.visible = true;

    spawnCoins();
    spawnClues();
    spawnObstacles();

    if(cluesGroup.isTouching(human)){
      var rand = Math.round(random(1,4));
      switch(rand){
        case 1: 
          cluesGroup.destroyEach();
          console.log("HOLA");
          break;
      }
    }

      if(coinsGroup.isTouching(human)){
        coinsCollected++;
        coinsGroup.destroyEach();
      }
    
  }

  if(gameState === "FORM"){
    form.display();
  }
  else if(gameState === "INSTRUCTIONS"){
    instructions.display();
  }

  drawSprites();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Chicago");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour >= 06 && hour <= 19){
    bg = "images/background/daytime.PNG";
  }
  else{ 
    bg = "images/background/nighttime.PNG";
    form.title.style("color", "white");
    form.label.style("color", "white");
    form.input.style("background-color", "#999");
    form.input.style("color", "black");
  }

  backgroundImg = loadImage(bg);
}

function spawnCoins(){
  if(frameCount % Math.round(random(300,500)) === 0){
    coin = createSprite(displayWidth, random(displayHeight / 3, displayHeight / 3 + 50),100,100);
    coin.addImage(coinImg);
    coin.scale = 0.2;
    coin.velocityX = -8;
    coin.lifetime = 300;
    coinsGroup.add(coin);
  }
}

function spawnClues(){
  if(coinsCollected === 5 && frameCount % Math.round(random(200,400)) === 0){
    clue = createSprite(displayWidth,500,300,300);
    clue.addImage(clueImg);
    clue.scale = 0.4;
    clue.velocityX = -8;
    cluesGroup.add(clue);
  }
}

function spawnObstacles(){
  if(frameCount % Math.round(random(300,500)) === 0){
    obstacle = createSprite(displayWidth,700,300,300);
    obstacle.velocityX = -8;

    var rand = Math.round(random(1,9));
    switch(rand){
      case 1: obstacle.addImage(obstacle1Img);
              break;
      case 2: obstacle.addImage(obstacle2Img);
              break;
      case 3: obstacle.addImage(obstacle3Img);
              break;
      case 4: obstacle.addImage(obstacle4Img);
              break;
      case 5: obstacle.addImage(obstacle5Img);
              break;
      case 6: obstacle.addImage(obstacle6Img);
              break;
      case 7: obstacle.addImage(obstacle7Img);
              break;  
      case 8: obstacle.addImage(obstacle8Img);
              break;
      case 9: obstacle.addImage(obstacle9Img);
              break;                                                           
    }

    obstaclesGroup.add(obstacle);
  }
}