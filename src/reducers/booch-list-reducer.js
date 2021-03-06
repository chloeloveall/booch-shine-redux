import * as c from './../actions/ActionTypes';

const BoochListReducer = (state = {}, action) => {
  const { name, brand, price, alcoholContent, flavorDescription, remainingPints, id } = action;
  switch (action.type) {
  case c.ADD_BOOCH:
    return Object.assign({}, state, {
      [id]: {
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
  case c.DELETE_BOOCH:
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};

export default BoochListReducer;