import React from 'react';
import { Box, InputBase, Typography, useTheme } from '@mui/material';

import { BrandButton } from '@components/common';

export const JoinNewsletter = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        px: 3,
        py: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h4"
        color="white"
        textAlign="center"
        sx={{
          my: 2,
        }}
      >
        Join Our Newsletter
      </Typography>
      <InputBase
        fullWidth
        placeholder="Your Email Address *"
        sx={{
          '& .MuiInputBase-input': {
            fontFamily: 'Quicksand',
            color: 'white',
            '&::placeholder': {
              color: 'FFFFFF',
              opacity: 1,
            },
            borderRadius: 0,
            position: 'relative',
            border: '2px dashed #FFFFFF',
            fontSize: 16,
            width: '100%',
            padding: '10px 12px',
          },
        }}
      />
      <Box
        sx={{
          height: 21,
        }}
      />
      <BrandButton
        label="Subscribe"
        backgroundColor="#FFFFFF"
        color="#E5745D"
        fullWidth
      />
    </Box>
  );
};
