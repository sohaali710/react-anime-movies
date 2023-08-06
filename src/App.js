import './App.css';
import { Route, Routes } from 'react-router-dom/dist/umd/react-router-dom.development';
import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';
import Navbar from './components/layout/Navbar';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<MoviesList />}></Route>
        <Route path="/movie/:movieId" element={<MovieDetails />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
