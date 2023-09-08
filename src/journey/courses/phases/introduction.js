import React from 'react';
import videoFile from '../Introduction.mp4';

function IntroductionPage() {

  return (
    <div id='phase-page-container'>
      <video src={videoFile} controls ></video>
    </div>
  );
}

export default IntroductionPage;