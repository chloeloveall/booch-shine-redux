import * as c from './../actions/ActionTypes';

const SelectedBoochReducer = (state = null, action) => {
  const { id } = action;
  switch (action.type) {
  case c.SELECT_BOOCH:
    return id;
  case c.MAKE_NULL:
    return null;
  default:
    return state;
  }
};

export default SelectedBoochReducer;