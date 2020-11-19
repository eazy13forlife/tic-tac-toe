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

console.log(allSquares)
export{reset,allSquares,messageEl}
