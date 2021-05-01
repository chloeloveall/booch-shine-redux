import * as actions from './../../actions';

describe('booch shine actions', () => {
  it('deleteBooch should create DELETE_BOOCH action', () => {
    expect(actions.deleteBooch(1)).toEqual({
      type: 'DELETE_BOOCH',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addBooch should create ADD_BOOCH action', () => {
    expect(actions.addBooch({
      name: 'Midnight Painkiller',
      brand: 'Hard Kombucha',
      price: '$7.99',
      alcoholContent: '6%',
      flavorDescription: 'Pineapple and charcoal',
      remainingPints: '124',
      // remainingPintsMessage: PropTypes.string,
      id: 1
    })).toEqual({
      type: 'ADD_BOOCH',
      name: 'Midnight Painkiller',
      brand: 'Hard Kombucha',
      price: '$7.99',
      alcoholContent: '6%',
      flavorDescription: 'Pineapple and charcoal',
      remainingPints: '124',
      // remainingPintsMessage: PropTypes.string,
      id: 1,
    });
  });
});