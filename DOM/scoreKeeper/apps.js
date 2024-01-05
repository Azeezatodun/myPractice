const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("winner");
      opponent.display.classList.add("loser");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}
p1.button.addEventListener("click", function () {
  updateScore(p1, p2);
});
p2.button.addEventListener("click", function () {
  updateScore(p2, p1);
});
winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});
resetButton.addEventListener("click", reset);
function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("winner", "loser");
    p.button.disabled = false;
  }
}

// const p1Display = document.querySelector("#p1Display");
// const p2Display = document.querySelector("#p2Display");
// const player1 = document.querySelector("#p1Button");
// const player2 = document.querySelector("#p2Button");
// const resetButton = document.querySelector("#reset");
// const winningScoreSelect = document.querySelector("#playto");

// let p1Score = 0;
// let p2Score = 0;
// let winningScore = 3;
// let isGameOver = false;
// player1.addEventListener("click", function () {
//   if (!isGameOver) {
//     p1Score += 1;
//     if (p1Score === winningScore) {
//       isGameOver = true;
//       p1Display.classList.add("winner");
//       p2Display.classList.add("loser");
//       player1.disabled = true;
//       player2.disabled = true;
//     }
//   }
//   p1Display.textContent = p1Score;
// });
// player2.addEventListener("click", function () {
//   if (!isGameOver) {
//     p2Score += 1;
//     if (p2Score === winningScore) {
//       isGameOver = true;
//       p2Display.classList.add("winner");
//       p1Display.classList.add("loser");
//       player1.disabled = true;
//       player2.disabled = true;
//     }
//   }
//   p2Display.textContent = p2Score;
// });
// winningScoreSelect.addEventListener("change", function () {
//   winningScore = parseInt(this.value);
//   reset();
// });
// resetButton.addEventListener("click", reset);
// function reset() {
//   isGameOver = false;
//   p1Score = 0;
//   p2Score = 0;
//   p1Display.textContent = 0;
//   p2Display.textContent = 0;
//   p1Display.classList.remove("winner", "loser");
//   p2Display.classList.remove("winner", "loser");
//   player1.disabled = false;
//   player2.disabled = false;
// }
