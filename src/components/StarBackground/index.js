import React from "react";
import Star from "../Star";

const StarBackground = ({ count }) => {
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < count; i++) {
      let style = {
        left: Math.random() * 100 + "vw",
        top: Math.random() * 100 + "vh",
        animationDelay: Math.random() * 5000 + "ms",
        animationDuration: Math.random() * 3 + 2 + "s",
      };
      stars.push(<Star key={i} style={style} />);
    }
    return stars;
  };

  return <>{renderStars()}</>;
};

export default StarBackground;
