import React from 'react';
import ReusableForm from './ReusableForm';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import BoochNewForm from '../../img/booch-newform.png';

const newBoochImgStyle = {
  maxWidth: '100%',
  filter: 'drop-shadow(0 0 10px #000000)',
  margin: 'auto',
  padding: '3%',
}

const newBoochFormStyle = {
  margin: 'auto',
  padding: '3%',
  color: '#000000',
}

const NewBoochForm = (props) => {
  function handleNewBoochFormSubmission(event) {
    event.preventDefault();
    props.onNewBoochCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      flavorDescription: event.target.flavorDescription.value,
      remainingPints: 124,
      id: v4()
    });
  }

  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <img style={newBoochImgStyle} src={BoochNewForm} alt='Eighth slide' />
      </Grid>
      <Grid style={newBoochFormStyle} item xs={12} sm={12} md={6} lg={6} xl={6}>
        <ReusableForm 
          formSubmissionHandler={handleNewBoochFormSubmission}
          buttonText="Add Booch!"
        />
      </Grid>
    </>
  );
}

NewBoochForm.propTypes = {
  onNewBoochCreation: PropTypes.func
};

export default NewBoochForm;