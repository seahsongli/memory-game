import { useState, useEffect } from 'react'
import Main from './components/Main'
import usePokemons from './PokemonFunctions'
import './App.css'

function App() {
  const {pokemons, setPokemons, getRandomPokemon, shufflePokemons} = usePokemons()
  const [gameStatus, setGameStatus] = useState("end")

  const initializePokemons = async () =>{
    const randomPokemons = getRandomPokemon(5)
    setPokemons(await randomPokemons)
  }

  return (
    <>
      <button onClick = {initializePokemons}>Start</button>
      <Main cards = {pokemons} handleClick={shufflePokemons}/>
    </>
  )
}

export default App
