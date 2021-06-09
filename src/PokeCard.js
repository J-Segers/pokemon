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
              moves:
              <h3>{pokemonData.moves.length}</h3>
              weight:
              <h3>
                  {pokemonData.weight}
              </h3>
              abilities:
              <div>{pokemonData.abilities.map((ability) => {
                  return (<p className={"abilities"}>{ability.ability.name}</p>);
              })}</div>

          </div> : <h3>Loading 🗘</h3>}
      </>
    );
}

export default PokeCard;