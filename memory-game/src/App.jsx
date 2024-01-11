import { useState, useEffect } from 'react'
import Main from './components/Main'
import usePokemons from './PokemonFunctions'
import Score from './components/Score'
import GameOver from './components/GameOver'
import LoadingScreen from './components/LoadingScreen'
import StartScreen from './components/StartScreen'
import './App.css'

function App() {
  const {pokemons, setPokemons, getRandomPokemon, shufflePokemons} = usePokemons()
  const [gameStatus, setGameStatus] = useState("start")
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(localStorage.getItem("best-score") || 0)
  const [loading,setLoading] = useState(false)

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
  const handleLevelUp = () => {
    const randomPokemons=getRandomPokemon(5);
    setLoading(true)
    setTimeout(async ()=>{
      setPokemons(await randomPokemons)
      setLoading(false)
    }, 800)
  }
  const updateCardsClicked = (index) =>{
    const newCards = [...pokemons] // Every index is an object.
    newCards[index].isClicked = true
    setPokemons(newCards)
  }
  const handleCardClick = async (cardIndex) =>{
    const card = pokemons[cardIndex]
    if (card.isClicked) return setGameStatus("lose") // to indicate user has lost
    
    updateCardsClicked(cardIndex) 
    incrementScore()
    const everyCardClicked = pokemons.every((card)=>card.isClicked)
    if (!everyCardClicked){
      shufflePokemons()
      return;
    }
    const win = (currentScore === pokemons.length)
    if (win){
      setGameStatus("win")
    }
    else{
      handleLevelUp()
    }
  }
  const onPlayAgain = ()=>{
    setGameStatus("game")
    setCurrentScore(0)
    initializePokemons(5)
    setPokemons([])
  }

  const onQuit = ()=>{
    setGameStatus("start")
    setCurrentScore(0)
    setPokemons([])
  }
  return (
    <div className="App">
     {loading ? (
      <LoadingScreen/>
     ) : gameStatus ==="start" ? (
      <StartScreen
        onStart = {()=>{
          setGameStatus("game");
          initializePokemons(5)
        }}/>
     ) : (
      <>
        {(gameStatus==="win" || gameStatus==="lose")&& 
          (<GameOver gameStatus={gameStatus} score={currentScore} onPlayAgain={onPlayAgain} onQuit={onQuit}/>)}
      
        <Score bestScore={bestScore} currentScore={currentScore}/>
        {(gameStatus =="game") && <Main cards = {pokemons} handleClick={handleCardClick} score={currentScore+1}/>
}</>
     )
    }
    </div>
  )
}

export default App
