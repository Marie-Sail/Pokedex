function NavBar({ pokemonIndex, handleClick2, pokemonList, handleClick1 }) {
    return (
        <>

            {pokemonIndex > 0 ? <button onClick={handleClick2} >Précédent</button> : null}
            {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClick1} >Suivant</button> : null}

        </>


    );
}

export default NavBar;