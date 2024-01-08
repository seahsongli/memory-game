import { useState, useEffect } from 'react'
import Main from './components/Main'
import usePokemons from './PokemonFunctions'
import './App.css'

function App() {
  const {pokemons, setPokemons, getRandomPokemon} = usePokemons()
  const [gameStatus, setGameStatus] = useState("end")

  const initializePokemons = async () =>{
    const randomPokemons = getRandomPokemon(5)
    setPokemons(initializePokemons)
    console.log(pokemons)
  }
  return (
    <>
      <button onClick = {initializePokemons}>Click Me!</button>
      <Main cards = {pokemons}/>
    </>
  )
}

export default App
