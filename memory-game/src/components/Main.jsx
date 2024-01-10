import Card from "./Card"
const Main = ({cards, handleClick, score}) => {
    // console.log(cards)
    return (
        <div className = "main">
            <p className="score-progress">
                {score < 5 && (
                `${score} / 5`
            )}
            </p>
            <div className = "cards">
                {cards.map((card, index)=>{
                    // console.log(card.id)
                    return <Card key={card.id} card={card} onClick = {()=> handleClick(index)}/>
                })}
            </div>
        </div>
    )
}
export default Main