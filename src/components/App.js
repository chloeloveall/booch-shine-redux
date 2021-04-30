import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Container from '@material-ui/core/Container';
import BoochControl from './BoochControl/BoochControl';

const pageStyles = {
  margin: 'auto',
  padding: 0,
  minHeight: '100vh',
  backgroundColor: '#FCF7F5'
}

const stickyHeader = {
  position: 'sticky',
  top: 0,
  width: '100%',
  zIndex: 1,
}

export default function App() {
  return (
    <>
      <Container maxWidth='xl' style={pageStyles}>
        <div style={stickyHeader}>
        <Header />
        </div>
        <Main />
        <BoochControl />
        <Footer />
      </Container>
    </>
  );
}