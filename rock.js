let sel_rock = document.querySelector('.rock');
let sel_paper = document.querySelector('.paper');
let sel_scissors = document.querySelector('.sissors');
let computer_display = document.querySelector('.computer');
let statement_display = document.querySelector('.statement');

// adding event listeners
sel_rock.addEventListener('click' ,function(){
    document.querySelector('.display_text').innerHTML = 'you choose  "ROCK"'
playgame("rock");
})
sel_paper.addEventListener('click' ,function(){
    document.querySelector('.display_text').innerHTML = 'you choose  "paper"'
playgame("paper");
})
sel_scissors.addEventListener('click' ,function(){
    document.querySelector('.display_text').innerHTML = 'you choose "scissors"'
playgame("scissors");
})



function playgame(playerchoice){
    const choices = ['rock' , 'scissors' , 'paper'];
    const computerchoice = choices[Math.floor(Math.random() * 3)];
    computer_display.innerHTML = `computer chose : "${computerchoice}"`;
    

    let result = "";
    if(playerchoice === computerchoice){
        result = "its a tie !!";
    }
    else if(playerchoice === "rock" && computerchoice === "scissors"){
        result = "you won 🎉";
    }
    else if(playerchoice === "paper" && computerchoice === "rock"){
        result = "you won 🎉";
    }
    else if(playerchoice === "scissors" && computerchoice === "paper"){
        result = "you won 🎉";
    }
    else{
        result = "you lose 😢";
    }
    statement_display.innerHTML = result;
}