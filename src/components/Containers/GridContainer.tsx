import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const MyGridItem = styled(Grid)(({ theme }) => ({
  // Add any custom styles for the Grid item
}));

function GridContainer() {
  return (
    <Grid container spacing={2}>
      <MyGridItem item xs={12} md={6} sx={{border: 'red'}}>
        aaa
      </MyGridItem>
      <MyGridItem item xs={12} md={6}>
        <p>AAAAAAAAA</p>
      </MyGridItem>
    </Grid>
  );
}

export default GridContainer;