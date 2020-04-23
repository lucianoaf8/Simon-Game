var gamePatterns = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 3) + 1;
}

var randomChosenColor = buttonColors[nextSequence()];
gamePatterns.push(randomChosenColor);