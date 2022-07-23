import React from 'react';
import { Stack } from '@mui/material';

import { SearchProductsInput } from '@components/common';
import { BestSellers, CategoriesMenu, JoinNewsletter } from '@components/main';

export const StoreMenu = () => {
  return (
    <Stack
      sx={{
        width: 300,
      }}
    >
      <SearchProductsInput />
      <CategoriesMenu />
      <BestSellers />
      <JoinNewsletter />
    </Stack>
  );
};
