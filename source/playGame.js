

const playGame=(player,gameboard,id)=>{
  player.renderLetter(id);
  player.pushLetter(gameboard,id);
  player.check3(gameboard);
}

export{playGame}

/*
if(value.letter){
  return array;
}else if(!value.letter){
  value.letter=this.letter;
  return array;
}//if that object is not found where the object id equals the element id, just return the array as it is.
}else{
return array;
}
*/
