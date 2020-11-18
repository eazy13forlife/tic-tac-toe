const playGame=(gameboard,id,player1)=>{
  player1.renderLetter(id);
  player1.pushLetter(gameboard,id);
  if(player1.check3(gameboard)){

  }/*else{
    player2.renderLetter(id);
    player2.pushLetter(gameboard,id);
    if(player2.check3(gameboard)){

    }else{
      playGame(gameboard,id,player1,player2)
    }
  }
  */
}

export{playGame}
