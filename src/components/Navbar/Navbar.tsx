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
  logo: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'left',
    minWidth: '100%',
    minHeight: '50px'
  }
};

function ResponsiveAppBar() {
  return (
    <AppBar style={styles.navbar} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            style={styles.logo}
          ></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;