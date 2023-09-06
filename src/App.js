import { useState } from 'react';
import './App.css';
import Movies from './Movies';
import Navbar from './Navbar';
import MovieInfo from './MovieInfo';
import Placeholder from './Placeholder';
function App() {

  const [search, setSearch] = useState("")
  const [selectedMovie, setSelectedMovie] = useState(null)


  return (
    <>
      <Navbar setSearch={setSearch} setSelectedMovie={setSelectedMovie}/>
      {selectedMovie && <MovieInfo selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}/>}

      {search.length > 0 ?
        <Movies search={search} setSelectedMovie={setSelectedMovie} /> :
        <Placeholder />}
    </>
  );
}

export default App;
