import{messageEl} from "./playGame.js"

//create a function that returns a player object. we pass in the name of the player and the letter that they want to be.
const returnPlayerObject=(name,letter)=>{
  const initialObject={
    name,
    letter,
  }
  //we return an object with the initial object, along with all of the functions that return a method that we want used in our object.
  return{
    ...initialObject,
    ...renderLetterF(),
    ...pushLetterF(),
    ...check3F(),
    ...displayMessageF(),
    ...filterSetF(),

  }
}
//function that renders the letter(x or o) to the screen when a player clicks a square
const renderLetterF=()=>{
  return{
    renderLetter(id){
      document.querySelector(`#${id}`).textContent=`${this.letter}`
    }
  }
}

//function that pushes the players letter to the gameboard array for that specific square
const pushLetterF=()=>{
  return{
    pushLetter(gameboard,elementId){
      const value=gameboard.gameArray.find((object)=>{
        return object.id===elementId;
      })
      if(value){
        value.letter=this.letter;
      }
    }
  }
}

//function that checks if there are 3 x or o in a row
const check3F=()=>{
  return{
    check3(gameboard){
      const set1=this.filterSet(gameboard,"_1","_2","_3");
      const set2=this.filterSet(gameboard,"_4","_5","_6");
      const set3=this.filterSet(gameboard,"_7","_8","_9");
      const set4=this.filterSet(gameboard,"_1","_4","_7");
      const set5=this.filterSet(gameboard,"_2","_5","_8");
      const set6=this.filterSet(gameboard,"_3","_6","_9");
      const set7=this.filterSet(gameboard,"_1","_5","_9");
      const set8=this.filterSet(gameboard,"_3","_5","_7");
      if(set1||set2||set3||set4||set5||set6||set7||set8){
        this.displayMessage();
        return true;
      }else{
        console.log("hello")
      }
    }
  }
}





const displayMessageF=()=>{
  return{
    displayMessage(){
      messageEl.textContent=`${this.name} won!`;
    }
  }
}

const filterSetF=()=>{
  return{
    filterSet(object,firstId,secondId,thirdId){
      const set= object.gameArray.filter((object)=>{
        return object.id===firstId||object.id===secondId||object.id===thirdId
      })
      return set.every((object)=>{
        return object.letter===this.letter
      })
    }
  }
}



const filterSemt=(gameboard,firstId,secondId,thirdId)=>{
  gameboard.gameArray
    return object.id===firstId||object.id===secondId||object.id===thirdId
  }

  const validateSet=(set)=>{
    return set.every((object)=>{
      return object.letter===this.letter
    })
  }

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
