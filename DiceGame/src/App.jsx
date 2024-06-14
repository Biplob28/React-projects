import React, {useState} from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/Gameplay";

function App() {
  const[isGameStarted, setIsGameStarted] = useState(false)
   function toggleGamePlay(){

    setIsGameStarted((prev ) => !prev)
   }

  
  return (
    <>
    {isGameStarted ? <GamePlay /> : <StartGame toggle ={toggleGamePlay}  />}

      
    
    </>
  );
}

export default App;
