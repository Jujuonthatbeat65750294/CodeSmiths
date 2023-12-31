// useImageQuiz.js

import { useState } from 'react';

const useImageQuiz = (images, groupLetters) => {
  // State variables
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedLetter, setSelectedLetter] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  // Event handler for handling letter button click.
  // @param {string} letter - The selected letter.
  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);

    // Check if the selected letter matches the first letter of the current word
    const isFirstLetterMatch = letter === images[currentImageIndex].word[0];

    if (currentImageIndex === images.length - 1) {
      setIsCompleted(true);
    } else if (isFirstLetterMatch) {
      // Increase the progress and move to the next image if the first letter is matched
      setProgress((prevProgress) => prevProgress + 1);
      handleNextImage();
    }
  };

  // Check if the selected letter matches the first letter of the current word
  const isFirstLetterMatch = selectedLetter === images[currentImageIndex].word[0];

  // Move to the next image after a delay
  const handleNextImage = () => {
    setSelectedLetter('');
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }, 1000); // Delay duration in milliseconds before moving to the next image
  };

  // Reset the state variables to restart the quiz
  const handleRetry = () => {
    setCurrentImageIndex(0);
    setSelectedLetter('');
    setIsCompleted(false);
    setProgress(0);
  };

  // Return the state variables and event handlers
  return {
    currentImageIndex,
    isCompleted,
    progress,
    handleLetterClick,
    isFirstLetterMatch,
    handleRetry,
    groupLetters,
    totalImages: images.length,
  };
};

export default useImageQuiz;