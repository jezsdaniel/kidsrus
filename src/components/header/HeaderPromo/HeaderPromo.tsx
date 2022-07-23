import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

export const HeaderPromo = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        p: 1,
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Typography variant="subtitle1" color="white" fontFamily="FrancoisOne">
        20% off all kidswear + free shipping when you spend $60 or more
      </Typography>
    </Box>
  );
};
