import "./Footer.css";
import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <div className="main-footer">
      <article className="first-column">
        <div className="logo-footer">
          <img src={logo} alt="logo" />
          <p className="logo-inside-letter-footer">S</p>
          <p className="logo-text">SunVita</p>
        </div>
        <div className="footer-content">
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
        </div>
        <div className="all-rights-reserved">
          <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
        </div>
      </article>
      <article className="column">
        <p>Company</p>
        <a href="">About</a>
        <a href="">Testimonials</a>
        <a href="">Find a doctor</a>
        <a href="">Apps</a>
      </article>
      <article className="column">
        <p>Region</p>
        <a href="">Indonesia</a>
        <a href="">Singapore</a>
        <a href="">Hongkong</a>
        <a href="">Canada</a>
      </article>
      <article className="column">
        <p>Help</p>
        <a href="">Help center</a>
        <a href="">Contact support</a>
        <a href="">Instuctions</a>
        <a href="">How it works</a>
      </article>
    </div>
  );
}
