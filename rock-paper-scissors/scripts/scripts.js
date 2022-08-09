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
    }
    else if(selection == 0 && computer == 1){
        console.log("Player rock game paper");
    }
    else if(selection == 0 && computer == 2){
        console.log("player rock game scissors");
    }
    else if(selection == 1 && computer == 0){
        console.log("player paper game rock");
    }
    else if(selection == 1 && computer == 2){
        console.log("player paper game scissors");
    }
    else if(selection == 2 && computer == 0){
        console.log("player scissors game rock");
    }
    else if(selection == 2 && computer == 1){
        console.log("player scissors game paper");
    }
}

