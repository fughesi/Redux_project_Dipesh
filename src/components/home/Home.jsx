import { useEffect } from "react";
import MovieListing from "../movieListing/MovieListing";
import movieApi from "../../common/apis/MovieApi";

const Home = () => {
  useEffect(() => {
    const movieText = "Harry";

    const fetchMovies = async () => {
      const res = await movieApi
        .get(`?apikey=${import.meta.env.VITE_API_KEY}&s=${movieText}&type=movie`)
        .catch((error) => {
          console.log("error", error);
        });
      console.log(`Response from API = ${res}`);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="bannerImg"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
