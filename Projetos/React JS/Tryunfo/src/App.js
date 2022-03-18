import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Option from './components/Option';
import SuperTrunfoFilter from './components/SuperTrunfoFilter';
import NameFilter from './components/NameFilter';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.removeCardFromDeck = this.removeCardFromDeck.bind(this);
    this.setHasTrunfoTrue = this.setHasTrunfoTrue.bind(this);
    this.searchCardsWithName = this.searchCardsWithName.bind(this);
    this.removeCardFromState = this.removeCardFromState.bind(this);
    this.searchCardsWithRarity = this.searchCardsWithRarity.bind(this);
    this.searchTryunfoCards = this.searchTryunfoCards.bind(this);

    this.state = {
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rarity: '',
      tryunfo: false,
      isSaveButtonDisabled: false,
      createdCards: [],
      hasTrunfo: false,
      nameFilter: '',
      rarityFilter: 'todas',
      tryunfoFilter: false,
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rarity,
      tryunfo,
    } = this.state;
    this.setState((prevState) => ({
      createdCards: [...prevState.createdCards, {
        name,
        description,
        attr1,
        attr2,
        attr3,
        image,
        rarity,
        tryunfo,
      }],
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rarity: '',
      tryunfo: false,
    }));
    if (tryunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

  setHasTrunfoTrue(bool) {
    return !bool;
  }

  getCardsFiltred = () => {
    let filtredCars = this.searchCardsWithName();
    filtredCars = this.searchCardsWithRarity(filtredCars);
    filtredCars = this.searchTryunfoCards(filtredCars);
    return filtredCars;
  }

  searchCardsWithRarity(arrayOfCards) {
    const { rarityFilter } = this.state;
    const filtredCards = arrayOfCards.filter((card) => card.rarity === rarityFilter);
    if (rarityFilter === 'todas') {
      return arrayOfCards;
    } return filtredCards;
  }

  searchTryunfoCards(arrayOfCards) {
    const { tryunfoFilter } = this.state;
    const filtredCards = arrayOfCards.filter((card) => card.tryunfo);
    if (tryunfoFilter && filtredCards.length === 1) {
      return filtredCards;
    } return arrayOfCards;
  }

  searchCardsWithName() {
    const { createdCards, nameFilter } = this.state;
    const filtredCards = !createdCards ? [] : createdCards.filter((card) => {
      const tratedCardName = card.name.toLowerCase();
      const tratedStringSearch = nameFilter.toLowerCase();
      return tratedCardName.includes(tratedStringSearch);
    });
    return filtredCards;
  }

  removeCardFromDeck({ target }) {
    const card = target.parentElement;
    const cardName = card.firstElementChild.firstElementChild.innerHTML;
    const isSuperTrunfo = target.previousSibling.lastChild.innerHTML === 'Super Trunfo';
    const newArrayOfCreatedCards = this.removeCardFromState(cardName);
    if (isSuperTrunfo) {
      this.setState({
        hasTrunfo: false,
      });
    }
    this.setState({
      createdCards: newArrayOfCreatedCards,
    });
  }

  removeCardFromState(cardName) {
    const { createdCards } = this.state;
    return createdCards.filter((card) => card.name !== cardName);
  }

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rarity,
      tryunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      createdCards,
      nameFiltered,
      rarityFilter,
      tryunfoFilter,
    } = this.state;
    return (
      <main>
        <section>
          <form className="character">
            <Form
              cardName={ name }
              cardDescription={ description }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardImage={ image }
              cardRare={ rarity }
              cardTrunfo={ tryunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
              createdCards={ createdCards }
              setHasTrunfoTrue={ this.setHasTrunfoTrue }
            />
          </form>

          <div className="preview">
            <h1>Pré-visualização</h1>
            <Card
              cardName={ name }
              cardDescription={ description }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardImage={ image }
              cardRare={ rarity }
              cardTrunfo={ tryunfo }
            />
          </div>
        </section>

        <h1>Todas as cartas</h1>
        <section className="all-cards">
          <div className="search">

            <NameFilter
              value={ nameFiltered }
              onInputChange={ this.onInputChange }
            />

            <Option
              value={ rarityFilter }
              onInputChange={ this.onInputChange }
            />

            <SuperTrunfoFilter
              value={ tryunfoFilter }
              onInputChange={ this.onInputChange }
            />

          </div>

          <div className="colection">
            { this.getCardsFiltred().map((card) => (
              <div className="each-card" key={ card.name }>
                <Card
                  cardName={ card.name }
                  cardDescription={ card.description }
                  cardAttr1={ card.attr1 }
                  cardAttr2={ card.attr2 }
                  cardAttr3={ card.attr3 }
                  cardImage={ card.image }
                  cardRare={ card.rarity }
                  cardTrunfo={ card.tryunfo }
                />
                <button
                  type="button"
                  data-testid="delete-button"
                  className="delete-button"
                  onClick={ this.removeCardFromDeck }
                >
                  Excluir
                </button>
              </div>
            )) }
          </div>
        </section>
      </main>
    );
  }
}

export default App;
