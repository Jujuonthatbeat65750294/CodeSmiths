import React from 'react';
import { useHistory } from 'react-router-dom';

function BackButton() {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <button className="back-button" onClick={handleGoBack}>Go Back</button>
  );
}

export default BackButton;