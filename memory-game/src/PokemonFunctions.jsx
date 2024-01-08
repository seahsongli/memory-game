import { useState } from "react";
const usePokemons = ()=>{
    const [pokemons, setPokemons] = useState([])
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
    return {pokemons, setPokemons, getRandomPokemon}
}

export default usePokemons
