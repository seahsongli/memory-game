import { useState } from "react";
import Modal from "./Modal";
import OptionButton from "./OptionButton";
const StartScreen = ({onStart})=>{
    return (
        <Modal>
            <div className = "start-screen-modal">
                <p className="ask-text"> Welcome to the Pokemon Memory Game!</p>
                <div className = "start-options">
                    <OptionButton type="submit" onClick={onStart}>Start game</OptionButton>
                    <OptionButton></OptionButton>
                </div>
            </div>
        </Modal>
    )
}
export default StartScreen