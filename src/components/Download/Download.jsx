import "./Download.css";
import image from "../../assets/download.png";

export default function Download() {
  return (
    <div className="download-content">
      <div className="download-text">
        <h2>Download our mobile apps</h2>
        <hr />
        <p>
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </p>
        <button>
          Download <span>↓</span>
        </button>
      </div>
      <div className="download-image">
        <img src={image} alt="Image" />
      </div>
    </div>
  );
}
