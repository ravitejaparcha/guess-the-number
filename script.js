"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
// document.querySelector(".number").textContent = secretNumber;

let score = 20;

let highScore = 0;

// console.log(guess);

document.querySelector(".again").addEventListener("click", function () {
  // console.log("clicked again");
  // document.querySelector(".score").textContent = 20;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

document.querySelector(".check").addEventListener("click", function () {
  // console.log("button clicked");
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number";
    // console.log("No number");
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = " 🎊 Yes! Thats correct";
    document.querySelector(".number").textContent = guess;

    document.querySelector("body").style.backgroundColor = "green";

    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // console.log("Yes equal");
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "☹️ Game over";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "☹️ Game over";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number! 🎊";
