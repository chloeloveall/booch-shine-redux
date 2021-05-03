import selectedBoochReducer from '../../reducers/selected-booch-reducer';
import * as c from '../../actions/ActionTypes';

describe("selectedBoochReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(selectedBoochReducer(null, { type: null })).toEqual(null);
  });

  test('Should return selected booch', () => {
    const action = {
      type: c.SELECT_BOOCH,
      id: 1,
    }
    expect(selectedBoochReducer(null, action)).toEqual(1);
  });

  test('Should return to default state of null when MAKE_NULL is action', () => {
    const action = {
      type: c.MAKE_NULL
    }
    expect(selectedBoochReducer(1, action)).toEqual(null);
  });
  
});