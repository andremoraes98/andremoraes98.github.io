import React from 'react';
import PropTypes from 'prop-types';

class Option extends React.Component {
  render() {
    const { onInputChange, rarityFilter } = this.props;
    return (
      <label htmlFor="rarityFilter">
        Raridade:
        <select
          name="rarityFilter"
          data-testid="rare-filter"
          value={ rarityFilter }
          onChange={ onInputChange }
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </label>);
  }
}

Option.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  rarityFilter: PropTypes.string.isRequired,
};

export default Option;
