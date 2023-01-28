import React from "react";
import { useState } from "react";
import "../styles/main.scss";

const MainPage = () => {
  const [firstColor, setFirstColor] = useState("red");
  const [secondColor, setSecondColor] = useState("blue");
  const [thirdColor, setThirdColor] = useState("pink");
  const firstButton = () => {
    const colors = ["orange", "green", "black"];
    var items = colors[Math.floor(Math.random() * colors.length)];
    setFirstColor(items);
  };
  const secondButton = () => {
    const colors = ["pink", "black", "red"];
    var items = colors[Math.floor(Math.random() * colors.length)];
    setSecondColor(items);
  };
  const thirdButton = () => {
    const colors = ["red", "pink", "blue"];
    var items = colors[Math.floor(Math.random() * colors.length)];
    setThirdColor(items);
  };

  const genClick = () => {
    return firstButton(), secondButton(), thirdButton();
  };

  return (
    <React.Fragment>
      <div>
        <button style={{ backgroundColor: firstColor }} onClick={firstButton}>
          first click me
        </button>
        <button style={{ backgroundColor: secondColor }} onClick={secondButton}>
          second click me
        </button>
        <button style={{ backgroundColor: thirdColor }} onClick={thirdButton}>
          third click me
        </button>

        <button style={{ backgroundColor: firstColor }} onClick={genClick}>
          general click
        </button>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
