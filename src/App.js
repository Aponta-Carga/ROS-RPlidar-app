import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GridContainer from './components/Containers/GridContainer.tsx';
import PointCloudSaverContainer from './components/Containers/PointCloudSaverContainer.tsx';
import Navbar from './components/Navbar/Navbar.tsx';

const styles = {
  body: {
    background: "#192C33",
    height: "100vh"
  },
}

function App() {
  return (
    <div style={styles.body} className="App">
      <Navbar></Navbar>
      <Box sx={{ flexGrow: 1 }}>
        <GridContainer sx={{border: 'red'}}>
          <PointCloudSaverContainer>AA</PointCloudSaverContainer>
        </GridContainer>
      </Box>
    </div>
  );
}

export default App;
