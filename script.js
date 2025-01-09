const cell = Array.from(document.querySelectorAll(".cell"));
const restart = document.querySelector(".restart");
const turnWinner = document.querySelector(".turn-winner");
let currentPlayer = "O";
let running = false;
let spaces = Array(9).fill("");
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

initialGame();

function initialGame() {
  cell.map((item) => item.addEventListener("click", cellClick));
  running = true;
}

function cellClick() {
  let cellIndex = this.getAttribute("data-index");

  if (spaces[cellIndex] !== "" || running == false) {
    return;
  }

  spaces[cellIndex] = currentPlayer;

  changePlayer(this);
}

function changePlayer(item) {
  item.innerHTML = currentPlayer;
  currentPlayer = currentPlayer === "O" ? "X" : "O";
}

function WinnerPlayer() {}

function RestartGame() {}
