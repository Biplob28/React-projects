
import RollDice from "./RollDice";



function GamePlay({number}) {

  
  


    return (
      <div className="GamePlay-section">
        <h1 className="Score-heading" >Total Score</h1>
        <span>0</span>
        
        <RollDice />
         <div>
        {`Thankyou for playing.It's in Updating process`}
      </div>
      </div>
    );
  }

export default GamePlay
