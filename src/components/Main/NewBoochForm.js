import React from 'react';
import ReusableForm from './ReusableForm';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

export default function NewBoochForm(props) {
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
      <ReusableForm 
        formSubmissionHandler={handleNewBoochFormSubmission}
        buttonText="Add Booch!"
      />
    </>
  );
}

NewBoochForm.propTypes = {
  onNewBoochCreation: PropTypes.func
};