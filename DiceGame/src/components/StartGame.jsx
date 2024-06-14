


function StartGame({toggle}){

    return(
        <div className="StartGame-section">
            
            <div className="image-section">
                <img src="/src/assets/dices.png" alt="Intro-Image" />
            </div>
            <div className="Intro-section">
                <h1 className="intro-heading">DICE GAME</h1>
                <button onClick={toggle}>Play Game</button>
            </div>


        </div>
    );


}
export default StartGame
