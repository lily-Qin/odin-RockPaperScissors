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



function playRound(playerSelection, computerSelection) {
    // your code here!
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // let result = '';
    let result = 0;
    if(playerSelection === computerSelection){
        console.log(`It's a tie! You both chose ${playerSelection}.`);
        result = 0;
    }else if((playerSelection==='paper' && computerSelection === 'rock') || 
      (playerSelection==='rock' && computerSelection === 'scissors') ||
      (playerSelection==='scissors' && computerSelection === 'paper')){
        
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        result = 1;
    }else{
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        result = -1;
    }
    return result;
    
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function playGame(){
    let finalresult = 0;
    let finalWinner = '';
    let round = prompt("How many rounds do you want to play?");
    for(let round = 1; round <= 5; round++ ){
        let playerSelection = prompt("What's your choice? rock, paper or scissors?");
        
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        if(roundResult === 1){
            finalresult += 1;
        }
        

    }
    if(round % 2 === 0 && finalresult === round/2){
        finalWinner = 'Tie';
    }else {
        finalWinner = (finalresult >= round/2)? `You win ${finalresult} out of ${round}, so you win overall!` :`You win ${finalresult} out of ${round}, so you lose overall.`;
    }
    
    console.log(finalWinner);

}
