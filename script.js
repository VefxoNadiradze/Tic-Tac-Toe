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
  restart.addEventListener("click", RestartGame);
  turnWinner.innerHTML = `${currentPlayer}'s turn`;

  running = true;
}

function cellClick() {
  let cellIndex = this.getAttribute("data-index");

  if (spaces[cellIndex] !== "" || running == false) {
    return;
  }
  spaces[cellIndex] = currentPlayer;

  changePlayer(this);
  turnWinner.innerHTML = `${currentPlayer}'s turn`;

  WinnerPlayer();
}

function changePlayer(item) {
  item.innerHTML = currentPlayer;
  currentPlayer = currentPlayer === "O" ? "X" : "O";
}

function WinnerPlayer() {
  for (let i = 0; i < winningCombinations.length; i++) {
    let combinationIndex = winningCombinations[i];
    let v1 = spaces[combinationIndex[0]];
    let v2 = spaces[combinationIndex[1]];
    let v3 = spaces[combinationIndex[2]];

    if (v1 === "" || v2 === "" || v3 === "") {
      continue;
    }

    if (v1 == v2 && v2 == v3) {
      turnWinner.innerHTML = `${v1} won`;
      running = false;

      break;
    }
  }

  if (!spaces.includes("")) {
    turnWinner.innerHTML = `draw`;
    running = false;
  }
}

function RestartGame() {
  cell.map((item) => {
    item.innerHTML = "";
  });
  currentPlayer = "O";
  running = false;
  spaces = Array(9).fill("");

  initialGame();
}
