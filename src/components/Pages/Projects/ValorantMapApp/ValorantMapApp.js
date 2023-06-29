import React, { useEffect, useState } from 'react';
import { Tab, Tabs, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { mapData } from 'components/Utils/mapArray';
import './styles.scss';

const ValorantMapApp = () => {
  const [map, setMap] = useState([]);

  useEffect(() => {
    fetch(
      'https://valorant-api.com/v1/maps/2bee0dc9-4ffe-519b-1cbd-7fbe763a6047/'
    )
      .then((res) => res.json())
      .then((data) => {
        setMap(data.data);
        console.log(data.data);
      });
  }, []);
  console.log(map);
  return (
    <section className='valorantmap'>
      <Tabs className='mt-3 bg-light' fill>
        {/* [Todo]Later add map pics for each map on tabs */}
        {mapData.map((item) => (
          <Tab
            eventKey={item.eventKey}
            className='bg-light p-6'
            title={item.title}
            key={item.eventKey}>
            {/* [Todo] add a rotate map feature */}
            <div className='valorantmap__container'>
              <Image
                src={item.src}
                style={item.rotate ? { transform: 'rotate(90deg)' } : {}}
              />
            </div>
          </Tab>
        ))}
      </Tabs>
    </section>
  );
};

export default ValorantMapApp;
