import logo from "../images/myicon.png";

function Header() {
  return (
    <header className="header-cards">
      <a href="index.html" title="Home">
        <img className="header-cards_logo" src={logo} alt="profile-cards" />
      </a>
    </header>
  );
}

export default Header;
