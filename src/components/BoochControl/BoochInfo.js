import React from 'react';
import Grid from '@material-ui/core/Grid';
import BoochInfoImg from '../../img/booch-info.png';

const boochInfoImgStyle = {
  maxWidth: '100%',
  filter: 'drop-shadow(0 0 10px #000000)',
  margin: 'auto',
  padding: '3%',
}

const boochInfoTextStyle = {
  margin: 'auto',
  padding: '3%',
}

const boochInfoH2Style = {
  color: '#f2be40',
  filter: 'drop-shadow(1px 1px 0 black)'
}

const boochInfoPStyle = {
  color: '#000000',
  fontSize: '20px',
}

const BoochInfo = () => {
  return (
    <>
      <Grid style={boochInfoTextStyle} item xs={12} sm={12} md={6} lg={6} xl={6}>
        <h2 style={boochInfoH2Style}>We brew sustainable, transparent, and insanely delicious hard kombucha.</h2>
        <div style={boochInfoPStyle}>
          <p>It all started as we were wandering the aisles of our local grocery store. There was a sustainable, transparent option in nearly every consumer category – except alcohol.</p>
          <p>This led us to ask: why do we know so much about the food we eat, but so little about the alcohol we drink?</p>
          <p>With no solid answers in sight, we grew frustrated by the lack of honest, transparent alcohol brands catering to our healthy, active lifestyles. So, we decided to start our own.</p>
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <img style={boochInfoImgStyle} src={BoochInfoImg} alt='Eighth slide' />
      </Grid>
    </>
  );
}

export default BoochInfo;