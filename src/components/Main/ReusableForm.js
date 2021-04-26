import React from 'react';
import PropTypes from 'prop-types';

export default function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Booch Name'
        />
        <input
          type='text'
          name='brand'
          placeholder='Brand or Type'
        />
        <input
          type='text'
          name='price'
          placeholder='Price per Pint'
        />
        <input
          type='text'
          name='alcoholContent'
          placeholder='Alcohol Content'
        />
        <textarea
          name='flavorDescription'
          placeholder='Brief description of the flavor.'
        />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};