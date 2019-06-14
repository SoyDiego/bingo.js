let container = document.querySelector(".container");
let randomBall;
let repeatNumbers = [];
let countVisibleBalls = 0;
let lastBall = document.querySelector('.lastBall');
document.addEventListener("keydown", start);

//Show balls
for (let index = 1; index <= 90; index++) {
	container.innerHTML += `<div id="${index}" class="ball">${index}</div>`;
}

function start(e) {
	//If the key press is the Right Arrow...
	if (e.which == 39) {
		randomNumber();
	}

	if (e.which == 32) {
		resetGame();
	}
}

function randomNumber() {
	//generate a random number
	randomBall = Math.floor(Math.random() * (91 - 1)) + 1;
	//If the random number (randomBall) is not in the array (repeatNumbers)
	noRepeat(randomBall);
}

function noRepeat(randomBall) {
	if (repeatNumbers.includes(randomBall) === false) {
		//The random number is added to the array...
		repeatNumbers.push(randomBall);
		//And change the opacity to 1
		document.getElementById(`${randomBall}`).style.opacity = 1;
		//And show the lastBall with the ball number.
		lastBall.style.display = "flex";
		lastBall.style.opacity = 1;
		lastBall.innerText = randomBall;
		//Evaluate if you win...
		youWin();
	} else {
		//If the array (repeatNumbers) doesn't have 90 numbers,
		if (repeatNumbers.length !== 90) {
			//repeat the function again...
			randomNumber();
		}
	}
}

function youWin() {
	//Loop to iterate the divs .balls
	for (let i = 0; i <= document.querySelectorAll(".ball").length; i++) {
		//if the div has style with opacity 1...
		if (document.querySelectorAll(".ball")[i].style.opacity == 1) {
			//Count
			countVisibleBalls += 1;
			//If the count is 90, you WIN
			if (countVisibleBalls == 90) {
				alert("BINGO! The game will start again...");
				//And the game start again...
				resetGame();
			}
			return true;
		}
	}
}

function resetGame(){
	for (let index = 1; index <= 90; index++) {
		document.getElementById(`${index}`).style.opacity = 0.2;
		repeatNumbers = [];
		countVisibleBalls = 0;
		lastBall.style.display = "none";
		lastBall.innerText = "";
	}
}
