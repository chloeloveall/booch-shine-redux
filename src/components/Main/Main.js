import React from 'react';
import DarkBackground from '../../img/darkbackground.png';
import Logo from './Logo';
import ImageCarousel from './ImageCarousel';
import BoochControl from './BoochControl';

const pageStyles = {
  backgroundColor: '#F8D294',
  margin: 'auto',
  filter: 'drop-shadow(0 7px 3px rgba(0, 0, 0, .4))',
}

const test = {
  backgroundColor: '#ffffff',
  height: '500px',
}

export default function Main() {
  return (
    <>
      <div style={pageStyles, {backgroundColor: '#000000', backgroundImage: `url(${DarkBackground})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
        <Logo />
        <ImageCarousel />
        <div style={test}>
          <BoochControl />
        </div>
      </div>
    </>
  );
}