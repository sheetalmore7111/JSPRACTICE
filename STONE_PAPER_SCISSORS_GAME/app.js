let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgShow = document.querySelector("#msg");
const userScoreText = document.querySelector("#user-score");
const compScoreText = document.querySelector("#comp-score");

const genComputerChoice = () => {
  let option = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

const drawGame = () => {
  console.log("Game was Draw");
  msgShow.innerText = "Game was Draw";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScoreText.innerText = userScore;

    msgShow.innerText = "You Win !";
    msgShow.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreText.innerText = compScore;

    msgShow.innerText = "You Lose..";
    msgShow.style.backgroundColor = "red";
  }
};

const palyGame = (userChoice) => {
  console.log("User Coiche = ", userChoice);
  const compChoice = genComputerChoice();
  console.log("Computer Coiche = ", compChoice);

  if (userChoice == compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      userWin = compChoice == "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = compChoice == "scissors" ? false : true;
    } else {
      userWin = compChoice == "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("User Select ", userChoice);
    palyGame(userChoice);
  });
});
