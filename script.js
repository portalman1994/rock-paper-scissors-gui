    let i = 0;
    let computerScore = 0;
    let playerScore = 0;
    let playerSelection = "";
    let computerSelection = "";
    var rockButton = document.getElementById("rock");
    var paperButton = document.getElementById("paper");
    var scissorsButton = document.getElementById("scissors");
    rockButton.addEventListener("click", function() {
            playerSelection = document.getElementById("rock").value;
            rounds();
            
    });
    paperButton.addEventListener("click", function() {
            playerSelection = document.getElementById("paper").value;
            rounds();
           
    });
    scissorsButton.addEventListener("click", function() {
        playerSelection = document.getElementById("scissors").value;
        rounds();
    });
    function rounds() {
        i = i + 1;    
        if (i < 6) {
            game();    
        }
        if (i == 5) {
            document.getElementById("scoreMessage").innerHTML = scoreMessage;
        }
    }
    function computerPlay() {
    selection = Math.floor(Math.random() * 3);
    switch(selection) {
        case 0:
            computerSelection = "rock";
            return computerSelection;        
        break;
        case 1:
            computerSelection = "paper";
            return computerSelection;
        break;
        case 2:
            computerSelection = "scissors";        
            return computerSelection;
}
}
    function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        message = "You tie!";
        return message;
    }
    if (playerSelection != computerSelection) {
        switch (playerSelection) {
            case "rock":
                switch (computerSelection) {
                    case "paper":
                        message = "Paper beats Rock!";
                        computerScore += 1;                        
                        return message, computerScore;
                    break;
                    case "scissors":
                        message = "Rock beats Scissors!"; 
                        playerScore +=1;                        
                        return message, playerScore;
                    break;
                }
            break;
            case "paper":
                switch (computerSelection) {
                    case "rock":
                        message = "Paper beats Rock!";
                        playerScore +=1;
                        return message, playerScore;
                    break;
                    case "scissors":
                        message = "Scissors beats Paper!";
                        computerScore += 1;
                        return message, computerScore;
                    break;
                }
            break;
            case "scissors":    
                switch (computerSelection) {
                    case "rock":
                        message = "Rock beats Scissors!";
                        computerScore += 1;
                        return message, computerScore;
                    break;
                    case "paper":
                        message = "Scissors beats Paper!";
                        playerScore +=1;
                        return message, playerScore;
                    break;
                }
            break;
        }   
    }    
}
function game() {
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    document.getElementById("message").innerHTML = message;    
    document.getElementById("playerScore").innerHTML = "Player Score: " + playerScore;
    document.getElementById("computerScore").innerHTML = "Computer Score: " + computerScore;
    if (playerScore < computerScore) {
        scoreMessage = "Computer Wins!";           
        return scoreMessage;
    }
    else if (playerScore > computerScore) {
        scoreMessage = "Player Wins!";     
        return scoreMessage;
    }
    else if (playerScore == computerScore) {
        scoreMessage = "You Tie!";     
        return scoreMessage;
    }

    
}
