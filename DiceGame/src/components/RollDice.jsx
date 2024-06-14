import React, { useState } from "react";
import Resetbtn from "./Resetbtn";

function RollDice() {

  const [currentDice, setCurrentDice] = useState(2);
  

  function randomNumGen(min, max){

    return Math.floor(Math.random()* (max -min) + min);
  }
 function rollDice(){

    const number = randomNumGen(1,7);
    console.log(number);

    setCurrentDice((prev) => number)

 }
  

  

  return (
    <div className="RollDice-section" onClick={rollDice}>
    
      <img
        src={`/src/assets/dice-images/dice_${currentDice}.png`}
        alt="dice-1"
      />
      <p className="img-description">Click on dice to roll.</p>

      
      {/* <Resetbtn /> */}
    </div>
  );
}
export default RollDice;
