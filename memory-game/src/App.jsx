import { useState, useEffect } from 'react'
import Main from './components/Main'
import usePokemons from './PokemonFunctions'
import Score from './components/Score'
import GameOver from './components/GameOver'
import './App.css'

function App() {
  const {pokemons, setPokemons, getRandomPokemon, shufflePokemons} = usePokemons()
  const [gameStatus, setGameStatus] = useState("start")
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(localStorage.getItem("best-score") || 0)
  const initializePokemons = async () =>{
    const randomPokemons = getRandomPokemon(5)
    setPokemons(await randomPokemons)
  }
  const incrementScore = () =>{
    const updatedScore = currentScore + 1
    setCurrentScore(updatedScore)
    const newBestScore = Math.max(updatedScore, bestScore)
    setBestScore(newBestScore)

    localStorage.setItem("best-score", newBestScore) // So that we can keep track even after re-render
  }
  const updateCardsClicked = (index) =>{
    const newCards = [...pokemons] // Every index is an object.
    newCards[index].isClicked = true
    setPokemons(newCards)
  }
  const handleCardClick = async (cardIndex) =>{
    const card = pokemons[cardIndex]
    if (card.isClicked) return setGameStatus("lose") // to indicate user has lost
    console.log("Card not clicked!")
    
    updateCardsClicked(cardIndex) 
    incrementScore()
    const everyCardClicked = pokemons.every((card)=>card.isClicked)
    if (!everyCardClicked){
      shufflePokemons()
      return;
    }
    const win = currentScore === pokemons.length
    if (win){
      setGameStatus("win")
    }
    else{
      handleLevelUp() // not done yet
    }
  }
  const onPlayAgain = ()=>{
    setGameStatus("game")
    setCurrentScore(0)
    initializePokemons(5)
  }

  const onQuit = ()=>{
    setGameStatus("start")
    setCurrentScore(0)
  }
  return (
    <>
      <button onClick = {initializePokemons}>Start</button>
      <>
        {(gameStatus==="win" || gameStatus==="lose")&& 
          (<GameOver gameStatus={gameStatus} score={currentScore} onPlayAgain={onPlayAgain} onQuit={onQuit}/>)}
      
        <Score bestScore={bestScore} currentScore={currentScore}/>
        <Main cards = {pokemons} handleClick={handleCardClick}/>
      </>
    </>
  )
}

export default App
