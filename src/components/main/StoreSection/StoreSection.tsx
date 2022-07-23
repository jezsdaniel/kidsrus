import React from 'react';
import { Box, Stack } from '@mui/material';

import { TitleSection } from '@components/common';
import { StoreMenu, StoreGrid } from '@components/main';

export const StoreSection = () => {
  return (
    <Stack>
      <TitleSection title="New Arrivals" />
      <Stack direction="row" sx={{ mt: 4 }}>
        <StoreMenu />
        <Box sx={{ ml: 4 }}>
          <StoreGrid />
        </Box>
      </Stack>
    </Stack>
  );
};
