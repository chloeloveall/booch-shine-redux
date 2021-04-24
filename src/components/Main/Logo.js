import React from 'react'
import JuneshineLogo from '../../img/juneshine-logo-text.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(3, 0, 6),
  },
  pageStyles: {
    maxHeight: '70px',
    margin: 'auto',
    marginBottom: 0,
    marginTop: 0,
    display: 'block',
    filter: 'invert(100%) drop-shadow(1.5px 1.5px 0 black)',
  },
}));

export default function Logo() {
  const classes = useStyles()

  return (
    <>
      <div className={classes.heroContent}>
        <img className={classes.pageStyles} src={JuneshineLogo} />
      </div>
    </>
  );
}