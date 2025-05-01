import Squares from "./bits/Squares";

const HeadContent = () => {
  return (
    <>
      <div className="content">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#fff"
          hoverFillColor="#222"
        />
        <h1>Welcome to My Portfolio</h1>
        <p>This is a sample portfolio page.</p>
      </div>
    </>
  );
};

export default HeadContent;
