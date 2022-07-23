import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

export const HeaderLogo = () => {
  return (
    <Box
      sx={{
        my: 4,
        textAlign: 'center',
      }}
    >
      <Image
        src="/img/main/logo.png"
        width={293}
        height={98}
        objectFit="contain"
        alt="KIDS'r'US Logo"
      />
    </Box>
  );
};
