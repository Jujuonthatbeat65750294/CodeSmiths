import React from 'react';

function GameItem({ title, imageUrl, description }) {
  return (
    <div className="item active" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="item-desc">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default GameItem;
