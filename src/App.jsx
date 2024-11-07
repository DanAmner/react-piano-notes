import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
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
      <Footer />
    </div>
  );
}

export default App;
