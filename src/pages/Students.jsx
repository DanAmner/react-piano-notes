import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Students() {
  return (
    <>
      <Navbar />
      <Container>
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h4" component="h1">
            Students
          </Typography>
          <Typography variant="body1" component="p" sx={{ mt: 2 }}>
            This is the Students page
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Students;
