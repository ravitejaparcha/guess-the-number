"use strict";

// Generate random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);

let score = 20;
let highScore = 0;

// Function to display message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Again button click event
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

// Check button click event
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When no number is entered
  if (!guess) {
    displayMessage("⛔ No Number");

    //When user guess the correct number
  } else if (guess === secretNumber) {
    displayMessage(" 🎊 Yes! Thats correct");
    document.querySelector(".number").textContent = guess;

    document.querySelector("body").style.backgroundColor = "green";

    document.querySelector(".number").style.width = "30rem";

    // high score logic implementation
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //When user didn't guess the correct number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("☹️ Game over");
      document.querySelector(".score").textContent = 0;
    }
  }
});
