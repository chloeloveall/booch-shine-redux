import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from 'react-bootstrap/Card'

const useStyles = makeStyles((theme) => ({
  overlay: {
	transform: 'translateY(50%)',
    backgroundColor: '#000000',
    opacity: '.8',
    color: '#ffffff',
    padding: '20px',
    margin: 'auto',
    border: '2px #ffffff solid',
  }
}));

const Contact = () => {

  const classes = useStyles();

  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img style={{ minHeight: '300px'}} src='https://media.giphy.com/media/HLsH9WYM3JcNN4FRli/giphy.gif' alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Contact</Card.Title>
          <Card.Text className={classes.overlay}>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default Contact;