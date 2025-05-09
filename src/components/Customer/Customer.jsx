import "./Customer.css";
import image from "../../assets/profile.png";
import scroll_svg from "../../assets/scroll.svg";
import points from "../../assets/points.svg";

export default function Customer() {
  return (
    <div className="customer-section">
      <div className="customer-container">
        <div className="customer-content">
          <div className="customer_content_title">
            <h1>What our customer are saying</h1>
            <hr />
          </div>
          <div className="customer_content_cards">
            <div className="customer_content_card">
              <div className="customer_content_card_image">
                <img src={image} alt="" />
              </div>
              <div className="customer_content_card_text">
                <p>Edward Newgate</p>
                <p>Founder Circle</p>
              </div>
              <div className="customer_content_card_text2">
                <p>
                  “Our dedicated patient engagement app and web portal allow you
                  to access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={scroll_svg} alt="" />
      <div className="points">
        <img src={points} alt="" />
      </div>
      <div className="points2">
        <img src={points} alt="" />
      </div>
    </div>
  );
}
