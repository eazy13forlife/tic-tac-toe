import{messageEl}from "./domElements.js"
import{computerMove}from "./computer.js"
import{computer}from "./index.js"
//maybe remove player 2 and 1 stuff from playMove functionx
//tells us who goes first or last
let type="odd";

//tell us the number of squares weve clicked. if its 9 and nothing is solved, then its a tie
let i=0;

//function for when a player makes a move

const playerMove=function(player,gameboard,id){
  const value=gameboard.gameArray.find((object)=>{
    return object.id===id;
  })
  if(value.letter){
    //if the letter exists and you're clicking it as player1(who is always odd), it is still your turn,so we make the message "whatever your name is", choose another square
    if(type==="odd"){
      messageEl.textContent=`${player.name}, choose another square.`;
    }else{
      //if its even,and a computer, the computer just makes another move.No need for a message to display
      if(arguments[0]===computer){
        playerMove(player,gameboard,computerMove());
      //if its even and not a computer,we say "whatever your name is",choose another square
      }else{
        messageEl.textContent=`${player.name}, choose another square.`;
      }
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
  console.log(type)
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
        messageEl.textContent=`${player1.name}, its your turn.`
        playerMove(player1,gameboard,item.id);
      }
      if(type==="even"){
        //before computer makes a move, we have to see if game is a tie or someone won. We didnt have to do this before because everytime we clicked a square the game would check to see if someone had won or tied. But because with computer we are not clicking, we have to do run it again,before it does.
        if(player1.check3(gameboard)||player2.check3(gameboard)){
        }else if(i===9){
        }else{
          messageEl.textContent=`${player1.name}, its your turn.`
        playerMove(player2,gameboard,computerMove());
      }
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
  messageEl.textContent=`${player1.name}, make your move.`
}
export{fullGame,messageEl,resetGame,fullGameComputer}
