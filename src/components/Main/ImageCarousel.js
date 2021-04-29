import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { makeStyles } from '@material-ui/core/styles';
import Carousel1 from '../../img/carousel1.png';
import Carousel2 from '../../img/carousel2.png';
import Carousel3 from '../../img/carousel3.png';
import Carousel4 from '../../img/carousel4.png';
import Carousel5 from '../../img/carousel5.png';
import Carousel6 from '../../img/carousel6.png';
import Carousel7 from '../../img/carousel7.png';
import Carousel8 from '../../img/carousel8.png';

const useStyles = makeStyles(() => ({
  carouselStyle: {
    maxWidth: '75%',
    minWidth: '280px',
    height: 'auto',
    margin: 'auto',
    display: 'block',
    marginTop: 0,
    paddingTop: 0,
  },
  shadow: {
    filter: 'drop-shadow(0 0 10px #000000)',
    paddingBottom: '5em',
  },
}));

export default function ImageCarousel() {
  const classes = useStyles()

  return (
    <>
      <div className={classes.shadow}>
        <Carousel className={classes.carouselStyle}>
          <Carousel.Item>
            <img className='d-block w-100' src={Carousel1} alt='First slide' />
          </Carousel.Item>

          <Carousel.Item>
            <img className='d-block w-100' src={Carousel2} alt='Second slide' />
          </Carousel.Item>

          <Carousel.Item>
            <img className='d-block w-100' src={Carousel3} alt='Third slide' />
          </Carousel.Item>

          <Carousel.Item>
            <img className='d-block w-100' src={Carousel4} alt='Fifth slide' />
          </Carousel.Item>

          <Carousel.Item>
            <img className='d-block w-100' src={Carousel5} alt='Fifth slide' />
          </Carousel.Item>

          <Carousel.Item>
            <img className='d-block w-100' src={Carousel6} alt='Fifth slide' />
          </Carousel.Item>

          <Carousel.Item>
            <img className='d-block w-100' src={Carousel7} alt='Seventh slide' />
          </Carousel.Item>

          <Carousel.Item>
            <img className='d-block w-100' src={Carousel8} alt='Eighth slide' />
          </Carousel.Item>
        </Carousel>
      </div>  
    </>
  );
}