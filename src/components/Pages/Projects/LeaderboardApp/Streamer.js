import React from 'react';
import './styles.scss'; // assuming the CSS file is located in this path

const Streamer = ({ number, userId, displayName, picture, score }) => {
  return (
    <div className='leaderboard__container'>
      <div className='leaderboard__itemNum'>{number + 1}</div>
      <div>
        <div
          className='leaderboard__profilePic'
          style={{ backgroundImage: `url(${picture})` }}
        />
      </div>
      <div>{displayName}</div>
      <div className='leaderboard__points'> {score}pt</div>
    </div>
  );
};

export default Streamer;
