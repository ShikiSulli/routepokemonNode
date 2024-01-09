// Note: All Pokemon Page
import './AllPokemon.css';
import { useState, useEffect } from 'react';
//import link
import { Link } from 'react-router-dom'; 


function App() {
    const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/151')
      .then(response => response.json())
      .then(data => {
        setPokemons(data);
      });
  }, []);
  return (
    <div>
    <h1>Pocket Monsters</h1>
    <div className="card-container">
      {pokemons.map((pokemon) => (
        <div key={pokemon.name} className="card">
          <img src={pokemon.image} alt={pokemon.name} className="card-image" />
          <div className="card-details">
            <h2 className="card-name">{pokemon.name}</h2>
            <div className="card-types">
              {pokemon.apiTypes.map((apiType) => (
                <div key={apiType.name} className="card-type">
                  <img src={apiType.image} alt={apiType.name} className="type-image" />
                  <span className="type-name">{apiType.name}</span>
                </div>
              ))}
            </div>
            <Link to={"/pokemon/" + pokemon.id} className="card-button">
             Détails
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default App;
