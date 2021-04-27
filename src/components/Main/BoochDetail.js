import React from 'react';
import PropTypes from 'prop-types';

export default function BoochDetail(props) {
  const { booch, onClickingDelete, onClickingBuy } = props;
  return (
    <>
      <h1>Hard Booch Detail</h1>
      <h3>{props.name}</h3>
      <p>{props.brand}</p>
      <p>{props.price}</p>
      <p>{props.alcoholContent}</p>
      <p>{props.flavorDescription}</p>
      <p>{props.remainingPints}</p>
      <button onClick={ props.onClickingEdit }>Update Booch</button>
      <button onClick={() => onClickingDelete(booch.id)}>Delete Booch</button>
      <button onClick={() => onClickingBuy(booch.id)}>Buy Booch</button>
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