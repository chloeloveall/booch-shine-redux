export default (state = {}, action) => {
  const { name, brand, price, alcoholContent, flavorDescription, remainingPints, id } = action;
  switch (action.type) {
  case 'ADD_BOOCH':
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
  case 'DELETE_BOOCH':
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};