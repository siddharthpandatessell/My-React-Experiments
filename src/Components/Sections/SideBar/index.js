import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Sidebar() {
  
  const getLinks = () => (
    [...Array(10).keys()].map(el => (<li><a href="www.google.com">Link {el}</a></li>))
  )
  return (
    // ul>li*10>a[href=www.google.com$]{a tag Content}
    <React.Fragment>
      <CssBaseline />
      <Box minWidth="30%" sx={{border: '2px solid red'}} minHeight={200}>
      <Typography variant="h3" gutterBottom component="div">
        <ul>
          {getLinks()}
        </ul>
      </Typography>
      </Box>
    </React.Fragment>
  );
}
