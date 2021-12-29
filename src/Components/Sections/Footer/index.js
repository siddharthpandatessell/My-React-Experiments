import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Footer(props) {
  const {content} = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100%" sx={{border: '2px solid red'}}>
      <Typography variant="h3" gutterBottom component="div">
      {content} Footer
      </Typography>
      </Container>
    </React.Fragment>
  );
}
