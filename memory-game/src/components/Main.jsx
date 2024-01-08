import Card from "./Card"
function Main({cards}){
    return (
        <div className = "cards">
            {cards.map((card)=>{
                <Card card={card}/>
            })}
        </div>
    )
}
export default Main;