//rock paper scissors with while loop and array remastered
let playGame = confirm("Shall we play rock paper scissors?");
if (playGame) {
  //play
  while (playGame) {
    const playerChoice = prompt("please enter rock, paper or scissors");
    if (playerChoice || playerChioce === "") {
      const playerOne = playerChoice.trim().toLowerCase();

      if (
        playerOne === "rock" ||
        playerOne === "paper" ||
        playerOne === "scissors"
      ) {
        const computerChioce = Math.floor(Math.random() * 3);
        const rpsArray = ["rock", "paper", "scissors"];
        const computer = rpsArray[computerChoice];

        const result =
          playerOne === computer
            ? "Tie game!"
            : playerOne === "rock" && computer === "paper"
            ? `PlayerOne: ${playerOne}\ncomputer: ${computer}\nComputer Wins!`
            : playerOne === "paper" && computer === "scissors"
            ? `PlayerOne: ${playerOne}\ncomputer: ${computer}\nComputer Wins!`
            : playerOne === "scissors" && computer === "rock"
            ? `PlayerOne: ${playerOne}\ncomputer: ${computer}\nComputer Wins!`
            : `PlayerOne: ${playerOne}\ncomputer: ${computer}\nYou Win!`;
        alert(result);
        playGame = confirm("Play Again?");
        if (!playGame) alert("Ok, thanks for playing.");
        continue;
      } else {
        alert("You didn't enter rock, paper or scissors.");
        continue;
      }
    } else {
      alert("I guess you changed your mind. Maybe next time.");
      break;
    }
  }
} else {
  alert("Ok, maybe next time");
}
