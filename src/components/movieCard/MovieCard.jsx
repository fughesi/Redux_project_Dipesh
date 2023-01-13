import { Link } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = ({ data }) => {
  let content = (
    <>
      <div className="cardItem">
        <Link to={`/movie/${data.imdbID}`}>
          <div className="cardTop">
            <img src={data.Poster} alt={data.Title} />
          </div>

          <div className="cardBottom">
            <div className="cardInfo">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );

  return content;
};

export default MovieCard;
