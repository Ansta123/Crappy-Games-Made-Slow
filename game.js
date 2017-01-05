var player, testCounter;

var charH = 20;
var charW = 20;
var gravity = 5;

function init() {

	canvas = document.getElementById('gameBoard');
	context = canvas.getContext('2d');
	testCounter = 1;

	player = new PlayerChar();
	drawChar();
	keyboardInput();
}

function PlayerChar() {

	this.width = charW;
	this.height = charH;
	this.xPos = 40;
	this.yPos = 100;

	setInterval(updateChar, 100);
}

function updateChar() {
	charFall();
	drawChar();
}

function charFall() {
	if (player.yPos < canvas.height - player.height)
		player.yPos = player.yPos + gravity;
}

function drawChar() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.strokeStyle = 'black';
	context.lineWidth = 1;
	context.beginPath();
	context.rect(player.xPos, player.yPos, player.width, player.height);
	context.stroke();
	console.log("X: " + player.xPos + ", Y: " + player.yPos);
}

function keyboardInput() {

	window.addEventListener("keydown", function(event) {

		if(event.keyCode == 37) {
			//Left arrow button press
			player.xPos -= 4;
			if(player.xPos < 0) {
				player.xPos = 0;
			}
			updateChar();
		}
		if(event.keyCode == 38) {
			//Up arrow button press
			player.yPos -= 40;
			if(player.yPos < 0)
				player.yPos = 0;
			drawChar();
		}
		else if(event.keyCode == 39) {
			//Right arrow button press
			player.xPos += 4;
			if(player.xPos >= canvas.width - charW) {
				player.xPos = canvas.width - charW;
			}
			updateChar();
		}
		else if(event.keyCode == 40) {
			//Down arrow button press
			player.yPos += 1;
			if(player.yPos > 180) {
				player.yPos = 180;
			}
			updateChar();
		}

		}
	)
}
