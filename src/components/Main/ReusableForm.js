import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from  'react-bootstrap/Col';
import Button from  'react-bootstrap/Button';

export default function ReusableForm(props) {
  return (
    <>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Row>
          <Form.Group as={Col} controlId="name">
            <Form.Label>Kombucha Name</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>Midnight Painkiller</option>
              <option>Acai Berry</option>
              <option>Blood Orange Mint</option>
              <option>Hopical Citrus</option>
              <option>Honey Ginger Lemon</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="brand">
            <Form.Label>Product Type</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>Hard Kombucha</option>
              <option>Kombucha</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
          
        <Form.Row>
          <Form.Group as={Col} controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>$3.99</option>
              <option>$4.99</option>
              <option>$5.99</option>
              <option>$6.99</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="alcoholContent">
            <Form.Label>ABV</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>0%</option>
              <option>6%</option>
            </Form.Control>
            </Form.Group>
          </Form.Row>  
          
        <Form.Row>
          <Form.Group as={Col} controlId="flavorDescription">
            <Form.Label>Product Description</Form.Label>
            <Form.Control as="textarea" placeholder='Brief description of the flavor.'>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          {props.buttonText}
        </Button>
      </Form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};