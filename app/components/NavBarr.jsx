// app/components/NavBar.js
'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

const NavBar = () => {
  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: 'transparent',
      }}
    >
      <Typography variant="h6">TrebolBank</Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        {['Home', 'About', 'Services', 'Careers', 'Login'].map((item) => (
          <Typography key={item} variant="body1">
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default NavBar;
