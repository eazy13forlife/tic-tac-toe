import{messageEl}from "./domElements.js"
import{computerMove}from "./computer.js"

//maybe remove player 2 and 1 stuff from playMove functionx
//tells us who goes first or last
let type="odd";

//tell us the number of squares weve clicked. if its 9 and nothing is solved, then its a tie
let i=0;

//function for when a player makes a move

const playerMove=(player,gameboard,id)=>{
  const value=gameboard.gameArray.find((object)=>{
    return object.id===id;
  })
  if(value.letter){
    //if the letter exists and you're still clicking it, it is still your turn,so we keep the message the same. You just have to click something else.
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


//function for when a player and computer makes a move
const playerMoveC=(player,gameboard,id,secondPlayer)=>{
  const value=gameboard.gameArray.find((object)=>{
    return object.id===id;
  })
  console.log(value)
  if(value.letter){
    //if the letter exists and you're still clicking it, it is still your turn,so we keep the message the same. You just have to click something else.
    if(type==="odd"){
      messageEl.textContent=`${player.name}, its your turn`;
    }else{
      messageEl.textContent=`${player.name}, its your turn`;
      playerMoveC(player,gameboard,computerMove());
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
       //if odd automatically say players 2 name and then player 1 will make their choice. If player 1 ennds up clicking something that they cant, playerMove() will change message to players 1 turn still. This is why we place the message before playerMove, so that playerMove can change it in case player 1 clicks the same thing
       messageEl.textContent=`${player2.name}, its your turn`
       playerMove(player1,gameboard,item.id);

     }else if(type==="even"){
       messageEl.textContent=`${player1.name}, its your turn`
       playerMove(player2,gameboard,item.id);

     }
   }
  }

  const fullGameComputer=(item,player1,player2,gameboard)=>{
    //if either player1 or player 2 check 3 is correct(has 3 in a row), dont do anything when we click
    if(player1.check3(gameboard)||player2.check3(gameboard)){

    }else if(i===9){

    }else{
      if(type==="odd"){
        messageEl.textContent=`${player2.name}, its your turn`
        playerMoveC(player1,gameboard,item.id,player2);
      }


      if(type==="even"){
        //before computer makes a move, we have to see if game is a tie or someone won. We didnt have to do this before because everytime we clicked a square the game would check to see if someone had won or tied. But because with computer we are not clicking, we have to do run it again,before it does.
        if(player1.check3(gameboard)||player2.check3(gameboard)){

        }else if(i===9){

        }else{
        messageEl.textContent=`${player1.name}, its your turn`
        playerMoveC(player2,gameboard,computerMove(),player1);
      }
      console.log(type)
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
export{fullGame,messageEl,resetGame,fullGameComputer}
