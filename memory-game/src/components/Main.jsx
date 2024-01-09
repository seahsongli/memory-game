import Card from "./Card"
const Main = ({cards, handleClick}) => {
    // console.log(cards)
    return (
        <div className = "cards">
            {cards.map((card, index)=>{
                // console.log(card.id)
                return <Card key={card.id} card={card} onClick = {()=> handleClick(index)}/>
            })}
        </div>
    )
}
export default Main