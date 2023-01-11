import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../movieCard/MovieCard";
import "./MovieListing.scss";

export const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderedMovies,
    renderedShows = "";

  renderedMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="renderError">{movies.Error}</div>
    );

  renderedShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => {
        return <MovieCard key={index} data={show} />;
      })
    ) : (
      <div className="renderError">{shows.Error}</div>
    );

  let content = (
    <>
      <main className="movieWrapper">
        <div className="movieList">
          <h2>Movies</h2>
          <div className="movieContainer">{renderedMovies}</div>
        </div>
        <div className="movieList">
          <h2>Shows</h2>
          <div className="movieContainer">{renderedShows}</div>
        </div>
      </main>
    </>
  );

  return content;
};
