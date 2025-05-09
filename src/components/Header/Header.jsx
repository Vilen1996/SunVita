import "./Header.css";
import logo from "../../assets/logo.svg";
import image from "../../assets/header.png";

export default function Header() {
  return (
    <div className="main">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
          <p className="logo-inside-letter">S</p>
          <p className="logo-text">SunVita</p>
        </div>
        <div className="pages">
          <a>Home</a>
          <a>Find a doctor</a>
          <a>Apps</a>
          <a>Testimanials</a>
          <a>About us</a>
        </div>
      </div>
      <div className="header-content">
        <div className="first-column">
          <p className="header-title">Virtual healthcare for you</p>
          <p className="header-text">
            SunVita provides progressive, and affordable healthcare, accessible
            on mobile and online for everyone
          </p>
          <button className="header-button">Consult today</button>
        </div>
        <div className="second-column">
          <img src={image} alt="Image" />
        </div>
      </div>
    </div>
  );
}
