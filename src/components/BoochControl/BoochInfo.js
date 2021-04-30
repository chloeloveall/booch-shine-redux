import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function BoochInfo() {
  return (
    <>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        an image
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        text info
      </Grid>
    </>
  );
}