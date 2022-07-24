import React from 'react';
import { Stack } from '@mui/material';

import { SearchProductsInput } from '@components/common';
import { BestSellers, CategoriesMenu, JoinNewsletter } from '@components/main';
import { Product } from 'data/products';

type StoreMenuProps = {
  onSetCategory: (products: Product[]) => void;
};

export const StoreMenu = ({ onSetCategory }: StoreMenuProps) => {
  return (
    <Stack
      sx={{
        width: 300,
      }}
    >
      <SearchProductsInput />
      <CategoriesMenu onSetCategory={onSetCategory} />
      <BestSellers />
      <JoinNewsletter />
    </Stack>
  );
};
