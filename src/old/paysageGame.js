import React, { useEffect } from "react";
import '../index.css'
import Home from './Home';
import Game from "./game";
import './bubble2.css';



const PaysageGame = () => {
  const handleScroll = (e) => {
    const topScroll = window.scrollY;
    const layers = document.querySelectorAll('[data-type="parallax"]');
    const prefixes = [
      "-webkit-transform",
      "-moz-transform",
      "-ms-transform",
      "-o-transform",
    ];

    for (let layer of Array.from(layers)) {
      const depth = layer.getAttribute("data-depth");
      const movement = -1 * (topScroll * depth);
      const translate = `translate3d(0, ${movement}px, 0)`;

      for (let prefix of prefixes) {
        layer.style[prefix] = translate;
      }
      layer.style.transform = translate;
    }

    
  };

  const scrollToSection = () => {
    const landscapeContainer = document.getElementById("landscape-container");
    const blueSection = document.getElementById("blue");
  
    if (landscapeContainer && blueSection) {
      // Calculate the offset of blueSection relative to landscapeContainer
      const offset = blueSection.offsetTop - landscapeContainer.offsetTop;
  
      // Scroll smoothly to the blueSection
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setTimeout(scrollToSection, 100);
    return () => {
      window.removeEventListener("scroll", handleScroll);

    };
  }, []);
  return (
<div>

<section id="blue" style={{ backgroundColor:'lightblue' }}>
<svg
  className="fish fish1"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  viewBox="0 -10 75 60"
>
  <g className="fish1">
    <defs>
      <clipPath id="clip-path" transform="translate(-478.09 -429.25)">
        <path
          d="M523.83,456.93a14.5,14.5,0,0,0-1.15-9A24.63,24.63,0,0,0,512,436.12a21.63,21.63,0,0,0-15.75-1.95c-9.86,2.68-16.34,12.64-18.06,22.72a1.94,1.94,0,0,0,.77,2.25c6,5.4,13.36,9.52,21.36,10.41C510.08,470.63,521.88,465.87,523.83,456.93Z"
          fill="none"
        />
      </clipPath>
    </defs>
    <title>fish1</title>
    <g id="Fish_1" data-name="Fish 1">
      <path
        d="M487.83,464a30.07,30.07,0,0,0,15.76,8.63,49.67,49.67,0,0,0,18.15.2,18.76,18.76,0,0,1-7.28-8.25Z"
        transform="translate(-478.09 -429.25)"
        fill="#f4992b"
      />
      <path
        d="M485.82,442.47a2.35,2.35,0,0,1,.62-1.74c3.28-4.54,9.87-7.24,16.34-9.26a47.7,47.7,0,0,1,8.4-2,42.47,42.47,0,0,1,12.76.64A26.7,26.7,0,0,0,513.63,444Z"
        transform="translate(-478.09 -429.25)"
        fill="#f4992b"
      />
      
      <path
        d="M522.23,450a14.91,14.91,0,0,1,7.63-3.61,2.55,2.55,0,0,1,1.67.15,2.1,2.1,0,0,1,.64,2.47c-0.29.88-.88,1.62-1.24,2.47-1,2.46.09,5.25-.07,7.91-0.06,1.11-.57,2.41-1.66,2.59a2.66,2.66,0,0,1-1.52-.34,14.46,14.46,0,0,1-3.48-2.29c-0.76-.67-1.77-1.48-2.65-1Z"
        transform="translate(-478.09 -429.25)"
        fill="#f4992b"
      />
      <g clipPath="url(#clip-path)">
        <path
          d="M523.83,456.93a14.5,14.5,0,0,0-1.15-9A24.63,24.63,0,0,0,512,436.12a21.63,21.63,0,0,0-15.75-1.95c-9.86,2.68-16.34,12.64-18.06,22.72a1.94,1.94,0,0,0,.77,2.25c6,5.4,13.36,9.52,21.36,10.41C510.08,470.63,521.88,465.87,523.83,456.93Z"
          transform="translate(-478.09 -429.25)"
          fill="#fbc73a"
        />
        <path
          d="M505.27,441.27a4.52,4.52,0,0,0,2.13,1.7,5.45,5.45,0,0,0,3.58-.29c1.86-.68,3.76-2.05,3.9-4,0.21-3.15-4-7.42-7.24-6.68C503.69,432.89,503.29,438.52,505.27,441.27Z"
          transform="translate(-478.09 -429.25)"
          fill="#f4992b"
        />
        <path
          d="M516.76,448.23a4.13,4.13,0,0,0-.08,3.09,3.08,3.08,0,0,0,4.94,1.57,4.18,4.18,0,0,0,1.85-2.73,3.33,3.33,0,0,0-1.07-3.06A3.86,3.86,0,0,0,516.76,448.23Z"
          transform="translate(-478.09 -429.25)"
          fill="#f4992b"
        />
        <path
          d="M511.38,468.55a3.82,3.82,0,0,0,3.86,0,4.82,4.82,0,0,0,2.7-4.46,4.25,4.25,0,0,0-6.41-3C509.45,462.5,509.27,467.09,511.38,468.55Z"
          transform="translate(-478.09 -429.25)"
          fill="#f4992b"
        />
        <path
          d="M498.32,467.09a4.94,4.94,0,0,1-3.1,1.68,4.27,4.27,0,0,1-3.34-1c-2.64-2.4-1.52-8.12,2.35-8.41A4.72,4.72,0,0,1,498.32,467.09Z"
          transform="translate(-478.09 -429.25)"
          fill="#f4992b"
        />
        <path
          d="M496.39,440a6.55,6.55,0,0,1,1.34,2.76,5.64,5.64,0,0,1-4.45,6.23c-5.21,1-9.5-4.78-7.36-9.5S493.86,436.75,496.39,440Z"
          transform="translate(-478.09 -429.25)"
          fill="#f4992b"
        />
      </g>
      <path
        d="M481.25,451.46a2.41,2.41,0,0,0,.52,1.4,2.46,2.46,0,0,0,2.84.36,3.56,3.56,0,0,0,2.09-3.43C486.25,445.29,481,447.93,481.25,451.46Z"
        transform="translate(-478.09 -429.25)"
        fill="#fff"
      />
      <path
        d="M482.78,450.23a1,1,0,0,0-.18,1.27,0.72,0.72,0,0,0,1.17-.07,1.39,1.39,0,0,0,0-.69,0.87,0.87,0,0,1,.15-0.66,0.34,0.34,0,0,1,.57.07,3.3,3.3,0,0,0,0,2,1.19,1.19,0,0,0,1.09-.78,2.08,2.08,0,0,0-.29-2.22,1.75,1.75,0,0,0-2.16-.33,1.51,1.51,0,0,0-.42,2.07C482.4,450.42,482.63,450.77,482.78,450.23Z"
        transform="translate(-478.09 -429.25)"
        fill="#231f20"
      />
      <path
        d="M507.12,458.11c5.9-1.51,4.18-10.35-1.46-10.62-3.65-.18-7.79,3.52-5.82,7.27C500.69,456.38,504.87,458.68,507.12,458.11Z"
        transform="translate(-478.09 -429.25)"
        fill="#f4992b"
      />
    </g>
  </g>
</svg>


{/* Games */}


<div id="gameBorder" style={{ backgroundColor:'lightblue',  }} ><Game>
  </Game></div>
  <div className="bubbles bubble-1"></div>
          <div className="bubbles bubble-2"></div>
          <div className="bubbles bubble-3"></div>
          <div className="bubbles bubble-4"></div>
         
         
   =
          

</section>
</div>
);
};

export default PaysageGame;