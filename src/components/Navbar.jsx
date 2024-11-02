import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none', flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            Piano Notes
          </Typography>
        </Link>
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
