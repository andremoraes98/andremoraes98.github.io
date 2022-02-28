import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;

    return (
      <div className='mission' data-testid="mission-card">
        <p data-testid="mission-name">
          Missão: <span className='gray'>{ name }</span>
        </p>
        <p data-testid="mission-year">
          Ano: <span className='gray'>{ year }</span>
        </p>
        <p data-testid="mission-country">
          País de origem: <span className='gray'>{ country }</span>
        </p>
        <p data-testid="mission-destination">
          Destino: <span className='gray'>{ destination }</span>
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
