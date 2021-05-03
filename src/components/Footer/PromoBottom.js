import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Icon } from 'semantic-ui-react';

const root = {
  flexGrow: 1,
  backgroundColor: '#000000',
  color: '#ffffff',
  maxHeight: '1.5em',
}

const title = {
  margin: 'auto',
  padding: '0 40px',
  fontWeight: 'bold',
  fontSize: '10px',
}

const PromoBottom = () => {

  return (
    <>
      <AppBar elevation={0} position="static" style={root}>
        <div className="ticker-wrap">
          <div className="ticker-move-lower">
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

export default PromoBottom;