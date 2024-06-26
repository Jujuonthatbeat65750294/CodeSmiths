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
    const wordAudio = new Audio(`../../../assets/audio/sounds/${words[currentImageIndex].sound}`);
    
    audio.addEventListener('ended', () => {
        wordAudio.play().catch((error) => {
          console.error('Failed to play audio:', error);
        });
      });

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
      <video autoPlay="autoplay" loop muted className="bg">
        <source
          src="https://static.vecteezy.com/system/resources/previews/003/439/678/mp4/cartoon-background-underwater-sea-life-free-video.mp4"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
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
        {/* <p onClick={playAudio} style={{ textAlign: 'center' }}>
          What is the first letter of this word?
        </p> */}
        <div className="title">
          <img src="../../../../assets/img/What-is-the-first-letter-of-this-word.png" alt="" onClick={playAudio}/>
        </div>
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