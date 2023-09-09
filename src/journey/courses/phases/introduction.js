import React from 'react';
import { useHistory } from 'react-router-dom';
import videoFile from '../Introduction.mp4';

function IntroductionPage() {
    const history = useHistory();

    const handleVideoEnd = () => {
    // Navigate to another path when the video ends
    history.push('/main-menu/journey/course1/sound-of-s-and-a');
  };

  return (
    <div id='phase-page-container'>
      <video src={videoFile} controls autoPlay onEnded={handleVideoEnd} ></video>
    </div>
  );
}

export default IntroductionPage;