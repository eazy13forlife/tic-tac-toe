import{returnGameBoard}from"./gameboard.js"
import{returnPlayerObject} from "./player.js"
import{playerMove,fullGame,resetGame} from "./playGame.js";
import{allSquares,reset,messageEl}from "./domElements.js"

//initially,set player1 and player2 equal to nothing
let player1;
let player2;

//ask the user for who player 1 is and who player 2 is
const play1Name=window.prompt("What is player 1's name?")
const play2Name=window.prompt("What is player 2's name?")
 player1=returnPlayerObject(play1Name,"X");
 player2=returnPlayerObject(play2Name,"O")

const firstGameBoard=returnGameBoard();

messageEl.textContent=`${player1.name}, it's your turn.`

//for each square,add a click event listener
allSquares.forEach((square)=>{
  square.addEventListener("click", function play(){
    fullGame(square,player1,player2,firstGameBoard,play)
    console.log(firstGameBoard)
  })
});

//for the reset button, add an event listener
reset.addEventListener("click",(e)=>{
  resetGame(player1,player2,firstGameBoard)
})








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
