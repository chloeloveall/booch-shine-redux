import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Icon } from 'semantic-ui-react';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: '#000000',
//     color: '#ffffff',
//     maxHeight: '1.5em',
//   },
  // title: {
  //   margin: 'auto',
  //   padding: '.25em',
  //   fontWeight: 'bold',
  //   fontSize: '8px',
  // },
// 
const root = {
  flexGrow: 1,
  backgroundColor: '#000000',
  color: '#ffffff',
  maxHeight: '1.5em',
}

const title = {
  margin: 'auto',
  padding: '.25em',
  fontWeight: 'bold',
  fontSize: '8px',
}

export default function Promo() {
  // const classes = useStyles()

  return (
    <>
      <AppBar elevation={0} position="static" style={root}>
        <div className="ticker-wrap">
          <div className="ticker-move">
            <div style={title} className="ticker-item">NEW SUMMER FLAVORS AVAILABLE NOW!</div>
            <div style={title} className="ticker-item">
              <Icon name='lemon'></Icon>
            </div>
            <div style={title} className="ticker-item">ORDERS OVER $50 SHIP FREE!</div>
            <div style={title} className="ticker-item">
              <Icon name='leaf'></Icon>
            </div>
            <div style={title} className="ticker-item">GLUTEN-FREE</div>
            <div style={title} className="ticker-item">
              <Icon name='lemon'></Icon>
            </div>
            <div style={title} className="ticker-item">ORGANIC</div>
            <div style={title} className="ticker-item">
              <Icon name='leaf'></Icon>
            </div>
            <div style={title} className="ticker-item">PROBIOTIC</div>
            <div style={title} className="ticker-item">
              <Icon name='lemon'></Icon>
            </div>
            <div style={title} className="ticker-item">6% ABV</div>
            <div style={title} className="ticker-item">
              <Icon name='leaf'></Icon>
            </div>
            <div style={title} className="ticker-item">LOW-SUGAR</div>
            <div style={title} className="ticker-item">
              <Icon name='lemon'></Icon>
            </div>
            <div style={title} className="ticker-item">SMOOTH, BUT NOT TOO SWEET</div>
          </div>
        </div>
      </AppBar>
    </>
  );
}
