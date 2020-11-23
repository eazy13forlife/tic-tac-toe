//there are 9 object in our gameArray. Comoputer needs to chooose 1
import{playerMove}from "./playGame.js"
const computerMove=()=>{
  let a=1;
  let b=9;
  const number= Math.ceil(Math.random()*8)+a;
  return `_${number}`
}


export{computerMove}
