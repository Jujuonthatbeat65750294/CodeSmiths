import React from 'react';

function GameItem({ title, imageUrl, description }) {


const handleClick = () => {
  // Use history.push to navigate to another page
  // history.push('/other');
console.log('Game has been chosen');



};
  return (
    <div className="itemContainer">
    <div className="item active" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="item-desc">
        <h3>{title}</h3>
        <p>{description}</p>
      
      </div>
    </div>
      <div className="Go"  onClick={handleClick}  ></div>
    </div>
    
  );
}

export default GameItem;
