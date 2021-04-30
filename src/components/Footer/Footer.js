import React from 'react';
import Contact from './Contact';
import PromoBottom from './PromoBottom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#000000',
    borderTop: '2px solid #ffffff',
  },
}));

const Footer = () => {
// export default function Footer() {

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Contact />
          </Grid>
        </Grid>
        <PromoBottom />
      </div>
    </>
  );
}

export default Footer;