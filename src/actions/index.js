import * as c from './../actions/ActionTypes';

export const deleteBooch = id => ({
  type: c.DELETE_BOOCH,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addBooch = (booch) => {
  const { name, brand, price, alcoholContent, flavorDescription, remainingPints, id } = booch;
  return {
    type: c.ADD_BOOCH,
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    flavorDescription: flavorDescription,
    remainingPints: remainingPints,
    // remainingPintsMessage: PropTypes.string,
    id: id,
  }
}

export const nullifyBooch = id => ({
  type: c.MAKE_NULL,
  id
});