import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
import user from "../../images/user.png";
import "./Header.scss";

const Header = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <main className="header">
      <div className="logo">
        <Link to="/">
          <span>Movie App</span>
        </Link>
      </div>
      <div className="searchBar">
        <form
          onSubmit={(e) => (
            e.preventDefault(),
            dispatch(fetchAsyncMovies(search)),
            dispatch(fetchAsyncShows(search)),
            setSearch(""),
            navigate("/")
          )}
        >
          <input
            type="text"
            className="searchfield"
            value={search}
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="searchSubmit" onClick={() => console.log("clicked")}>
            Submit
          </button>
        </form>
      </div>
      <div className="userImage">
        <img src={user} alt="user" />
      </div>
    </main>
  );
};

export default Header;
