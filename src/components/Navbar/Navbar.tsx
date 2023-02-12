import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Image from '../../icons/ROS_logo.png';

const styles = {
  navbar: {
    background: "#538E3F"
  },
  paperContainer: {
    backgroundImage: `url(${Image})`
  }
};

function ResponsiveAppBar() {
  return (
    <AppBar style={styles.navbar} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              width: 100,
              backgroundImage: "url('https://via.placeholder.com/500')"
            }}
          />  
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;