import React from 'react';
import { Box, Typography } from '@mui/material';

export const ProductInfo = () => {
  return (
    <Box
      sx={{
        mt: 4,
        mb: 8,
        p: 8,
        border: 'dashed #b0b0b0',
        borderWidth: '1px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3" fontFamily="GildaDisplay" color="secondary">
        Blue Blouse
      </Typography>
      <Typography
        variant="subtitle2"
        color="secondary"
        fontWeight="bold"
        sx={{
          mt: 3,
        }}
      >
        Home : For Girls : <span style={{ color: '#E5745D' }}>Blue Blouse</span>
      </Typography>
    </Box>
  );
};
