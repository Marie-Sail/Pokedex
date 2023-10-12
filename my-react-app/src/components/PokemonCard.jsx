import PropTypes from "prop-types";


function PokemonCard(props) {
    console.log(props)




    return( <figure className={(props.pokemon.type) === "plante" ? "card-plante":
                                (props.pokemon.type) === "feu"? "card-feu": 
                                (props.pokemon.type) === "eau"? "card-eau": 
                                (props.pokemon.type) === "electrique"? "card-electrique":
                                (props.pokemon.type) === "psy"? "card-psy": null  }>
    
        {props.pokemon.imgSrc ? <img src={props.pokemon.imgSrc} alt={props.pokemon.name} className="cardImg" 
       /> : <p>censored</p>}
        
        <figcaption>{props.pokemon.name}</figcaption>
    </figure>)
}

PokemonCard.proptype = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired
    }).isRequired,

}





export default PokemonCard;


