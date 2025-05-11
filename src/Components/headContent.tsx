import "./HeadContent.css";
import Squares from "./bits/Squares";
import DecryptedText from "./bits/DecryptedText";
import CtaButton from "./bits/CtaButton";

const HeadContent = () => {
  return (
    <div className="head-content">
      <div className="cosmos-elements">
        <div className="star-small star-1"></div>
        <div className="star-small star-2"></div>
        <div className="star-small star-3"></div>
        <div className="star-small star-4"></div>
        <div className="star-small star-5"></div>
        <div className="shooting-star"></div>
        <div className="nebula nebula-1"></div>
        <div className="nebula nebula-2"></div>
      </div>
      
      <div className="intro-text">
        <h1 style={{ marginTop: "4rem" }}>
          <DecryptedText
            text="Welcome to My Portfolio"
            speed={300}
            animateOn="view"
            revealDirection="center"
          />
        </h1>
        <p>
          Hi there, I'm Peters Joshua, I'm a
          <span className="highlight"> Front-End Developer</span> dedicated to
          crafting beautiful and functional web experiences, I modern websites,
          landing pages and single-page web appications.
        </p>
        <CtaButton text="Get to know me" />
      </div>
      <div className="intro-image">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#606060"
          hoverFillColor="#222"
        />
      </div>
    </div>
  );
};

export default HeadContent;
