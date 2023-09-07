import React, { useEffect } from "react";
import '../index.css'
import Home from './Home';

const Paysage = ({children}) => {
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
      <section id="topper">
        <div id="parallax">
          <div
            className="layer background"
            data-type="parallax"
            data-depth="0.1"
          />
          <div className="layer sun" data-type="parallax" data-depth="0.12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-40 0 551.36 248.7"
            >
              <g transform="scale(0.5)">
                <circle
                  cx="69.12"
                  cy="41.54"
                  r="25.76"
                  transform="translate(-50.63 51.8) rotate(-49.69)"
                  fill="#fbc73a"
                />
              </g>
            </svg>
          </div>
          <div className="landscape-container">
            <div
              className="layer background-mountains"
              data-type="parallax"
              data-depth="0.15"
            >
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 595.22 277.03"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="297.61"
                    y1="277.03"
                    x2="297.61"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.62" stopColor="#c9bdde" />
                    <stop offset="0.99" stopColor="#a18aab" />
                  </linearGradient>
                </defs>
                <polygon
                  id="Background_Mountains"
                  data-name="Background Mountains"
                  points="35.64 88.56 54.91 96.51 106.55 7.51 179.47 60.09 191.22 39.82 220.57 63.17 290.14 0 360.75 80.34 421.01 25.22 524.08 93.44 594.9 52.91 595.22 275.52 0 277.03 0 118.4 35.64 88.56"
                  fill="url(#linear-gradient)"
                />
              </svg>
            </div>
            <div className="layer sky" data-type="parallax" data-depth="0.15">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-50 0 541.36 158.7"
              >
                <g transform="scale(0.7)">
                  <g className="cloud one">
                    <path
                      id="Cloud_2"
                      data-name="Cloud 2"
                      d="M134.95,60.76A11.58,11.58,0,0,1,123.4,72.31H110.08l-0.39.41a11.62,11.62,0,0,1-16.87-.41H84.27a11.55,11.55,0,0,1-1.3-23A9.34,9.34,0,0,1,98.7,44.77a8.31,8.31,0,0,1,.58.64A15.19,15.19,0,0,1,114,33.92h0.28A15.19,15.19,0,0,1,129.4,49.06v0.28q0,0.76-.07,1.51A11.56,11.56,0,0,1,134.95,60.76Z"
                      transform="translate(-43.36 -15.58)"
                      fill="#fff"
                    />
                  </g>
                  <g className="cloud two">
                    <rect
                      x="334.64"
                      y="20.11"
                      width="65.14"
                      height="27.3"
                      rx="13.65"
                      ry="13.65"
                      fill="#fff"
                    />
                    <circle cx="355.18" cy="21.18" r="12.04" fill="#fff" />
                    <ellipse
                      cx="376.08"
                      cy="20.74"
                      rx="15.8"
                      ry="13.01"
                      fill="#fff"
                    />
                  </g>
                  <g className="cloud one" transform="translate(200 290.5)">
                    <rect
                      x="475.78"
                      y="130.14"
                      width="65.57"
                      height="28.56"
                      rx="14.28"
                      ry="14.28"
                      fill="#fff"
                    />
                    <circle cx="495.54" cy="134.41" r="10.66" fill="#fff" />
                    <ellipse
                      cx="514.36"
                      cy="139.84"
                      rx="18.83"
                      ry="16.08"
                      fill="#fff"
                    />
                  </g>
                  <g className="cloud two">
                    <rect
                      x="234.01"
                      y="67.44"
                      width="53.6"
                      height="23.35"
                      rx="11.67"
                      ry="11.67"
                      fill="#fff"
                    />
                    <ellipse
                      cx="253.76"
                      cy="68.42"
                      rx="12.3"
                      ry="9.2"
                      fill="#fff"
                    />
                    <ellipse
                      cx="274.26"
                      cy="79.27"
                      rx="15.39"
                      ry="13.15"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div
              className="layer mountains-pink"
              data-type="parallax"
              data-depth="0.35"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 595.28 273.25"
              >
                <g id="Mountain_4" data-name="Mountain 4">
                  <path
                    d="M440.51,178.84l-39.38-55.29L251.29,395.36a0.8,0.8,0,0,0,.71,1.18H595.28C595.93,396.54,440.51,178.84,440.51,178.84Z"
                    transform="translate(0 -123.55)"
                    fill="#b66586"
                  />
                  <path
                    d="M408.53,184.07c7-1.25,15.27,12.69,21.72,10.9,5.22-1.45,1.84-8.07,4.27-12.4,0.86-1.54,5.65-4.2,5.65-4.2l-39-54.81-41.29,75s19.33-15.13,25.53-12C392.4,190.14,400.5,185.49,408.53,184.07Z"
                    transform="translate(0 -123.55)"
                    fill="#fff"
                  />
                  <polygon
                    points="401.13 0 404.85 40.59 420.82 70.13 409.37 92.08 435.82 123.08 436.42 174.32 474.49 195.83 467.04 243.3 502.09 273.25 595.28 272.99 401.13 0"
                    opacity="0.3"
                  />
                  <path d="M465.1,173.48" transform="translate(0 -123.55)" />
                  <polygon
                    points="331 158.41 370.71 137.29 402.58 209.49 412.46 253.34 410.42 272.73 251.5 272.83 324.8 138.08 331 158.41"
                    fill="#060809"
                    opacity="0.3"
                  />
                </g>
                <g id="Mountain_4-2" data-name="Mountain 4">
                  <path
                    d="M485.18,394.36L344.69,197.11l-35.89-50.39L172.25,394.43a0.73,0.73,0,0,0,.64,1.07H484.58A0.73,0.73,0,0,0,485.18,394.36Z"
                    transform="translate(0 -123.55)"
                    fill="#b66586"
                  />
                  <path
                    d="M314.76,199.43c6.4-1.14,8.76,7.91,18.19,8.21,6.06,0.19,4-3.21,6.23-7.16,0.78-1.4,5.17-3.84,5.17-3.84l-35.55-49.91c0-1.27-37.68,68.35-37.68,68.35s16.76-13.81,22.41-10.95C299.94,207.36,307.44,200.73,314.76,199.43Z"
                    transform="translate(0 -123.55)"
                    fill="#fff"
                  />
                  <polygon
                    points="308.81 23.17 312.06 59.93 317.12 78.23 316.18 106.86 340.29 135.1 326.89 181.38 351.82 194.87 363.95 247.32 401.94 271.96 485.99 271.96 308.81 23.17"
                    opacity="0.3"
                  />
                  <path d="M325.84,192.22" transform="translate(0 -123.55)" />
                </g>
                <g id="Mountain_1" data-name="Mountain 1">
                  <polygon
                    points="319.46 273.06 136.3 37.42 0 273.08 319.46 273.06"
                    fill="#b66586"
                  />
                  <path
                    d="M144.78,222.75c7-2,15.89,8.36,23.06,7.44,4.41-.56,12.22-13,12.22-13L136.34,161l-38,65.61s15.94-11.11,23.3-8C129.41,221.87,135.73,225.33,144.78,222.75Z"
                    transform="translate(0 -123.55)"
                    fill="#fff"
                  />
                  <polygon
                    points="151.29 108.31 126.65 165.82 147.88 213.48 202.33 235.9 186.44 254.47 233.91 272.99 319.46 272.99 136.25 37.31 151.29 108.31"
                    fill="#060809"
                    opacity="0.31"
                  />
                </g>
              </svg>
            </div>
            <div
              className="layer mountains-purple"
              data-type="parallax"
              data-depth="0.45"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 595.28 245.82"
              >
                <g id="Mountain_2" data-name="Mountain 2">
                  <polygon
                    points="450.97 245.07 303.97 83.48 228.03 0 8.14 245.09 450.97 245.07"
                    fill="#6e517a"
                  />
                  <path
                    d="M172.2,205s22.67,15.2,33.63,10.54c6.23-2.65,12.37-5.73,19.3-8.44,4.49-1.75,13.94,4.41,18.75,4.39s14.09-6.22,17.68-9.06c3.77-3,20-.76,19-1.88L228,142.75C227.36,143.39,172.2,205,172.2,205Z"
                    transform="translate(0 -142.75)"
                    fill="#fff"
                  />
                  <polygon
                    points="450.94 245.08 228.01 0.01 224.77 56.22 250.01 94.02 233.85 149.37 245.8 183.47 224.28 223.96 309.11 245.04 450.94 245.08"
                    fill="#060809"
                    opacity="0.3"
                  />
                </g>
                <g id="Mountain_2-2" data-name="Mountain 2">
                  <polygon
                    points="197.04 245.33 121.49 154.68 82.47 107.86 0 208.55 0 245.34 197.04 245.33"
                    fill="#6e517a"
                  />
                  <polygon
                    points="197.03 245.33 82.46 107.86 80.79 139.39 93.76 160.6 85.46 191.65 91.6 210.77 80.54 233.49 124.14 245.31 197.03 245.33"
                    fill="#060809"
                    opacity="0.3"
                  />
                </g>
                <g id="Mountain_3" data-name="Mountain 3">
                  <polygon
                    points="503.48 245.09 393.7 112.47 389.04 114.03 380.7 126.22 364.02 114.82 351.11 122.2 340.4 114.03 324.8 114.61 218.97 245.09 503.48 245.09"
                    fill="#6e517a"
                  />
                  <path
                    d="M351.89,265.12c3.75-1.55,10.47-6.55,14.36-5.8,4.29,0.83,8.61,9.09,12.85,10.08,5,1.18,15.7-13.11,15.7-13.11l-33.9-40.6-37.14,42.94s11-1.1,14.06.26C341.93,260.75,348.23,266.63,351.89,265.12Z"
                    transform="translate(0 -142.75)"
                    fill="#fff"
                  />
                  <path
                    d="M360.9,215.7l1.46,44.2,12.28,14.5-13.47,29.11,24.09,24.92-3.87,39.95,37.11,19.34h84.93S360.9,215,360.9,215.7Z"
                    transform="translate(0 -142.75)"
                    fill="#060809"
                    opacity="0.3"
                  />
                </g>
                <g id="Mountain_5" data-name="Mountain 5">
                  <polygon
                    points="595.28 245.8 513.77 95.72 463.43 65.48 419.54 114.92 308.81 245.75 595.28 245.8"
                    fill="#6e517a"
                  />
                  <path
                    d="M466.06,261.7c6.89,0.28,18.59-11.68,25.2-15,5.74-2.91,23.31-7,22.51-8.19l-50.33-30.34L426.21,250s9.5-2.07,14.48-1.48C448.16,249.42,459,261.41,466.06,261.7Z"
                    transform="translate(0 -142.75)"
                    fill="#fff"
                  />
                  <polygon
                    points="463.43 65.44 477.63 93.28 493.17 119.13 473.33 166.65 517.88 211.53 527.06 245.79 595.28 245.82 513.77 95.73 463.43 65.44"
                    fill="#060809"
                    opacity="0.3"
                  />
                </g>
              </svg>
            </div>
            <div
              className="layer clouds"
              data-type="parallax"
              data-depth="0.45"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-50 0 541.36 298.7"
              >
                <g transform="scale(0.7)">
                  <g className="cloud one">
                    <rect
                      x="8.21"
                      y="112.85"
                      width="65.14"
                      height="27.3"
                      rx="13.65"
                      ry="13.65"
                      fill="#fff"
                    />
                    <ellipse
                      cx="20.26"
                      cy="124.55"
                      rx="16.89"
                      ry="14.94"
                      fill="#fff"
                    />
                    <ellipse
                      cx="46.64"
                      cy="113.47"
                      rx="18.14"
                      ry="14.94"
                      fill="#fff"
                    />
                  </g>
                  <g className="cloud two">
                    <rect
                      x="475.78"
                      y="130.14"
                      width="65.57"
                      height="28.56"
                      rx="14.28"
                      ry="14.28"
                      fill="#fff"
                    />
                    <circle cx="495.54" cy="134.41" r="10.66" fill="#fff" />
                    <ellipse
                      cx="514.36"
                      cy="139.84"
                      rx="18.83"
                      ry="16.08"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-130 0 501.36 238.7"
              >
                <g transform="scale(0.6)">
                  <g id="balloon" className="floating">
                    <path
                      d="M515.8,57.8h0Z"
                      transform="translate(-43.36 -15.58)"
                      fill="#2a7e7e"
                    />
                    <path
                      d="M513.76,57.18s-9.85,16.57-13,23.45c-0.15.33-.29,0.64-0.4,0.92l0,0.11H484.68l0,0h0c-2.54-6.11-13.42-24.42-13.42-24.42s-5.19-7.42-4.79-13.32c0-13.67,11.63-24.75,26-24.8h0.76l1.18,0.06c0.64,0,1.27.11,1.89,0.2,12.6,1.76,22.27,12.07,22.27,24.53C518.94,49.76,513.76,57.18,513.76,57.18Z"
                      transform="translate(-43.36 -15.58)"
                      fill="#72c4be"
                    />
                    <path
                      d="M508.61,57.18s-7.44,16.57-9.82,23.45c-0.13.37-.25,0.71-0.34,1H486.63c-0.1-.31-0.21-0.65-0.34-1-2.38-6.87-9.82-23.45-9.82-23.45s-3.92-7.42-3.62-13.32c0-13.33,8.36-24.2,18.85-24.77l0.52,0h0.58c0.39,0,.78,0,1.17.06,10.21,0.94,18.26,11.65,18.26,24.73C512.53,49.76,508.61,57.18,508.61,57.18Z"
                      transform="translate(-43.36 -15.58)"
                      fill="#fff"
                    />
                    <path
                      d="M499.76,57.37S496.42,74,495.34,80.94c-0.05.37-5.56,0.37-5.62,0-1.07-6.91-4.42-23.57-4.42-23.57A63.81,63.81,0,0,1,483.68,44c0-13,3.56-23.74,8.1-24.83a2.32,2.32,0,0,1,.38-0.07l0.13,0h0.54l0.22,0c4.66,0.75,8.35,11.6,8.35,24.88A63.81,63.81,0,0,1,499.76,57.37Z"
                      transform="translate(-43.36 -15.58)"
                      fill="#72c4be"
                    />
                    <path
                      d="M500.32,81.65l0,0.09v0a1.5,1.5,0,0,1-.17.26h0c-1,1.19-4,1.47-7.11,1.51h-0.78c-2.79,0-5.53-.14-6.87-1.11a2.17,2.17,0,0,1-.55-0.55l-0.07-.13,0-.05h0a1.68,1.68,0,0,1,0-.51c0-.16,0-0.28,0-0.28h15.55A0.64,0.64,0,0,1,500.32,81.65Z"
                      transform="translate(-43.36 -15.58)"
                      fill="#72c4be"
                    />
                    <path
                      d="M489.09,84.77h0V83.52h0a3.36,3.36,0,0,1,1.28.27A1.49,1.49,0,0,1,489.09,84.77Z"
                      transform="translate(-43.36 -15.58)"
                      fill="#fbc73a"
                    />
                    <circle cx="446.88" cy="67.08" r="0.35" fill="#fbc73a" />
                    <path
                      d="M491.15,90a3.43,3.43,0,0,1-1.85.5h0A1,1,0,0,1,491.15,90Z"
                      transform="translate(-43.36 -15.58)"
                      fill="#fbc73a"
                    />
                    <path
                      d="M492.56,87.28a0.67,0.67,0,0,1,0-.15C492.55,87,492.57,87.09,492.56,87.28Z"
                      transform="translate(-43.36 -15.58)"
                      fill="#fbc73a"
                    />
                    <path
                      d="M491.29,90.47h-2A1,1,0,0,1,491.29,90.47Z"
                      transform="translate(-43.36 -15.58)"
                      fill="#f4992b"
                    />
                    <g id="Eye">
                      <circle cx="446.88" cy="67.08" r="0.35" fill="#010101" />
                      <circle cx="446.98" cy="67.01" r="0.1" fill="#fff" />
                    </g>
                    <polygon
                      points="445.73 69.19 445.73 69.19 445.73 69.19 445.73 69.19"
                      fill="#f59f28"
                    />
                    <path
                      d="M491.57,84.32a5.84,5.84,0,0,1-.14-1.65,2.58,2.58,0,0,0-.8-1.66,2.54,2.54,0,0,0-3.1,0,2.57,2.57,0,0,0-.79,1.66,5.87,5.87,0,0,1-.14,1.65c-0.38.93-2,2.77-1.67,3.72a1.22,1.22,0,0,0,.68-0.76c0-.19,0-0.26,0-0.15a0.63,0.63,0,0,1,0,.15A3.44,3.44,0,0,0,487,90a1,1,0,0,1,1.87.5h0.37a1,1,0,0,1,1.87-.5,3.43,3.43,0,0,0,1.41-2.69,0.67,0.67,0,0,1,0-.15c0-.11,0,0,0,0.15a1.22,1.22,0,0,0,.68.76C493.55,87.09,492,85.26,491.57,84.32Zm-4-1.66a0.35,0.35,0,1,1,.35.35A0.35,0.35,0,0,1,487.59,82.66Zm1.5,2.11h0a1.49,1.49,0,0,1-1.28-1,3.36,3.36,0,0,1,1.28-.27h0a3.36,3.36,0,0,1,1.28.27A1.49,1.49,0,0,1,489.09,84.77ZM490.24,83a0.35,0.35,0,1,1,.35-0.35A0.35,0.35,0,0,1,490.24,83Z"
                      transform="translate(-43.36 -15.58)"
                      fill="#fbc73a"
                    />
                    <path
                      d="M485.63,87.13a0.63,0.63,0,0,1,0,.15C485.61,87.09,485.63,87,485.63,87.13Z"
                      transform="translate(-43.36 -15.58)"
                      fill="#fbc73a"
                    />
                    <circle cx="444.58" cy="67.08" r="0.35" fill="#fbc73a" />
                    <path
                      d="M488.91,90.47h0A3.43,3.43,0,0,1,487,90,1,1,0,0,1,488.91,90.47Z"
                      transform="translate(-43.36 -15.58)"
                      fill="#fbc73a"
                    />
                    <path
                      d="M489.09,84.77h0a1.49,1.49,0,0,1-1.28-1,3.36,3.36,0,0,1,1.28-.27h0v1.25Z"
                      transform="translate(-43.36 -15.58)"
                      fill="#fbc73a"
                    />
                    <path
                      d="M488.91,90.47h-2A1,1,0,0,1,488.91,90.47Z"
                      transform="translate(-43.36 -15.58)"
                      fill="#f4992b"
                    />
                    <g id="Eye-2" data-name="Eye">
                      <circle cx="444.57" cy="67.08" r="0.35" fill="#010101" />
                      <circle cx="444.66" cy="66.99" r="0.1" fill="#fff" />
                    </g>
                    <path
                      d="M490.37,83.79a1.49,1.49,0,0,1-1.28,1h0a1.49,1.49,0,0,1-1.28-1A3.22,3.22,0,0,1,490.37,83.79Z"
                      transform="translate(-43.36 -15.58)"
                      fill="#f4992b"
                    />
                    <polygon
                      points="445.74 69.19 445.74 69.19 445.74 69.19 445.73 69.19 445.74 69.19 445.74 69.19"
                      fill="#f59f28"
                    />
                    <path
                      d="M485.81,87a0.67,0.67,0,0,1,0-.15C485.8,86.7,485.82,86.77,485.81,87Z"
                      transform="translate(-43.36 -15.58)"
                      fill="#fbc73a"
                    />
                    <path
                      d="M491.57,84.32a5.84,5.84,0,0,1-.14-1.65,2.58,2.58,0,0,0-.8-1.66,2.39,2.39,0,0,0-1.55-.53h0v4.29h0v5.69h2.2a1,1,0,0,0-.14-0.5,3.43,3.43,0,0,0,1.41-2.69,0.67,0.67,0,0,1,0-.15c0-.11,0,0,0,0.15a1.22,1.22,0,0,0,.68.76C493.54,87.09,492,85.26,491.57,84.32ZM490.24,83a0.35,0.35,0,1,1,.35-0.35A0.35,0.35,0,0,1,490.24,83Z"
                      transform="translate(-43.36 -15.58)"
                      opacity="0.15"
                    />
                    <polygon
                      points="456.47 71.94 453.62 82.99 444.45 82.99 441.77 71.94 456.47 71.94"
                      fill="#72c4be"
                    />
                    <path
                      d="M492.6,19h0Z"
                      transform="translate(-43.36 -15.58)"
                      fill="#2a7e7e"
                    />
                    <path
                      d="M494.28,19.07c-0.51,0-1-.05-1.55-0.06H493C493.41,19,493.85,19,494.28,19.07Z"
                      transform="translate(-43.36 -15.58)"
                      fill="#2a7e7e"
                    />
                    <rect
                      x="448.79"
                      y="67.96"
                      width="0.9"
                      height="4.64"
                      fill="#72c4be"
                    />
                    <rect
                      x="498.86"
                      y="81.69"
                      width="0.9"
                      height="6.29"
                      transform="translate(-23.42 -94.17) rotate(9.18)"
                      fill="#72c4be"
                    />
                    <rect
                      x="485.28"
                      y="81.3"
                      width="0.9"
                      height="6.59"
                      transform="translate(-50.47 83) rotate(-11.51)"
                      fill="#72c4be"
                    />
                    <g opacity="0.5">
                      <path
                        d="M516.91,60.42h0Z"
                        transform="translate(-43.36 -15.58)"
                        fill="#2a7e7e"
                      />
                      <path
                        d="M492.38,19h0Z"
                        transform="translate(-43.36 -15.58)"
                        fill="#2a7e7e"
                      />
                      <path
                        d="M492.41,19h0Z"
                        transform="translate(-43.36 -15.58)"
                        fill="#2a7e7e"
                      />
                      <path
                        d="M513.76,57.17s-9.84,16.58-13,23.45c-0.15.33-.29,0.64-0.4,0.92a0.31,0.31,0,0,0,0,.1h-7.84V19h0.73c0.4,0,.79,0,1.18.06,0.64,0,1.27.11,1.89,0.2,12.6,1.76,22.27,12.07,22.27,24.53C518.95,49.75,513.76,57.17,513.76,57.17Z"
                        transform="translate(-43.36 -15.58)"
                        fill="#2a7e7e"
                      />
                      <path
                        d="M492.33,19a0,0,0,0,0,0,0h0Z"
                        transform="translate(-43.36 -15.58)"
                        fill="#2a7e7e"
                      />
                      <path
                        d="M492.38,19h0Z"
                        transform="translate(-43.36 -15.58)"
                        fill="#2a7e7e"
                      />
                      <path
                        d="M508.62,57.17s-7.45,16.58-9.82,23.45c0,0.1-.07.19-0.1,0.28q-0.13.39-.24,0.75h-6V19h0.36a10.56,10.56,0,0,1,1.13.06c10.22,0.94,18.26,11.65,18.26,24.73C512.54,49.75,508.62,57.17,508.62,57.17Z"
                        transform="translate(-43.36 -15.58)"
                        fill="#2a7e7e"
                      />
                      <polygon
                        points="456.47 71.92 453.62 82.98 449.12 82.98 449.12 71.9 456.47 71.92"
                        fill="#2a7e7e"
                      />
                      <path
                        d="M492.41,19h0Z"
                        transform="translate(-43.36 -15.58)"
                        fill="#2a7e7e"
                      />
                      <path
                        d="M499.77,57.37S496.43,74,495.35,80.9v0c0,0.19-1.46.29-2.87,0.29V19h0.33s0,0,0,0l0.21,0c4.66,0.75,8.36,11.59,8.36,24.88A64.27,64.27,0,0,1,499.77,57.37Z"
                        transform="translate(-43.36 -15.58)"
                        fill="#2a7e7e"
                      />
                      <path
                        d="M500.32,81.64h0a0.3,0.3,0,0,1,0,.08v0a0.08,0.08,0,0,0,0,0,1.71,1.71,0,0,1-.15.22,1.6,1.6,0,0,1-.38.35,2.38,2.38,0,0,1-.52.31,7.24,7.24,0,0,1-1.83.53,29,29,0,0,1-4.38.32h-0.52V80.9h7.8A0.64,0.64,0,0,1,500.32,81.64Z"
                        transform="translate(-43.36 -15.58)"
                        fill="#2a7e7e"
                      />
                      <path
                        d="M492.71,19h0Z"
                        transform="translate(-43.36 -15.58)"
                        fill="#2a7e7e"
                      />
                      <path
                        d="M494.29,19.06c-0.51,0-1-.05-1.55-0.06H493C493.41,19,493.85,19,494.29,19.06Z"
                        transform="translate(-43.36 -15.58)"
                        fill="#2a7e7e"
                      />
                      <rect
                        x="449.12"
                        y="67.94"
                        width="0.57"
                        height="4.64"
                        fill="#2a7e7e"
                      />
                      <rect
                        x="496.16"
                        y="84.37"
                        width="6.29"
                        height="0.9"
                        transform="matrix(0.16, -0.99, 0.99, 0.16, 292.55, 548.62)"
                        fill="#2a7e7e"
                      />
                    </g>
                    <path
                      d="M491.3,15.64h0Z"
                      transform="translate(-43.36 -15.58)"
                      fill="#2a7e7e"
                    />
                    <path
                      d="M491.41,15.63h0Z"
                      transform="translate(-43.36 -15.58)"
                      fill="#2a7e7e"
                    />
                    <rect
                      x="448.11"
                      width="0.01"
                      height="0.01"
                      fill="#2a7e7e"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="layer hills" data-type="parallax" data-depth="0.55">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 595.28 146.18"
              >
                <g id="Hill_1" data-name="Hill 1">
                  <path
                    d="M249.73,332.75H22.17c55-12.46,58-45.21,113.78-44.15C191.69,287.54,194.78,320.29,249.73,332.75Z"
                    transform="translate(0 -257.67)"
                    fill="#72c4be"
                  />
                  <g opacity="0.5">
                    <path
                      d="M249.73,332.66H136V288.51C191.69,287.46,194.78,320.21,249.73,332.66Z"
                      transform="translate(0 -257.67)"
                      fill="#2a7e7e"
                    />
                  </g>
                </g>
                <g id="Hill_1-2" data-name="Hill 1">
                  <path
                    d="M565,332.75H300.78c63.8-14.44,67.38-52.42,132.11-51.19C497.6,280.33,501.18,318.3,565,332.75Z"
                    transform="translate(0 -257.67)"
                    fill="#72c4be"
                  />
                  <g opacity="0.5">
                    <path
                      d="M565,332.65H432.89V281.46C497.6,280.23,501.18,318.21,565,332.65Z"
                      transform="translate(0 -257.67)"
                      fill="#2a7e7e"
                    />
                  </g>
                </g>
                <g id="Hill_2" data-name="Hill 2">
                  <path
                    d="M378.48,332.71H188.09c46-9.78,48.55-35.49,95.2-34.66C329.92,297.22,332.5,322.93,378.48,332.71Z"
                    transform="translate(0 -257.67)"
                    fill="#fbc73a"
                  />
                  <path
                    d="M378.38,332.71H283.19V298.05C329.82,297.22,332.4,322.93,378.38,332.71Z"
                    transform="translate(0 -257.67)"
                    fill="#f4992b"
                  />
                </g>
                <g id="House">
                  <polygon
                    points="385.78 61.84 373.59 51.75 362.15 61.82 362.15 75.01 385.78 75.01 385.78 61.84"
                    fill="#603f16"
                  />
                  <polygon
                    points="385.81 61.44 373.5 49.99 362.15 61.61 362.15 65.24 373.53 54.14 385.78 65.31 385.81 61.44"
                    opacity="0.2"
                  />
                  <polygon
                    points="387.14 59.91 373.5 47.8 360.79 59.88 360.79 64.39 373.53 51.8 387.14 64.37 387.14 59.91"
                    fill="#342312"
                  />
                  <rect
                    x="369.3"
                    y="326.13"
                    width="8.45"
                    height="4.63"
                    transform="translate(45.08 444.31) rotate(-90)"
                    fill="#342312"
                  />
                  <rect
                    x="377.92"
                    y="48.47"
                    width="3.01"
                    height="7.12"
                    fill="#342312"
                  />
                  <g opacity="0.3">
                    <polygon
                      points="385.8 63.08 385.78 65.26 385.78 63.06 385.8 63.08"
                      opacity="0.2"
                    />
                    <polygon points="387.14 59.86 387.14 64.32 385.8 63.08 385.78 63.06 385.78 74.95 373.49 75.01 373.49 47.78 377.93 51.68 377.93 48.42 380.93 48.42 380.93 54.34 387.14 59.86" />
                  </g>
                </g>
                <g className="bubbles">
                  <g id="greyJets" fill="#2d2d2d" opacity="0.6">
                    <circle
                      className="jetBubble"
                      cx="391.26"
                      cy="44.03"
                      r="8.97"
                      fill="#9d9d9c"
                    />
                    <circle
                      className="jetBubble"
                      cx="400.53"
                      cy="44.81"
                      r="8.97"
                      fill="#9d9d9c"
                    />
                    <circle
                      className="jetBubble"
                      cx="406.45"
                      cy="39.47"
                      r="8.97"
                      fill="#9d9d9c"
                    />
                  </g>
                  <g id="colorJets" strokeWidth={0} stroke="#3d3d3d">
                    <circle
                      className="jetBubble"
                      cx="382.73"
                      cy="41.62"
                      r="8.3"
                      fill="#fff"
                    />
                    <circle
                      className="jetBubble"
                      cx="386.87"
                      cy="45.17"
                      r="6.15"
                      fill="#fff"
                    />
                    <circle
                      className="jetBubble"
                      cx="386.96"
                      cy="34.5"
                      r="7.15"
                      fill="#fff"
                    />
                    <circle
                      className="jetBubble"
                      cx="392.95"
                      cy="36.8"
                      r="10.22"
                      fill="#fff"
                    />
                    <circle
                      className="jetBubble"
                      cx="398.93"
                      cy="38.43"
                      r="9.37"
                      fill="#fff"
                    />
                    <circle
                      className="jetBubble"
                      cx="402.97"
                      cy="34.28"
                      r="8.24"
                      fill="#fff"
                    />
                  </g>
                </g>
                <g id="Trees">
                  <path
                    d="M109.22,322.66c-1.9,1-3.95,1.2-7.66.06-0.17-.05-0.28-7.32-0.35-16-0.26,8.72-.52,16-0.69,16.09-3.74,1.06-5.78.86-7.66-.23-12.25-7.11,3.74-36.33,7.82-43.19l0.46-.77,0.38,0.67C105.46,286.25,121.63,315.83,109.22,322.66Z"
                    transform="translate(0 -257.67)"
                    fill="#fbc73a"
                  />
                  <path
                    d="M100.09,332.64h1.77l-0.72-24.42a0.07,0.07,0,1,0,0,0l-1.06,24.43h0Z"
                    transform="translate(0 -257.67)"
                    fill="#8a5919"
                  />
                  <path
                    d="M109.23,322.67c-1.9,1-3.95,1.2-7.66.06-0.17-.05-0.34-7.27-0.42-15.95,0,0.76,0,1.47,0,2.21V278.63l0.38,0.67C105.46,286.26,121.63,315.84,109.23,322.67Z"
                    transform="translate(0 -257.67)"
                    fill="#f4992b"
                  />
                  <path
                    d="M158.91,286.41c-0.85.47-1.76,0.53-3.41,0-0.07,0-.12-3.26-0.16-7.12-0.12,3.88-.23,7.14-0.31,7.17-1.66.47-2.58,0.38-3.41-.1-5.46-3.16,1.66-16.18,3.48-19.24l0.21-.34,0.17,0.3C157.24,270.2,164.44,283.37,158.91,286.41Z"
                    transform="translate(0 -257.67)"
                    fill="#fbc73a"
                  />
                  <path
                    d="M154.84,290.85h0.79L155.31,280a0,0,0,1,0,0,0l-0.47,10.88h0Z"
                    transform="translate(0 -257.67)"
                    fill="#8a5919"
                  />
                  <path
                    d="M158.91,286.41c-0.85.47-1.76,0.53-3.41,0-0.07,0-.15-3.24-0.19-7.1,0,0.34,0,.66,0,1V266.8l0.17,0.3C157.24,270.2,164.44,283.37,158.91,286.41Z"
                    transform="translate(0 -257.67)"
                    fill="#f4992b"
                  />
                  <path
                    d="M449.94,278c-0.88.48-1.82,0.55-3.53,0-0.08,0-.13-3.37-0.16-7.37-0.12,4-.24,7.4-0.32,7.42-1.72.49-2.67,0.4-3.53-.11-5.65-3.28,1.72-16.75,3.61-19.92l0.21-.36,0.18,0.31C448.2,261.19,455.65,274.83,449.94,278Z"
                    transform="translate(0 -257.67)"
                    fill="#fbc73a"
                  />
                  <path
                    d="M445.72,282.57h0.82l-0.33-11.26a0,0,0,1,0,0,0l-0.49,11.27h0Z"
                    transform="translate(0 -257.67)"
                    fill="#8a5919"
                  />
                  <path
                    d="M449.94,278c-0.88.48-1.82,0.55-3.53,0-0.08,0-.16-3.35-0.19-7.35,0,0.35,0,.68,0,1v-14l0.18,0.31C448.2,261.19,455.65,274.83,449.94,278Z"
                    transform="translate(0 -257.67)"
                    fill="#f4992b"
                  />
                  <path
                    d="M173.66,321c-0.82.45-1.71,0.52-3.32,0-0.07,0-.12-3.17-0.15-6.93-0.11,3.78-.23,7-0.3,7-1.62.46-2.51,0.37-3.32-.1-5.31-3.08,1.62-15.74,3.39-18.72l0.2-.33,0.17,0.29C172,305.22,179,318,173.66,321Z"
                    transform="translate(0 -257.67)"
                    fill="#fbc73a"
                  />
                  <path
                    d="M169.7,325.32h0.77l-0.31-10.58a0,0,0,1,0,0,0l-0.46,10.59h0Z"
                    transform="translate(0 -257.67)"
                    fill="#8a5919"
                  />
                  <path
                    d="M173.66,321c-0.82.45-1.71,0.52-3.32,0-0.07,0-.15-3.15-0.18-6.91,0,0.33,0,.64,0,1V301.91l0.17,0.29C172,305.22,179,318,173.66,321Z"
                    transform="translate(0 -257.67)"
                    fill="#f4992b"
                  />
                  <polygon
                    points="144.75 29 133.19 29 138.97 18.64 144.75 29"
                    fill="#1b7891"
                  />
                  <polygon
                    points="144.15 26.35 133.79 26.35 138.97 17.06 144.15 26.35"
                    fill="#258ca5"
                  />
                  <polygon
                    points="143.16 23.43 134.78 23.43 138.97 16.74 143.16 23.43"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="138.97 16.74 138.97 29 133.19 29 134.68 26.35 133.79 26.35 135.42 23.43 134.79 23.43 138.97 16.74" />
                  </g>
                  <rect
                    x="138.22"
                    y="286.67"
                    width="1.52"
                    height="3.07"
                    transform="translate(277.95 318.73) rotate(180)"
                    fill="#603f16"
                  />
                  <polygon
                    points="474.81 66.82 499.4 66.82 487.11 39.26 474.81 66.82"
                    fill="#1b7891"
                  />
                  <polygon
                    points="476.08 59.77 498.13 59.77 487.11 35.05 476.08 59.77"
                    fill="#258ca5"
                  />
                  <polygon
                    points="478.2 52 496.01 52 487.11 34.2 478.2 52"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="487.1 34.2 487.1 66.82 499.39 66.82 496.24 59.77 498.12 59.77 494.66 52.01 495.99 52.01 487.1 34.2" />
                  </g>
                  <rect
                    x="485.49"
                    y="66.82"
                    width="3.23"
                    height="8.16"
                    fill="#603f16"
                  />
                  <polygon
                    points="533.83 64.66 565.07 64.66 549.45 29.64 533.83 64.66"
                    fill="#1b7891"
                  />
                  <polygon
                    points="535.45 55.7 563.46 55.7 549.45 24.3 535.45 55.7"
                    fill="#258ca5"
                  />
                  <polygon
                    points="538.14 45.83 560.76 45.83 549.45 23.22 538.14 45.83"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="549.44 23.22 549.44 64.66 565.06 64.66 561.06 55.71 563.45 55.71 559.04 45.84 560.74 45.84 549.44 23.22" />
                  </g>
                  <rect
                    x="547.29"
                    y="64.66"
                    width="4.1"
                    height="10.37"
                    fill="#603f16"
                  />
                  <path
                    d="M149.69,289.84c-0.82.45-1.71,0.52-3.32,0-0.07,0-.12-3.17-0.15-6.93-0.11,3.78-.23,7-0.3,7-1.62.46-2.51,0.37-3.32-.1-5.31-3.08,1.62-15.74,3.39-18.72l0.2-.33,0.17,0.29C148.06,274.06,155.06,286.88,149.69,289.84Z"
                    transform="translate(0 -257.67)"
                    fill="#fbc73a"
                  />
                  <path
                    d="M145.73,294.16h0.77l-0.31-10.58a0,0,0,1,0,0,0l-0.46,10.59h0Z"
                    transform="translate(0 -257.67)"
                    fill="#8a5919"
                  />
                  <path
                    d="M149.69,289.84c-0.82.45-1.71,0.52-3.32,0-0.07,0-.15-3.15-0.18-6.91,0,0.33,0,.64,0,1V270.76l0.17,0.29C148.06,274.06,155.06,286.88,149.69,289.84Z"
                    transform="translate(0 -257.67)"
                    fill="#f4992b"
                  />
                  <path
                    d="M526,321c-2.21,1.22-4.59,1.39-8.91.06-0.19-.06-0.32-8.51-0.41-18.6-0.3,10.14-.61,18.66-0.8,18.71-4.35,1.23-6.73,1-8.91-.27-14.25-8.26,4.35-42.25,9.1-50.24l0.54-.9,0.45,0.78C521.58,278.7,540.38,313.1,526,321Z"
                    transform="translate(0 -257.67)"
                    fill="#fbc73a"
                  />
                  <path
                    d="M515.33,332.64h2.06l-0.84-28.4a0.08,0.08,0,1,0,0,0l-1.23,28.42h0Z"
                    transform="translate(0 -257.67)"
                    fill="#603f16"
                  />
                  <path
                    d="M526,321c-2.21,1.22-4.59,1.39-8.91.06-0.19-.06-0.4-8.46-0.49-18.55,0,0.89,0,1.71,0,2.57V269.83l0.45,0.78C521.59,278.7,540.38,313.11,526,321Z"
                    transform="translate(0 -257.67)"
                    fill="#f4992b"
                  />
                  <polygon
                    points="314.78 70.84 327.38 70.84 321.08 56.72 314.78 70.84"
                    fill="#1b7891"
                  />
                  <polygon
                    points="315.43 67.23 326.73 67.23 321.08 54.56 315.43 67.23"
                    fill="#258ca5"
                  />
                  <polygon
                    points="316.52 63.25 325.64 63.25 321.08 54.12 316.52 63.25"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="321.08 54.12 321.08 70.85 327.38 70.85 325.76 67.23 326.73 67.23 324.95 63.25 325.64 63.25 321.08 54.12" />
                  </g>
                  <rect
                    x="320.25"
                    y="70.84"
                    width="1.65"
                    height="4.18"
                    fill="#603f16"
                  />
                  <polygon
                    points="53.33 63.5 88.05 63.5 70.69 24.58 53.33 63.5"
                    fill="#1b7891"
                  />
                  <polygon
                    points="55.12 53.54 86.25 53.54 70.69 18.64 55.12 53.54"
                    fill="#258ca5"
                  />
                  <polygon
                    points="58.12 42.57 83.26 42.57 70.69 17.44 58.12 42.57"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="70.67 17.44 70.67 63.5 88.04 63.5 83.59 53.55 86.24 53.55 81.35 42.59 83.24 42.59 70.67 17.44" />
                  </g>
                  <rect
                    x="68.4"
                    y="63.5"
                    width="4.56"
                    height="11.52"
                    fill="#603f16"
                  />
                  <polygon
                    points="29.49 66 56.68 66 43.09 35.52 29.49 66"
                    fill="#1b7891"
                  />
                  <polygon
                    points="30.9 58.2 55.28 58.2 43.09 30.87 30.9 58.2"
                    fill="#258ca5"
                  />
                  <polygon
                    points="33.24 49.61 52.93 49.61 43.09 29.93 33.24 49.61"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="43.08 29.93 43.08 66 56.68 66 53.19 58.21 55.27 58.21 51.44 49.62 52.92 49.62 43.08 29.93" />
                  </g>
                  <rect
                    x="41.29"
                    y={66}
                    width="3.57"
                    height="9.02"
                    fill="#603f16"
                  />
                  <polygon
                    points="406.81 69.07 424.63 69.07 415.72 49.1 406.81 69.07"
                    fill="#1b7891"
                  />
                  <polygon
                    points="407.73 63.95 423.7 63.95 415.72 46.05 407.73 63.95"
                    fill="#258ca5"
                  />
                  <polygon
                    points="409.27 58.33 422.17 58.33 415.72 45.44 409.27 58.33"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="415.71 45.44 415.71 69.07 424.62 69.07 422.34 63.96 423.7 63.96 421.19 58.34 422.16 58.34 415.71 45.44" />
                  </g>
                  <rect
                    x="414.54"
                    y="69.06"
                    width="2.34"
                    height="5.91"
                    fill="#603f16"
                  />
                  <polygon
                    points="421.94 25.11 430.59 25.11 426.27 15.42 421.94 25.11"
                    fill="#1b7891"
                  />
                  <polygon
                    points="422.39 22.63 430.14 22.63 426.27 13.94 422.39 22.63"
                    fill="#258ca5"
                  />
                  <polygon
                    points="423.14 19.9 429.4 19.9 426.27 13.64 423.14 19.9"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="426.26 13.64 426.26 25.11 430.59 25.11 429.48 22.63 430.14 22.63 428.92 19.9 429.39 19.9 426.26 13.64" />
                  </g>
                  <rect
                    x="425.7"
                    y="25.11"
                    width="1.13"
                    height="2.87"
                    fill="#603f16"
                  />
                  <polygon
                    points="290.04 39.77 301.47 39.77 295.75 26.96 290.04 39.77"
                    fill="#1b7891"
                  />
                  <polygon
                    points="290.63 36.49 300.88 36.49 295.75 25 290.63 36.49"
                    fill="#258ca5"
                  />
                  <polygon
                    points="291.62 32.88 299.89 32.88 295.75 24.61 291.62 32.88"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="295.75 24.61 295.75 39.77 301.47 39.77 300 36.49 300.88 36.49 299.26 32.88 299.88 32.88 295.75 24.61" />
                  </g>
                  <rect
                    x={295}
                    y="39.77"
                    width="1.5"
                    height="3.79"
                    fill="#603f16"
                  />
                  <polygon
                    points="184.85 36.98 170.96 36.98 177.91 24.52 184.85 36.98"
                    fill="#1b7891"
                  />
                  <polygon
                    points="184.14 33.79 171.68 33.79 177.91 22.62 184.14 33.79"
                    fill="#258ca5"
                  />
                  <polygon
                    points="182.94 30.28 172.88 30.28 177.91 22.24 182.94 30.28"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="177.91 22.24 177.91 36.98 170.96 36.98 172.75 33.79 171.68 33.79 173.64 30.28 172.89 30.28 177.91 22.24" />
                  </g>
                  <rect
                    x={177}
                    y="294.64"
                    width="1.82"
                    height="3.69"
                    transform="translate(355.82 335.3) rotate(180)"
                    fill="#603f16"
                  />
                  <polygon
                    points="162.15 31.85 173.58 31.85 167.87 19.04 162.15 31.85"
                    fill="#1b7891"
                  />
                  <polygon
                    points="162.74 28.57 172.99 28.57 167.87 17.09 162.74 28.57"
                    fill="#258ca5"
                  />
                  <polygon
                    points="163.73 24.96 172 24.96 167.87 16.69 163.73 24.96"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="167.86 16.69 167.86 31.86 173.58 31.86 172.11 28.58 172.99 28.58 171.37 24.97 172 24.97 167.86 16.69" />
                  </g>
                  <rect
                    x="167.11"
                    y="31.85"
                    width="1.5"
                    height="3.79"
                    fill="#603f16"
                  />
                  <polygon
                    points="429.53 21.88 440.96 21.88 435.24 9.07 429.53 21.88"
                    fill="#1b7891"
                  />
                  <polygon
                    points="430.12 18.6 440.37 18.6 435.24 7.11 430.12 18.6"
                    fill="#258ca5"
                  />
                  <polygon
                    points="431.11 14.99 439.38 14.99 435.24 6.72 431.11 14.99"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="435.24 6.72 435.24 21.88 440.95 21.88 439.49 18.6 440.36 18.6 438.75 14.99 439.37 14.99 435.24 6.72" />
                  </g>
                  <rect
                    x="434.49"
                    y="21.88"
                    width="1.5"
                    height="3.79"
                    fill="#603f16"
                  />
                  <polygon
                    points="277.45 39.75 268.5 39.75 272.98 31.74 277.45 39.75"
                    fill="#1b7891"
                  />
                  <polygon
                    points="276.98 37.7 268.97 37.7 272.98 30.52 276.98 37.7"
                    fill="#258ca5"
                  />
                  <polygon
                    points="276.21 35.44 269.74 35.44 272.98 30.27 276.21 35.44"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="272.98 30.27 272.98 39.75 268.51 39.75 269.65 37.7 268.97 37.7 270.23 35.45 269.74 35.45 272.98 30.27" />
                  </g>
                  <rect
                    x="272.39"
                    y="297.42"
                    width="1.17"
                    height="2.37"
                    transform="translate(545.96 339.54) rotate(180)"
                    fill="#603f16"
                  />
                  <polygon
                    points="223.26 63.55 210.71 63.55 216.98 52.3 223.26 63.55"
                    fill="#1b7891"
                  />
                  <polygon
                    points="222.61 60.67 211.36 60.67 216.98 50.59 222.61 60.67"
                    fill="#258ca5"
                  />
                  <polygon
                    points="221.53 57.5 212.44 57.5 216.98 50.24 221.53 57.5"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="216.99 50.24 216.99 63.55 210.71 63.55 212.32 60.68 211.36 60.68 213.13 57.51 212.45 57.51 216.99 50.24" />
                  </g>
                  <rect
                    x="216.16"
                    y="321.22"
                    width="1.65"
                    height="3.33"
                    transform="translate(433.98 388.11) rotate(180)"
                    fill="#603f16"
                  />
                  <polygon
                    points="332.49 51.95 322.03 51.95 327.26 42.57 332.49 51.95"
                    fill="#1b7891"
                  />
                  <polygon
                    points="331.95 49.55 322.57 49.55 327.26 41.14 331.95 49.55"
                    fill="#258ca5"
                  />
                  <polygon
                    points="331.05 46.91 323.47 46.91 327.26 40.85 331.05 46.91"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="327.26 40.85 327.26 51.95 322.03 51.95 323.37 49.55 322.57 49.55 324.05 46.91 323.48 46.91 327.26 40.85" />
                  </g>
                  <rect
                    x="326.58"
                    y="309.62"
                    width="1.37"
                    height="2.78"
                    transform="translate(654.53 364.34) rotate(180)"
                    fill="#603f16"
                  />
                  <polygon
                    points="260.98 44.72 252.04 44.72 256.51 36.71 260.98 44.72"
                    fill="#1b7891"
                  />
                  <polygon
                    points="260.52 42.67 252.5 42.67 256.51 35.48 260.52 42.67"
                    fill="#258ca5"
                  />
                  <polygon
                    points="259.75 40.41 253.28 40.41 256.51 35.24 259.75 40.41"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="256.51 35.24 256.51 44.72 252.04 44.72 253.19 42.67 252.51 42.67 253.77 40.41 253.28 40.41 256.51 35.24" />
                  </g>
                  <rect
                    x="255.93"
                    y="302.39"
                    width="1.17"
                    height="2.37"
                    transform="translate(513.03 349.48) rotate(180)"
                    fill="#603f16"
                  />
                  <polygon
                    points="255.74 49.41 242.99 49.41 249.36 37.98 255.74 49.41"
                    fill="#1b7891"
                  />
                  <polygon
                    points="255.08 46.48 243.65 46.48 249.36 36.24 255.08 46.48"
                    fill="#258ca5"
                  />
                  <polygon
                    points="253.98 43.26 244.75 43.26 249.36 35.88 253.98 43.26"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="249.37 35.88 249.37 49.41 242.99 49.41 244.63 46.48 243.65 46.48 245.45 43.27 244.75 43.27 249.37 35.88" />
                  </g>
                  <rect
                    x="248.53"
                    y="307.07"
                    width="1.67"
                    height="3.38"
                    transform="translate(498.73 359.86) rotate(180)"
                    fill="#603f16"
                  />
                  <polygon
                    points="477.39 27.1 463.1 27.1 470.25 14.29 477.39 27.1"
                    fill="#1b7891"
                  />
                  <polygon
                    points="476.65 23.82 463.84 23.82 470.25 12.34 476.65 23.82"
                    fill="#258ca5"
                  />
                  <polygon
                    points="475.42 20.21 465.07 20.21 470.25 11.94 475.42 20.21"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="470.25 11.94 470.25 27.1 463.1 27.1 464.94 23.82 463.84 23.82 465.86 20.22 465.08 20.22 470.25 11.94" />
                  </g>
                  <rect
                    x="469.31"
                    y="284.77"
                    width="1.88"
                    height="3.79"
                    transform="translate(940.5 315.66) rotate(180)"
                    fill="#603f16"
                  />
                  <path
                    d="M344.28,315.54a3.51,3.51,0,0,1-3,0c-0.06,0-.11-2.84-0.14-6.2-0.1,3.38-.2,6.22-0.27,6.24a3.51,3.51,0,0,1-3-.09c-4.75-2.76,1.45-14.09,3-16.75l0.18-.3,0.15,0.26C342.82,301.42,349.09,312.89,344.28,315.54Z"
                    transform="translate(0 -257.67)"
                    fill="#fbc73a"
                  />
                  <path
                    d="M340.74,319.41h0.69l-0.28-9.47a0,0,0,1,0,0,0l-0.41,9.48h0Z"
                    transform="translate(0 -257.67)"
                    fill="#8a5919"
                  />
                  <path
                    d="M344.28,315.54a3.51,3.51,0,0,1-3,0c-0.06,0-.13-2.82-0.16-6.19,0,0.3,0,.57,0,0.86V298.46l0.15,0.26C342.82,301.42,349.09,312.89,344.28,315.54Z"
                    transform="translate(0 -257.67)"
                    fill="#f4992b"
                  />
                  <path
                    d="M481.64,291.38a3.51,3.51,0,0,1-3,0c-0.06,0-.11-2.84-0.14-6.2-0.1,3.38-.2,6.22-0.27,6.24a3.51,3.51,0,0,1-3-.09c-4.75-2.76,1.45-14.09,3-16.75l0.18-.3,0.15,0.26C480.18,277.26,486.45,288.73,481.64,291.38Z"
                    transform="translate(0 -257.67)"
                    fill="#fbc73a"
                  />
                  <path
                    d="M478.09,295.25h0.69l-0.28-9.47a0,0,0,1,0,0,0l-0.41,9.48h0Z"
                    transform="translate(0 -257.67)"
                    fill="#8a5919"
                  />
                  <path
                    d="M481.64,291.38a3.51,3.51,0,0,1-3,0c-0.06,0-.13-2.82-0.16-6.19,0,0.3,0,.57,0,0.86V274.3l0.15,0.26C480.18,277.26,486.45,288.73,481.64,291.38Z"
                    transform="translate(0 -257.67)"
                    fill="#f4992b"
                  />
                  <polygon
                    points="247.65 54.44 238.71 54.44 243.18 46.43 247.65 54.44"
                    fill="#1b7891"
                  />
                  <polygon
                    points="247.18 52.39 239.17 52.39 243.18 45.2 247.18 52.39"
                    fill="#258ca5"
                  />
                  <polygon
                    points="246.41 50.13 239.94 50.13 243.18 44.95 246.41 50.13"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="243.18 44.95 243.18 54.44 238.71 54.44 239.85 52.39 239.17 52.39 240.43 50.13 239.94 50.13 243.18 44.95" />
                  </g>
                  <rect
                    x="242.59"
                    y="312.11"
                    width="1.17"
                    height="2.37"
                    transform="translate(486.36 368.92) rotate(180)"
                    fill="#603f16"
                  />
                  <polygon
                    points="317.05 46.14 308.11 46.14 312.58 38.13 317.05 46.14"
                    fill="#1b7891"
                  />
                  <polygon
                    points="316.59 44.09 308.57 44.09 312.58 36.91 316.59 44.09"
                    fill="#258ca5"
                  />
                  <polygon
                    points="315.81 41.83 309.34 41.83 312.58 36.66 315.81 41.83"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="312.58 36.66 312.58 46.14 308.11 46.14 309.26 44.09 308.57 44.09 309.83 41.84 309.35 41.84 312.58 36.66" />
                  </g>
                  <rect
                    x="311.99"
                    y="303.81"
                    width="1.17"
                    height="2.37"
                    transform="translate(625.16 352.33) rotate(180)"
                    fill="#603f16"
                  />
                  <polygon
                    points="201.75 67.18 213.18 67.18 207.47 54.37 201.75 67.18"
                    fill="#1b7891"
                  />
                  <polygon
                    points="202.34 63.9 212.59 63.9 207.47 52.41 202.34 63.9"
                    fill="#258ca5"
                  />
                  <polygon
                    points="203.33 60.29 211.6 60.29 207.47 52.02 203.33 60.29"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="207.46 52.02 207.46 67.18 213.18 67.18 211.71 63.9 212.59 63.9 210.97 60.29 211.59 60.29 207.46 52.02" />
                  </g>
                  <rect
                    x="206.71"
                    y="67.17"
                    width="1.5"
                    height="3.79"
                    fill="#603f16"
                  />
                  <polygon
                    points="193 41.02 180.84 41.02 186.92 30.13 193 41.02"
                    fill="#1b7891"
                  />
                  <polygon
                    points="192.37 38.23 181.47 38.23 186.92 28.46 192.37 38.23"
                    fill="#258ca5"
                  />
                  <polygon
                    points="191.32 35.16 182.52 35.16 186.92 28.13 191.32 35.16"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="186.92 28.13 186.92 41.02 180.84 41.02 182.4 38.24 181.47 38.24 183.19 35.17 182.52 35.17 186.92 28.13" />
                  </g>
                  <rect
                    x="186.13"
                    y="298.69"
                    width="1.6"
                    height="3.23"
                    transform="translate(373.85 342.94) rotate(180)"
                    fill="#603f16"
                  />
                  <polygon
                    points="323.59 49.34 314.65 49.34 319.12 41.33 323.59 49.34"
                    fill="#1b7891"
                  />
                  <polygon
                    points="323.13 47.29 315.11 47.29 319.12 40.11 323.13 47.29"
                    fill="#258ca5"
                  />
                  <polygon
                    points="322.36 45.03 315.88 45.03 319.12 39.86 322.36 45.03"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="319.12 39.86 319.12 49.34 314.65 49.34 315.8 47.3 315.11 47.3 316.37 45.04 315.89 45.04 319.12 39.86" />
                  </g>
                  <rect
                    x="318.54"
                    y="307.01"
                    width="1.17"
                    height="2.37"
                    transform="translate(638.24 358.73) rotate(180)"
                    fill="#603f16"
                  />
                  <polygon
                    points="310.1 40.57 303.14 40.57 306.62 34.33 310.1 40.57"
                    fill="#1b7891"
                  />
                  <polygon
                    points="309.74 38.97 303.5 38.97 306.62 33.38 309.74 38.97"
                    fill="#258ca5"
                  />
                  <polygon
                    points="309.14 37.21 304.1 37.21 306.62 33.18 309.14 37.21"
                    fill="#1b7891"
                  />
                  <g opacity="0.18">
                    <polygon points="306.62 33.18 306.62 40.57 303.14 40.57 304.03 38.97 303.5 38.97 304.48 37.21 304.11 37.21 306.62 33.18" />
                  </g>
                  <rect
                    x="306.17"
                    y="298.23"
                    width="0.91"
                    height="1.85"
                    transform="translate(613.25 340.65) rotate(180)"
                    fill="#603f16"
                  />
                </g>
                <g id="Birdie" className="bounce">
                  <path
                    d="M377.18,328.85h0V328h0a2.11,2.11,0,0,1,.83.18A1,1,0,0,1,377.18,328.85Z"
                    transform="translate(0 -257.67)"
                    fill="#fbc73a"
                  />
                  <ellipse
                    cx="377.92"
                    cy="69.76"
                    rx="0.23"
                    ry="0.23"
                    fill="#fbc73a"
                  />
                  <path
                    d="M378.51,332.33a2.17,2.17,0,0,1-1.2.34h0A0.66,0.66,0,0,1,378,332,0.65,0.65,0,0,1,378.51,332.33Z"
                    transform="translate(0 -257.67)"
                    fill="#fbc73a"
                  />
                  <path
                    d="M379.43,330.53a0.46,0.46,0,0,1,0-.1C379.42,330.35,379.43,330.4,379.43,330.53Z"
                    transform="translate(0 -257.67)"
                    fill="#fbc73a"
                  />
                  <path
                    d="M378.6,332.67H377.3A0.66,0.66,0,0,1,378,332a0.65,0.65,0,0,1,.56.33A0.69,0.69,0,0,1,378.6,332.67Z"
                    transform="translate(0 -257.67)"
                    fill="#f4992b"
                  />
                  <g id="Eye">
                    <ellipse
                      cx="377.92"
                      cy="69.76"
                      rx="0.23"
                      ry="0.23"
                      fill="#010101"
                    />
                    <circle cx="377.98" cy="69.72" r="0.06" fill="#fff" />
                  </g>
                  <polygon
                    points="377.18 71.18 377.18 71.18 377.18 71.18 377.18 71.18"
                    fill="#f59f28"
                  />
                  <path
                    d="M378.79,328.55a4,4,0,0,1-.09-1.11,1.75,1.75,0,0,0-.52-1.11,1.6,1.6,0,0,0-2,0,1.75,1.75,0,0,0-.52,1.11,4.07,4.07,0,0,1-.09,1.11c-0.25.63-1.28,1.86-1.08,2.49a0.8,0.8,0,0,0,.44-0.51c0-.13,0-0.18,0-0.1a0.44,0.44,0,0,1,0,.1,2.34,2.34,0,0,0,.92,1.81,0.65,0.65,0,0,1,.56-0.33,0.66,0.66,0,0,1,.65.66h0.24A0.66,0.66,0,0,1,378,332a0.65,0.65,0,0,1,.56.33,2.33,2.33,0,0,0,.92-1.8,0.46,0.46,0,0,1,0-.1c0-.08,0,0,0,0.1a0.81,0.81,0,0,0,.44.51C380.07,330.4,379,329.17,378.79,328.55Zm-2.58-1.12a0.23,0.23,0,1,1,.23.23A0.23,0.23,0,0,1,376.2,327.43Zm1,1.42h0a1,1,0,0,1-.83-0.66,2.11,2.11,0,0,1,.83-0.18h0a2.11,2.11,0,0,1,.83.18A1,1,0,0,1,377.18,328.85Zm0.74-1.18a0.23,0.23,0,1,1,.23-0.23A0.23,0.23,0,0,1,377.92,327.66Z"
                    transform="translate(0 -257.67)"
                    fill="#fbc73a"
                  />
                  <path
                    d="M374.94,330.43a0.44,0.44,0,0,1,0,.1C374.92,330.4,374.93,330.35,374.94,330.43Z"
                    transform="translate(0 -257.67)"
                    fill="#fbc73a"
                  />
                  <ellipse
                    cx="376.43"
                    cy="69.76"
                    rx="0.23"
                    ry="0.23"
                    fill="#fbc73a"
                  />
                  <path
                    d="M377.06,332.67h0a2.17,2.17,0,0,1-1.2-.34,0.65,0.65,0,0,1,.56-0.33A0.66,0.66,0,0,1,377.06,332.67Z"
                    transform="translate(0 -257.67)"
                    fill="#fbc73a"
                  />
                  <path
                    d="M377.18,328.85h0a1,1,0,0,1-.83-0.66,2.11,2.11,0,0,1,.83-0.18h0v0.84Z"
                    transform="translate(0 -257.67)"
                    fill="#fbc73a"
                  />
                  <path
                    d="M377.06,332.67h-1.31a0.69,0.69,0,0,1,.09-0.34,0.65,0.65,0,0,1,.56-0.33A0.66,0.66,0,0,1,377.06,332.67Z"
                    transform="translate(0 -257.67)"
                    fill="#f4992b"
                  />
                  <g id="Eye-2" data-name="Eye">
                    <ellipse
                      cx="376.42"
                      cy="69.76"
                      rx="0.23"
                      ry="0.23"
                      fill="#010101"
                    />
                    <circle cx="376.48" cy="69.71" r="0.06" fill="#fff" />
                  </g>
                  <path
                    d="M378,328.19a1,1,0,0,1-.83.66h0a1,1,0,0,1-.83-0.66A2,2,0,0,1,378,328.19Z"
                    transform="translate(0 -257.67)"
                    fill="#f4992b"
                  />
                  <polygon
                    points="377.18 71.18 377.18 71.18 377.18 71.18 377.18 71.18 377.18 71.18 377.18 71.18"
                    fill="#f59f28"
                  />
                  <path
                    d="M375.05,330.32a0.46,0.46,0,0,1,0-.1C375,330.14,375.06,330.19,375.05,330.32Z"
                    transform="translate(0 -257.67)"
                    fill="#fbc73a"
                  />
                  <path
                    d="M378.79,328.54a4,4,0,0,1-.09-1.11,1.75,1.75,0,0,0-.52-1.11,1.51,1.51,0,0,0-1-.35h0v2.88h0v3.82h1.43a0.69,0.69,0,0,0-.09-0.34,2.33,2.33,0,0,0,.92-1.8,0.46,0.46,0,0,1,0-.1c0-.08,0,0,0,0.1a0.81,0.81,0,0,0,.44.51C380.07,330.4,379,329.17,378.79,328.54Zm-0.86-.88a0.23,0.23,0,1,1,.23-0.23A0.23,0.23,0,0,1,377.92,327.66Z"
                    transform="translate(0 -257.67)"
                    opacity="0.15"
                  />
                </g>
                <rect y="74.99" width="595.28" height="71.19" fill="#fdd36e" />
              </svg>
            </div>
            <div className="layer waves" data-type="parallax" data-depth="0.68">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 686.35 165.84"
              >
                <g>
                  <path
                    d="M649.1,399H-37.13V363S44.49,340.7,70.95,339.19c48-2.75,144.34,20.46,192.41,21.41,64.72,1.28,144.2-14.13,191.17-14.91C505.81,344.83,649.1,354,649.1,354v45Z"
                    transform="translate(37.13 -338.96)"
                    fill="#fff"
                  />
                </g>
                <g>
                  <path
                    d="M649.21,405.25l-686.23-3v-33S39,347.54,65.71,346c48.46-2.75,145.79,20.46,194.35,21.41,65.37,1.28,145.65-14.13,193.09-14.91,51.79-.86,196.06,7.72,196.06,7.72v45Z"
                    transform="translate(37.13 -338.96)"
                    fill="#84c2eb"
                  />
                </g>
                <g>
                  <path
                    d="M649.1,405H-37.13V378S38.4,354.2,65.13,352.69c48.49-2.75,145.86,20.46,194.44,21.41C325,375.38,405.29,360,452.75,359.19,504.57,358.33,649.1,369,649.1,369v36Z"
                    transform="translate(37.13 -338.96)"
                    fill="#51a3db"
                  />
                </g>
                <g>
                  <path
                    d="M649.1,405l-686.23-1.45v-20.1s76-21.71,102.73-23.22c48.46-2.75,145.79,20.46,194.34,21.41,65.37,1.28,145.64-14.13,193.09-14.91C504.81,365.83,649.1,378,649.1,378v27Z"
                    transform="translate(37.13 -338.96)"
                    fill="#2c86c7"
                  />
                </g>
                <g id="Boat">
                  <polygon
                    points="283.59 43.52 283.46 20.63 266.97 43.62 283.59 43.52"
                    fill="#f6f6f6"
                  />
                  <path
                    d="M238.71,380.61h0V379h0a4.31,4.31,0,0,1,1.62.33A1.88,1.88,0,0,1,238.71,380.61Z"
                    transform="translate(37.13 -338.96)"
                    fill="#fbc73a"
                  />
                  <ellipse
                    cx="277.3"
                    cy="39.01"
                    rx="0.44"
                    ry="0.44"
                    fill="#fbc73a"
                  />
                  <path
                    d="M241.31,387.08a4.4,4.4,0,0,1-2.34.62h0A1.28,1.28,0,0,1,241.31,387.08Z"
                    transform="translate(37.13 -338.96)"
                    fill="#fbc73a"
                  />
                  <path
                    d="M243.11,383.73a0.82,0.82,0,0,1,0-.19C243.09,383.39,243.12,383.49,243.11,383.73Z"
                    transform="translate(37.13 -338.96)"
                    fill="#fbc73a"
                  />
                  <path
                    d="M241.5,387.7h-2.55a1.28,1.28,0,0,1,2.37-.62A1.23,1.23,0,0,1,241.5,387.7Z"
                    transform="translate(37.13 -338.96)"
                    fill="#f4992b"
                  />
                  <g id="Eye">
                    <ellipse
                      cx="277.3"
                      cy="39.01"
                      rx="0.44"
                      ry="0.44"
                      fill="#010101"
                    />
                    <circle cx="277.42" cy="38.93" r="0.13" fill="#fff" />
                  </g>
                  <polygon
                    points="275.84 41.65 275.84 41.65 275.84 41.65 275.84 41.65"
                    fill="#f59f28"
                  />
                  <path
                    d="M241.86,380a7.16,7.16,0,0,1-.18-2.06,3.19,3.19,0,0,0-1-2.07,3.26,3.26,0,0,0-3.92,0,3.19,3.19,0,0,0-1,2.07,7.2,7.2,0,0,1-.18,2.06c-0.48,1.16-2.5,3.45-2.11,4.63a1.53,1.53,0,0,0,.86-1c0-.24,0-0.33,0-0.19a0.77,0.77,0,0,1,0,.19,4.27,4.27,0,0,0,1.79,3.35,1.28,1.28,0,0,1,2.37.63h0.47a1.28,1.28,0,0,1,2.37-.62,4.25,4.25,0,0,0,1.79-3.35,0.82,0.82,0,0,1,0-.19c0-.14,0,0,0,0.19a1.53,1.53,0,0,0,.86.95C244.35,383.49,242.34,381.21,241.86,380Zm-5-2.07a0.44,0.44,0,1,1,.44.44A0.44,0.44,0,0,1,236.81,378Zm1.91,2.63h0a1.88,1.88,0,0,1-1.62-1.22,4.32,4.32,0,0,1,1.62-.33h0a4.31,4.31,0,0,1,1.62.33A1.88,1.88,0,0,1,238.71,380.61Zm1.46-2.2a0.44,0.44,0,1,1,.44-0.44A0.44,0.44,0,0,1,240.17,378.41Z"
                    transform="translate(37.13 -338.96)"
                    fill="#fbc73a"
                  />
                  <path
                    d="M234.33,383.54a0.77,0.77,0,0,1,0,.19C234.3,383.49,234.32,383.39,234.33,383.54Z"
                    transform="translate(37.13 -338.96)"
                    fill="#fbc73a"
                  />
                  <ellipse
                    cx="274.38"
                    cy="39.01"
                    rx="0.44"
                    ry="0.44"
                    fill="#fbc73a"
                  />
                  <path
                    d="M238.48,387.7h0a4.4,4.4,0,0,1-2.35-.63A1.28,1.28,0,0,1,238.48,387.7Z"
                    transform="translate(37.13 -338.96)"
                    fill="#fbc73a"
                  />
                  <path
                    d="M238.71,380.61h0a1.88,1.88,0,0,1-1.62-1.22,4.32,4.32,0,0,1,1.62-.33h0v1.56Z"
                    transform="translate(37.13 -338.96)"
                    fill="#fbc73a"
                  />
                  <path
                    d="M238.48,387.7h-2.55a1.24,1.24,0,0,1,.18-0.63A1.28,1.28,0,0,1,238.48,387.7Z"
                    transform="translate(37.13 -338.96)"
                    fill="#f4992b"
                  />
                  <g id="Eye-2" data-name="Eye">
                    <ellipse
                      cx="274.37"
                      cy="39.01"
                      rx="0.44"
                      ry="0.44"
                      fill="#010101"
                    />
                    <circle cx="274.48" cy="38.91" r="0.13" fill="#fff" />
                  </g>
                  <path
                    d="M240.34,379.38a1.88,1.88,0,0,1-1.62,1.22h0a1.88,1.88,0,0,1-1.62-1.22A4.14,4.14,0,0,1,240.34,379.38Z"
                    transform="translate(37.13 -338.96)"
                    fill="#f4992b"
                  />
                  <polygon
                    points="275.85 41.65 275.85 41.65 275.85 41.65 275.84 41.65 275.85 41.65 275.85 41.65"
                    fill="#f59f28"
                  />
                  <path
                    d="M234.56,383.34a0.82,0.82,0,0,1,0-.19C234.55,383,234.57,383.1,234.56,383.34Z"
                    transform="translate(37.13 -338.96)"
                    fill="#fbc73a"
                  />
                  <path
                    d="M241.85,380a7.16,7.16,0,0,1-.18-2.06,3.19,3.19,0,0,0-1-2.07,3.05,3.05,0,0,0-2-.66h0v5.34h0v7.1h2.79a1.23,1.23,0,0,0-.18-0.62,4.25,4.25,0,0,0,1.79-3.35,0.82,0.82,0,0,1,0-.19c0-.14,0,0,0,0.19a1.53,1.53,0,0,0,.86.95C244.35,383.49,242.34,381.2,241.85,380Zm-1.69-1.64a0.44,0.44,0,1,1,.44-0.44A0.44,0.44,0,0,1,240.17,378.41Z"
                    transform="translate(37.13 -338.96)"
                    opacity="0.15"
                  />
                  <line
                    x1="284.92"
                    y1="15.29"
                    x2="285.09"
                    y2="45.28"
                    fill="none"
                    stroke="#6e517a"
                    strokeMiterlimit={10}
                    strokeWidth={3}
                  />
                  <polygon
                    points="265.78 45.32 266.93 47.19 306.05 46.97 307.19 45.09 265.78 45.32"
                    fill="#6e517a"
                  />
                  <polygon
                    points="269.25 50.9 303.74 50.7 306.3 46.57 266.69 46.79 269.25 50.9"
                    fill="#f6f6f6"
                  />
                  <polygon
                    points="284.86 14.32 284.87 17.52 291.67 17.48 288.26 15.81 284.86 14.32"
                    fill="#fbc73a"
                  />
                  <polygon
                    points="306.9 43.36 286.6 43.44 286.46 18.48 306.9 43.36"
                    fill="#f6f6f6"
                  />
                  <polygon
                    points="268.36 49.47 269.37 51.34 303.63 51.15 304.62 49.27 268.36 49.47"
                    fill="#6e517a"
                  />
                  <polygon
                    points="306.89 43.37 286.6 43.45 286.46 18.49 306.89 43.37"
                    fill="#060809"
                    opacity="0.2"
                  />
                  <polygon
                    points="307.24 45.06 306.35 46.52 285.16 46.64 285.15 45.18 307.24 45.06"
                    fill="#060809"
                    opacity="0.4"
                  />
                  <polygon
                    points="306.3 46.58 304.63 49.25 285.12 49.38 285.11 46.7 306.3 46.58"
                    fill="#060809"
                    opacity="0.2"
                  />
                  <polygon
                    points="304.63 49.25 304.6 49.31 303.64 51.12 285.14 51.22 285.13 49.36 304.63 49.25"
                    fill="#060809"
                    opacity="0.4"
                  />
                  <rect
                    x="247.88"
                    y="356.47"
                    width="0.98"
                    height="27.7"
                    transform="translate(35.08 -337.57) rotate(-0.32)"
                    fill="#060809"
                    opacity="0.4"
                  />
                </g>
                <g>
                  <path
                    d="M649.1,424h-686l-0.2-31.46s76-20.57,102.73-22c48.46-2.61,145.79,19.4,194.35,20.3C325.32,392,405.59,377.45,453,376.7c51.79-.81,196.06,13.18,196.06,13.18V424Z"
                    transform="translate(37.13 -338.96)"
                    fill="#1365a6"
                  />
                </g>
                <g>
                  <path
                    d="M649.15,504.8H-37l-0.11-103.21s75.54-23.32,102.27-25c48.49-3,145.86,22.31,194.44,23.34,65.4,1.39,145.71-15.4,193.18-16.25,51.82-.93,196.35,9.66,196.35,9.66Z"
                    transform="translate(37.13 -338.96)"
                    fill="#17517b"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div id="mobile-svg">
          <svg
            className="background"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 595.44 525.66"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="297.79"
                y1="337.47"
                x2="297.79"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset={0} stopColor="#c0badb" />
                <stop offset="0.51" stopColor="#dbeeec" />
                <stop offset={1} stopColor="#70c8f2" />
              </linearGradient>
              <linearGradient
                id="linear-gradient-2"
                x1="297.77"
                y1="441.68"
                x2="297.77"
                y2="146.76"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.62" stopColor="#efe8f4" />
                <stop offset="0.99" stopColor="#c9bdde" />
              </linearGradient>
              <clipPath id="clip-path" transform="translate(0.16 20.87)">
                <path
                  d="M523.83,456.93a14.5,14.5,0,0,0-1.15-9A24.63,24.63,0,0,0,512,436.12a21.63,21.63,0,0,0-15.75-1.95c-9.86,2.68-16.34,12.64-18.06,22.72a1.94,1.94,0,0,0,.77,2.25c6,5.4,13.36,9.52,21.36,10.41C510.08,470.63,521.88,465.87,523.83,456.93Z"
                  fill="none"
                />
              </clipPath>
              <clipPath id="clip-path-2" transform="translate(0.16 20.87)">
                <path
                  d="M241.64,468.79c-0.8-3.07-.41-6.56,1.6-10.42a31.22,31.22,0,0,1,14.91-13.77,35.49,35.49,0,0,1,21.94-2.26c13.74,3.11,22.76,14.7,25.16,26.4a2.48,2.48,0,0,1,0,1.52,3.14,3.14,0,0,1-1.05,1.1c-8.32,6.27-18.61,11.06-29.76,12.1C260.8,484.72,244.36,479.19,241.64,468.79Z"
                  fill="none"
                />
              </clipPath>
            </defs>
            <title>illustrations</title>
            <polygon
              id="Background_Mountains"
              data-name="Background Mountains"
              points="35.8 241.04 55.07 249.51 106.71 154.76 179.63 210.74 191.39 189.15 220.73 214.01 290.31 146.76 360.92 232.29 421.18 173.6 524.24 246.23 595.06 203.09 595.38 440.08 0.16 441.68 0.16 272.81 35.8 241.04"
              fill="url(#linear-gradient-2)"
            />
            <g id="Mountain_4" data-name="Mountain 4">
              <path
                d="M440.51,178.84l-39.38-55.29L251.29,395.36a0.8,0.8,0,0,0,.71,1.18H595.28C595.93,396.54,440.51,178.84,440.51,178.84Z"
                transform="translate(0.16 20.87)"
                fill="#b66586"
              />
              <path
                d="M408.53,184.07c7-1.25,15.27,12.69,21.72,10.9,5.22-1.45,1.84-8.07,4.27-12.4,0.86-1.54,5.65-4.2,5.65-4.2l-39-54.81-41.29,75s19.33-15.13,25.53-12C392.4,190.14,400.5,185.49,408.53,184.07Z"
                transform="translate(0.16 20.87)"
                fill="#fff"
              />
              <polygon
                points="401.3 144.41 405.01 185 420.99 214.54 409.53 236.5 435.98 267.49 436.59 318.73 474.65 340.25 467.2 387.72 502.25 417.66 595.44 417.41 401.3 144.41"
                opacity="0.3"
              />
              <path d="M465.1,173.48" transform="translate(0.16 20.87)" />
              <polygon
                points="331.17 302.83 370.87 281.7 402.75 353.9 412.62 397.75 410.58 417.15 251.66 417.24 324.96 282.5 331.17 302.83"
                fill="#060809"
                opacity="0.3"
              />
            </g>
            <g id="Mountain_4-2" data-name="Mountain 4">
              <path
                d="M485.18,394.36L344.69,197.11l-35.89-50.39L172.25,394.43a0.73,0.73,0,0,0,.64,1.07H484.58A0.73,0.73,0,0,0,485.18,394.36Z"
                transform="translate(0.16 20.87)"
                fill="#b66586"
              />
              <path
                d="M314.76,199.43c6.4-1.14,8.76,7.91,18.19,8.21,6.06,0.19,4-3.21,6.23-7.16,0.78-1.4,5.17-3.84,5.17-3.84l-35.55-49.91c0-1.27-37.68,68.35-37.68,68.35s16.76-13.81,22.41-10.95C299.94,207.36,307.44,200.73,314.76,199.43Z"
                transform="translate(0.16 20.87)"
                fill="#fff"
              />
              <polygon
                points="308.97 167.59 312.22 204.34 317.28 222.64 316.34 251.27 340.45 279.52 327.05 325.8 351.98 339.28 364.11 391.74 402.1 416.37 486.15 416.37 308.97 167.59"
                opacity="0.3"
              />
              <path d="M325.84,192.22" transform="translate(0.16 20.87)" />
            </g>
            <g id="Mountain_1" data-name="Mountain 1">
              <polygon
                points="319.63 417.48 136.46 181.84 0.16 417.49 319.63 417.48"
                fill="#b66586"
              />
              <path
                d="M144.78,222.75c7-2,15.89,8.36,23.06,7.44,4.41-.56,12.22-13,12.22-13L136.34,161l-38,65.61s15.94-11.11,23.3-8C129.41,221.87,135.73,225.33,144.78,222.75Z"
                transform="translate(0.16 20.87)"
                fill="#fff"
              />
              <polygon
                points="151.45 252.73 126.81 310.24 148.04 357.9 202.49 380.32 186.6 398.88 234.07 417.41 319.63 417.41 136.41 181.72 151.45 252.73"
                fill="#060809"
                opacity="0.31"
              />
            </g>
            <g id="Mountain_2" data-name="Mountain 2">
              <polygon
                points="451.13 408.68 304.13 247.09 228.19 163.61 8.3 408.7 451.13 408.68"
                fill="#6e517a"
              />
              <path
                d="M172.2,205s22.67,15.2,33.63,10.54c6.23-2.65,12.37-5.73,19.3-8.44,4.49-1.75,13.94,4.41,18.75,4.39s14.09-6.22,17.68-9.06c3.77-3,20-.76,19-1.88L228,142.75C227.36,143.39,172.2,205,172.2,205Z"
                transform="translate(0.16 20.87)"
                fill="#fff"
              />
              <polygon
                points="451.1 408.69 228.17 163.63 224.93 219.83 250.17 257.64 234.01 312.98 245.96 347.08 224.44 387.58 309.27 408.65 451.1 408.69"
                fill="#060809"
                opacity="0.3"
              />
            </g>
            <g id="Mountain_2-2" data-name="Mountain 2">
              <polygon
                points="197.2 408.94 121.66 318.3 82.63 271.47 0.16 372.17 0.16 408.95 197.2 408.94"
                fill="#6e517a"
              />
              <polygon
                points="197.19 408.95 82.62 271.48 80.95 303.01 93.93 324.21 85.62 355.26 91.76 374.39 80.7 397.1 124.3 408.92 197.19 408.95"
                fill="#060809"
                opacity="0.3"
              />
            </g>
            <g id="Mountain_3" data-name="Mountain 3">
              <polygon
                points="503.64 408.7 393.87 276.08 389.2 277.64 380.86 289.83 364.18 278.44 351.27 285.81 340.56 277.64 324.96 278.22 219.13 408.7 503.64 408.7"
                fill="#6e517a"
              />
              <path
                d="M351.89,265.12c3.75-1.55,10.47-6.55,14.36-5.8,4.29,0.83,8.61,9.09,12.85,10.08,5,1.18,15.7-13.11,15.7-13.11l-33.9-40.6-37.14,42.94s11-1.1,14.06.26C341.93,260.75,348.23,266.63,351.89,265.12Z"
                transform="translate(0.16 20.87)"
                fill="#fff"
              />
              <path
                d="M360.9,215.7l1.46,44.2,12.28,14.5-13.47,29.11,24.09,24.92-3.87,39.95,37.11,19.34h84.93S360.9,215,360.9,215.7Z"
                transform="translate(0.16 20.87)"
                fill="#060809"
                opacity="0.3"
              />
            </g>
            <g id="Mountain_5" data-name="Mountain 5">
              <polygon
                points="595.44 409.41 513.93 259.34 463.59 229.1 419.7 278.54 308.98 409.36 595.44 409.41"
                fill="#6e517a"
              />
              <path
                d="M466.06,261.7c6.89,0.28,18.59-11.68,25.2-15,5.74-2.91,23.31-7,22.51-8.19l-50.33-30.34L426.21,250s9.5-2.07,14.48-1.48C448.16,249.42,459,261.41,466.06,261.7Z"
                transform="translate(0.16 20.87)"
                fill="#fff"
              />
              <polygon
                points="463.59 229.05 477.79 256.9 493.33 282.75 473.49 330.26 518.04 375.15 527.22 409.41 595.44 409.44 513.94 259.34 463.59 229.05"
                fill="#060809"
                opacity="0.3"
              />
            </g>
            <circle
              cx="69.12"
              cy="41.54"
              r="25.76"
              transform="translate(-7.11 88.25) rotate(-49.69)"
              fill="#fbc73a"
            />
            <path
              id="Cloud_2"
              data-name="Cloud 2"
              d="M134.95,60.76A11.58,11.58,0,0,1,123.4,72.31H110.08l-0.39.41a11.62,11.62,0,0,1-16.87-.41H84.27a11.55,11.55,0,0,1-1.3-23A9.34,9.34,0,0,1,98.7,44.77a8.31,8.31,0,0,1,.58.64A15.19,15.19,0,0,1,114,33.92h0.28A15.19,15.19,0,0,1,129.4,49.06v0.28q0,0.76-.07,1.51A11.56,11.56,0,0,1,134.95,60.76Z"
              transform="translate(0.16 20.87)"
              fill="#fff"
            />
            <g id="Cloud_4" data-name="Cloud 4">
              <rect
                x="378.16"
                y="56.56"
                width="65.14"
                height="27.3"
                rx="13.65"
                ry="13.65"
                fill="#fff"
              />
              <circle cx="398.69" cy="57.63" r="12.04" fill="#fff" />
              <ellipse cx="419.6" cy="57.19" rx="15.8" ry="13.01" fill="#fff" />
            </g>
            <g id="Cloud_1" data-name="Cloud 1">
              <rect
                x="48.73"
                y="149.3"
                width="65.14"
                height="27.3"
                rx="13.65"
                ry="13.65"
                fill="#fff"
              />
              <ellipse cx="63.77" cy={161} rx="16.89" ry="14.94" fill="#fff" />
              <ellipse
                cx="90.16"
                cy="149.92"
                rx="18.14"
                ry="14.94"
                fill="#fff"
              />
            </g>
            <g id="Cloud_5" data-name="Cloud 5">
              <rect
                x="519.3"
                y="166.59"
                width="65.57"
                height="28.56"
                rx="14.28"
                ry="14.28"
                fill="#fff"
              />
              <circle cx="539.06" cy="170.86" r="10.66" fill="#fff" />
              <ellipse
                cx="557.88"
                cy="176.29"
                rx="18.83"
                ry="16.08"
                fill="#fff"
              />
            </g>
            <g id="Cloud_3" data-name="Cloud 3">
              <rect
                x="277.53"
                y="103.89"
                width="53.6"
                height="23.35"
                rx="11.67"
                ry="11.67"
                fill="#fff"
              />
              <ellipse cx="297.28" cy="104.87" rx="12.3" ry="9.2" fill="#fff" />
              <ellipse
                cx="317.77"
                cy="115.72"
                rx="15.39"
                ry="13.15"
                fill="#fff"
              />
            </g>
            <g id="balloon">
              <path
                d="M515.8,57.8h0Z"
                transform="translate(0.16 20.87)"
                fill="#2a7e7e"
              />
              <path
                d="M513.76,57.18s-9.85,16.57-13,23.45c-0.15.33-.29,0.64-0.4,0.92l0,0.11H484.68l0,0h0c-2.54-6.11-13.42-24.42-13.42-24.42s-5.19-7.42-4.79-13.32c0-13.67,11.63-24.75,26-24.8h0.76l1.18,0.06c0.64,0,1.27.11,1.89,0.2,12.6,1.76,22.27,12.07,22.27,24.53C518.94,49.76,513.76,57.18,513.76,57.18Z"
                transform="translate(0.16 20.87)"
                fill="#72c4be"
              />
              <path
                d="M508.61,57.18s-7.44,16.57-9.82,23.45c-0.13.37-.25,0.71-0.34,1H486.63c-0.1-.31-0.21-0.65-0.34-1-2.38-6.87-9.82-23.45-9.82-23.45s-3.92-7.42-3.62-13.32c0-13.33,8.36-24.2,18.85-24.77l0.52,0h0.58c0.39,0,.78,0,1.17.06,10.21,0.94,18.26,11.65,18.26,24.73C512.53,49.76,508.61,57.18,508.61,57.18Z"
                transform="translate(0.16 20.87)"
                fill="#fff"
              />
              <path
                d="M499.76,57.37S496.42,74,495.34,80.94c-0.05.37-5.56,0.37-5.62,0-1.07-6.91-4.42-23.57-4.42-23.57A63.81,63.81,0,0,1,483.68,44c0-13,3.56-23.74,8.1-24.83a2.32,2.32,0,0,1,.38-0.07l0.13,0h0.54l0.22,0c4.66,0.75,8.35,11.6,8.35,24.88A63.81,63.81,0,0,1,499.76,57.37Z"
                transform="translate(0.16 20.87)"
                fill="#72c4be"
              />
              <path
                d="M500.32,81.65l0,0.09v0a1.5,1.5,0,0,1-.17.26h0c-1,1.19-4,1.47-7.11,1.51h-0.78c-2.79,0-5.53-.14-6.87-1.11a2.17,2.17,0,0,1-.55-0.55l-0.07-.13,0-.05h0a1.68,1.68,0,0,1,0-.51c0-.16,0-0.28,0-0.28h15.55A0.64,0.64,0,0,1,500.32,81.65Z"
                transform="translate(0.16 20.87)"
                fill="#72c4be"
              />
              <path
                d="M489.09,84.77h0V83.52h0a3.36,3.36,0,0,1,1.28.27A1.49,1.49,0,0,1,489.09,84.77Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <circle cx="490.4" cy="103.53" r="0.35" fill="#fbc73a" />
              <path
                d="M491.15,90a3.43,3.43,0,0,1-1.85.5h0A1,1,0,0,1,491.15,90Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M492.56,87.28a0.67,0.67,0,0,1,0-.15C492.55,87,492.57,87.09,492.56,87.28Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M491.29,90.47h-2A1,1,0,0,1,491.29,90.47Z"
                transform="translate(0.16 20.87)"
                fill="#f4992b"
              />
              <g id="Eye">
                <circle cx="490.4" cy="103.53" r="0.35" fill="#010101" />
                <circle cx="490.49" cy="103.46" r="0.1" fill="#fff" />
              </g>
              <polygon
                points="489.25 105.64 489.25 105.64 489.25 105.64 489.25 105.64"
                fill="#f59f28"
              />
              <path
                d="M491.57,84.32a5.84,5.84,0,0,1-.14-1.65,2.58,2.58,0,0,0-.8-1.66,2.54,2.54,0,0,0-3.1,0,2.57,2.57,0,0,0-.79,1.66,5.87,5.87,0,0,1-.14,1.65c-0.38.93-2,2.77-1.67,3.72a1.22,1.22,0,0,0,.68-0.76c0-.19,0-0.26,0-0.15a0.63,0.63,0,0,1,0,.15A3.44,3.44,0,0,0,487,90a1,1,0,0,1,1.87.5h0.37a1,1,0,0,1,1.87-.5,3.43,3.43,0,0,0,1.41-2.69,0.67,0.67,0,0,1,0-.15c0-.11,0,0,0,0.15a1.22,1.22,0,0,0,.68.76C493.55,87.09,492,85.26,491.57,84.32Zm-4-1.66a0.35,0.35,0,1,1,.35.35A0.35,0.35,0,0,1,487.59,82.66Zm1.5,2.11h0a1.49,1.49,0,0,1-1.28-1,3.36,3.36,0,0,1,1.28-.27h0a3.36,3.36,0,0,1,1.28.27A1.49,1.49,0,0,1,489.09,84.77ZM490.24,83a0.35,0.35,0,1,1,.35-0.35A0.35,0.35,0,0,1,490.24,83Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M485.63,87.13a0.63,0.63,0,0,1,0,.15C485.61,87.09,485.63,87,485.63,87.13Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <circle cx="488.1" cy="103.53" r="0.35" fill="#fbc73a" />
              <path
                d="M488.91,90.47h0A3.43,3.43,0,0,1,487,90,1,1,0,0,1,488.91,90.47Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M489.09,84.77h0a1.49,1.49,0,0,1-1.28-1,3.36,3.36,0,0,1,1.28-.27h0v1.25Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M488.91,90.47h-2A1,1,0,0,1,488.91,90.47Z"
                transform="translate(0.16 20.87)"
                fill="#f4992b"
              />
              <g id="Eye-2" data-name="Eye">
                <circle cx="488.09" cy="103.53" r="0.35" fill="#010101" />
                <circle cx="488.18" cy="103.44" r="0.1" fill="#fff" />
              </g>
              <path
                d="M490.37,83.79a1.49,1.49,0,0,1-1.28,1h0a1.49,1.49,0,0,1-1.28-1A3.22,3.22,0,0,1,490.37,83.79Z"
                transform="translate(0.16 20.87)"
                fill="#f4992b"
              />
              <polygon
                points="489.25 105.64 489.25 105.64 489.25 105.64 489.25 105.64 489.25 105.64 489.25 105.64"
                fill="#f59f28"
              />
              <path
                d="M485.81,87a0.67,0.67,0,0,1,0-.15C485.8,86.7,485.82,86.77,485.81,87Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M491.57,84.32a5.84,5.84,0,0,1-.14-1.65,2.58,2.58,0,0,0-.8-1.66,2.39,2.39,0,0,0-1.55-.53h0v4.29h0v5.69h2.2a1,1,0,0,0-.14-0.5,3.43,3.43,0,0,0,1.41-2.69,0.67,0.67,0,0,1,0-.15c0-.11,0,0,0,0.15a1.22,1.22,0,0,0,.68.76C493.54,87.09,492,85.26,491.57,84.32ZM490.24,83a0.35,0.35,0,1,1,.35-0.35A0.35,0.35,0,0,1,490.24,83Z"
                transform="translate(0.16 20.87)"
                opacity="0.15"
              />
              <polygon
                points="499.99 108.39 497.14 119.44 487.97 119.44 485.29 108.39 499.99 108.39"
                fill="#72c4be"
              />
              <path
                d="M492.6,19h0Z"
                transform="translate(0.16 20.87)"
                fill="#2a7e7e"
              />
              <path
                d="M494.28,19.07c-0.51,0-1-.05-1.55-0.06H493C493.41,19,493.85,19,494.28,19.07Z"
                transform="translate(0.16 20.87)"
                fill="#2a7e7e"
              />
              <rect
                x="492.31"
                y="104.4"
                width="0.9"
                height="4.64"
                fill="#72c4be"
              />
              <rect
                x="498.86"
                y="81.69"
                width="0.9"
                height="6.29"
                transform="translate(20.1 -57.72) rotate(9.18)"
                fill="#72c4be"
              />
              <rect
                x="485.28"
                y="81.3"
                width="0.9"
                height="6.59"
                transform="translate(-6.95 119.45) rotate(-11.51)"
                fill="#72c4be"
              />
              <g opacity="0.5">
                <path
                  d="M516.91,60.42h0Z"
                  transform="translate(0.16 20.87)"
                  fill="#2a7e7e"
                />
                <path
                  d="M492.38,19h0Z"
                  transform="translate(0.16 20.87)"
                  fill="#2a7e7e"
                />
                <path
                  d="M492.41,19h0Z"
                  transform="translate(0.16 20.87)"
                  fill="#2a7e7e"
                />
                <path
                  d="M513.76,57.17s-9.84,16.58-13,23.45c-0.15.33-.29,0.64-0.4,0.92a0.31,0.31,0,0,0,0,.1h-7.84V19h0.73c0.4,0,.79,0,1.18.06,0.64,0,1.27.11,1.89,0.2,12.6,1.76,22.27,12.07,22.27,24.53C518.95,49.75,513.76,57.17,513.76,57.17Z"
                  transform="translate(0.16 20.87)"
                  fill="#2a7e7e"
                />
                <path
                  d="M492.33,19a0,0,0,0,0,0,0h0Z"
                  transform="translate(0.16 20.87)"
                  fill="#2a7e7e"
                />
                <path
                  d="M492.38,19h0Z"
                  transform="translate(0.16 20.87)"
                  fill="#2a7e7e"
                />
                <path
                  d="M508.62,57.17s-7.45,16.58-9.82,23.45c0,0.1-.07.19-0.1,0.28q-0.13.39-.24,0.75h-6V19h0.36a10.56,10.56,0,0,1,1.13.06c10.22,0.94,18.26,11.65,18.26,24.73C512.54,49.75,508.62,57.17,508.62,57.17Z"
                  transform="translate(0.16 20.87)"
                  fill="#2a7e7e"
                />
                <polygon
                  points="499.99 108.37 497.14 119.43 492.64 119.43 492.64 108.35 499.99 108.37"
                  fill="#2a7e7e"
                />
                <path
                  d="M492.41,19h0Z"
                  transform="translate(0.16 20.87)"
                  fill="#2a7e7e"
                />
                <path
                  d="M499.77,57.37S496.43,74,495.35,80.9v0c0,0.19-1.46.29-2.87,0.29V19h0.33s0,0,0,0l0.21,0c4.66,0.75,8.36,11.59,8.36,24.88A64.27,64.27,0,0,1,499.77,57.37Z"
                  transform="translate(0.16 20.87)"
                  fill="#2a7e7e"
                />
                <path
                  d="M500.32,81.64h0a0.3,0.3,0,0,1,0,.08v0a0.08,0.08,0,0,0,0,0,1.71,1.71,0,0,1-.15.22,1.6,1.6,0,0,1-.38.35,2.38,2.38,0,0,1-.52.31,7.24,7.24,0,0,1-1.83.53,29,29,0,0,1-4.38.32h-0.52V80.9h7.8A0.64,0.64,0,0,1,500.32,81.64Z"
                  transform="translate(0.16 20.87)"
                  fill="#2a7e7e"
                />
                <path
                  d="M492.71,19h0Z"
                  transform="translate(0.16 20.87)"
                  fill="#2a7e7e"
                />
                <path
                  d="M494.29,19.06c-0.51,0-1-.05-1.55-0.06H493C493.41,19,493.85,19,494.29,19.06Z"
                  transform="translate(0.16 20.87)"
                  fill="#2a7e7e"
                />
                <rect
                  x="492.64"
                  y="104.39"
                  width="0.57"
                  height="4.64"
                  fill="#2a7e7e"
                />
                <rect
                  x="496.16"
                  y="84.37"
                  width="6.29"
                  height="0.9"
                  transform="matrix(0.16, -0.99, 0.99, 0.16, 336.07, 585.07)"
                  fill="#2a7e7e"
                />
              </g>
              <path
                d="M491.3,15.64h0Z"
                transform="translate(0.16 20.87)"
                fill="#2a7e7e"
              />
              <path
                d="M491.41,15.63h0Z"
                transform="translate(0.16 20.87)"
                fill="#2a7e7e"
              />
              <rect
                x="491.63"
                y="36.45"
                width="0.01"
                height="0.01"
                fill="#2a7e7e"
              />
            </g>
            <ellipse
              cx="451.35"
              cy="295.56"
              rx="1.28"
              ry="0.23"
              opacity="0.15"
            />
            <g id="Hill_1" data-name="Hill 1">
              <path
                d="M249.73,332.75H22.17c55-12.46,58-45.21,113.78-44.15C191.69,287.54,194.78,320.29,249.73,332.75Z"
                transform="translate(0.16 20.87)"
                fill="#72c4be"
              />
              <g opacity="0.5">
                <path
                  d="M249.73,332.66H136V288.51C191.69,287.46,194.78,320.21,249.73,332.66Z"
                  transform="translate(0.16 20.87)"
                  fill="#2a7e7e"
                />
              </g>
            </g>
            <g id="Hill_1-2" data-name="Hill 1">
              <path
                d="M565,332.75H300.78c63.8-14.44,67.38-52.42,132.11-51.19C497.6,280.33,501.18,318.3,565,332.75Z"
                transform="translate(0.16 20.87)"
                fill="#72c4be"
              />
              <g opacity="0.5">
                <path
                  d="M565,332.65H432.89V281.46C497.6,280.23,501.18,318.21,565,332.65Z"
                  transform="translate(0.16 20.87)"
                  fill="#2a7e7e"
                />
              </g>
            </g>
            <g id="Hill_2" data-name="Hill 2">
              <path
                d="M378.48,332.71H188.09c46-9.78,48.55-35.49,95.2-34.66C329.92,297.22,332.5,322.93,378.48,332.71Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M378.38,332.71H283.19V298.05C329.82,297.22,332.4,322.93,378.38,332.71Z"
                transform="translate(0.16 20.87)"
                fill="#f4992b"
              />
            </g>
            <g id="House">
              <polygon
                points="385.94 340.37 373.75 330.28 362.31 340.35 362.31 353.54 385.94 353.54 385.94 340.37"
                fill="#603f16"
              />
              <polygon
                points="385.98 339.97 373.66 328.52 362.31 340.14 362.31 343.77 373.69 332.68 385.94 343.85 385.98 339.97"
                opacity="0.2"
              />
              <polygon
                points="387.3 338.44 373.66 326.34 360.95 338.42 360.95 342.92 373.69 330.33 387.3 342.91 387.3 338.44"
                fill="#342312"
              />
              <rect
                x="369.3"
                y="326.13"
                width="8.45"
                height="4.63"
                transform="translate(45.25 722.84) rotate(-90)"
                fill="#342312"
              />
              <rect
                x="378.09"
                y={327}
                width="3.01"
                height="7.12"
                fill="#342312"
              />
              <g opacity="0.3">
                <polygon
                  points="385.97 341.62 385.94 343.8 385.94 341.59 385.97 341.62"
                  opacity="0.2"
                />
                <polygon points="387.3 338.39 387.3 342.85 385.97 341.62 385.94 341.59 385.94 353.49 373.65 353.54 373.65 326.31 378.09 330.21 378.09 326.95 381.09 326.95 381.09 332.88 387.3 338.39" />
              </g>
            </g>
            <g id="Bubbles">
              <g opacity="0.62">
                <ellipse
                  cx="391.42"
                  cy="322.56"
                  rx="8.97"
                  ry="9.28"
                  fill="#9d9d9c"
                />
                <ellipse
                  cx="400.69"
                  cy="323.35"
                  rx="8.97"
                  ry="9.28"
                  fill="#9d9d9c"
                />
                <ellipse
                  cx="406.62"
                  cy={318}
                  rx="8.97"
                  ry="9.28"
                  fill="#9d9d9c"
                />
              </g>
              <ellipse cx="382.89" cy="320.15" rx="8.3" ry="8.58" fill="#fff" />
              <ellipse cx="387.04" cy="325.7" rx="4.15" ry="4.29" fill="#fff" />
              <ellipse
                cx="384.12"
                cy="312.04"
                rx="4.15"
                ry="4.29"
                fill="#fff"
              />
              <ellipse
                cx="393.11"
                cy="315.33"
                rx="10.22"
                ry="10.57"
                fill="#fff"
              />
              <ellipse
                cx="399.09"
                cy="316.96"
                rx="9.37"
                ry="9.69"
                fill="#fff"
              />
              <ellipse
                cx="403.14"
                cy="312.81"
                rx="8.24"
                ry="8.53"
                fill="#fff"
              />
            </g>
            <g id="Trees">
              <path
                d="M109.22,322.66c-1.9,1-3.95,1.2-7.66.06-0.17-.05-0.28-7.32-0.35-16-0.26,8.72-.52,16-0.69,16.09-3.74,1.06-5.78.86-7.66-.23-12.25-7.11,3.74-36.33,7.82-43.19l0.46-.77,0.38,0.67C105.46,286.25,121.63,315.83,109.22,322.66Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M100.09,332.64h1.77l-0.72-24.42a0.07,0.07,0,1,0,0,0l-1.06,24.43h0Z"
                transform="translate(0.16 20.87)"
                fill="#8a5919"
              />
              <path
                d="M109.23,322.67c-1.9,1-3.95,1.2-7.66.06-0.17-.05-0.34-7.27-0.42-15.95,0,0.76,0,1.47,0,2.21V278.63l0.38,0.67C105.46,286.26,121.63,315.84,109.23,322.67Z"
                transform="translate(0.16 20.87)"
                fill="#f4992b"
              />
              <path
                d="M158.91,286.41c-0.85.47-1.76,0.53-3.41,0-0.07,0-.12-3.26-0.16-7.12-0.12,3.88-.23,7.14-0.31,7.17-1.66.47-2.58,0.38-3.41-.1-5.46-3.16,1.66-16.18,3.48-19.24l0.21-.34,0.17,0.3C157.24,270.2,164.44,283.37,158.91,286.41Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M154.84,290.85h0.79L155.31,280a0,0,0,1,0,0,0l-0.47,10.88h0Z"
                transform="translate(0.16 20.87)"
                fill="#8a5919"
              />
              <path
                d="M158.91,286.41c-0.85.47-1.76,0.53-3.41,0-0.07,0-.15-3.24-0.19-7.1,0,0.34,0,.66,0,1V266.8l0.17,0.3C157.24,270.2,164.44,283.37,158.91,286.41Z"
                transform="translate(0.16 20.87)"
                fill="#f4992b"
              />
              <path
                d="M449.94,278c-0.88.48-1.82,0.55-3.53,0-0.08,0-.13-3.37-0.16-7.37-0.12,4-.24,7.4-0.32,7.42-1.72.49-2.67,0.4-3.53-.11-5.65-3.28,1.72-16.75,3.61-19.92l0.21-.36,0.18,0.31C448.2,261.19,455.65,274.83,449.94,278Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M445.72,282.57h0.82l-0.33-11.26a0,0,0,1,0,0,0l-0.49,11.27h0Z"
                transform="translate(0.16 20.87)"
                fill="#8a5919"
              />
              <path
                d="M449.94,278c-0.88.48-1.82,0.55-3.53,0-0.08,0-.16-3.35-0.19-7.35,0,0.35,0,.68,0,1v-14l0.18,0.31C448.2,261.19,455.65,274.83,449.94,278Z"
                transform="translate(0.16 20.87)"
                fill="#f4992b"
              />
              <path
                d="M173.66,321c-0.82.45-1.71,0.52-3.32,0-0.07,0-.12-3.17-0.15-6.93-0.11,3.78-.23,7-0.3,7-1.62.46-2.51,0.37-3.32-.1-5.31-3.08,1.62-15.74,3.39-18.72l0.2-.33,0.17,0.29C172,305.22,179,318,173.66,321Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M169.7,325.32h0.77l-0.31-10.58a0,0,0,1,0,0,0l-0.46,10.59h0Z"
                transform="translate(0.16 20.87)"
                fill="#8a5919"
              />
              <path
                d="M173.66,321c-0.82.45-1.71,0.52-3.32,0-0.07,0-.15-3.15-0.18-6.91,0,0.33,0,.64,0,1V301.91l0.17,0.29C172,305.22,179,318,173.66,321Z"
                transform="translate(0.16 20.87)"
                fill="#f4992b"
              />
              <polygon
                points="144.91 307.53 133.35 307.53 139.13 297.17 144.91 307.53"
                fill="#1b7891"
              />
              <polygon
                points="144.32 304.88 133.95 304.88 139.13 295.59 144.32 304.88"
                fill="#258ca5"
              />
              <polygon
                points="143.32 301.96 134.95 301.96 139.13 295.27 143.32 301.96"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="139.14 295.27 139.14 307.54 133.35 307.54 134.84 304.88 133.95 304.88 135.58 301.97 134.95 301.97 139.14 295.27" />
              </g>
              <rect
                x="138.22"
                y="286.67"
                width="1.52"
                height="3.07"
                transform="translate(278.11 597.27) rotate(180)"
                fill="#603f16"
              />
              <polygon
                points="474.98 345.36 499.56 345.36 487.27 317.8 474.98 345.36"
                fill="#1b7891"
              />
              <polygon
                points="476.25 338.3 498.29 338.3 487.27 313.59 476.25 338.3"
                fill="#258ca5"
              />
              <polygon
                points="478.37 330.53 496.17 330.53 487.27 312.74 478.37 330.53"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="487.26 312.74 487.26 345.36 499.56 345.36 496.4 338.31 498.29 338.31 494.82 330.55 496.16 330.55 487.26 312.74" />
              </g>
              <rect
                x="485.65"
                y="345.35"
                width="3.23"
                height="8.16"
                fill="#603f16"
              />
              <polygon
                points="533.99 343.2 565.23 343.2 549.61 308.18 533.99 343.2"
                fill="#1b7891"
              />
              <polygon
                points="535.61 334.23 563.62 334.23 549.61 302.83 535.61 334.23"
                fill="#258ca5"
              />
              <polygon
                points="538.3 324.36 560.92 324.36 549.61 301.75 538.3 324.36"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="549.6 301.75 549.6 343.2 565.23 343.2 561.22 334.24 563.61 334.24 559.21 324.38 560.9 324.38 549.6 301.75" />
              </g>
              <rect
                x="547.45"
                y="343.19"
                width="4.1"
                height="10.37"
                fill="#603f16"
              />
              <path
                d="M149.69,289.84c-0.82.45-1.71,0.52-3.32,0-0.07,0-.12-3.17-0.15-6.93-0.11,3.78-.23,7-0.3,7-1.62.46-2.51,0.37-3.32-.1-5.31-3.08,1.62-15.74,3.39-18.72l0.2-.33,0.17,0.29C148.06,274.06,155.06,286.88,149.69,289.84Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M145.73,294.16h0.77l-0.31-10.58a0,0,0,1,0,0,0l-0.46,10.59h0Z"
                transform="translate(0.16 20.87)"
                fill="#8a5919"
              />
              <path
                d="M149.69,289.84c-0.82.45-1.71,0.52-3.32,0-0.07,0-.15-3.15-0.18-6.91,0,0.33,0,.64,0,1V270.76l0.17,0.29C148.06,274.06,155.06,286.88,149.69,289.84Z"
                transform="translate(0.16 20.87)"
                fill="#f4992b"
              />
              <path
                d="M526,321c-2.21,1.22-4.59,1.39-8.91.06-0.19-.06-0.32-8.51-0.41-18.6-0.3,10.14-.61,18.66-0.8,18.71-4.35,1.23-6.73,1-8.91-.27-14.25-8.26,4.35-42.25,9.1-50.24l0.54-.9,0.45,0.78C521.58,278.7,540.38,313.1,526,321Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M515.33,332.64h2.06l-0.84-28.4a0.08,0.08,0,1,0,0,0l-1.23,28.42h0Z"
                transform="translate(0.16 20.87)"
                fill="#603f16"
              />
              <path
                d="M526,321c-2.21,1.22-4.59,1.39-8.91.06-0.19-.06-0.4-8.46-0.49-18.55,0,0.89,0,1.71,0,2.57V269.83l0.45,0.78C521.59,278.7,540.38,313.11,526,321Z"
                transform="translate(0.16 20.87)"
                fill="#f4992b"
              />
              <polygon
                points="314.94 349.38 327.55 349.38 321.24 335.25 314.94 349.38"
                fill="#1b7891"
              />
              <polygon
                points="315.59 345.76 326.89 345.76 321.24 333.1 315.59 345.76"
                fill="#258ca5"
              />
              <polygon
                points="316.68 341.78 325.81 341.78 321.24 332.66 316.68 341.78"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="321.24 332.66 321.24 349.38 327.54 349.38 325.93 345.77 326.89 345.77 325.11 341.79 325.8 341.79 321.24 332.66" />
              </g>
              <rect
                x="320.41"
                y="349.38"
                width="1.65"
                height="4.18"
                fill="#603f16"
              />
              <polygon
                points="53.49 342.04 88.21 342.04 70.85 303.12 53.49 342.04"
                fill="#1b7891"
              />
              <polygon
                points="55.28 332.07 86.41 332.07 70.85 297.18 55.28 332.07"
                fill="#258ca5"
              />
              <polygon
                points="58.28 321.1 83.42 321.1 70.85 295.98 58.28 321.1"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="70.84 295.98 70.84 342.04 88.2 342.04 83.75 332.08 86.41 332.08 81.51 321.12 83.4 321.12 70.84 295.98" />
              </g>
              <rect
                x="68.56"
                y="342.03"
                width="4.56"
                height="11.52"
                fill="#603f16"
              />
              <polygon
                points="29.65 344.54 56.85 344.54 43.25 314.06 29.65 344.54"
                fill="#1b7891"
              />
              <polygon
                points="31.06 336.73 55.44 336.73 43.25 309.4 31.06 336.73"
                fill="#258ca5"
              />
              <polygon
                points="33.4 328.14 53.09 328.14 43.25 308.46 33.4 328.14"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="43.24 308.46 43.24 344.54 56.84 344.54 53.35 336.74 55.43 336.74 51.6 328.16 53.08 328.16 43.24 308.46" />
              </g>
              <rect
                x="41.46"
                y="344.53"
                width="3.57"
                height="9.02"
                fill="#603f16"
              />
              <polygon
                points="406.97 347.6 424.79 347.6 415.88 327.63 406.97 347.6"
                fill="#1b7891"
              />
              <polygon
                points="407.89 342.49 423.87 342.49 415.88 324.59 407.89 342.49"
                fill="#258ca5"
              />
              <polygon
                points="409.43 336.86 422.33 336.86 415.88 323.97 409.43 336.86"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="415.87 323.97 415.87 347.6 424.78 347.6 422.5 342.5 423.86 342.5 421.35 336.87 422.32 336.87 415.87 323.97" />
              </g>
              <rect
                x="414.71"
                y="347.6"
                width="2.34"
                height="5.91"
                fill="#603f16"
              />
              <polygon
                points="422.11 303.65 430.75 303.65 426.43 293.95 422.11 303.65"
                fill="#1b7891"
              />
              <polygon
                points="422.55 301.17 430.31 301.17 426.43 292.48 422.55 301.17"
                fill="#258ca5"
              />
              <polygon
                points="423.3 298.43 429.56 298.43 426.43 292.18 423.3 298.43"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="426.43 292.18 426.43 303.65 430.75 303.65 429.64 301.17 430.31 301.17 429.09 298.44 429.56 298.44 426.43 292.18" />
              </g>
              <rect
                x="425.86"
                y="303.65"
                width="1.13"
                height="2.87"
                fill="#603f16"
              />
              <polygon
                points="290.2 318.3 301.63 318.3 295.92 305.49 290.2 318.3"
                fill="#1b7891"
              />
              <polygon
                points="290.79 315.02 301.04 315.02 295.92 303.54 290.79 315.02"
                fill="#258ca5"
              />
              <polygon
                points="291.78 311.41 300.06 311.41 295.92 303.14 291.78 311.41"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="295.91 303.14 295.91 318.3 301.63 318.3 300.16 315.03 301.04 315.03 299.43 311.42 300.05 311.42 295.91 303.14" />
              </g>
              <rect
                x="295.16"
                y="318.3"
                width="1.5"
                height="3.79"
                fill="#603f16"
              />
              <polygon
                points="185.02 315.51 171.12 315.51 178.07 303.06 185.02 315.51"
                fill="#1b7891"
              />
              <polygon
                points="184.3 312.32 171.84 312.32 178.07 301.16 184.3 312.32"
                fill="#258ca5"
              />
              <polygon
                points="183.1 308.81 173.04 308.81 178.07 300.77 183.1 308.81"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="178.07 300.77 178.07 315.51 171.13 315.51 172.91 312.33 171.84 312.33 173.8 308.82 173.05 308.82 178.07 300.77" />
              </g>
              <rect
                x={177}
                y="294.64"
                width="1.82"
                height="3.69"
                transform="translate(355.99 613.84) rotate(180)"
                fill="#603f16"
              />
              <polygon
                points="162.31 310.39 173.74 310.39 168.03 297.58 162.31 310.39"
                fill="#1b7891"
              />
              <polygon
                points="162.9 307.11 173.15 307.11 168.03 295.62 162.9 307.11"
                fill="#258ca5"
              />
              <polygon
                points="163.89 303.5 172.16 303.5 168.03 295.23 163.89 303.5"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="168.02 295.23 168.02 310.39 173.74 310.39 172.27 307.11 173.15 307.11 171.54 303.5 172.16 303.5 168.02 295.23" />
              </g>
              <rect
                x="167.27"
                y="310.39"
                width="1.5"
                height="3.79"
                fill="#603f16"
              />
              <polygon
                points="429.69 300.41 441.12 300.41 435.41 287.6 429.69 300.41"
                fill="#1b7891"
              />
              <polygon
                points="430.28 297.13 440.53 297.13 435.41 285.65 430.28 297.13"
                fill="#258ca5"
              />
              <polygon
                points="431.27 293.52 439.54 293.52 435.41 285.25 431.27 293.52"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="435.4 285.25 435.4 300.41 441.12 300.41 439.65 297.14 440.53 297.14 438.92 293.53 439.54 293.53 435.4 285.25" />
              </g>
              <rect
                x="434.65"
                y="300.41"
                width="1.5"
                height="3.79"
                fill="#603f16"
              />
              <polygon
                points="277.61 318.29 268.67 318.29 273.14 310.27 277.61 318.29"
                fill="#1b7891"
              />
              <polygon
                points="277.14 316.23 269.13 316.23 273.14 309.05 277.14 316.23"
                fill="#258ca5"
              />
              <polygon
                points="276.37 313.98 269.9 313.98 273.14 308.8 276.37 313.98"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="273.14 308.8 273.14 318.29 268.67 318.29 269.81 316.24 269.13 316.24 270.39 313.98 269.91 313.98 273.14 308.8" />
              </g>
              <rect
                x="272.39"
                y="297.42"
                width="1.17"
                height="2.37"
                transform="translate(546.12 618.08) rotate(180)"
                fill="#603f16"
              />
              <polygon
                points="223.42 342.09 210.87 342.09 217.15 330.84 223.42 342.09"
                fill="#1b7891"
              />
              <polygon
                points="222.77 339.21 211.52 339.21 217.15 329.12 222.77 339.21"
                fill="#258ca5"
              />
              <polygon
                points="221.69 336.04 212.6 336.04 217.15 328.77 221.69 336.04"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="217.15 328.77 217.15 342.09 210.87 342.09 212.48 339.21 211.52 339.21 213.29 336.04 212.61 336.04 217.15 328.77" />
              </g>
              <rect
                x="216.16"
                y="321.22"
                width="1.65"
                height="3.33"
                transform="translate(434.14 666.64) rotate(180)"
                fill="#603f16"
              />
              <polygon
                points="332.65 330.48 322.19 330.48 327.42 321.11 332.65 330.48"
                fill="#1b7891"
              />
              <polygon
                points="332.11 328.08 322.73 328.08 327.42 319.68 332.11 328.08"
                fill="#258ca5"
              />
              <polygon
                points="331.21 325.44 323.63 325.44 327.42 319.39 331.21 325.44"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="327.43 319.39 327.43 330.48 322.19 330.48 323.54 328.09 322.74 328.09 324.21 325.44 323.64 325.44 327.43 319.39" />
              </g>
              <rect
                x="326.58"
                y="309.62"
                width="1.37"
                height="2.78"
                transform="translate(654.69 642.87) rotate(180)"
                fill="#603f16"
              />
              <polygon
                points="261.14 323.25 252.2 323.25 256.67 315.24 261.14 323.25"
                fill="#1b7891"
              />
              <polygon
                points="260.68 321.2 252.67 321.2 256.67 314.02 260.68 321.2"
                fill="#258ca5"
              />
              <polygon
                points="259.91 318.94 253.44 318.94 256.67 313.77 259.91 318.94"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="256.68 313.77 256.68 323.25 252.21 323.25 253.35 321.2 252.67 321.2 253.93 318.95 253.44 318.95 256.68 313.77" />
              </g>
              <rect
                x="255.93"
                y="302.39"
                width="1.17"
                height="2.37"
                transform="translate(513.19 628.01) rotate(180)"
                fill="#603f16"
              />
              <polygon
                points="255.9 327.94 243.15 327.94 249.52 316.51 255.9 327.94"
                fill="#1b7891"
              />
              <polygon
                points="255.24 325.02 243.81 325.02 249.52 314.77 255.24 325.02"
                fill="#258ca5"
              />
              <polygon
                points="254.14 321.8 244.91 321.8 249.52 314.42 254.14 321.8"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="249.53 314.42 249.53 327.94 243.15 327.94 244.79 325.02 243.81 325.02 245.61 321.8 244.92 321.8 249.53 314.42" />
              </g>
              <rect
                x="248.53"
                y="307.07"
                width="1.67"
                height="3.38"
                transform="translate(498.89 638.4) rotate(180)"
                fill="#603f16"
              />
              <polygon
                points="477.56 305.63 463.26 305.63 470.41 292.82 477.56 305.63"
                fill="#1b7891"
              />
              <polygon
                points="476.82 302.36 464 302.36 470.41 290.87 476.82 302.36"
                fill="#258ca5"
              />
              <polygon
                points="475.58 298.75 465.23 298.75 470.41 290.47 475.58 298.75"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="470.41 290.47 470.41 305.64 463.26 305.64 465.1 302.36 464 302.36 466.02 298.75 465.24 298.75 470.41 290.47" />
              </g>
              <rect
                x="469.31"
                y="284.77"
                width="1.88"
                height="3.79"
                transform="translate(940.67 594.19) rotate(180)"
                fill="#603f16"
              />
              <path
                d="M344.28,315.54a3.51,3.51,0,0,1-3,0c-0.06,0-.11-2.84-0.14-6.2-0.1,3.38-.2,6.22-0.27,6.24a3.51,3.51,0,0,1-3-.09c-4.75-2.76,1.45-14.09,3-16.75l0.18-.3,0.15,0.26C342.82,301.42,349.09,312.89,344.28,315.54Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M340.74,319.41h0.69l-0.28-9.47a0,0,0,1,0,0,0l-0.41,9.48h0Z"
                transform="translate(0.16 20.87)"
                fill="#8a5919"
              />
              <path
                d="M344.28,315.54a3.51,3.51,0,0,1-3,0c-0.06,0-.13-2.82-0.16-6.19,0,0.3,0,.57,0,0.86V298.46l0.15,0.26C342.82,301.42,349.09,312.89,344.28,315.54Z"
                transform="translate(0.16 20.87)"
                fill="#f4992b"
              />
              <path
                d="M481.64,291.38a3.51,3.51,0,0,1-3,0c-0.06,0-.11-2.84-0.14-6.2-0.1,3.38-.2,6.22-0.27,6.24a3.51,3.51,0,0,1-3-.09c-4.75-2.76,1.45-14.09,3-16.75l0.18-.3,0.15,0.26C480.18,277.26,486.45,288.73,481.64,291.38Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M478.09,295.25h0.69l-0.28-9.47a0,0,0,1,0,0,0l-0.41,9.48h0Z"
                transform="translate(0.16 20.87)"
                fill="#8a5919"
              />
              <path
                d="M481.64,291.38a3.51,3.51,0,0,1-3,0c-0.06,0-.13-2.82-0.16-6.19,0,0.3,0,.57,0,0.86V274.3l0.15,0.26C480.18,277.26,486.45,288.73,481.64,291.38Z"
                transform="translate(0.16 20.87)"
                fill="#f4992b"
              />
              <polygon
                points="247.81 332.97 238.87 332.97 243.34 324.96 247.81 332.97"
                fill="#1b7891"
              />
              <polygon
                points="247.34 330.92 239.33 330.92 243.34 323.74 247.34 330.92"
                fill="#258ca5"
              />
              <polygon
                points="246.57 328.66 240.1 328.66 243.34 323.49 246.57 328.66"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="243.34 323.49 243.34 332.97 238.87 332.97 240.01 330.92 239.33 330.92 240.59 328.67 240.11 328.67 243.34 323.49" />
              </g>
              <rect
                x="242.59"
                y="312.11"
                width="1.17"
                height="2.37"
                transform="translate(486.52 647.45) rotate(180)"
                fill="#603f16"
              />
              <polygon
                points="317.21 324.68 308.27 324.68 312.74 316.67 317.21 324.68"
                fill="#1b7891"
              />
              <polygon
                points="316.75 322.63 308.73 322.63 312.74 315.44 316.75 322.63"
                fill="#258ca5"
              />
              <polygon
                points="315.98 320.37 309.5 320.37 312.74 315.19 315.98 320.37"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="312.74 315.19 312.74 324.68 308.27 324.68 309.42 322.63 308.73 322.63 309.99 320.37 309.51 320.37 312.74 315.19" />
              </g>
              <rect
                x="311.99"
                y="303.81"
                width="1.17"
                height="2.37"
                transform="translate(625.32 630.86) rotate(180)"
                fill="#603f16"
              />
              <polygon
                points="201.91 345.71 213.34 345.71 207.63 332.9 201.91 345.71"
                fill="#1b7891"
              />
              <polygon
                points="202.5 342.43 212.75 342.43 207.63 330.94 202.5 342.43"
                fill="#258ca5"
              />
              <polygon
                points="203.49 338.82 211.76 338.82 207.63 330.55 203.49 338.82"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="207.62 330.55 207.62 345.71 213.34 345.71 211.87 342.44 212.75 342.44 211.14 338.83 211.76 338.83 207.62 330.55" />
              </g>
              <rect
                x="206.87"
                y="345.71"
                width="1.5"
                height="3.79"
                fill="#603f16"
              />
              <polygon
                points="193.16 319.56 181 319.56 187.08 308.66 193.16 319.56"
                fill="#1b7891"
              />
              <polygon
                points="192.53 316.77 181.63 316.77 187.08 307 192.53 316.77"
                fill="#258ca5"
              />
              <polygon
                points="191.48 313.7 182.68 313.7 187.08 306.66 191.48 313.7"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="187.09 306.66 187.09 319.56 181 319.56 182.56 316.77 181.63 316.77 183.35 313.7 182.69 313.7 187.09 306.66" />
              </g>
              <rect
                x="186.13"
                y="298.69"
                width="1.6"
                height="3.23"
                transform="translate(374.01 621.48) rotate(180)"
                fill="#603f16"
              />
              <polygon
                points="323.75 327.88 314.81 327.88 319.28 319.87 323.75 327.88"
                fill="#1b7891"
              />
              <polygon
                points="323.29 325.83 315.27 325.83 319.28 318.64 323.29 325.83"
                fill="#258ca5"
              />
              <polygon
                points="322.52 323.57 316.04 323.57 319.28 318.39 322.52 323.57"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="319.28 318.39 319.28 327.88 314.81 327.88 315.96 325.83 315.27 325.83 316.54 323.57 316.05 323.57 319.28 318.39" />
              </g>
              <rect
                x="318.54"
                y="307.01"
                width="1.17"
                height="2.37"
                transform="translate(638.41 637.26) rotate(180)"
                fill="#603f16"
              />
              <polygon
                points="310.26 319.1 303.3 319.1 306.78 312.86 310.26 319.1"
                fill="#1b7891"
              />
              <polygon
                points="309.9 317.5 303.66 317.5 306.78 311.91 309.9 317.5"
                fill="#258ca5"
              />
              <polygon
                points="309.3 315.75 304.26 315.75 306.78 311.72 309.3 315.75"
                fill="#1b7891"
              />
              <g opacity="0.18">
                <polygon points="306.79 311.72 306.79 319.1 303.3 319.1 304.2 317.51 303.66 317.51 304.64 315.75 304.27 315.75 306.79 311.72" />
              </g>
              <rect
                x="306.17"
                y="298.23"
                width="0.91"
                height="1.85"
                transform="translate(613.41 619.18) rotate(180)"
                fill="#603f16"
              />
            </g>
            <g id="Birdie">
              <path
                d="M377.18,328.85h0V328h0a2.11,2.11,0,0,1,.83.18A1,1,0,0,1,377.18,328.85Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <ellipse
                cx="378.09"
                cy="348.3"
                rx="0.23"
                ry="0.23"
                fill="#fbc73a"
              />
              <path
                d="M378.51,332.33a2.17,2.17,0,0,1-1.2.34h0A0.66,0.66,0,0,1,378,332,0.65,0.65,0,0,1,378.51,332.33Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M379.43,330.53a0.46,0.46,0,0,1,0-.1C379.42,330.35,379.43,330.4,379.43,330.53Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M378.6,332.67H377.3A0.66,0.66,0,0,1,378,332a0.65,0.65,0,0,1,.56.33A0.69,0.69,0,0,1,378.6,332.67Z"
                transform="translate(0.16 20.87)"
                fill="#f4992b"
              />
              <g id="Eye-3" data-name="Eye">
                <ellipse
                  cx="378.09"
                  cy="348.3"
                  rx="0.23"
                  ry="0.23"
                  fill="#010101"
                />
                <circle cx="378.15" cy="348.25" r="0.06" fill="#fff" />
              </g>
              <polygon
                points="377.34 349.71 377.34 349.71 377.34 349.71 377.34 349.71"
                fill="#f59f28"
              />
              <path
                d="M378.79,328.55a4,4,0,0,1-.09-1.11,1.75,1.75,0,0,0-.52-1.11,1.6,1.6,0,0,0-2,0,1.75,1.75,0,0,0-.52,1.11,4.07,4.07,0,0,1-.09,1.11c-0.25.63-1.28,1.86-1.08,2.49a0.8,0.8,0,0,0,.44-0.51c0-.13,0-0.18,0-0.1a0.44,0.44,0,0,1,0,.1,2.34,2.34,0,0,0,.92,1.81,0.65,0.65,0,0,1,.56-0.33,0.66,0.66,0,0,1,.65.66h0.24A0.66,0.66,0,0,1,378,332a0.65,0.65,0,0,1,.56.33,2.33,2.33,0,0,0,.92-1.8,0.46,0.46,0,0,1,0-.1c0-.08,0,0,0,0.1a0.81,0.81,0,0,0,.44.51C380.07,330.4,379,329.17,378.79,328.55Zm-2.58-1.12a0.23,0.23,0,1,1,.23.23A0.23,0.23,0,0,1,376.2,327.43Zm1,1.42h0a1,1,0,0,1-.83-0.66,2.11,2.11,0,0,1,.83-0.18h0a2.11,2.11,0,0,1,.83.18A1,1,0,0,1,377.18,328.85Zm0.74-1.18a0.23,0.23,0,1,1,.23-0.23A0.23,0.23,0,0,1,377.92,327.66Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M374.94,330.43a0.44,0.44,0,0,1,0,.1C374.92,330.4,374.93,330.35,374.94,330.43Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <ellipse
                cx="376.59"
                cy="348.3"
                rx="0.23"
                ry="0.23"
                fill="#fbc73a"
              />
              <path
                d="M377.06,332.67h0a2.17,2.17,0,0,1-1.2-.34,0.65,0.65,0,0,1,.56-0.33A0.66,0.66,0,0,1,377.06,332.67Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M377.18,328.85h0a1,1,0,0,1-.83-0.66,2.11,2.11,0,0,1,.83-0.18h0v0.84Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M377.06,332.67h-1.31a0.69,0.69,0,0,1,.09-0.34,0.65,0.65,0,0,1,.56-0.33A0.66,0.66,0,0,1,377.06,332.67Z"
                transform="translate(0.16 20.87)"
                fill="#f4992b"
              />
              <g id="Eye-4" data-name="Eye">
                <ellipse
                  cx="376.59"
                  cy="348.3"
                  rx="0.23"
                  ry="0.23"
                  fill="#010101"
                />
                <circle cx="376.64" cy="348.24" r="0.06" fill="#fff" />
              </g>
              <path
                d="M378,328.19a1,1,0,0,1-.83.66h0a1,1,0,0,1-.83-0.66A2,2,0,0,1,378,328.19Z"
                transform="translate(0.16 20.87)"
                fill="#f4992b"
              />
              <polygon
                points="377.34 349.71 377.34 349.71 377.34 349.71 377.34 349.71 377.34 349.71 377.34 349.71"
                fill="#f59f28"
              />
              <path
                d="M375.05,330.32a0.46,0.46,0,0,1,0-.1C375,330.14,375.06,330.19,375.05,330.32Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M378.79,328.54a4,4,0,0,1-.09-1.11,1.75,1.75,0,0,0-.52-1.11,1.51,1.51,0,0,0-1-.35h0v2.88h0v3.82h1.43a0.69,0.69,0,0,0-.09-0.34,2.33,2.33,0,0,0,.92-1.8,0.46,0.46,0,0,1,0-.1c0-.08,0,0,0,0.1a0.81,0.81,0,0,0,.44.51C380.07,330.4,379,329.17,378.79,328.54Zm-0.86-.88a0.23,0.23,0,1,1,.23-0.23A0.23,0.23,0,0,1,377.92,327.66Z"
                transform="translate(0.16 20.87)"
                opacity="0.15"
              />
            </g>
            <rect
              x="0.16"
              y="353.53"
              width="595.28"
              height="71.19"
              fill="#fdd36e"
            />
            <path
              d="M595.19,399H-0.16V363S70.66,340.7,93.6,339.19c41.63-2.75,125.23,20.46,166.93,21.41,56.15,1.28,125.1-14.13,165.85-14.91,44.49-.86,168.8,8.27,168.8,8.27v45Z"
              transform="translate(0.16 20.87)"
              fill="#fff"
            />
            <path
              d="M595.28,405.25l-595.35-3v-33S65.88,347.54,89.06,346c42-2.75,126.48,20.46,168.61,21.41,56.72,1.28,126.36-14.13,167.52-14.91,44.93-.86,170.1,7.72,170.1,7.72v45Z"
              transform="translate(0.16 20.87)"
              fill="#84c2eb"
            />
            <path
              d="M595.19,405H-0.16V378s65.53-23.76,88.72-25.27c42.06-2.75,126.54,20.46,168.69,21.41C314,375.38,383.66,360,424.84,359.19c45-.86,170.34,9.77,170.34,9.77v36Z"
              transform="translate(0.16 20.87)"
              fill="#51a3db"
            />
            <path
              d="M595.19,405L-0.16,403.51v-20.1S65.78,361.7,89,360.19c42-2.75,126.48,20.46,168.6,21.41,56.71,1.28,126.35-14.13,167.51-14.91C470,365.83,595.19,378,595.19,378v27Z"
              transform="translate(0.16 20.87)"
              fill="#2c86c7"
            />
            <g id="Boat">
              <polygon
                points="246.03 403.35 245.91 380.45 231.61 403.44 246.03 403.35"
                fill="#f6f6f6"
              />
              <path
                d="M239.15,380.61h0V379h0a3.32,3.32,0,0,1,1.41.33A1.73,1.73,0,0,1,239.15,380.61Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <ellipse
                cx="240.58"
                cy="398.84"
                rx="0.38"
                ry="0.44"
                fill="#fbc73a"
              />
              <path
                d="M241.41,387.08a3.45,3.45,0,0,1-2,.62h0a1.19,1.19,0,0,1,1.11-1.23A1.09,1.09,0,0,1,241.41,387.08Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M243,383.73a0.94,0.94,0,0,1,0-.19C243,383.39,243,383.49,243,383.73Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M241.57,387.7h-2.22a1.19,1.19,0,0,1,1.11-1.23,1.09,1.09,0,0,1,.95.61A1.37,1.37,0,0,1,241.57,387.7Z"
                transform="translate(0.16 20.87)"
                fill="#f4992b"
              />
              <g id="Eye-5" data-name="Eye">
                <ellipse
                  cx="240.58"
                  cy="398.84"
                  rx="0.38"
                  ry="0.44"
                  fill="#010101"
                />
                <ellipse
                  cx="240.68"
                  cy="398.75"
                  rx="0.11"
                  ry="0.12"
                  fill="#fff"
                />
              </g>
              <polygon
                points="239.31 401.47 239.31 401.47 239.31 401.47 239.31 401.47"
                fill="#f59f28"
              />
              <path
                d="M241.88,380a8.22,8.22,0,0,1-.15-2.06,3.4,3.4,0,0,0-.87-2.07,2.53,2.53,0,0,0-3.4,0,3.4,3.4,0,0,0-.87,2.07,8.27,8.27,0,0,1-.15,2.06c-0.42,1.16-2.17,3.45-1.83,4.63a1.45,1.45,0,0,0,.75-1c0-.24,0-0.33,0-0.19a0.89,0.89,0,0,1,0,.19,4.51,4.51,0,0,0,1.55,3.35,1.09,1.09,0,0,1,.95-0.61,1.19,1.19,0,0,1,1.11,1.23h0.41a1.19,1.19,0,0,1,1.11-1.23,1.09,1.09,0,0,1,.95.61,4.49,4.49,0,0,0,1.55-3.35,0.94,0.94,0,0,1,0-.19c0-.14,0,0,0,0.19a1.45,1.45,0,0,0,.75.95C244,383.49,242.3,381.21,241.88,380ZM237.5,378a0.39,0.39,0,1,1,.38.44A0.41,0.41,0,0,1,237.5,378Zm1.65,2.63h0a1.73,1.73,0,0,1-1.41-1.22,3.32,3.32,0,0,1,1.41-.33h0a3.32,3.32,0,0,1,1.41.33A1.73,1.73,0,0,1,239.15,380.61Zm1.26-2.2a0.44,0.44,0,1,1,.38-0.44A0.41,0.41,0,0,1,240.41,378.41Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M235.35,383.54a0.89,0.89,0,0,1,0,.19C235.33,383.49,235.34,383.39,235.35,383.54Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <ellipse
                cx="238.04"
                cy="398.84"
                rx="0.38"
                ry="0.44"
                fill="#fbc73a"
              />
              <path
                d="M238.95,387.7h0a3.44,3.44,0,0,1-2-.63,1.09,1.09,0,0,1,.95-0.61A1.19,1.19,0,0,1,238.95,387.7Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M239.15,380.61h0a1.73,1.73,0,0,1-1.41-1.22,3.32,3.32,0,0,1,1.41-.33h0v1.56Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M238.95,387.7h-2.22a1.38,1.38,0,0,1,.16-0.63,1.09,1.09,0,0,1,.95-0.61A1.19,1.19,0,0,1,238.95,387.7Z"
                transform="translate(0.16 20.87)"
                fill="#f4992b"
              />
              <g id="Eye-6" data-name="Eye">
                <ellipse
                  cx="238.03"
                  cy="398.84"
                  rx="0.38"
                  ry="0.44"
                  fill="#010101"
                />
                <ellipse
                  cx="238.13"
                  cy="398.73"
                  rx="0.11"
                  ry="0.12"
                  fill="#fff"
                />
              </g>
              <path
                d="M240.56,379.38a1.73,1.73,0,0,1-1.41,1.22h0a1.73,1.73,0,0,1-1.41-1.22A3.15,3.15,0,0,1,240.56,379.38Z"
                transform="translate(0.16 20.87)"
                fill="#f4992b"
              />
              <polygon
                points="239.31 401.47 239.31 401.47 239.31 401.47 239.31 401.47 239.31 401.47 239.31 401.47"
                fill="#f59f28"
              />
              <path
                d="M235.55,383.34a0.94,0.94,0,0,1,0-.19C235.54,383,235.56,383.1,235.55,383.34Z"
                transform="translate(0.16 20.87)"
                fill="#fbc73a"
              />
              <path
                d="M241.88,380a8.22,8.22,0,0,1-.15-2.06,3.4,3.4,0,0,0-.87-2.07,2.43,2.43,0,0,0-1.7-.66h0v5.34h0v7.1h2.42a1.37,1.37,0,0,0-.16-0.62,4.49,4.49,0,0,0,1.55-3.35,0.94,0.94,0,0,1,0-.19c0-.14,0,0,0,0.19a1.45,1.45,0,0,0,.75.95C244,383.49,242.29,381.2,241.88,380Zm-1.46-1.64a0.44,0.44,0,1,1,.38-0.44A0.41,0.41,0,0,1,240.41,378.41Z"
                transform="translate(0.16 20.87)"
                opacity="0.15"
              />
              <line
                x1="247.18"
                y1="375.12"
                x2="247.33"
                y2="405.11"
                fill="none"
                stroke="#6e517a"
                strokeMiterlimit={10}
                strokeWidth={3}
              />
              <polygon
                points="230.58 405.15 231.58 407.01 265.52 406.8 266.5 404.92 230.58 405.15"
                fill="#6e517a"
              />
              <polygon
                points="233.59 410.72 263.51 410.53 265.73 406.4 231.37 406.62 233.59 410.72"
                fill="#f6f6f6"
              />
              <polygon
                points="247.13 374.14 247.14 377.34 253.04 377.31 250.09 375.64 247.13 374.14"
                fill="#fbc73a"
              />
              <polygon
                points="266.25 403.19 248.65 403.27 248.52 378.31 266.25 403.19"
                fill="#f6f6f6"
              />
              <polygon
                points="232.82 409.3 233.7 411.17 263.42 410.98 264.28 409.09 232.82 409.3"
                fill="#6e517a"
              />
              <polygon
                points="266.25 403.2 248.64 403.28 248.52 378.32 266.25 403.2"
                fill="#060809"
                opacity="0.2"
              />
              <polygon
                points="266.55 404.88 265.78 406.35 247.39 406.47 247.38 405 266.55 404.88"
                fill="#060809"
                opacity="0.4"
              />
              <polygon
                points="265.73 406.41 264.29 409.08 247.36 409.2 247.35 406.52 265.73 406.41"
                fill="#060809"
                opacity="0.2"
              />
              <polygon
                points="264.29 409.08 264.26 409.14 263.43 410.94 247.38 411.05 247.37 409.19 264.29 409.08"
                fill="#060809"
                opacity="0.4"
              />
              <polygon
                points="247.2 377.34 248.05 377.33 248.19 405.04 247.34 405.04 247.2 377.34"
                fill="#060809"
                opacity="0.4"
              />
            </g>
            <path
              d="M595.19,424H0l-0.17-31.46S65.78,372,89,370.54c42-2.61,126.48,19.4,168.61,20.3,56.72,1.21,126.36-13.39,167.52-14.14,44.93-.81,170.1,13.18,170.1,13.18V424Z"
              transform="translate(0.16 20.87)"
              fill="#1365a6"
            />
            <path
              d="M595.23,504.8H-0.07l-0.1-103.21s65.53-23.32,88.72-25c42.06-3,126.54,22.31,168.69,23.34,56.74,1.39,126.42-15.4,167.6-16.25,45-.93,170.34,9.66,170.34,9.66Z"
              transform="translate(0.16 20.87)"
              fill="#17517b"
            />
            <g id="Fish_1" data-name="Fish 1">
              <path
                d="M487.83,464a30.07,30.07,0,0,0,15.76,8.63,49.67,49.67,0,0,0,18.15.2,18.76,18.76,0,0,1-7.28-8.25Z"
                transform="translate(0.16 20.87)"
                fill="#f4992b"
              />
              <path
                d="M485.82,442.47a2.35,2.35,0,0,1,.62-1.74c3.28-4.54,9.87-7.24,16.34-9.26a47.7,47.7,0,0,1,8.4-2,42.47,42.47,0,0,1,12.76.64A26.7,26.7,0,0,0,513.63,444Z"
                transform="translate(0.16 20.87)"
                fill="#f4992b"
              />
              <path
                d="M522.23,450a14.91,14.91,0,0,1,7.63-3.61,2.55,2.55,0,0,1,1.67.15,2.1,2.1,0,0,1,.64,2.47c-0.29.88-.88,1.62-1.24,2.47-1,2.46.09,5.25-.07,7.91-0.06,1.11-.57,2.41-1.66,2.59a2.66,2.66,0,0,1-1.52-.34,14.46,14.46,0,0,1-3.48-2.29c-0.76-.67-1.77-1.48-2.65-1Z"
                transform="translate(0.16 20.87)"
                fill="#f4992b"
              />
              <g clipPath="url(#clip-path)">
                <path
                  d="M523.83,456.93a14.5,14.5,0,0,0-1.15-9A24.63,24.63,0,0,0,512,436.12a21.63,21.63,0,0,0-15.75-1.95c-9.86,2.68-16.34,12.64-18.06,22.72a1.94,1.94,0,0,0,.77,2.25c6,5.4,13.36,9.52,21.36,10.41C510.08,470.63,521.88,465.87,523.83,456.93Z"
                  transform="translate(0.16 20.87)"
                  fill="#fbc73a"
                />
                <path
                  d="M505.27,441.27a4.52,4.52,0,0,0,2.13,1.7,5.45,5.45,0,0,0,3.58-.29c1.86-.68,3.76-2.05,3.9-4,0.21-3.15-4-7.42-7.24-6.68C503.69,432.89,503.29,438.52,505.27,441.27Z"
                  transform="translate(0.16 20.87)"
                  fill="#f4992b"
                />
                <path
                  d="M516.76,448.23a4.13,4.13,0,0,0-.08,3.09,3.08,3.08,0,0,0,4.94,1.57,4.18,4.18,0,0,0,1.85-2.73,3.33,3.33,0,0,0-1.07-3.06A3.86,3.86,0,0,0,516.76,448.23Z"
                  transform="translate(0.16 20.87)"
                  fill="#f4992b"
                />
                <path
                  d="M511.38,468.55a3.82,3.82,0,0,0,3.86,0,4.82,4.82,0,0,0,2.7-4.46,4.25,4.25,0,0,0-6.41-3C509.45,462.5,509.27,467.09,511.38,468.55Z"
                  transform="translate(0.16 20.87)"
                  fill="#f4992b"
                />
                <path
                  d="M498.32,467.09a4.94,4.94,0,0,1-3.1,1.68,4.27,4.27,0,0,1-3.34-1c-2.64-2.4-1.52-8.12,2.35-8.41A4.72,4.72,0,0,1,498.32,467.09Z"
                  transform="translate(0.16 20.87)"
                  fill="#f4992b"
                />
                <path
                  d="M496.39,440a6.55,6.55,0,0,1,1.34,2.76,5.64,5.64,0,0,1-4.45,6.23c-5.21,1-9.5-4.78-7.36-9.5S493.86,436.75,496.39,440Z"
                  transform="translate(0.16 20.87)"
                  fill="#f4992b"
                />
              </g>
              <path
                d="M481.25,451.46a2.41,2.41,0,0,0,.52,1.4,2.46,2.46,0,0,0,2.84.36,3.56,3.56,0,0,0,2.09-3.43C486.25,445.29,481,447.93,481.25,451.46Z"
                transform="translate(0.16 20.87)"
                fill="#fff"
              />
              <path
                d="M482.78,450.23a1,1,0,0,0-.18,1.27,0.72,0.72,0,0,0,1.17-.07,1.39,1.39,0,0,0,0-.69,0.87,0.87,0,0,1,.15-0.66,0.34,0.34,0,0,1,.57.07,3.3,3.3,0,0,0,0,2,1.19,1.19,0,0,0,1.09-.78,2.08,2.08,0,0,0-.29-2.22,1.75,1.75,0,0,0-2.16-.33,1.51,1.51,0,0,0-.42,2.07C482.4,450.42,482.63,450.77,482.78,450.23Z"
                transform="translate(0.16 20.87)"
                fill="#231f20"
              />
              <path
                d="M507.12,458.11c5.9-1.51,4.18-10.35-1.46-10.62-3.65-.18-7.79,3.52-5.82,7.27C500.69,456.38,504.87,458.68,507.12,458.11Z"
                transform="translate(0.16 20.87)"
                fill="#f4992b"
              />
            </g>
            <g id="Fish_2" data-name="Fish 2">
              <path
                d="M256.93,484.25a4.77,4.77,0,0,1-1.66,0,6.15,6.15,0,0,1-2.9-2,10,10,0,0,1-1.49-2.18,1.38,1.38,0,0,1,.77-2,2.81,2.81,0,0,1,1.62.24c1.87,0.69,6.82,1.87,7.93,3.31C262.94,483.87,258.74,484.06,256.93,484.25Z"
                transform="translate(0.16 20.87)"
                fill="#4d3f58"
              />
              <path
                d="M279.17,437.54a8.85,8.85,0,0,0,1.68,3.9,14.51,14.51,0,0,0-7.39-3.53c0.42,0.65,1,1.92,1.37,2.58A7.72,7.72,0,0,0,270,439a4.87,4.87,0,0,0-2.59.69,2.11,2.11,0,0,0-.92,2c0.11,0.89,1.17.8,1.38,0.79a46.59,46.59,0,0,1,8.07.48c2.06,0.3,3.08,1.65,8.19,1.94C289.74,445.24,280.36,438.26,279.17,437.54Z"
                transform="translate(0.16 20.87)"
                fill="#4d3f58"
              />
              <path
                d="M243.87,460.7a22.73,22.73,0,0,0-10.63-4.2,4.2,4.2,0,0,0-2.32.18,2.2,2.2,0,0,0-.89,2.88c0.4,1,1.23,1.88,1.73,2.87,1.43,2.85-.12,6.1.09,9.19a3,3,0,0,0,2.31,3,4.32,4.32,0,0,0,2.12-.39,20.88,20.88,0,0,0,4.85-2.66c1.05-.78,2.46-1.72,3.69-1.15Z"
                transform="translate(0.16 20.87)"
                fill="#4d3f58"
              />
              <g clipPath="url(#clip-path-2)">
                <path
                  d="M241.64,468.79c-0.8-3.07-.41-6.56,1.6-10.42a31.22,31.22,0,0,1,14.91-13.77,35.49,35.49,0,0,1,21.94-2.26c13.74,3.11,22.76,14.7,25.16,26.4a2.48,2.48,0,0,1,0,1.52,3.14,3.14,0,0,1-1.05,1.1c-8.32,6.27-18.61,11.06-29.76,12.1C260.8,484.72,244.36,479.19,241.64,468.79Z"
                  transform="translate(0.16 20.87)"
                  fill="#6e517a"
                />
                <path
                  d="M267.49,450.59a6.23,6.23,0,0,1-3,2,9,9,0,0,1-5-.33c-2.59-.79-5.24-2.38-5.43-4.68-0.3-3.66,5.56-8.63,10.09-7.76C269.69,440.85,270.25,447.39,267.49,450.59Z"
                  transform="translate(0.16 20.87)"
                  fill="#c0badb"
                />
                <path
                  d="M251.49,458.68a4.07,4.07,0,0,1,.11,3.59,4.21,4.21,0,0,1-2.16,2.24,5.58,5.58,0,0,1-4.72-.41,4.93,4.93,0,0,1-2.57-3.18,3.53,3.53,0,0,1,1.49-3.56C245.95,455.76,250.23,456.41,251.49,458.68Z"
                  transform="translate(0.16 20.87)"
                  fill="#c0badb"
                />
                <path
                  d="M259,482.3a6.25,6.25,0,0,1-5.37,0c-2.28-1-4-3-3.76-5.18,0.34-3.34,5.54-5.45,8.92-3.5C261.67,475.27,261.93,480.6,259,482.3Z"
                  transform="translate(0.16 20.87)"
                  fill="#c0badb"
                />
                <path
                  d="M277.17,480.6a7.36,7.36,0,0,0,4.32,2,6.77,6.77,0,0,0,4.66-1.2,5.54,5.54,0,0,0-3.27-9.78C277,471.21,273.21,476.79,277.17,480.6Z"
                  transform="translate(0.16 20.87)"
                  fill="#c0badb"
                />
                <path
                  d="M279.87,449.09A7.18,7.18,0,0,0,278,452.3c-0.74,3.23,2.33,6.6,6.2,7.24,7.25,1.19,13.23-5.56,10.25-11S283.39,445.34,279.87,449.09Z"
                  transform="translate(0.16 20.87)"
                  fill="#c0badb"
                />
              </g>
              <path
                d="M301,462.44a2.55,2.55,0,0,1-.72,1.63,4,4,0,0,1-4,.41c-1.81-.69-3.11-2.34-2.91-4C294,455.27,301.35,458.33,301,462.44Z"
                transform="translate(0.16 20.87)"
                fill="#fff"
              />
              <path
                d="M273.82,467.66a8.38,8.38,0,0,1-10.68-3.25c-2.63-4.45,2.71-9.11,8.2-7.69C276.43,458,279.12,465.18,273.82,467.66Z"
                transform="translate(0.16 20.87)"
                fill="#c0badb"
              />
              <circle cx="296.93" cy="482.14" r="2.15" fill="#231f20" />
              <circle cx="298.16" cy="483.03" r="0.69" fill="#fff" />
            </g>
          </svg>
        </div>
      </section>
      {/* here is the blue sea */}
      <section id="blue">
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
     {children}
      
        <svg
          className="fish fish2"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 75.53 46.77"
        >
          <g className="fish2">
            <defs>
              <clipPath id="clip-path" transform="translate(-229.83 -437.54)">
                <path
                  d="M241.64,468.79c-0.8-3.07-.41-6.56,1.6-10.42a31.22,31.22,0,0,1,14.91-13.77,35.49,35.49,0,0,1,21.94-2.26c13.74,3.11,22.76,14.7,25.16,26.4a2.48,2.48,0,0,1,0,1.52,3.14,3.14,0,0,1-1.05,1.1c-8.32,6.27-18.61,11.06-29.76,12.1C260.8,484.72,244.36,479.19,241.64,468.79Z"
                  fill="none"
                />
              </clipPath>
            </defs>
            <title>fish2</title>
            <g id="Fish_2" data-name="Fish 2">
              <path
                d="M256.93,484.25a4.77,4.77,0,0,1-1.66,0,6.15,6.15,0,0,1-2.9-2,10,10,0,0,1-1.49-2.18,1.38,1.38,0,0,1,.77-2,2.81,2.81,0,0,1,1.62.24c1.87,0.69,6.82,1.87,7.93,3.31C262.94,483.87,258.74,484.06,256.93,484.25Z"
                transform="translate(-229.83 -437.54)"
                fill="#4d3f58"
              />
              <path
                d="M279.17,437.54a8.85,8.85,0,0,0,1.68,3.9,14.51,14.51,0,0,0-7.39-3.53c0.42,0.65,1,1.92,1.37,2.58A7.72,7.72,0,0,0,270,439a4.87,4.87,0,0,0-2.59.69,2.11,2.11,0,0,0-.92,2c0.11,0.89,1.17.8,1.38,0.79a46.59,46.59,0,0,1,8.07.48c2.06,0.3,3.08,1.65,8.19,1.94C289.74,445.24,280.36,438.26,279.17,437.54Z"
                transform="translate(-229.83 -437.54)"
                fill="#4d3f58"
              />
              <path
                d="M243.87,460.7a22.73,22.73,0,0,0-10.63-4.2,4.2,4.2,0,0,0-2.32.18,2.2,2.2,0,0,0-.89,2.88c0.4,1,1.23,1.88,1.73,2.87,1.43,2.85-.12,6.1.09,9.19a3,3,0,0,0,2.31,3,4.32,4.32,0,0,0,2.12-.39,20.88,20.88,0,0,0,4.85-2.66c1.05-.78,2.46-1.72,3.69-1.15Z"
                transform="translate(-229.83 -437.54)"
                fill="#4d3f58"
              />
              <g clipPath="url(#clip-path)">
                <path
                  d="M241.64,468.79c-0.8-3.07-.41-6.56,1.6-10.42a31.22,31.22,0,0,1,14.91-13.77,35.49,35.49,0,0,1,21.94-2.26c13.74,3.11,22.76,14.7,25.16,26.4a2.48,2.48,0,0,1,0,1.52,3.14,3.14,0,0,1-1.05,1.1c-8.32,6.27-18.61,11.06-29.76,12.1C260.8,484.72,244.36,479.19,241.64,468.79Z"
                  transform="translate(-229.83 -437.54)"
                  fill="#6e517a"
                />
                <path
                  d="M267.49,450.59a6.23,6.23,0,0,1-3,2,9,9,0,0,1-5-.33c-2.59-.79-5.24-2.38-5.43-4.68-0.3-3.66,5.56-8.63,10.09-7.76C269.69,440.85,270.25,447.39,267.49,450.59Z"
                  transform="translate(-229.83 -437.54)"
                  fill="#c0badb"
                />
                <path
                  d="M251.49,458.68a4.07,4.07,0,0,1,.11,3.59,4.21,4.21,0,0,1-2.16,2.24,5.58,5.58,0,0,1-4.72-.41,4.93,4.93,0,0,1-2.57-3.18,3.53,3.53,0,0,1,1.49-3.56C245.95,455.76,250.23,456.41,251.49,458.68Z"
                  transform="translate(-229.83 -437.54)"
                  fill="#c0badb"
                />
                <path
                  d="M259,482.3a6.25,6.25,0,0,1-5.37,0c-2.28-1-4-3-3.76-5.18,0.34-3.34,5.54-5.45,8.92-3.5C261.67,475.27,261.93,480.6,259,482.3Z"
                  transform="translate(-229.83 -437.54)"
                  fill="#c0badb"
                />
                <path
                  d="M277.17,480.6a7.36,7.36,0,0,0,4.32,2,6.77,6.77,0,0,0,4.66-1.2,5.54,5.54,0,0,0-3.27-9.78C277,471.21,273.21,476.79,277.17,480.6Z"
                  transform="translate(-229.83 -437.54)"
                  fill="#c0badb"
                />
                <path
                  d="M279.87,449.09A7.18,7.18,0,0,0,278,452.3c-0.74,3.23,2.33,6.6,6.2,7.24,7.25,1.19,13.23-5.56,10.25-11S283.39,445.34,279.87,449.09Z"
                  transform="translate(-229.83 -437.54)"
                  fill="#c0badb"
                />
              </g>
              <path
                d="M301,462.44a2.55,2.55,0,0,1-.72,1.63,4,4,0,0,1-4,.41c-1.81-.69-3.11-2.34-2.91-4C294,455.27,301.35,458.33,301,462.44Z"
                transform="translate(-229.83 -437.54)"
                fill="#fff"
              />
              <path
                d="M273.82,467.66a8.38,8.38,0,0,1-10.68-3.25c-2.63-4.45,2.71-9.11,8.2-7.69C276.43,458,279.12,465.18,273.82,467.66Z"
                transform="translate(-229.83 -437.54)"
                fill="#c0badb"
              />
              <circle cx="66.94" cy="23.73" r="2.15" fill="#231f20" />
              <circle cx="68.17" cy="24.62" r="0.69" fill="#fff" />
            </g>
          </g>
        </svg>
      </section>
    </div>
  );
};

export default Paysage;
