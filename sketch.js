var ball,ballImg;
var paddle,paddleImg

function preload() {
  ballImg = loadImage("ball.png");
  paddleImg = loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);
  paddle = createSprite(360, 200, 15, 80 );
  ball = createSprite(150, 200, 15, 15);
  
  
  paddle.addImage(paddleImg);
  ball.addImage(ballImg);
  
  ball.velocityX = 9;

}

function draw() {
  background(205,153,0);
  
  edge = createEdgeSprites();
  
  ball.bounceOff(edge[0]);
  ball.bounceOff(edge[2]);
  ball.bounceOff(edge[3]);
  ball.bounceOff(paddle, explosion);
  
  paddle.collide(edge);
  
  if(keyDown(UP_ARROW))
  {
     paddle.y = paddle.y-20;
  }
  if(keyDown(DOWN_ARROW))
  {
     paddle.y = paddle.y+20;
  }
  
   
  drawSprites();
  }

  function explosion(){
    ball.velocityY = random(8, 12);
  }



