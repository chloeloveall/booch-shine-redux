import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from  'react-bootstrap/Col';
import Button from  'react-bootstrap/Button';
import Grid from '@material-ui/core/Grid';

// const formStyles = {
//   padding: '4%',
// }

const ReusableForm = (props) => {
// export default function ReusableForm(props) {
  return (
    <>
      {/* <Grid 
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        style={formStyles}
      >
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          am image
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}> */}
          {/* form */}
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
        {/* </Grid>
      </Grid> */}
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;