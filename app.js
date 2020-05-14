

var cpupoints = 0;
var playerpoints = 0;

const playerHand = document.querySelector(".play-hand");
const computerHand = document.querySelector(".comp-hand");

function updateScore() {
    document.getElementById("player-score").innerHTML = playerpoints;
    document.getElementById("computer-score").innerHTML = cpupoints;

}


function playRound(a, b) {


    if (a == b) {
        console.log("TIE " + "you chose " + a + " computer chose " + b);
    }
    else if (a == 'scissors' && b == 'paper') {
        console.log("WIN! " + "you chose " + a + " computer chose " + b);
        playerpoints++;
    }
    else if (a == 'rock' && b == 'scissors') {
        console.log("WIN! " + "you chose " + a + " computer chose " + b);
        playerpoints++;
    }
    else if (a == 'paper' && b == 'rock') {
        console.log("WIN! " + "you chose " + a + " computer chose " + b);
        playerpoints++;
    }
    else {
        console.log("LOSER! " + "you chose " + a + " computer chose " + b);
        cpupoints++;
    }
    updateScore();
}


function playerSelection() {
    var a = prompt("PLEASE CHOICE NOW", "rock, paper, scissors");
    if (a == "rock")
        document.getElementById("player-hand").src = "./assets/rock.png";

    if (a == "paper")
        document.getElementById("player-hand").src = "./assets/paper.png";

    if (a == "scissors")
        document.getElementById("player-hand").src = "./assets/scissors.png";

    return a;
}


function compSelection() {
    const choice = ["rock", "paper", "scissors"];
    var cpuchoice = Math.floor(Math.random() * 3);
    var x = "./assets/" + choice[cpuchoice] + ".png";
    document.getElementById("computer-hand").src = x;

    return choice[cpuchoice];
}

function start() {
    const playround = document.querySelector(".intro button");
    const introMotion = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playround.addEventListener("click", () => {
        introMotion.classList.add("fadeOut");
        match.classList.add("fadeIn");
    })
}

function animation() {

    const options = document.querySelectorAll(".options button");

    playerHand.style.animation = "shakePlayer 2s ease";
    computerHand.style.animation = "shakeComputer 2s ease";

}

function resetHand() {

    playerHand.style.animation = "";
    computerHand.style.animation = "";


}


start();



function rock() {
    document.getElementById("player-hand").src = "./assets/hand.png";
    document.getElementById("computer-hand").src = "./assets/hand.png";
    animation();

    setTimeout(function () {
        document.getElementById("player-hand").src = "./assets/rock.png";
        var x = "rock";
        var y = compSelection();
        playRound(x, y);
        resetHand();
    }, 2000);

}


function paper() {
    document.getElementById("player-hand").src = "./assets/hand.png";
    document.getElementById("computer-hand").src = "./assets/hand.png";
    animation();

    setTimeout(function () {
        document.getElementById("player-hand").src = "./assets/paper.png";
        var x = "paper";
        var y = compSelection();
        playRound(x, y);
        resetHand();
    }, 2000);

}



function scissors() {
    document.getElementById("player-hand").src = "./assets/hand.png";
    document.getElementById("computer-hand").src = "./assets/hand.png";
    animation();

    setTimeout(function () {
        document.getElementById("player-hand").src = "./assets/scissors.png";
        var x = "scissors";
        var y = compSelection();
        playRound(x, y);
        resetHand();
    }, 2000);

}