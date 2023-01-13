import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../movieCard/MovieCard";
import Slider from "react-slick";
import { settings } from "../../common/settings";
import "./MovieListing.scss";

export const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  const renderedMovies =
    movies.Response === "True" ? (
      movies.Search?.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      // {shows.Error},
      <div className="renderError"> Please enter a Movie or Show title in the search bar above</div>
    );

  const renderedShows =
    shows.Response === "True" ? (
      shows.Search?.map((show, index) => {
        return <MovieCard key={index} data={show} />;
      })
    ) : (
      // {shows.Error},
      <div className="renderError"> Please enter a Movie or Show title in the search bar above</div>
    );

  let content = (
    <>
      <main className="movieWrapper">
        <div className="movieList">
          <h2>Movies</h2>
          <div className="movieContainer">
            <Slider {...settings}>{renderedMovies}</Slider>
          </div>
        </div>
        <div className="movieList">
          <h2>Shows</h2>
          <div className="movieContainer">
            <Slider {...settings}>{renderedShows}</Slider>
          </div>
        </div>
      </main>
    </>
  );

  return content;
};
