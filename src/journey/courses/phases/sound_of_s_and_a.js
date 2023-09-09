import React from 'react';
import { useHistory } from 'react-router-dom';
import videoFile from '../Letter_S.mp4';

function SoundOfSAndAPage() {
  const history = useHistory();

  const handleVideoEnd = () => {
    // Navigate to another path when the video ends
    history.push('/main-menu/journey/course1/practice_s_a');
  };

  return (
    <div id='phase-page-container'>
      <video src={videoFile} controls autoPlay onEnded={handleVideoEnd} ></video>
    </div>
  );
}

export default SoundOfSAndAPage;