import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setpokemonIndex] = useState(0);

  const handleClick1 = () => { setpokemonIndex(pokemonIndex + 1) }
  const handleClick2 = () => { setpokemonIndex(pokemonIndex - 1) }


  return (


    <div>

      <NavBar  pokemonIndex={pokemonIndex} handleClick1={handleClick1}  
      handleClick2={handleClick2} pokemonList={pokemonList} />

      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

    </div>

  )
}





export default App;
