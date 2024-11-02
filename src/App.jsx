import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Link } from '@mui/material';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Container component="main" sx={{ flex: 1 }}>
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h2" component="h1">
            Piano Notes
          </Typography>
          <Typography variant="body1" component="p" sx={{ mt: 2 }}>
            Piano Notes is an app for Piano Teachers to easily share their notes with their students
          </Typography>
        </Box>
      </Container>
      <Box component="footer" sx={{ py: 2, textAlign: 'center', mt: 'auto', bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', padding: 2, marginTop: 2 }}>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Piano Notes. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
}

export default App;
