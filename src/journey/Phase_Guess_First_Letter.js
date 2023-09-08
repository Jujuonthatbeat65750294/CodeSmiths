// Phase_Guess_First_Letter.js
import React, { useEffect } from 'react';

import AudioManager from '../utils/AudioManager';
import images from '../utils/WordList';
import LetterButtons from '../components/LetterButtons';
import useImageQuiz from '../hooks/useImageQuiz';
import ProgressBar from '../components/ProgressBar';



function Phase_Guess_First_Letter() {

  // Group of letters for the letter buttons
  const group1Letters = ['s', 'a', 't', 'i', 'p', 'n'];

  // Custom hook to manage image quiz logic and state
  const {
    currentImageIndex,
    isCompleted,
    progress,
    handleLetterClick,
    handleRetry,
    groupLetters,
    totalImages,
  } = useImageQuiz(images, group1Letters);


  // Function to play sound
  const playSound = (sound) => {
    const audio = new Audio(`../../assets/audio/sounds/${sound}`);
    audio.play()
    .catch(error => {
      // Handle the error, e.g., display an error message or fallback to an alternative action.
      console.error('Failed to play audio:', error);
    });
  };

  // Function to ask the Audio
  const playAudio = () => {
    const audio = new Audio(`../../assets/audio/question.mp3`);
    audio.play()
    .catch(error => {
      // Handle the error, e.g., display an error message or fallback to an alternative action.
      console.error('Failed to play audio:', error);
    });
  };

  // Render the completion screen when all images are completed
  if (isCompleted) {
    return (
      <div className="App">
        <header className="App-header"> 
          <p>Congratulations!</p>
          <audio src="../../assets/audio/congratulations.mp3" autoPlay />
          <button className="retryButton" onClick={handleRetry}>
            Retry
          </button>
        </header>
      </div>
    );
  }

  // Render the main app content
  return (
    <div className="App">
      <header className="App-header">
        <AudioManager audioFile="../../assets/audio/background-music.mp3" volume={0.05} />
        <p onClick={playAudio}>What is the first letter of this word?</p>
        <audio src="../../assets/audio/question.mp3" autoPlay />

        <img src={`../../assets/img/words_images/${images[currentImageIndex].image}`} alt={images[currentImageIndex].word} onClick={() => playSound(images[currentImageIndex].sound)} />
        
        <LetterButtons letters={groupLetters} onLetterClick={handleLetterClick} playAudio={playSound}/>

        <ProgressBar progress={progress} total={totalImages} />
      </header>
    </div>
  );
}

export default Phase_Guess_First_Letter;