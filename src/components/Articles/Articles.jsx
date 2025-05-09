import "./Articles.css";
import article1 from "../../assets/article1.png";
import article2 from "../../assets/article2.png";
import article3 from "../../assets/article3.png";
import points from "../../assets/points.svg";
import design from "../../assets/design.svg";

export default function Articles() {
  return (
    <div>
      <div className="article-section">
        <div className="article-title">
          <h1>Check out our latest article</h1>
          <hr />
        </div>
      </div>
      <div className="article-container">
        <div className="article">
          <img src={article1} alt="" />
          <div className="article-content">
            <h3>Disease detection, check up in the laboratory</h3>
            <p>
              In this case, the role of the health laboratory is very important
              to do a disease detection...
            </p>
            <p>Read more ...</p>
          </div>
        </div>
        <div className="article">
          <img src={article2} alt="" />
          <div className="article-content">
            <h3>Herbal medicines that are safe for consumption</h3>
            <p>
              Herbal medicine is very widely used at this time because of its
              very good for your health...
            </p>
            <p>Read more ...</p>
          </div>
        </div>
        <div className="article">
          <img src={article3} alt="" />
          <div className="article-content">
            <h3>Natural care for healthy facial skin</h3>
            <p>
              A healthy lifestyle should start from now and also for your skin
              health. There are some...
            </p>
            <p>Read more ...</p>
          </div>
        </div>
        <div className="points3">
          <img src={points} alt="" />
        </div>
        <div className="design">
          <img src={design} alt="" />
        </div>
      </div>
      <div className="article-button">
        <button>View All</button>
      </div>
    </div>
  );
}
