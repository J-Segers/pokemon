import React, {useEffect, useState} from "react";
import axios from "axios";
import "./PokeCard.css";

function PokeCard({pokemonName, pokemonUrl}) {
    const [pokemonData, setPokemonData] = useState(null);
    console.log(pokemonData);

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const result = await axios.get(`${pokemonUrl}`);
                setPokemonData(result.data);
            } catch (e) {
                console.log(e);
            }
        }

        fetchPokemon();

    }, [pokemonUrl])
    return (
      <>
          {pokemonData ? <div className={"card"}>
              <img src={pokemonData.sprites.front_default} alt={pokemonName}/>
              <h2>{pokemonName}</h2>

              <label>Moves: {pokemonData.moves.length}</label>
              <label>Weight: {pokemonData.weight}</label>
              abilities:
              <div>{pokemonData.abilities.map((ability) => {
                  return (<label className={"abilities"}>{ability.ability.name}</label>);
              })}</div>

          </div> : <h3>Loading 🗘</h3>}
      </>
    );
}

export default PokeCard;