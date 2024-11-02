import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GitHub Codespaces ♥️ React
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="App-content">
        <Typography variant="body1" component="p">
          Edit <code>src/App.jsx</code> and save to reload.
        </Typography>
        <Typography variant="body1" component="p">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Typography>
      </div>
    </div>
  );
}

export default App;
