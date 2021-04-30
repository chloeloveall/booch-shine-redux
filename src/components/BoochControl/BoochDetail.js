import React from 'react';
import PropTypes from 'prop-types';

export default function BoochDetail(props) {
  const { booch, onClickingDelete } = props;
  return (
    <>
      <h1>Hard Booch Detail</h1>
      <h3>{booch.name}</h3>
      <p>{booch.brand}</p>
      <p>{booch.price}</p>
      <p>{booch.alcoholContent}</p>
      <p>{booch.flavorDescription}</p>
      <p>{booch.remainingPints}</p>
      <p>{booch.remainingPintsMessage}</p>
      <button onClick={ props.onClickingEdit }>Update Booch</button>
      <button onClick={() => onClickingDelete(booch.id)}>Delete Booch</button>
      <button onClick={ props.onClickingBuy }>Buy Pint</button>
      <hr/>
    </>
  );
}

BoochDetail.propTypes = {
  booch: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingEdit: PropTypes.func
};