import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Link } from '@mui/material';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Piano Notes
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="/notes" color="inherit" underline="none">
              Notes
            </Link>
            <Link href="/students" color="inherit" underline="none">
              Students
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Container>
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h2" component="h1">
            Piano Notes
          </Typography>
          <Typography variant="body1" component="p" sx={{ mt: 2 }}>
            Piano Notes is an app for Piano Teachers to easily share their notes with their students
          </Typography>
        </Box>
      </Container>
      <Box component="footer" sx={{ py: 2, textAlign: 'center', mt: 'auto', bgcolor: 'background.paper' }}>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Piano Notes. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
}

export default App;
