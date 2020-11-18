const returnPlayerObject=(name,letter)=>{
  const initialObject={
    name,
    letter,
  }
  return{
    ...initialObject,
    ...renderLetterF(),
    ...pushLetterF(),
    ...check3F(),
    ...displayMessageF(),
  }
}

const renderLetterF=()=>{
  return{
    renderLetter(id){
      document.querySelector(`#${id}`).textContent=`${this.letter}`
    }
  }
}

const pushLetterF=()=>{
  return{
    pushLetter(gameboard,elementId){
      gameboard.gameArray=gameboard.gameArray.map((array)=>{
        const value=array.find((object)=>{
          return object.id===elementId;
        })
        if(value){
          value.letter=this.letter;
          return array;
        }else{
          return array;
        }
      })
    }
  }
}

const check3F=()=>{
  return{
    check3(gameboard){
      for(let i=0;i<=gameboard.gameArray.length-1;i++){
        const set=gameboard.gameArray[i].every((object)=>{
          return object.letter===this.letter;
        })
          if(set){
            this.displayMessage();
            return true;
            break;
          }
        }
      }
    }
  }




const displayMessageF=()=>{
  return{
    displayMessage(){
      console.log(`${this.name} won!`);
    }
  }
}
/*
const filterSet=(object,firstId,secondId,thirdId)=>{
    return object.id===firstId||object.id===secondId||object.id===thirdId
  }

  const validateSet=(set)=>{
    return set.every((object)=>{
      return object.letter===this.letter
    })
  }
*/
/*
check3(gameboard){
  const value=gameboard.gameArray.every((array)=>{
    return array.every((object)=>{
      return object.letter===this.letter;
    })
  })
  if(value){
    this.displayMessage();
    return true;
  }
  const firstSet=gameboard.gameArray[0].every((object)=>{
    return object.letter===this.letter
  })
  */


export{returnPlayerObject};
