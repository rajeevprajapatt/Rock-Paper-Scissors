let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg2 = document.querySelector("#msg");
const userSco = document.querySelector("#userScore");
const compSco = document.querySelector("#compScore");

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userSco.innerText = userScore;
        console.log("You Win");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "red";
    }
    else {
        compScore++;
        compSco.innerText = compScore;
        console.log("You lose");
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "brown";
    }
}

const genCompChoice = () => {
    let options = ["rock", "paper", "scissor"];

    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = () => {
    console.log("Game was Draw");

}
const playgame = (userChoice) => {
    console.log("User Choice is = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice is = ", compChoice);

    userWin = true;
    if (userChoice === compChoice) {
        msg.innerText = "game was Draw";
        msg.style.backgroundColor = "green";
    }
    else {
        if (userChoice === "rock") {
            if (compChoice === "paper") {
                userWin = false;
            }
            else {
                userWin = true;
            }
        }
        else if (userChoice === "paper") {
            if (compChoice === "scissor") {
                userWin = false;
            }
            else {
                userWin = true;
            }
        }
        else {
            if (compChoice === "rock") {
                userWin = false;
            }
            else {
                userWin = true;
            }
        }
        showWinner(userWin);
    }





    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        console.log("Choice Clicked", userChoice);
        playgame(userChoice);
    })
})