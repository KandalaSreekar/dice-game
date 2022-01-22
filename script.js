"use strict";
function diceRoll() {
  return Math.trunc(Math.random() * 6) + 1;
}

let player1 = true;
let player1Score = 0;
let player2Score = 0;
let player1FullScore = 0;
let player2FullScore = 0;
document.querySelector(".current-p1").textContent = player1Score;
document.querySelector(".current-p2").textContent = player2Score;
document.getElementById("dice-image").src = "images/dice-6.png";

document.querySelector(".button-1").addEventListener("click", function () {
  if (player1 == true) {
    let diceNumber = diceRoll();
    let diceImageSrc = `images/dice-${diceNumber}.png`;
    if (diceNumber != 1) {
      player1Score += diceNumber;
      document.querySelector(".current-p1").textContent = player1Score;
      document.getElementById("dice-image").src = diceImageSrc;
    } else {
      player1Score = 0;
      document.querySelector(".current-p1").textContent = player1Score;
      player1 = !player1;
      document.querySelector(".main-block").style.background =
        "linear-gradient(to right,#af6e8c 0%,#af6e8c 50%,#d7a3af 50%,#d7a3af 100%";
    }
  } else {
    let diceNumber = diceRoll();
    let diceImageSrc = `images/dice-${diceNumber}.png`;
    if (diceNumber != 1) {
      player2Score += diceNumber;
      document.querySelector(".current-p2").textContent = player2Score;
      document.getElementById("dice-image").src = diceImageSrc;
    } else {
      player2Score = 0;
      document.querySelector(".current-p2").textContent = player2Score;
      player1 = !player1;
      document.querySelector(".main-block").style.background =
        "linear-gradient(to right,#d7a3af 0%,#d7a3af 50%,#af6e8c 50%,#af6e8c 100%";
    }
  }
});
document.querySelector(".hold-btn").addEventListener("click", function () {
  if (player1 == true) {
    document.querySelector(".main-block").style.background =
      "linear-gradient(to right,#af6e8c 0%,#af6e8c 50%,#d7a3af 50%,#d7a3af 100%";
    player1FullScore += player1Score;
    document.querySelector(".score-p1").textContent = player1FullScore;
    player1Score = 0;
    document.querySelector(".current-p1").textContent = player1Score;
    if (player1FullScore >= 50) {
      document.querySelector(".main-block").style.background =
        "linear-gradient(to right,#2F2F2F 0%,#2F2F2F 50%,#d7a3af 50%,#d7a3af 100%";
      alert("Player 1 wins");
    }
    player1 = !player1;
  } else {
    document.querySelector(".main-block").style.background =
      "linear-gradient(to right,#d7a3af 0%,#d7a3af 50%,#af6e8c 50%,#af6e8c 100%";
    player2FullScore += player2Score;
    document.querySelector(".score-p2").textContent = player2FullScore;
    player2Score = 0;
    document.querySelector(".current-p2").textContent = player2Score;
    if (player2FullScore >= 50) {
      document.querySelector(".main-block").style.background =
        "linear-gradient(to right,#d7a3af 0%,#d7a3af 50%,#2F2F2F 50%,#2F2F2F 100%";
      alert("Player 2 wins");
    }
    player1 = !player1;
  }
});
document.querySelector(".start-btn").addEventListener("click", function () {
  document.querySelector(".main-block").style.background =
    "linear-gradient(to right,#d7a3af 0%,#d7a3af 50%,#af6e8c 50%,#af6e8c 100%";
  player1 = true;
  player1Score = 0;
  player2Score = 0;
  player1FullScore = 0;
  player2FullScore = 0;
  document.querySelector(".score-p1").textContent = 0;
  document.querySelector(".score-p2").textContent = 0;
  document.querySelector(".current-p1").textContent = 0;
  document.querySelector(".current-p2").textContent = 0;
  document.getElementById("dice-image").src = "images/dice-1.png";
});
