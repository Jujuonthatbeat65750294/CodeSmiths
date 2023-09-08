import React from 'react';
import videoFile from '../Letter_S.mp4';

function SoundOfSAndAPage() {

  return (
    <div id='phase-page-container'>
      <video src={videoFile} controls ></video>
    </div>
  );
}

export default SoundOfSAndAPage;