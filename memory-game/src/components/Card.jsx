import React from "react";
// import "../styles/Card.css"
const Card = ({card, handleClick}) => {

    return (
        <div className = "card-front">
            <button className = "card" onClick = {handleClick}>
                <img src = {card.image}></img>
                <div>{card.name}</div>
            </button>
        </div>
    )
};
export default Card