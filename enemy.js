var enemyArr = [];
var runSpeed = 25; // enemy side-scrolling speed
var enemySize = 70;
var enemyCount = 0; // current amount of enemies

function EnemyChar() {
  this.width = enemySize;
  this.height = enemySize;
  this.xPos = canvas.width - enemySize; // print outside the screen
  this.yPos = canvas.height - enemySize;
}

function spawnEnemy() {
  enemyArr[enemyCount] = new EnemyChar();
  drawEnemy();
  console.log(enemyArr);
  setInterval(attackPlayer, 100);
  // attackPlayer();
  // enemyCount++;
}

function drawEnemy() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = 'black';
  context.lineWidth = 5;
  context.beginPath();
  context.fillRect(enemyArr[enemyCount].xPos, enemyArr[enemyCount].yPos, enemyArr[enemyCount].width, enemyArr[enemyCount].height);
  context.stroke();
}

function attackPlayer() {

  if (enemyArr[enemyCount].xPos != 0)
  {
    enemyArr[enemyCount].xPos -= runSpeed;
    // console.log(enemyArr[0].xPos);
  }
  else if (enemyArr[enemyCount].xPos < 0)
  {
    enemyDead();
  }
  drawEnemy();

  // console.log(enemyArr[0].xPos);
}


function enemyDead() {
  enemyArr.shift();
  console.log(enemyArr);
}
