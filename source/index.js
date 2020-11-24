import{returnGameBoard}from"./gameboard.js"
import{returnPlayerObject} from "./player.js"
import{fullGame,resetGame,fullGameComputer} from "./playGame.js";
import{allSquares,reset,messageEl,playerButton,computerButton,gameContainerEl,homePageEl}from "./domElements.js"


//create the gameboard
const firstGameBoard=returnGameBoard();

//initially,set player1 and player2 and computer equal to what they are
let player1=returnPlayerObject("Player 1","X");
let player2=returnPlayerObject("Player 2","X");
const computer=returnPlayerObject("Computer","O")

//set the title to player 1, its your turn,because player 1 begins first each time
messageEl.textContent=`${player1.name}, it's your turn.`

//when we click the another player button;
playerButton.addEventListener("click",(e)=>{
  homePageEl.setAttribute("style","display:none;")
  gameContainerEl.setAttribute("style","display:block;");
  allSquares.forEach((square)=>{
    square.addEventListener("click", function play(){
      fullGame(square,player1,player2,firstGameBoard)//dont forget to change computer to player 2
    })
  })
})

//when we click the computer button;
computerButton.addEventListener("click",(e)=>{
  homePageEl.setAttribute("style","display:none;")
  gameContainerEl.setAttribute("style","display:block;");
  allSquares.forEach((square)=>{
    square.addEventListener("click", function play(){
      fullGameComputer(square,player1,computer,firstGameBoard)//dont forget to change computer to player 2
    })
  })
})


//for the reset button, add an event listener
reset.addEventListener("click",(e)=>{
  resetGame(player1,player2,firstGameBoard)
})






export{computer}

/*
const allSquares=document.querySelectorAll(".square")
allSquares.forEach((square)=>{
  square.addEventListener("click",(e)=>{
    player1.renderLetter(e.target.id)
    player1.pushLetter(firstGameBoard,e.target.id);
    player1.check3(firstGameBoard);
    /*
    player2.renderLetter(e.target.id);
    player2.pushLetter(firstGameBoard,e.target.id)

    playerMove(firstGameBoard,e.target.id,player1,player2)
    console.log(firstGameBoard);

  })
})
*/
