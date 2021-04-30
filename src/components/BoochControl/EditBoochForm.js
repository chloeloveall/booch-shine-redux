import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

export default function EditBoochForm(props) {

  const { booch } = props;

  function handleEditBoochFormSubmission(event) {
    event.preventDefault();
    props.onEditBooch({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      flavorDescription: event.target.flavorDescription.value,
      // remainingPints: parseInt(event.target.remainingPints.value),  
      id: booch.id
    });
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleEditBoochFormSubmission}
        buttonText="Update Booch" />
    </>
  );
}

EditBoochForm.propTypes = {
  booch: PropTypes.object,
  onEditBooch: PropTypes.func
};