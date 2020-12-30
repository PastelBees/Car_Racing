var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var car1, car2, car3, car4
var car1Img, car2Img, car3Img, car4Img,track
var cars = []

var form, player, game;


function preload(){
  car1Img = loadImage("images/images/car1.png")
  car2Img = loadImage("images/images/car2.png")
  car3Img = loadImage("images/images/car3.png")
  car4Img = loadImage("images/images/car4.png")

  track = loadImage("images/images/track.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth-30,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
    
  }
  
  if(gameState === 2){
    game.end()
  }
}
