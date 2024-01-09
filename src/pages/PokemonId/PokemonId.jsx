import './PokemonId.css'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


function App() {
    const [pokemon, setPokemon] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
            .then(response => response.json())
            .then(data => {
                setPokemon(data);
            });
    }, [id]);
   
    

    return (
        <div>
            {pokemon.length === 0 ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <h1>{pokemon.name}</h1>
                    <div className="card-container">
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
                                <div className="card-details">
                                    {Object.entries(pokemon.stats).map(([key, value]) => (
                                        <div key={key}>
                                            <span className='key'>{key}</span>
                                            <span className='value'>{value}</span>
                                        </div>
                                    ))}
                                      {pokemon.apiEvolutions && (
                                        <div className="evolutions">
                                            <h3>Evolutions:</h3>
                                            {pokemon.apiEvolutions.map((evolution) => (
                                                <div key={evolution.name} className="evolution">  
                                                    <span className="evolution-name">{evolution.name}</span>
                                               
                                                </div>
                                            ))}
                                             
                                        </div>
                                    )}
                                    <Link to={`/`} className='Link'>Retour</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;