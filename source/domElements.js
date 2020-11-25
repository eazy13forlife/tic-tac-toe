//create the tictac board for 9 squares along with their respective ids.
const ticTacBoard=document.querySelector(".grid-container")
for(let i=1;i<=9;i++){
  const box=document.createElement("div");
  box.textContent="";
  box.setAttribute("id", `_${i}`);
  box.classList.add("square");
  ticTacBoard.appendChild(box);
}

const reset=document.querySelector("#reset");
const allSquares=document.querySelectorAll(".square");
const messageEl=document.querySelector("#message")

const playerButton=document.querySelector("#another_player");
const computerButton=document.querySelector("#computer")

const gameContainerEl=document.querySelector(".game-container");
const homePageEl=document.querySelector(".home-page")
const goBackEl=document.querySelector("#go_back")

console.log(allSquares)
export{reset,allSquares,messageEl,playerButton,computerButton,gameContainerEl,homePageEl,goBackEl}
