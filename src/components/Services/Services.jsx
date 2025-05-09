import "./Services.css";
import design from "../../assets/design.svg";
import searchSVG from "../../assets/search.svg";
import medecineSVG from "../../assets/medecine.svg";
import consultationSVG from "../../assets/consultation.svg";
import detailsSVG from "../../assets/details.svg";
import emergencySVG from "../../assets/emergency.svg";
import trackingSVG from "../../assets/tracking.svg";
import pointsSVG from "../../assets/points.svg";
export default function Services() {
  return (
    <div>
      <div className="our-services">
        <h1>Our Services</h1>
        <hr />
        <p>
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </div>
      <div className="services-container">
        <img src={design} alt="design" />
        <img src={pointsSVG} alt="points" className="points" />
        <div className="services">
          <div className="service">
            <img src={searchSVG} alt="" />
            <h2>Search Doctor</h2>
            <p>
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
          <div className="service">
            <img src={medecineSVG} alt="" />
            <h2>Online pharmacy</h2>
            <p>
              Buy your medicines with our mobile application with a simple
              delivery system
            </p>
          </div>
          <div className="service">
            <img src={consultationSVG} alt="" />
            <h2>Consultation</h2>
            <p>
              Free consultation with our trusted doctors and get the best
              recomendations
            </p>
          </div>
          <div className="service">
            <img src={detailsSVG} alt="" />
            <h2>Details info</h2>
            <p>
              Free consultation with our trusted doctors and get the best
              recomendations
            </p>
          </div>
          <div className="service">
            <img src={emergencySVG} alt="" />
            <h2>Emergency care</h2>
            <p>
              You can get 24/7 urgent care for yourself or your children and
              your lovely family
            </p>
          </div>
          <div className="service">
            <img src={trackingSVG} alt="" />
            <h2>Tracking</h2>
            <p>Track and save your medical history and health data</p>
          </div>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
}
