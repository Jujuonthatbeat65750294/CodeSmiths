// useWordExercise.js

import { useState } from 'react';

const useWordExercise = (words, groupLetters) => {
  // State variables
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedLetter, setSelectedLetter] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentGroupLetters, setCurrentGroupLetters] = useState(groupLetters);

  const totalImages = words.length;

  // Event handler for handling letter button click.
  // @param {string} letter - The selected letter.
  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);

    // Check if the selected letter matches the first letter of the current word
    const isFirstLetterMatch = letter === words[currentImageIndex].word[0];

    if (currentImageIndex === words.length - 1) {
      setIsCompleted(true);
    } else if (isFirstLetterMatch) {
      // Increase the progress and move to the next word if the first letter is matched
      setProgress((prevProgress) => prevProgress + 1);
      nextWord();
    }
  };

  // Check if the selected letter matches the first letter of the current word
  const isFirstLetterMatch = selectedLetter === words[currentImageIndex].word[0];

  // Move to the next word
  const nextWord = () => {
    if (currentImageIndex + 1 < totalImages) {
      setCurrentImageIndex(currentImageIndex + 1);
      setProgress(progress + 1);
    } else {
      setIsCompleted(true);
    }
  };

  // Reset the state variables to restart the exercise
  const handleRetry = () => {
    setCurrentImageIndex(0);
    setIsCompleted(false);
    setProgress(0);
  };

  // Return the state variables and event handlers
  return {
    currentImageIndex,
    isCompleted,
    progress,
    handleLetterClick,
    handleRetry,
    groupLetters: currentGroupLetters,
    totalImages,
    nextWord,
  };
};

export default useWordExercise;