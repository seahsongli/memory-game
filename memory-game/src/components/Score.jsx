import "../styles/Scores.css"
const Score = ({currentScore, bestScore})=>{
    return(
        <div className = "stats">
            <p className = "current-score">Score: {currentScore}</p>
            <p className = "best-score">
                <span>
                {/* <i className="nes-icon trophy" /> */}
                <b>Best Score: {bestScore}</b>
                </span>
            </p>
        </div>
    )
}
export default Score