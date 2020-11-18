import{returnGameBoard}from"./gameboard.js"
import{returnPlayerObject} from "./player.js"
import{playGame} from "./playGame.js";

const player1=returnPlayerObject("eric","X");
const player2=returnPlayerObject("Michael","O")


//create the tictac board for 9 squares along with their respective ids.
const ticTacBoard=document.querySelector(".grid-container")
for(let i=1;i<=9;i++){
  const box=document.createElement("div");
  box.textContent="";
  box.setAttribute("id", `_${i}`);
  box.classList.add("square")
  ticTacBoard.appendChild(box);
}
const firstGameBoard=returnGameBoard()

const allSquares=document.querySelectorAll(".square")
allSquares.forEach((square)=>{
  square.addEventListener("click",(e)=>{
    player1.pushLetter(firstGameBoard,e.target.id);
    console.log(firstGameBoard);
  player1.check3(firstGameBoard)
  })
})
