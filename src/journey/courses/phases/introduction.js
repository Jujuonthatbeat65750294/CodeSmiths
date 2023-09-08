import React from 'react';
import videoFile from '../Letter_S.mp4';

function IntroductionPage() {

  return (
    <div id='introduction-page-container'>
      <video src={videoFile} controls ></video>
    </div>
  );
}

export default IntroductionPage;