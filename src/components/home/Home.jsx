import { useEffect } from "react";
import { MovieListing } from "../movieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  return (
    <div>
      <MovieListing />
    </div>
  );
};

export default Home;
