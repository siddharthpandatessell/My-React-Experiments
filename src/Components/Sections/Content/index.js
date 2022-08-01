import * as React from 'react';
// import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Content(props) {
  const {page} = props;
  return (
    <React.Fragment>
      {/* <ScopedCssBaseline /> */}
      <Box minWidth="70%" sx={{border: '2px solid red'}} >
      <Typography variant="h3" gutterBottom component="div">
        <h4>{page} Content</h4>
        {page !== 'Null' ? 'Esse Lorem laborum aliqua culpa deserunt exercitation magna dolore deserunt occaecat non. Adipisicing minim duis ad ad labore duis ullamco ex commodo. Et exercitation ex excepteur pariatur excepteur adipisicing laborum laboris sint laboris ut id laboris. Nostrud minim exercitation ea sunt id eu est ut mollit in. Duis exercitation irure in cillum in eu sit ullamco nulla laborum ullamco. Pariatur labore minim mollit veniam nulla. Nostrud voluptate tempor officia ex ea.' : 'No Content'}
      </Typography>
      </Box>
    </React.Fragment>
  );
}
