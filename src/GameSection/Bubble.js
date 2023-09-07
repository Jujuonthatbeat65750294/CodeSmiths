import React from "react";
import './Bubble.css';

const BubbleScene = ({ children }) => {
  return (
    <div>
      <div className="bubbles bubble-1"></div>
      <div className="bubbles bubble-2"></div>
      <div className="bubbles bubble-3"></div>
      <div className="bubbles bubble-4"></div>
      {children}
      <div className="bubbles bubble-5"></div>
      <div className="bubbles bubble-6"></div>
      <div className="bubbles bubble-7"></div>
      <div className="bubbles bubble-8"></div>
    </div>
  );
};

export default BubbleScene;
