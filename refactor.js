var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var displayMessage = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");


init();

function init() {
setUpModeButton();
setUpSquares();
reset();
}

function setUpModeButton() {
        for (var i = 0; i < modeButton.length; i++) {
modeButton[i].addEventListener("click", function() {
  modeButton[0].classList.remove("selected");
  modeButton[1].classList.remove("selected");
        this.classList.add("selected");
          this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
          reset();
   });
 };
};

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
//add an event listener to all the squares
squares[i].addEventListener("click", function() {
        //grab the color of the user and save in a new variable
        var clicked = this.style.backgroundColor;
//compare the clickedColor to the pickedColor
if (clicked === pickedColor) {
        displayMessage.textContent = "Correct";
        resetButton.textContent = "PLAY AGAIN?";                                                                                                     changeColor(clicked);                                                                                                                        h1.style.backgroundColor = clicked;                                                                                                  } else {
        this.style.backgroundColor = "#232323";
        displayMessage.textContent = "Try Again"
    }
  });
 };
};

function reset() {                                                                                                                           colors = generateRandomColor(numSquares);
pickedColor = pickColor();

colorDisplay.textContent = pickedColor;
displayMessage.textContent = "";
resetButton.textContent = "New Colors"


for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
                squares[i].style.display = "block";
                squares[i].style.background = colors[i];
        } else {
                squares[i].style.display = "none";
        }
};
h1.style.background = "steelblue";
};

resetButton.addEventListener("click", function() {
        reset();
});


function changeColor(color) {
        for (var i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = color;
        };
};

function pickColor() {
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
};

function generateRandomColor(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
        }
        return arr;
}

function randomColor() {
        var r = Math.floor(Math.random() * 256);

        var g = Math.floor(Math.random() * 256);

        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
};

