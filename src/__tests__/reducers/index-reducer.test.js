import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import boochListReducer from '../../reducers/booch-list-reducer';
import selectedBoochReducer from '../../reducers/selected-booch-reducer';
import * as c from '../../actions/ActionTypes';

let store = createStore(rootReducer)

describe('rootReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainBoochList: {},
      formVisibleOnPage: false,
      selectedBooch: null
    });
  });

  test('Check that initial state of boochListReducer matches root reducer', () => {
    expect(store.getState().mainBoochList).toEqual(
      boochListReducer(undefined, { type: null }),
    );
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(
      formVisibleReducer(undefined, { type: null }),
    );
  });

  test('Check that initial state of selectedBoochReducer matches root reducer', () => {
    expect(store.getState().selectedBooch).toEqual(
      selectedBoochReducer(null, { type: null }),
    );
  });

  test('Check that ADD_BOOCH action works for boochListReducer and root reducer', () => {
    const action = {
      type: c.ADD_BOOCH,
      name: 'Midnight Painkiller',
      brand: 'Hard Kombucha',
      price: '$7.99',
      alcoholContent: '6%',
      flavorDescription: 'Pineapple and charcoal',
      remainingPints: '124',
      // remainingPintsMessage: PropTypes.string,
      id: 1,
    }
    store.dispatch(action)
    expect(store.getState().mainBoochList).toEqual(
      boochListReducer(undefined, action),
    );
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM,
    }
    store.dispatch(action)
    expect(store.getState().formVisibleOnPage).toEqual(
      formVisibleReducer(undefined, action),
    );
  });

  test('Check that SELECT_BOOCH action works for selectedBoochReducer and root reducer', () => {
    const action = {
      type: c.SELECT_BOOCH,
      id: 1
    }
    store.dispatch(action)
    expect(store.getState().selectedBooch).toEqual(
      selectedBoochReducer(null, action),
    );
  });

  test('Check that MAKE_NULL action works for selectedBoochReducer and root reducer', () => {
    const action = {
      type: c.MAKE_NULL
    }
    store.dispatch(action)
    expect(store.getState().selectedBooch).toEqual(
      selectedBoochReducer(1, action),
    );
  });

});
