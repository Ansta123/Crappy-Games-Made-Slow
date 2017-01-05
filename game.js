var player, testCounter;
var charH = 50;
var charW = 50;
var gravity = 3;
var velocity = 3;
var jumpH = 60;
var hasJumped = false;


function init() {
	canvas = document.getElementById('gameBoard');
	context = canvas.getContext('2d');

	player = new PlayerChar();
	drawChar();
	keyboardInput();

	setInterval(updateChar, 50); // update character every so often
	setInterval(spawnEnemy, 1000);
	// spawnEnemy();
}

function PlayerChar() {
	this.width = charW;
	this.height = charH;
	this.xPos = 40;
	this.yPos = 50;
}

function updateChar() {
	if(hasJumped == true){
		charJump();
		drawChar();
	}
	else{
		charFall();
		drawChar();
	}
}

function charJump() {	
	if(jumpH > 0){
		player.yPos -= gravity;
		jumpH -= 4;		
	}
	else
		hasJumped = 0;
}

function charFall() {
	if (player.yPos < canvas.height - player.height)
		player.yPos += gravity;
	else
		hasJumped = false;
}

function drawChar() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.strokeStyle = 'black';
	context.lineWidth = 1;
	context.beginPath();
	context.rect(player.xPos, player.yPos, player.width, player.height);
	context.stroke();
	// console.log("X: " + player.xPos + ", Y: " + player.yPos);
}

function keyboardInput() {

	window.addEventListener("keydown", function(event) {

		if (event.keyCode == 38) { //Up arrow button press
			if (hasJumped == false)
			{ // only jump if character hasn't already jumped
				// player.yPos -= jumpH;
				jumpH = 60;
				hasJumped = true;
			}
			drawChar();
		}
	})
}
