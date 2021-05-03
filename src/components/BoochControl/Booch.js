import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const boochStyle = {
  margin: 'auto',
  padding: '10%',
  color: '#000000',
}

const Booch = (props) => {
  return (
    <>
      <div onClick = {() => props.whenBoochClicked(props.id)}>
        <Grid
          container
          direction='column' 
          justify='space-evenly' 
          style={boochStyle} 
          item
        >
          <h3>{props.name}</h3>
          <p>{props.brand}</p>
          <p>{props.price}</p>
          <p>{props.alcoholContent}</p>
          <p>{props.flavorDescription}</p>
          <p>{props.remainingPints}</p>
          <p>{props.remainingPintsMessage}</p>
        </Grid>
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
  remainingPintsMessage: PropTypes.string,
  id: PropTypes.string,
  whenBoochClicked: PropTypes.func
};

export default Booch;