import OptionButton from "./OptionButton"
import EndGame from "../assets/EndGame.gif"
import "../styles/GameOver.css"
const GameOver = ({gameStatus, score, onPlayAgain, onQuit})=>{
    return(
        <div className = "game-over-container">
            <p>{gameStatus==="win"?"You Win!":"Game Over!"}</p>
            {gameStatus && (
            <img
            src={
              gameStatus === "win"
                ?  require("https://giphy.com/embed/td02jbtsXIxpBv45rJ") 
                : EndGame
            }
            className="status-gif"
          />)}
          
          <div className ="final-stats">
            <span className ="final-score">{`Your final score is:${" "}`}
                <span className="final-score-number">{score}</span>
            </span>
          </div>

          <div className = "options">
            <OptionButton onClick={onPlayAgain}>Play again</OptionButton>
            <OptionButton onClick={onQuit}>Quit</OptionButton>
          </div>
        </div>
    )
}
export default GameOver