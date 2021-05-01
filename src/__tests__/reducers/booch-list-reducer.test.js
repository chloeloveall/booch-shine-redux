import boochListReducer from '../../reducers/booch-list-reducer';

describe('boochListReducer', () => {

  let action;

  const currentState = {
    1: { name: 'Midnight Painkiller',
      brand: 'Hard Kombucha',
      price: '$7.99',
      alcoholContent: '6%',
      flavorDescription: 'Pineapple and charcoal',
      remainingPints: '124',
      // remainingPintsMessage: PropTypes.string,
      id: 1 },
    2: { name: 'Blood Orange Mint',
      brand: 'Kombucha',
      price: '$5.99',
      alcoholContent: '0%',
      flavorDescription: 'Blood orange and mint',
      remainingPints: '124',
      // remainingPintsMessage: PropTypes.string,
      id: 2 },
  }

  const boochData = {
    name: 'Midnight Painkiller',
    brand: 'Hard Kombucha',
    price: '$7.99',
    alcoholContent: '6%',
    flavorDescription: 'Pineapple and charcoal',
    remainingPints: '124',
    // remainingPintsMessage: PropTypes.string,
    id: 1,
  };
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(boochListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new booch data to mainBoochList', () => {
    const { name, brand, price, alcoholContent, flavorDescription, remainingPints, id } = boochData;
    action = {
      type: 'ADD_BOOCH',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      flavorDescription: flavorDescription,
      remainingPints: remainingPints,
      // remainingPintsMessage: PropTypes.string,
      id: id,
    };

    expect(boochListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        flavorDescription: flavorDescription,
        remainingPints: remainingPints,
        // remainingPintsMessage: PropTypes.string,
        id: id,
      }
    });
  });

  test('Should successfully delete a booch', () => {
    action = {
      type: 'DELETE_BOOCH',
      id: 1
    };
    expect(boochListReducer(currentState, action)).toEqual({
      2: { name: 'Blood Orange Mint',
        brand: 'Kombucha',
        price: '$5.99',
        alcoholContent: '0%',
        flavorDescription: 'Blood orange and mint',
        remainingPints: '124',
        // remainingPintsMessage: PropTypes.string,
        id: 2 },
    });
  });

});