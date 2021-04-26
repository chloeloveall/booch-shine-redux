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
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // },
}));

export default function Footer() {

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            {/* <Paper className={classes.paper}>contact detail</Paper> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Contact />
            {/* <Paper className={classes.paper}>something else</Paper> */}
          </Grid>
        </Grid>
        <PromoBottom />
      </div>
    </>
  );
}