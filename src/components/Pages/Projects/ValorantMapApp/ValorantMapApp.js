import React from 'react';
import { Tab, Tabs, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { mapData } from 'components/Utils/mapArray';
import './styles.scss';

const ValorantMapApp = () => {
  return (
    <section className='valorantmap'>
      <Tabs className='mt-3 bg-light' fill>
        {/* [Todo]Later add map pics for each map on tabs */}
        {mapData.map((item) => (
          <Tab
            eventKey={item.eventKey}
            className='bg-light p-6'
            title={item.title}>
            {/* [Todo] add a rotate map feature */}
            {/* [To Do] We will need add .map() and SRC to reduce reduncy of the same components and elements for each map */}

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
