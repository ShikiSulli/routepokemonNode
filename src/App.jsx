import './App.css';
import AllPokemon from './pages/AllPokemon/AllPokemon';
import PokemonId from './pages/PokemonId/PokemonId';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
                                            
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<AllPokemon />} />
    <Route path="/pokemon/:id" element={<PokemonId />} />
    </Routes>

    </BrowserRouter>

  );
}

export default App;
