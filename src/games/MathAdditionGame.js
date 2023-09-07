import React, { useState, useEffect } from "react"; // Import your CSS file if needed

function MathAdditionGame() {
  const [seconds, setSeconds] = useState(3); // Initial value is 3 seconds
  const [v1, setV1] = useState("");
  const [v2, setV2] = useState("");
  const [ans, setAns] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [message, setMessage] = useState("");

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
      setMessage("confetti");
      setTimeout(function() { 
        setMessage("")
       }, 3000);
    } else {
      setMessage('');
    }

    setUserAnswer("");
    generateRandomNumbers();
  };

  return (
    <section className={message}>
      <h1>Math Addition Game</h1>
      <div className="centerdiv">
        <div className="insertBox">
          <div className="box1">
            <input type="text" id="v1" value={v1} readOnly />
          </div>
          <div className="Box1">
            <p>+</p>
          </div>
          <div className="box1">
            <input type="text" id="v2" value={v2} readOnly />
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
          <button onClick={jsGame}>Check Answer</button>
        </div>
      </div>
    </section>
  );
}

export default MathAdditionGame;
