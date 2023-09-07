import React from 'react';
import ReusableButton from './components/bigButton';

function Login() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="main_container">
      <ReusableButton text="Click me" onClick={handleClick} />
    </div>
  );
}

export default App;