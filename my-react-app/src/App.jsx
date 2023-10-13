import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import NavBar from "./components/NavBar";
import styles from './App.css';
import { useEffect } from "react";

function App() {

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      type: "plante"
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      type: "feu"
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      type: "eau"
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      type: "electrique"
    },
    {
      name: "mew",
      type: "psy"
    },
  ];

  const [pokemonIndex, setpokemonIndex] = useState(0);

  useEffect(() => { alert("hello pokemon trainer :)") }, []);

  return (


    <div>

      <NavBar setpokemonIndex={setpokemonIndex} pokemonList={pokemonList} />

      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

    </div>

  )
}





export default App;
