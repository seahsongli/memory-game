import OptionButton from "./OptionButton"
const GameOver = ({gameStatus, score, onPlayAgain, onQuit})=>{
    return(
        <div>
            <p>{gameStatus==="win"?"You Win!":"Game Over!"}</p>
            {gameStatus && (
            <img
            src={
              gameStatus === "win"
                ? "https://media2.giphy.com/media/xx0JzzsBXzcMK542tx/giphy.gif"
                : "https://media.tenor.com/TRTMIXMvMlAAAAAC/ditto-sad.gif"
            }
            className="status-gif"
            alt=""
          />)}

          <div className ="final-stats">
            <span className ="final-score">{`Your final score is:${" "}`}
                <span className="final-score-number">{score}</span>
            </span>
          </div>

          <div className = "options">
            {/* {gameStatus === "win" && (
                <OptionButton onClick={onContinue}>Keep playing</OptionButton>
            )} */}
            <OptionButton onClick={onPlayAgain}>Play again</OptionButton>
            <OptionButton onClick={onQuit}>Quit</OptionButton>
          </div>
        </div>
    )
}
export default GameOver