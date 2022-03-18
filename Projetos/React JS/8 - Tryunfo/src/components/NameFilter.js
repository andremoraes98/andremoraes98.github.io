import React from 'react';
import PropTypes from 'prop-types';

class NameFilter extends React.Component {
  render() {
    const { nameFiltered, onInputChange } = this.props;
    return (
      <label htmlFor="nameFilter">
        Nome
        <input
          name="nameFilter"
          data-testid="name-filter"
          type="text"
          className="input-text"
          value={ nameFiltered }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

NameFilter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  nameFiltered: PropTypes.bool.isRequired,
};

export default NameFilter;
