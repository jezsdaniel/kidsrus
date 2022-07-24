import React from 'react';
import { Box, Stack } from '@mui/material';

import { TitleSection } from '@components/common';
import { StoreMenu, StoreGrid } from '@components/main';
import { Product } from 'data/products';

type StoreSectionProps = {
  products: Product[];
  onSetCategory: (products: Product[]) => void;
};

export const StoreSection = ({ products, onSetCategory }: StoreSectionProps) => {
  return (
    <Stack>
      <TitleSection title="New Arrivals" />
      <Stack direction="row" sx={{ mt: 4 }}>
        <StoreMenu onSetCategory={onSetCategory} />
        <Box sx={{ ml: 4 }}>
          <StoreGrid products={products} />
        </Box>
      </Stack>
    </Stack>
  );
};
