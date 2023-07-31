import './App.css';
import { Route, Routes } from 'react-router-dom/dist/umd/react-router-dom.development';
import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';
import Navbar from './components/Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NotFound from './components/NotFound';

const baseLink = "https://api.themoviedb.org/3";
const path = "/movie?certification_country=US&certification=G&sort_by=popularity.desc";
const APIKey = "&api_key=6eaabb81439b3ad146d593a4f2b7471c";
const allMoviesURL = baseLink + '/discover' + path + APIKey;
const searchURL = baseLink + '/search' + path + APIKey;

function App() {
  const [movies, setMovies] = useState([])

  const getAllMovies = async () => {
    const res = await axios.get(allMoviesURL)
    setMovies(res.data.results)
  }

  useEffect(() => {
    getAllMovies()
  }, [])

  const search = async (word) => {
    if (word) {
      const res = await axios.get(`${searchURL}&query=${word}`)
      setMovies(res.data.results)
    } else {
      getAllMovies()
    }
  }

  return (
    <div className="App">
      <Navbar search={search} />

      <Routes>
        <Route path="/" element={<MoviesList movies={movies} />}></Route>
        <Route path="/movie/:id" element={<MovieDetails />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
