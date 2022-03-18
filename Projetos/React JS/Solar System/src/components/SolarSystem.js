import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const name = 'Planetas';
    return (
      <div className="main" data-testid="solar-system">
        <Title headline={ name } />
        <section>
          { planets
            .map((planet, index) => (<PlanetCard
              key={ index }
              planetName={ planet.name }
              planetImage={ planet.image }
            />)) }
        </section>
      </div>
    );
  }
}

export default SolarSystem;
