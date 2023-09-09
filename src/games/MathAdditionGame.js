import React, { useState, useEffect } from "react"; // Import your CSS file if needed
import "./mathGame.css";

function MathAdditionGame() {
  const [v1, setV1] = useState("");
  const [v2, setV2] = useState("");
  const [ans, setAns] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [streaks, setStreaks] = useState(0);

  const generateRandomNumbers = () => {
    const n1 = Math.floor(Math.random() * 10 + 1);
    const n2 = Math.floor(Math.random() * 10 + 1);

    setV1(n1.toString());
    setV2(n2.toString());

    const result = n1 + n2;
    setAns(result.toString());
  };

  useEffect(() => {
    generateRandomNumbers(); // Call generateRandomNumbers when the component is mounted
  }, []);

  const jsGame = () => {
    if (userAnswer === ans) {
      setStreaks(streaks + 1);
      playAudio(`/assets/audio/Good job.mp3`);
      playAudio("/assets/audio/correct.mp3");
    } else {
      playAudio(`/assets/audio/wrong answer.mp3`);
    
      setStreaks(0);
    }

    setUserAnswer("");
    generateRandomNumbers();
  };

  const playNumbers = () => {
    const audio0 = new Audio(`/assets/audio/What is.m4a`);
    const audio1 = new Audio(`/assets/audio/numbers/${v1}.m4a`);
    const plusAudio = new Audio(`/assets/audio/numbers/plus.m4a`);
    const audio2 = new Audio(`/assets/audio/numbers/${v2}.m4a`);
    const volume = 0.5;

    audio0.volume = volume;
    audio1.volume = volume;
    plusAudio.volume = volume;
    audio2.volume = volume;

    audio0.play().catch((error) => {
      console.error("Failed to play audio:", error);
    });
    audio0.addEventListener("ended", () => {
      audio1.play();
    });
    audio1.addEventListener("ended", () => {
      plusAudio.play();
    });
    plusAudio.addEventListener("ended", () => {
      audio2.play();
    });
    console.log("test");
  };

  const playAudio = (audioFile) => {
    const audio = new Audio(audioFile);
    const volume = 0.8;

    audio.volume = volume;

    audio.play().catch((error) => {
      console.error("Failed to play audio:", error);
    });
  };

  const check = () => {
    const audioFilePath = "/assets/audio/button.mp3"; // Adjust the path as needed
    playAudio(audioFilePath);
    jsGame();
  };

  return (
    <div id="maths-game-container">
      <div className="maths streaks">
        <img
          src="https://static.vecteezy.com/system/resources/previews/018/974/781/original/cute-cartoon-starfish-icon-png.png"
          className="starfish"
        />
        <span>{streaks}</span>
      </div>
      <video autoPlay="autoplay" loop muted className="bg">
        <source
          src="https://static.vecteezy.com/system/resources/previews/003/439/678/mp4/cartoon-background-underwater-sea-life-free-video.mp4"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
      <img src="/title.gif" className="title" />
      <div className="centerdiv">
        <i
          className="fa-solid fa-volume-high"
          onClick={() => playNumbers()}
        ></i>
        <div className="insertBox">
          <div className="box1">
            <span type="text" id="v1">
              {v1}
            </span>
          </div>
          <div className="Box1">
            <p>+</p>
          </div>
          <div className="box1">
            <span type="text" id="v2">
              {v2}
            </span>
          </div>
        </div>
        <div className="middlebox">
          <input
            type="text"
            id="answ"
            autoComplete="off"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
          />
        </div>
        <div className="sentBox">
          <button className="checkAnswer" onClick={check}>
            <span class="shadow"></span>
            <span class="edge"></span>
            <span class="front text">=</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MathAdditionGame;
