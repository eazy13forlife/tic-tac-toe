import{messageEl}from "./domElements.js"


let type="odd";
let i=0;

//function for when a player makes a move
const playerMove=(player,gameboard,id)=>{
  const value=gameboard.gameArray.find((object)=>{
    return object.id===id;
  })
  if(value.letter){
    //if the letter exists and you're still clicking it, it is still your turn. You just have to click something else.
    if(type==="odd"){
      messageEl.textContent=`${player.name}, its your turn`;
    }else{
      messageEl.textContent=`${player.name}, its your turn`;
    }
  }else{
    adjustGlobals();
    player.renderLetter(id);
    player.pushLetter(gameboard,id);
    player.check3(gameboard);
  }
}

//function to play full game
const fullGame=(item,player1,player2,gameboard)=>{
   //if either player1 or player 2 check 3 is correct(has 3 in a row), dont do anything when we click
   if(player1.check3(gameboard)||player2.check3(gameboard)){

   }else if(i===9){

   }else{
     if(type==="odd"){
       messageEl.textContent=`${player2.name}, its your turn`
       playerMove(player1,gameboard,item.id);

     }else if(type==="even"){
       messageEl.textContent=`${player1.name}, its your turn`
       playerMove(player2,gameboard,item.id);

     }
   }
  }

const adjustGlobals=()=>{
  //item.removeEventListener("click",functionToRemove);
  if(type==="even"){
    type="odd"
  }else{
    type="even";
  }
  i++;
  if(i===9){
    messageEl.textContent="Tie Game!"
  }
}

const resetGame=(player1,player2,gameboard)=>{
  //first make each letter in the game array equal to null
  gameboard.gameArray.forEach((object)=>{
      object.letter=null;
  })
  //remove all the textContent from each square
  const allSquares=document.querySelectorAll(".square");
  allSquares.forEach((square)=>{
    square.textContent="";
  });
  //begin with type="odd"(the first person) and i=0(meaning no moves have been made)
  type="odd"
  i=0;
  //change the textContent
  messageEl.textContent=`${player1.name}, its your turn`
}
export{fullGame,messageEl,resetGame}
