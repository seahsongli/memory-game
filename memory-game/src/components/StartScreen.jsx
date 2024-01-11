import { useState } from "react";
import Modal from "./Modal";
import OptionButton from "./OptionButton";
import "../styles/StartScreen.css"
const StartScreen = ({onStart})=>{
    return (
        <Modal>
            <div className = "start-screen-modal">
                <p className="ask-text"> Welcome to the Pokemon Memory Game!</p>
                <p className="ask-text">Do not click the same card twice! </p>
                <p className="ask-text">Get as high of a score as you can!</p>
                <div className = "start-options">
                    <OptionButton type="submit" onClick={onStart} id="start-button">Start game</OptionButton>
                </div>
            </div>
        </Modal>
    )
}
export default StartScreen