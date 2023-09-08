// Guess_First_Letter.js

import React from 'react';
import useWordExercise from '../../../hooks/useWordExercise';
import words from '../../../utils/words.json';
import AudioManager from '../../../utils/AudioManager';
import BackButton from '../../../components/BackButton';
import LetterButtons from '../../../components/LetterButtons';
import ProgressBar from '../../../components/ProgressBar';

function Guess_First_Letter({ groupLetters }) {
  // Retrieve state variables and event handlers from the custom hook useWordExercise
  const {
    currentImageIndex,
    isCompleted,
    progress,
    handleLetterClick,
    handleRetry,
    groupLetters: currentGroupLetters,
    totalImages,
    nextWord,
  } = useWordExercise(words, groupLetters);

  // Function to play sound
  const playSound = (sound) => {
    const audio = new Audio(`../../../assets/audio/sounds/${sound}`);
    audio.play().catch((error) => {
      // Handle the error, e.g., display an error message or fallback to an alternative action.
      console.error('Failed to play audio:', error);
    });
  };

  // Function to play audio question
  const playAudio = () => {
    const audio = new Audio(`../../../assets/audio/question.mp3`);
    audio.play().catch((error) => {
      // Handle the error, e.g., display an error message or fallback to an alternative action.
      console.error('Failed to play audio:', error);
    });
  };

  // Render different components based on the game state
  if (isCompleted) {
    // Game completed
    return (
      <div className="App">
        <header className="App-header">
          <p>Congratulations!</p>
          <audio src="../../../assets/audio/congratulations.mp3" autoPlay />
          <button className="retryButton" onClick={handleRetry}>
            Retry
          </button>
        </header>
      </div>
    );
  }

  // Game in progress
  return (
    <div className="gameGuessContainer">
      <BackButton />
      <div
        className="App-header"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <AudioManager audioFile="../../../../assets/audio/background-music.mp3" volume={0.05} />
        <p onClick={playAudio} style={{ textAlign: 'center' }}>
          What is the first letter of this word?
        </p>
        <audio src="../../../../assets/audio/question.mp3" autoPlay />

        <img
          className="guessGameImage"
          src={`../../../../assets/img/words_images/${words[currentImageIndex].image}`}
          alt={words[currentImageIndex].word}
          onClick={() => playSound(words[currentImageIndex].sound)}
        />

        <LetterButtons letters={currentGroupLetters} onLetterClick={handleLetterClick} playAudio={playSound} />

        <ProgressBar progress={progress} total={totalImages} />
      </div>
    </div>
  );
}

export default Guess_First_Letter;  