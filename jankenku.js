// My first interactive game in js
let playGame = confirm("Shall we play jankenku?");
if (playGame) {
  //play
  let playerChoice = prompt("please enter rock, paper or scissors.");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "Scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";
      let result =
        playerOne === computer
          ? "Tie game"
          : playerOne === "rock" && computer === "paper"
          ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
          : playerOne === "paper" && computer === "scissors"
          ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
          : playerOne === "scissors" && computer === "rock"
          ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
          : `playerOne: ${playerOne}\ncomputer: ${computer}\nYou win`;
      alert(result);
      let playAgain = confirm("play again?");
      playAgain ? location.reload() : alert("ok, see you next time");
    } else {
      alert("You didn't enter rock, paper or scissors. Don't you wanna play");
    }
  } else {
    alert("I see you changed your mind. That's fine");
  }
} else {
  alert("ok, maybe next time");
}
