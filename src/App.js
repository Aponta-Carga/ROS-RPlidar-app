import Box from '@mui/material/Box';
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
      <Box>TESTE</Box>
    </div>
  );
}

export default App;
