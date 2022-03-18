import React from 'react';
import PropTypes from 'prop-types';

class SuperTrunfoFilter extends React.Component {
  render() {
    const { value, onInputChange } = this.props;
    return (
      <label htmlFor="tryunfoFilter">
        Super Trunfo
        <input
          name="tryunfoFilter"
          data-testid="trunfo-filter"
          type="checkbox"
          className="input-checkbox"
          checked={ value }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

SuperTrunfoFilter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
};

export default SuperTrunfoFilter;
