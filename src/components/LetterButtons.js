// LetterButtons.js
import React from 'react';

const LetterButtons = ({ letters, onLetterClick, playAudio }) => (
  <div className="buttonContainer">
    {letters.map((letter) => (
      <button key={letter} onClick={() => {onLetterClick(letter); playAudio(letter+'.mp3')}}>
        {letter}
      </button>
    ))}
  </div>
);

export default LetterButtons;