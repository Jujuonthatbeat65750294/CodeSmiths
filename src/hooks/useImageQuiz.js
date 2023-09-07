// useImageQuiz.js
import { useState } from 'react';

const useImageQuiz = (images, groupLetters) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedLetter, setSelectedLetter] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  // Event handler for handling letter button click.
  // @param {string} letter - The selected letter.
  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    // 
    const isFirstLetterMatch = letter === images[currentImageIndex].word[0];
    if (currentImageIndex === images.length - 1) {
      setIsCompleted(true);
    }else if (isFirstLetterMatch) {
      setProgress((prevProgress) => prevProgress + 1);
      handleNextImage();
    }
  };

  const isFirstLetterMatch = selectedLetter === images[currentImageIndex].word[0];

  const handleNextImage = () => {
    setSelectedLetter('');
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }, 1000); // Delay duration in milliseconds before moving to the next image
  };

  const handleRetry = () => {
    setCurrentImageIndex(0);
    setSelectedLetter('');
    setIsCompleted(false);
    setProgress(0);
  };

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