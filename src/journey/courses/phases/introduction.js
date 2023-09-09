import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import videoFile from '../Introduction.mp4';
import AudioManager from '../../../utils/AudioManager';

function IntroductionPage() {
  const history = useHistory();
  const audioRef = useRef(null); // Define the audioRef using the useRef hook

  useEffect(() => {
    // Stop the audio playback when the component mounts
    stopAudio();

    // Clean up the effect when the component unmounts
    return () => {
      // Restart the audio playback when the component unmounts
      playAudio();
    };
  }, []);

  const stopAudio = () => {
    // Logic to stop the audio playback
    const audio = audioRef.current;
    audio.pause();
  };

  const playAudio = () => {
    // Logic to restart the audio playback
    const audio = audioRef.current;
    audio.play().catch(error => {
      console.error('Failed to play audio:', error);
    });
  };

  const handleVideoEnd = () => {
    // Navigate to another path when the video ends
    history.push('/main-menu/journey/course1/sound-of-s-and-a');
  };

  return (
    <div id='phase-page-container'>
      <AudioManager audioFile="../assets/audio/bg_music/BG_2-Underwater Mermaid Castle.mp3" volume={0.2} />
      <video src={videoFile} controls autoPlay onEnded={handleVideoEnd}></video>
    </div>
  );
}

export default IntroductionPage;