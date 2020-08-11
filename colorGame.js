let isClicked = 0;
let scoreValue = 0;
let highScoreValue = 0;
var numSquares = 8;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

let score = document.querySelector("#score");
let highScore = document.querySelector("#highScore");

let header = document.querySelector("#header");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 4) : (numSquares = 8);
      reset();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function () {
      //grab color of clicked square
      var clickedColor = this.style.background;
      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        if (isClicked == 0) {
          messageDisplay.textContent = "Correct!";
          scoreValue = scoreValue + 10;
          if (highScoreValue < scoreValue) {
            highScoreValue = scoreValue;
          }
          highScore.textContent = "High Score: " + highScoreValue;
          score.textContent = "Score: " + scoreValue;
          isClicked++;
        }

        messageDisplay.classList.remove("tryAgainCLass");
        messageDisplay.classList.add("correctClass");
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        header.style.background = clickedColor;
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again";
        scoreValue = 0;
        score.textContent = "Score: " + scoreValue;
        messageDisplay.classList.add("tryAgainCLass");
        messageDisplay.background = "black";
      }
    });
  }
}

function reset() {
  isClicked = 0;
  let randomNumArray = [111];
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = getTHeNameOfTHeColor(pickedColor); /// Here i get the color name
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  header.style.background = "steelblue";
}

resetButton.addEventListener("click", function () {
  reset();
});

function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// For Unique random value everytime
function generateRandomColors(num) {
  //make an array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    let choosenColor = randomColor();

    for (let j = 0; j < arr.length; j++) {
      if (choosenColor === arr[j]) {
        choosenColor = randomColor();
        j = -1;
      }
    }
    //get random color and push into arr
    arr.push(choosenColor);
  }
  //return that array
  return arr;
}

// let colorWithRGB = {
// 	Black : "rgb(0, 0, 0)",
// 	white : "rgb(255, 255, 255)",
// 	Red :   "rgb(255, 0, 0)",
// 	Lime :  "rgb(0, 255, 0)",
// 	Blue :	"rgb(0, 0, 255)",
// 	Yellow : "rgb(255, 255, 0)",
// 	Silver : "rgb(192, 192, 192)",
// 	Grey : "rgb(128, 128, 128)",
// 	Maroon : "rgb(128, 0, 0)",
// 	Olive : "rgb(128, 128, 0)",
// 	khaki : "rgb(240, 230, 140)",
// 	Green : "rgb(0, 128, 0)",
// 	Orange : "rgb(255, 165, 0)",
// 	Brown : "rgb(165, 42, 42)",
// 	HOT_Pink : "rgb(255, 105, 180)",
// 	Pink : "rgb(255, 192, 203)",

// 	Cyan : "rgb(0,255,255)",
// 	Purple: "rgb(128,0,128)",
// 	Navy: (0,0,128),
// 	crimson: (220,20,60),
// 	turquoise: (64,224,208),
// 	sky_blue: (135,206,235),
// 	violet: 238,130,238
// 	orchid: 218,112,214
// 	wheat: 245,222,179
// 	moccasin: 255,228,181
// 	tomato: (255,99,71)
// 	crimson: 220,20,60)
// 	Teal: (0,128,128)
// }

// let allTheColor = Object.keys(colorWithRGB);
// let allTheRGB = Object.values(colorWithRGB);

