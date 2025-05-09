import "./Healthcare.css";
import image from "../../assets/healthcare.png";

export default function Healthcare() {
  return (
    <div className="healthcare-content">
      <div className="healthcare-image">
        <img src={image} alt="Image" />
      </div>
      <div className="healthcare-text">
        <h2>Leading healthcare providers</h2>
        <hr />
        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </p>
        <button>Learn more</button>
      </div>
    </div>
  );
}
