import { useState } from "react";
import uniqid from "uniqid" 
const usePokemons = ()=>{
    const [pokemons, setPokemons] = useState(['garydos'])
    const getPokemon = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const {name, sprites} = await response.json();
        const image = sprites["front_default"]
        return {name, image}
    } 
        
    const getRandomPokemon = async (amount) =>{
        const MAXID = 721 // Up to Gen 6
        const pokemonList = []
        for (let i = 0; i < amount; i++){
            const randomIndex = Math.floor (Math.random() * MAXID) + 1
            pokemonList.push(randomIndex)
        }
        return await Promise.all(pokemonList.map(getPokemon)); // returns a list of pokemon
    }

    const shufflePokemons = () => {
        const availableCards = [...pokemons]
        const shuffledPokemons = []
        while (availableCards.length){
            const index = Math.floor(Math.random() * availableCards.length);
            const card = availableCards[index]
            card.id = uniqid() // to trigger a re-render
            shuffledPokemons.push(card)
            availableCards.splice(index, 1)
        }
        setPokemons(shuffledPokemons)
    }
    return {pokemons, setPokemons, getRandomPokemon, shufflePokemons}
}

export default usePokemons
