import editingBoochReducer from '../../reducers/editing-booch-reducer';
import * as c from '../../actions/ActionTypes';

describe("editingBoochReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(editingBoochReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle editing state to true', () => {
    expect(editingBoochReducer(false, { type: c.SET_EDIT })).toEqual(true);
  });
  
});