export const deleteBooch = id => ({
  type: 'DELETE_BOOCH',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addBooch = (booch) => {
  const { name, brand, price, alcoholContent, flavorDescription, remainingPints, id } = booch;
  return {
    type: 'ADD_BOOCH',
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