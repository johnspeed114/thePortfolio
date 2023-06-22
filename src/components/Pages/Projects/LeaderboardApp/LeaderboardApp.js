import React, { useState, useEffect } from 'react';
import { Reorder } from 'framer-motion';
import { Card } from 'react-bootstrap';
import Streamer from './Streamer';
import './styles.css';
const LeaderboardApp = () => {
  const [streamerList, setStreamersList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          'https://webcdn.17app.co/campaign/pretest/data.json'
        );

        if (!response.ok) throw new Error('Something went wrong');

        const data = await response.json();
        setStreamersList(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const randomizer = () => {
      let newArr = [...streamerList];
      const eleSelect = Math.floor(Math.random() * (newArr.length - 1));
      const status = Math.floor(Math.random() * 2);

      switch (status) {
        case 0:
          newArr[eleSelect].score += Math.floor(Math.random() * 500);
          break;
        case 1:
          newArr[eleSelect].score -= Math.floor(Math.random() * 500);
          break;
        default:
          console.log('wrong status');
      }

      newArr = newArr.sort((a, b) => b.score - a.score);
      setStreamersList(newArr);
    };

    const interval = setInterval(randomizer, 100);

    return () => clearInterval(interval);
  }, [streamerList]);

  return (
    <div className='leaderboard'>
      <Reorder.Group values={streamerList} onReorder={setStreamersList}>
        <Card>
          {streamerList.map((streamer, index) => (
            // Replaced the use of index as a key in the .map() function with streamer.userID.
            // Using indexes as keys can lead to issues in React
            <Reorder.Item as='div' key={streamer.userID} value={streamer}>
              <Streamer
                number={index}
                userId={streamer.userID}
                displayName={streamer.displayName}
                picture={streamer.picture}
                score={streamer.score}
                key={index} // using index as key is not recommended, if userID is unique it would be better
              />
            </Reorder.Item>
          ))}
        </Card>
      </Reorder.Group>
    </div>
  );
};

export default LeaderboardApp;
