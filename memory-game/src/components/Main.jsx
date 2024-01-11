import Card from "./Card"
import "../styles/Main.css"
const Main = ({cards, handleClick, score}) => {
    return (
        <div className = "main">
            <p className="score-progress">
                {score < 5 && (
                `${score} / 5`
            )}
            </p>
            <div className = "cards">
                {cards.map((card, index)=>{
                    return <Card key={card.id} card={card} onClick = {()=> handleClick(index)}/>
                })}
            </div>
        </div>
    )
}
export default Main