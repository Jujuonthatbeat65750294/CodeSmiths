import React from 'react';

function BigButton({ text, onClick }) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}

export default ReusableButton;