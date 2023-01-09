import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.sass";

const Header = () => {
  return (
    <main className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>

      <div className="userImage">
        <img src={user} alt="user" />
      </div>
    </main>
  );
};

export default Header;
