import React from 'react';
import PropTypes from 'prop-types';

export default function Booch(props) {
  return (
    <>
      <div onClick = {() => props.whenBoochClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.brand}</p>
        <p>{props.price}</p>
        <p>{props.alcoholContent}</p>
        <p>{props.flavorDescription}</p>
        <p>{props.remainingPints}</p>
        <hr/>
      </div>
    </>
  );
}

Booch.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string,
  flavorDescription: PropTypes.string.isRequired,
  remainingPints: PropTypes.number,
  id: PropTypes.string,
  whenBoochClicked: PropTypes.func
};