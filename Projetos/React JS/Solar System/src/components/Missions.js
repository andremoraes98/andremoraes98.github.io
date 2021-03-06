import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div className='main' data-testid="missions">
        <Title headline="Missões" />
        { missions
          .map((mission, index) => (<MissionCard
            key={ index }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />))}
      </div>
    );
  }
}

export default Missions;
