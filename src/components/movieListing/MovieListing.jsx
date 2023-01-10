import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../movieCard/MovieCard";
import "./MovieListing.scss";

export const MovieListing = () => {
  const movies = useSelector(getAllMovies);

  let renderedMovies = "";

  renderedMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="renderError">{movies.Error}</div>
    );

  let content = (
    <>
      <main className="movieWrapper">
        <div className="movieList">
          <h2>Movies</h2>
          <div className="movieContainer">{renderedMovies}</div>
        </div>
      </main>
    </>
  );

  return content;
};
