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
      //go to the gameArray and use map feature. Map will look at each individual element in the array and a create a new array based on the return value of the callback function for every element in the calling array.
      gameboard.gameArray=gameboard.gameArray.map((array)=>{
        //while looking at the individual array, we want to find the object within where object.id equals the elementId that we clicked
        const value=array.find((object)=>{
          return object.id===elementId;
        })
        //if that object is found, change its letter to the players letter and then return that new array. So map will return this new array
        if(value){
          value.letter=this.letter;
          return array;
        //if that object is not found, just return the array as it is.
        }else{
          return array;
        }
      })
    }
  }
}

//function that checks if there are 3 x or o in a row
const check3F=()=>{
  return{
    check3(gameboard){
      for(let i=0;i<=gameboard.gameArray.length-1;i++){
        //we look at each individual element(which happens to be an array) in the total gameArray and if all the letter properties in that element have a value of the players letter, run the displayMessage saying who the winner is
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
