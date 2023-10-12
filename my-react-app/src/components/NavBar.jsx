

function NavBar({ pokemonList, setpokemonIndex }) {


    return (
        <>
            {pokemonList.map((pokemon, index) => {

                const handleClick = () => { setpokemonIndex(index); console.log(index); }

                return (
                    <button key={index} onClick={handleClick} > {pokemon.name}</button>)
            })
            }

        </>


    );
}

export default NavBar;