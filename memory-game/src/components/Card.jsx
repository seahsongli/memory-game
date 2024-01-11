import React from "react";
import "../styles/Card.css"
const Card = ({card, onClick}) => {
    return (
        <div className = "card-inner">
            <div className = "card-front">
                <button className = "card" onClick = {onClick}>
                    <img src = {card.image} className = "card-image"></img>
                    <div>{card.name}</div>
                </button>
            </div>

            {/* <div className = "card-back">
                <img src = {`${process.env.PUBLIC_URL/card-back.jpg}`} className = "back"></img>
            </div> */}
        </div>
    )
};
export default Card