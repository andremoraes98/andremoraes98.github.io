import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      onSaveButtonClick,
      isSaveButtonDisabled,
      onInputChange,
      hasTrunfo } = this.props;

    let erro = false;
    const emptyValues = [cardName, cardDescription, cardImage, cardRare];
    const totalAttr = parseFloat(cardAttr1)
    + parseFloat(cardAttr2) + parseFloat(cardAttr3);
    const maxTotalAttrValue = 210;
    const maxAttr = 90;

    if (!emptyValues.map((emptyValue) => emptyValue !== '').includes(false)) {
      erro = !isSaveButtonDisabled;
      if (totalAttr <= maxTotalAttrValue && totalAttr >= 0) {
        erro = !isSaveButtonDisabled;
        if (cardAttr1 <= maxAttr && cardAttr2 <= maxAttr && cardAttr3 <= maxAttr
          && cardAttr1 >= 0 && cardAttr2 >= 0 && cardAttr3 >= 0) {
          erro = !isSaveButtonDisabled;
        } else {
          erro = isSaveButtonDisabled;
        }
      } else {
        erro = isSaveButtonDisabled;
      }
    } else {
      erro = isSaveButtonDisabled;
    }

    return (
      <>
        <h1>Adicionar carta</h1>
        <label htmlFor="name">
          Nome
          <input
            name="name"
            data-testid="name-input"
            type="text"
            className="input-text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea
            name="description"
            data-testid="description-input"
            className="input-textarea"
            rows={ 4 }
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1">
          Atributo 1
          <input
            name="attr1"
            data-testid="attr1-input"
            type="number"
            className="input-number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2">
          Atributo 2
          <input
            name="attr2"
            data-testid="attr2-input"
            type="number"
            className="input-number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3">
          Atributo 3
          <input
            name="attr3"
            data-testid="attr3-input"
            type="number"
            className="input-number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image">
          Imagem
          <input
            name="image"
            data-testid="image-input"
            type="text"
            className="input-text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rarity">
          Raridade
          <select
            name="rarity"
            data-testid="rare-input"
            className="input-list"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p>
          : (
            <label htmlFor="tryunfo">
              Super Tryunfo
              <input
                name="tryunfo"
                data-testid="trunfo-input"
                type="checkbox"
                className="input-checkbox"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>
          )}

        <button
          disabled={ !erro }
          type="button"
          data-testid="save-button"
          onClick={ onSaveButtonClick }
          className="save-button"
        >
          Salvar
        </button>
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Form;
