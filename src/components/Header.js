import logo from "../images/myicon.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-cards">
      <Link to="/">
        {/* <a href="index.html" title="Home"> */}
        <img className="header-cards_logo" src={logo} alt="profile-cards" />
        {/* </a> */}
      </Link>
    </header>
  );
}

export default Header;
