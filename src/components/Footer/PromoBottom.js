import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Icon } from 'semantic-ui-react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#000000',
    color: '#ffffff',
    maxHeight: '1.5em',
  },
  title: {
    margin: 'auto',
    padding: '.25em',
    fontWeight: 'bold',
    fontSize: '8px',
  },
}));

export default function Promo() {
  const classes = useStyles()

  return (
    <>
      <AppBar elevation={0} position="static" className={classes.root}>
        <div className="ticker-wrap">
          <div className="ticker-move-lower">
            <div className={classes.title} className="ticker-item">NEW SUMMER FLAVORS AVAILABLE NOW!</div>
            <div className={classes.title} className="ticker-item">
              <Icon className={classes.iconStyle} name='lemon'></Icon>
            </div>
            <div className={classes.title} className="ticker-item">ORDERS OVER $50 SHIP FREE!</div>
            <div className={classes.title} className="ticker-item">
              <Icon className={classes.iconStyle} name='leaf'></Icon>
            </div>
            <div className={classes.title} className="ticker-item">GLUTEN-FREE</div>
            <div className={classes.title} className="ticker-item">
              <Icon className={classes.iconStyle} name='lemon'></Icon>
            </div>
            <div className={classes.title} className="ticker-item">ORGANIC</div>
            <div className={classes.title} className="ticker-item">
              <Icon className={classes.iconStyle} name='leaf'></Icon>
            </div>
            <div className={classes.title} className="ticker-item">PROBIOTIC</div>
            <div className={classes.title} className="ticker-item">
              <Icon className={classes.iconStyle} name='lemon'></Icon>
            </div>
            <div className={classes.title} className="ticker-item">6% ABV</div>
            <div className={classes.title} className="ticker-item">
              <Icon className={classes.iconStyle} name='leaf'></Icon>
            </div>
            <div className={classes.title} className="ticker-item">LOW-SUGAR</div>
            <div className={classes.title} className="ticker-item">
              <Icon className={classes.iconStyle} name='lemon'></Icon>
            </div>
            <div className={classes.title} className="ticker-item">SMOOTH, BUT NOT TOO SWEET</div>
          </div>
        </div>
      </AppBar>
    </>
  );
}
