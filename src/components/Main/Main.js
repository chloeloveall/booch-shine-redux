import React from 'react';
import Oranges from '../../img/oranges-background-final.svg';
import Oranges2 from '../../img/oranges-background-final-inverse.svg';
import Logo from './Logo';
import ImageCarousel from './ImageCarousel';

const pageStyles = {
  backgroundColor: '#F8D294',
  margin: 'auto',
}

export default function Main() {
  return (
    <>
      <div style={pageStyles, {backgroundColor: '#F8D294', backgroundImage: `url(${Oranges}), url(${Oranges2})`, backgroundRepeat: 'no-repeat, no-repeat', backgroundPosition: 'left top, right top'}}>
        <Logo />
        <ImageCarousel />
      </div>
    </>
  );
}