function randomColor() {
  let ran = Math.floor(Math.random() * 29);

  if (ran === 0) {
    return "rgb(0, 0, 0)";
  }
  if (ran === 1) {
    return "rgb(255, 255, 255)";
  }
  if (ran === 2) {
    return "rgb(255, 0, 0)";
  }
  if (ran === 3) {
    return "rgb(0, 255, 0)";
  }
  if (ran === 4) {
    return "rgb(0, 0, 255)";
  }
  if (ran === 5) {
    return "rgb(255, 255, 0)";
  }
  if (ran === 6) {
    return "rgb(192, 192, 192)";
  }
  if (ran === 7) {
    return "rgb(128, 128, 128)";
  }
  if (ran === 8) {
    return "rgb(128, 0, 0)";
  }
  if (ran === 9) {
    return "rgb(128, 128, 0)";
  }
  if (ran === 10) {
    return "rgb(240, 230, 140)";
  }
  if (ran === 11) {
    return "rgb(0, 128, 0)";
  }
  if (ran === 12) {
    return "rgb(255, 165, 0)";
  }
  if (ran === 13) {
    return "rgb(165, 42, 42)";
  }
  if (ran === 14) {
    return "rgb(255, 105, 180)";
  }
  if (ran === 15) {
    return "rgb(255, 192, 203)";
  }
  // new colors version 2.0
  if (ran === 16) {
    return "rgb(0, 255, 255)";
  }
  if (ran === 17) {
    return "rgb(128, 0, 128)";
  }
  if (ran === 18) {
    return "rgb(2550, 0, 128)";
  }
  if (ran === 19) {
    return "rgb(220, 20, 60)";
  }
  if (ran === 20) {
    return "rgb(64, 224, 208)";
  }
  if (ran === 21) {
    return "rgb(135, 206, 235)";
  }
  if (ran === 22) {
    return "rgb(238, 130, 238)";
  }
  if (ran === 23) {
    return "rgb(218, 112, 214)";
  }
  if (ran === 24) {
    return "rgb(245, 222, 179)";
  }
  if (ran === 25) {
    return "rgb(255, 228, 181)";
  }
  if (ran === 26) {
    return "rgb(255, 99, 71)";
  }
  if (ran === 27) {
    return "rgb(220, 20, 60)";
  }
  if (ran === 28) {
    return "rgb(0, 128, 128)";
  }
}

// function randomColor(){
// 	//pick a "red" from 0 - 255
// 	var r = Math.floor(Math.random() * 256);
// 	//pick a "green" from  0 -255
// 	var g = Math.floor(Math.random() * 256);
// 	//pick a "blue" from  0 -255
// 	var b = Math.floor(Math.random() * 256);
// 	return "rgb(255, 192, 203)";
// 	//return "rgb(" + r + ", " + g + ", " + b + ")";
// }

function getTHeNameOfTHeColor(pickedColor) {
  if (pickedColor === "rgb(0, 0, 0)") {
    return "Black";
  }
  if (pickedColor === "rgb(255, 255, 255)") {
    return "white";
  }
  if (pickedColor === "rgb(255, 0, 0)") {
    return "Red";
  }
  if (pickedColor === "rgb(0, 255, 0)") {
    return "Lime";
  }
  if (pickedColor === "rgb(0, 0, 255)") {
    return "Blue";
  }
  if (pickedColor === "rgb(255, 255, 0)") {
    return "Yellow";
  }
  if (pickedColor === "rgb(192, 192, 192)") {
    return "Silver";
  }
  if (pickedColor === "rgb(128, 128, 128)") {
    return "Grey";
  }
  if (pickedColor === "rgb(128, 0, 0)") {
    return "Maroon";
  }
  if (pickedColor === "rgb(128, 128, 0)") {
    return "Olive";
  }
  if (pickedColor === "rgb(240, 230, 140)") {
    return "khaki";
  }
  if (pickedColor === "rgb(0, 128, 0)") {
    return "Green";
  }
  if (pickedColor === "rgb(255, 165, 0)") {
    return "Orange";
  }
  if (pickedColor === "rgb(165, 42, 42)") {
    return "Brown";
  }
  if (pickedColor === "rgb(255, 105, 180)") {
    return "HOT_Pink";
  }
  if (pickedColor === "rgb(255, 192, 203)") {
    return "Pink";
  }
  //updated
  if (pickedColor === "rgb(0, 255, 255)") {
    return "Cyan";
  }
  if (pickedColor === "rgb(128, 0, 128)") {
    return "Purple";
  }
  if (pickedColor === "rgb(0, 0, 128)") {
    return "Navy";
  }
  if (pickedColor === "rgb(220, 20, 60)") {
    return "Crimson";
  }
  if (pickedColor === "rgb(64, 224, 208)") {
    return "Turquoise";
  }
  if (pickedColor === "rgb(135, 206, 235)") {
    return "Sky_blue";
  }
  if (pickedColor === "rgb(238, 130, 238)") {
    return "Violet";
  }
  if (pickedColor === "rgb(218, 112, 214)") {
    return "Orchid";
  }
  if (pickedColor === "rgb(245, 222, 179)") {
    return "Wheat";
  }
  if (pickedColor === "rgb(255, 228, 181)") {
    return "Moccasin";
  }
  if (pickedColor === "rgb(255, 99, 71)") {
    return "Tomato";
  }
  if (pickedColor === "rgb(220, 20, 60)") {
    return "Crimson";
  }
  if (pickedColor === "rgb(0, 128, 128)") {
    return "Teal";
  }
}
