var numSquares = 6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");


easyButton.addEventListener("click", function() {
        easyBtn.classList.add("selected");
        hardBtn.classList.remove("selected");
        numSquares = 3;
        colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
        if (colors[i]) {
           squares[i].style.backgroundColor = colors[i];
        } else {
                squares[i].style.display = "none";
        }

        }
        });

hardButton.addEventListener("click", function() {
        hardBtn.classList.add("selected");
        easyBtn.classList.remove("selected");                                                                                                        numSquares = 6;                                                                                                                              colors = generateRandomColor(numSquares);                                                                                                    pickedColor = pickColor();                                                                                                               colorDisplay.textContent = pickedColor;
     for (var i = 0; i < squares.length; i++){
           squares[i].style.backgroundColor = colors[i];
                squares[i].style.display = "block";
    }
        });

resetButton.addEventListener("click", function() {
        //generate all new colors
        colors = generateRandomColor(numSquares);
        //pick a random color from an array
         pickedColor = pickColor();
         //change color display to match picked color
        colorDisplay.textContent = pickedColor;

	messageDisplay.textContent = "";
        this.textContent = "New Colors";
        //make pickeColor reflect on squares
        for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        };
        h1.style.backgroundColor = "steelblue";
  });

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];

        //add click listeners to squares
        squares[i].addEventListener("click", function() {
                //grab color of clicked squares
                var clicked = this.style.backgroundColor;
                //compare clickColor to pickedColor
                console.log(clicked, pickedColor)
                if(clicked === pickedColor) {
                        this.style.background = pickedColor;
                        changeColor(clicked);                                                                                                                        h1.style.backgroundColor = clicked;                                                                                                          resetButton.textContent = "TRY AGAIN?";                                                                                                      messageDisplay.textContent = "Correct!!!"                                                                                            } else {
                        this.style.background ="#232323";
                        messageDisplay.textContent = "Try Again";
        };
  });
};

function pickColor() {
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
};

function changeColor(color) {
        for (var i = 0; i < squares.length; i++) {
                squares[i].style.background = color;
   }
}

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

