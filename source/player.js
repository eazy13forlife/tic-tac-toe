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
      const index=gameboard.gameArray.findIndex((array)=>{
        return array.find((object)=>{
          return object.id===elementId
        })
      })
      if(index>-1){
        const value=gameboard.gameArray[index].find((object)=>{
          return object.id===elementId;
        })
        if(value){
          value.letter=this.letter;
        }
      }
    }
  }
}

const check3F=()=>{
  return{
    check3(gameboard){
      const value=gameboard.gameArray.every((array)=>{
        return array.every((object)=>{
          return object.letter===this.letter;
        })
      })
      if(value){
        console.log("yessir")
      }
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



export{returnPlayerObject};
