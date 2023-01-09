import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MovieDetails from "./components/movieDetails/MovieDetails";
import Home from "./components/home/Home";
import PageNotFound from "./components/404/404";
import "./App.sass";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
