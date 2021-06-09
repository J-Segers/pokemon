import React, {useEffect, useState} from 'react';
import axios from "axios";
import PokeCard from "./PokeCard";
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState(null);
  const [offSet, setOffSet] = useState(0);
  console.log(pokemonList);

  useEffect(() => {
    console.log("hallo");

    async function fetchPokemonList() {
      try {
        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offSet}`);
        setPokemonList(result.data.results);
      } catch (e) {
        console.log(e);
      }
    }

    fetchPokemonList();
  }, [offSet])

  return (
      <div className={"container"}>
          <header>
              <div id={"poke-logo"}>
                  <input type={"button"} className={"btn"} disabled={offSet === 0} value={"previous"} onClick={() => {setOffSet(offSet - 20)}} />
                  <input type={"button"} className={"btn"} disabled={offSet === 1100} value={"next"} onClick={() => {setOffSet(offSet + 20)}} />
              </div>
          </header>


        <div className={"cards-container"}>
          {pokemonList && <div>
            {pokemonList.map((pokemon) => {
              return <PokeCard pokemonName={pokemon.name} pokemonUrl={pokemon.url}/>;
            })}
          </div>}

        </div>
      </div>
  );
}

export default App;
