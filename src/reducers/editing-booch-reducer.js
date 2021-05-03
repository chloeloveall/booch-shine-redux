import * as c from '../actions/ActionTypes';

const EditingBoochReducer = (state = false, action) => {
  switch (action.type) {
  case c.SET_EDIT:
    return !state;
  default:
    return state;
  }
};

export default EditingBoochReducer;