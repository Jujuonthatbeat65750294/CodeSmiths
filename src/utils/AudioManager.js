import React, { useEffect } from 'react';

const AudioManager = ({ audioFile, volume }) => {
  useEffect(() => {
    const audio = new Audio(audioFile);
    audio.loop = true;
    audio.volume = volume;

    const playAudio = () => {
      audio.play().catch(error => {
        console.error('Failed to play audio:', error);
      });
    };

    const pauseAudio = () => {
      audio.pause();
    };

    // Stop the audio playback when the component mounts
    pauseAudio();

    document.addEventListener('click', playAudio);

    return () => {
      document.removeEventListener('click', playAudio);
      pauseAudio();
    };
  }, [audioFile, volume]);

  return null;
};

export default AudioManager;