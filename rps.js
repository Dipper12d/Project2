const choices = ["Rock", "Paper", "Scissors"];
let playerChoice = "";

let computerChoice = "";

let winner;

function algorithm() {
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  if (playerChoice === computerChoice) {
    winner = "Tie";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    winner = "Player";
  } else {
    winner = "Computer";
  }

  console.log(`Player chose ${playerChoice}`);
  console.log(`Computer chose ${computerChoice}`);
  console.log(`Winner: ${winner}`);
  scoreSystem();
  updateScore();
  showResult();
  chosenMoves();
  localStorage.setItem("score", JSON.stringify(score));
}

let score = JSON.parse(localStorage.getItem("score")) || {
  Win: 0,
  Lose: 0,
  Tie: 0,
};

function scoreSystem() {
  if (winner === "Tie") {
    score.Tie++;
  } else if (winner === "Player") {
    score.Win++;
  } else if (winner === "Computer") {
    score.Lose++;
  }
  console.log(score);
}

updateScore();

function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins= ${score.Win} Lose= ${score.Lose} Tie=${score.Tie}`;
}

function chosenMoves() {
  document.querySelector(".js-moves").innerHTML = `You:
  <img src="./images/${playerChoice}-icon.jpeg" class="move-icon"/>
  Computer:
  <img src="./images/${computerChoice}-icon.jpeg" class="move-icon"/>
`;
}

function showResult() {
  if (winner === "Tie") {
    document.querySelector(".js-result").innerHTML = `It's a tie!`;
  } else if (winner === "Player") {
    document.querySelector(".js-result").innerHTML = `You Win!`;
  } else if (winner === "Computer") {
    document.querySelector(".js-result").innerHTML = `You Lose!`;
  }
}
