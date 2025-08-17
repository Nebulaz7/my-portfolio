import "./HeadContent.css";
// import Squares from "./bits/Squares";
// import DecryptedText from "./bits/DecryptedText";
import CtaButton from "./bits/CtaButton";
import Orb from "./bits/Orb";
import LightRays from "./bits/LightRays";

const HeadContent = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="head-content">
      <div
        className="overlay-background"
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -2,
        }}
      >
        <LightRays
          raysOrigin="left"
          raysColor="#5b42f3"
          raysSpeed={1.5}
          lightSpread={1.6}
          rayLength={3}
          followMouse={false}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.6}
          className="custom-rays"
        />
        {/* colors: "#af40ff", "#5b42f3", "#00ddeb" */}
      </div>
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
        <h1 className="hero-heading">
          Hi there 👋, <br />
          Welcome to My Portfolio
        </h1>
        {/* <h1
          style={{ marginTop: "4rem" }}
          className="text-5xl text-red-500 lg:text-7xl font-light hero-font leading-tight mb-6"
        >
          Welcome 👋
        </h1> */}
        <p>
          I'm <span className="highlight"> Peters Joshua </span>, I'm a
          <span> Front-End Engineer</span> dedicated to crafting beautiful and
          functional web experiences.
        </p>
        <div className="cta-button">
          <CtaButton text="Get to know me" onClick={scrollToAbout} />
        </div>
      </div>
      <div className="intro-image">
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>

        {/* <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#606060"
          hoverFillColor="#222"
        /> */}
      </div>
    </div>
  );
};

export default HeadContent;
