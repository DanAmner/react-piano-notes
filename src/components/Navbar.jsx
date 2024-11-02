import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Piano Notes
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link to="/notes" style={{ color: 'inherit', textDecoration: 'none' }}>
            Notes
          </Link>
          <Link to="/students" style={{ color: 'inherit', textDecoration: 'none' }}>
            Students
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
