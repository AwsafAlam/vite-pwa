import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Meta from 'components/Meta';

import useStyles from './styles';

function MUI() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="MUI"
        description="Material UI"
      />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h3">Material UI</Typography>
      </Container>
    </>
  );
}

export default MUI;
