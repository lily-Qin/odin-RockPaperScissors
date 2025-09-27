// console.log("hello,world!")
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    let computerChoice = '';
    const randomNumber = getRandomInt(3);
    switch (randomNumber){
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
        default:
            console.log('the computer choice is wrong.')
    }
    return computerChoice; 
}
// console.log(getComputerChoice())


let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
    // your code here!
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // let result = '';
    // let result = 0;
    let message = "";
    if(playerSelection === computerSelection){
        message = `It's a tie! You both chose ${playerSelection}.`;
        // result = 0;
    }else if((playerSelection==='paper' && computerSelection === 'rock') || 
      (playerSelection==='rock' && computerSelection === 'scissors') ||
      (playerSelection==='scissors' && computerSelection === 'paper')){
        playerScore++;
        message = `You win! ${playerSelection} beats ${computerSelection}.`;
        // result = 1;
    }else{
        computerScore++;
        message = `You lose! ${computerSelection} beats ${playerSelection}.`;
        // result = -1;
    }
    // return result;
    updateResults(message);
    
}
function updateResults(message) {
    const resultsDiv = document.getElementById("results");
    const scoreDiv = document.getElementById("score");
  
    resultsDiv.textContent = message;
    scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
  
    if (playerScore === 5 || computerScore === 5) {
      const winner =
        playerScore === 5
          ? "🎉 You reached 5 first. You win the game!"
          : "😢 Computer reached 5 first. You lose the game!";
      resultsDiv.textContent = winner;
  
      // 禁用按钮，防止继续玩
      document.querySelectorAll("#buttons button").forEach((btn) => {
        btn.disabled = true;
      });
    }
  }
  
  // === 给按钮绑定事件 ===
  document.getElementById("rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
  });
  
  document.getElementById("paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
  });
  
  document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
  });
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// function playGame(){
//     let finalresult = 0;
//     let finalWinner = '';
//     let round = prompt("How many rounds do you want to play?");
//     for(let round = 1; round <= 5; round++ ){
//         let playerSelection = prompt("What's your choice? rock, paper or scissors?");
        
//         let computerSelection = getComputerChoice();
//         let roundResult = playRound(playerSelection, computerSelection);
//         if(roundResult === 1){
//             finalresult += 1;
//         }
        

//     }
//     if(round % 2 === 0 && finalresult === round/2){
//         finalWinner = 'Tie';
//     }else {
//         finalWinner = (finalresult >= round/2)? `You win ${finalresult} out of ${round}, so you win overall!` :`You win ${finalresult} out of ${round}, so you lose overall.`;
//     }
    
//     console.log(finalWinner);

// }
