import{returnGameBoard}from"./gameboard.js"
import{returnPlayerObject} from "./player.js"
import{fullGame,resetGame,fullGameComputer} from "./playGame.js";
import{allSquares,reset,messageEl,playerButton,computerButton,gameContainerEl,homePageEl,goBackEl}from "./domElements.js"


//create the gameboard
const firstGameBoard=returnGameBoard();

//initially,set player1 and player2 and computer equal to what they are
let player1=returnPlayerObject("Player 1","X");
let player2=returnPlayerObject("Player 2","0");
const computer=returnPlayerObject("Computer","0")

//set the title to player 1, its your turn,because player 1 begins first each time
  messageEl.textContent=`${player1.name}, its your turn`

let compSelect=null;
let playerSelect=null;

const playPlayer=(e)=>{
  fullGame(e.target,player1,player2,firstGameBoard)
}

const playComputer=(e)=>{
  fullGameComputer(e.target,player1,computer,firstGameBoard)
}

//when we click the another player button;
playerButton.addEventListener("click",(e)=>{
  playerSelect=true;
  homePageEl.setAttribute("style","display:none;")
  gameContainerEl.setAttribute("style","display:block;");
  allSquares.forEach((square)=>{
    square.addEventListener("click",playPlayer)//dont forget to change computer to player 2
  })
  })


//when we click the computer button;
computerButton.addEventListener("click",(e)=>{
  compSelect=true;
  homePageEl.setAttribute("style","display:none;")
  gameContainerEl.setAttribute("style","display:block;");
  allSquares.forEach((square)=>{
    square.addEventListener("click", playComputer,)
  })
})


//for the reset button, add an event listener
reset.addEventListener("click",(e)=>{
  resetGame(player1,player2,firstGameBoard)
})
console.log('hi')
//when we click the go back button
goBackEl.addEventListener("click",(e)=>{
  resetGame(player1,player2,firstGameBoard);
  allSquares.forEach((square)=>{
    if(playerSelect){
      square.removeEventListener("click",playPlayer);
      playerSelect=false;
    }else{
      square.removeEventListener("click",playComputer);
      compSelect=false;
    }
    })
  gameContainerEl.setAttribute("style","display:none");
  homePageEl.setAttribute("style","display:block")
  })







export{computer}
