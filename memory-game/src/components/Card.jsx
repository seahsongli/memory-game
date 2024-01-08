import React from "react";
const Card = ({card}) => {

    return (
        <div className = "card-front">
            <img src = {card.image}></img>
            <div>{card.name}</div>
        </div>
    )
};
export default Card