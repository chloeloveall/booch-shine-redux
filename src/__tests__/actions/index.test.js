import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';

describe('booch shine actions', () => {
  it('deleteBooch should create DELETE_BOOCH action', () => {
    expect(actions.deleteBooch(1)).toEqual({
      type: c.DELETE_BOOCH,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
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
      type: c.ADD_BOOCH,
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

  it('nullifyBooch should create MAKE_NULL action', () => {
    expect(actions.nullifyBooch()).toEqual({
      type: c.MAKE_NULL
    });
  });

  it('selectBooch should create SELECT_BOOCH action', () => {
    expect(actions.selectBooch()).toEqual({
      type: c.SELECT_BOOCH
    });
  });

  it('setEdit should create SET_EDIT action', () => {
    expect(actions.setEdit()).toEqual({
      type: c.SET_EDIT
    });
  });

});