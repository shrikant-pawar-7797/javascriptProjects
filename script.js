let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const user_score=document.querySelector("#user-score");
const comp_score=document.querySelector("#comp-score");

const genCompChoice = () =>{
    //rock, paper, scissors

    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()* 3);
    return options[randomIdx];

}

   drawGame= ()=>{
    console.log("Game draw...!");
    msg.innerText= "Game was draw. Play again.";
    msg.style.backgroundColor= "#081b31";


} 
    
    const showWinner= (userWin, userChoice, compChoice) =>{

        if (userWin) {
            console.log("You Win...!");
            userScore++;
            user_score.innerText = userScore;
            msg.innerText= `You Win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor= "green";
        } else {
            console.log("You Lose...!");
            compScore++;
            comp_score.innerText = compScore;
            msg.innerText=`You Lost. ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor= "red";
        }
    }

    const playGame = (userChoice) => {
    console.log("User choice is :", userChoice);
    //Generate computer choice...
   const compChoice= genCompChoice();
   console.log("Computer choice is : ",compChoice);

   if(userChoice === compChoice){
    //Draw game
      drawGame();
   }else{
    let userWin=true;
    if(userChoice === "rock"){
        // scissors , paper
        userWin = compChoice === "paper" ? false : true;
    }
    else if( userChoice === "paper"){
        // rock , scissors
        userWin =compChoice === "scissors" ? false : true;
    }
    else if(userChoice === "scissors"){
        // rock , paper 
        userWin= compChoice === "rock"? false : true;
    }
    showWinner(userWin , userChoice, compChoice);
   }

};

choices.forEach((choice) => {
    console.log(choice);
choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
})
})

// dummy changes to do commit
//click + icon
// add commit message
//click commit