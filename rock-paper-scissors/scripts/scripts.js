window.onload = () => {
    const rock = document.getElementById("rock");
    rock.addEventListener("click", rockClicked);

    const paper = document.getElementById("paper");
    paper.addEventListener("click", paperClicked);

    const scissors = document.getElementById("scissors");
    scissors.addEventListener("click", scissorsClicked);

};

function rockClicked(){
    playGame(0); 
};

function paperClicked(){
    playGame(1); 
};

function scissorsClicked(){
    playGame(2); 
};

function playGame(selection){
    let computer = Math.floor(Math.random() * 3); 
    if(computer == selection){
        console.log("tie")
        displayResult("Player and Game Tied");
    }
    else if(selection == 0 && computer == 1){
        console.log("Player rock game paper");
        displayResult("Player Picks Rock Game Picks Paper Game Wins");
    }
    else if(selection == 0 && computer == 2){
        console.log("player rock game scissors");
        displayResult("Player Picks Rock Game Picks Scissors Player Wins");
    }
    else if(selection == 1 && computer == 0){
        console.log("player paper game rock");
        displayResult("Player Picks Paper Game Picks Rock Player Wins");
    }
    else if(selection == 1 && computer == 2){
        console.log("player paper game scissors");
        displayResult("Player Picks Paper Game Picks Scissors Game Wins");
    }
    else if(selection == 2 && computer == 0){
        console.log("player scissors game rock");
        displayResult("Player Picks Scissors Game Picks Rock Game Wins");
    }
    else if(selection == 2 && computer == 1){
        console.log("player scissors game paper");
        displayResult("Player Picks Scissors Game Picks Paper Player Wins");
    }
}

function displayResult(result){
    document.getElementById("results").innerText = result; 
}