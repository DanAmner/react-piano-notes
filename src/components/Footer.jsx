import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: 'center',
        mt: 'auto',
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        padding: 2,
        marginTop: 2,
      }}
    >
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Piano Notes. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
