import React from 'react';
import { Box, Typography } from '@mui/material';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      px={2}
      pt={2}
      sx={{ boxSizing: 'border-box', overflow: 'hidden' }}
    >
      <Box display="flex" alignItems="center">
        <img src={logo} alt="ReSource Logo" style={{ height: '70px', marginRight: '10px' }} />
        <Typography variant="title" sx={{ fontSize: '2.75rem' }}>
          ReSource
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;