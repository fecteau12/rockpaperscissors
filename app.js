console.log("hello, type rock, paper, or scissors");


function playRound(a, b) {
    console.log(a);
    console.log(b);
    if (a == b) {
        window.alert("TIE " + "you chose " + a +" computer chose " + b);
    }
    else if (a == 'scissor' && b == 'paper') {
        window.alert("WIN! " + "you chose " + a +" computer chose " + b);
    }
    else if (a == 'rock' && b == 'scissor') {
        window.alert("WIN! " + "you chose " + a +" computer chose " + b);
    }
    else if (a == 'paper' && b == 'rock') {
        window.alert("WIN! " + "you chose " + a +" computer chose " + b);
    }
    else
        window.alert("LOSER! " + "you chose " + a +" computer chose " + b);

}

function playerSelection() {
    var a = prompt("PLEASE CHOICE NOW", "rock, paper, scissors");

    return a;
}


function compSelection() {
    const choice = ["rock", "paper", "scissor"];
    var cpuchoice = Math.floor(Math.random() * 3);
    return choice[cpuchoice];
}

function game() {
    for (i = 0; i < 1; i++) {
        var x = playerSelection();
        var y = compSelection();
        playRound(x, y);
    }

    if (confirm("Would you like another round?")) {
        game();
    }
    else {
        window.alert("have a nice day!");
    }

}

//game();
