

function NavBar({ pokemonList, setpokemonIndex }) {


    return (
        <>
            {pokemonList.map((pokemon, index) => {

                const handleClick = () => { pokemon.name === "pikachu" ? alert('pika pikachu !!!') : null; setpokemonIndex(index); }

                return (
                    <button key={index} onClick={handleClick} > {pokemon.name}</button>)

            })
            }

        </>


    );
}

export default NavBar;