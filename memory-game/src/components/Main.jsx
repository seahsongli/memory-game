import Card from "./Card"
const Main = ({cards, handleClick}) => {
    return(
        <div className = "cards">
            {cards.map((card)=>{
                return <Card card={card} handleClick={handleClick}/>
            })}
        </div>
    )
}
export default Main