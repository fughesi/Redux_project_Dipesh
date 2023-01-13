import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAsyncItemByID, removeSelectedItems, getItemByID } from "../../features/movies/movieSlice";
import "./MovieDetails.scss";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getItemByID);

  useEffect(() => {
    dispatch(fetchAsyncItemByID(imdbID));
    return () => {
      dispatch(removeSelectedItems());
    };
  }, [dispatch, imdbID]);

  let content = (
    <div className="movieSection">
      {Object.keys(data)?.length === 0 ? (
        <div className="delayedFuse"> "Loading..."</div>
      ) : (
        <>
          <div className="sectionLeft">
            <div className="movieTitle">{data.Title}</div>
            <div className="movieRating">
              <span>IMDB Rating ⭐️: {data.imdbRating}</span>
              <span>IMDB Votes 👍: {data.imdbVotes}</span>
              <span>Runtime 🎬: {data.Runtime}</span>
              <span>Year 📆: {data.Year}</span>
            </div>
            <div className="moviePlot">{data.Plot}</div>
            <div className="movieInfo">
              <div>
                <span>Director: </span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars: </span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genres: </span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages: </span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards: </span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="sectionRight">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );

  return content;
};

export default MovieDetails;
