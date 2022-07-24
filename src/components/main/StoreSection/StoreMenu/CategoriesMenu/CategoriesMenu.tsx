import React from 'react';
import { Box, ButtonBase, Divider, Stack, Typography } from '@mui/material';

import {
  Product,
  forBabiesProducts,
  forGirlsProducts,
  forBoysProducts,
  forHomeProducts,
  forPlayProducts,
} from 'data/products';

type CategoriesMenuProps = {
  onSetCategory: (products: Product[]) => void;
};

export const CategoriesMenu = ({ onSetCategory }: CategoriesMenuProps) => {
  return (
    <Stack
      sx={{
        mt: 6,
      }}
    >
      <Typography variant="h6" color="secondary">
        CATEGORIES
      </Typography>
      <Box sx={{ my: 3, py: 1, px: 2, border: 'dashed #b0b0b0', borderWidth: '1px' }}>
        <CategoryRow
          title="For Babies"
          count={forBabiesProducts.length}
          onClick={() => {
            onSetCategory(forBabiesProducts);
          }}
        />
        <Divider />
        <CategoryRow
          title="For Boys"
          count={forBoysProducts.length}
          onClick={() => {
            onSetCategory(forBoysProducts);
          }}
        />
        <Divider />
        <CategoryRow
          title="For Girls"
          count={forGirlsProducts.length}
          onClick={() => {
            onSetCategory(forGirlsProducts);
          }}
        />
        <Divider />
        <CategoryRow
          title="For Home"
          count={forHomeProducts.length}
          onClick={() => {
            onSetCategory(forHomeProducts);
          }}
        />
        <Divider />
        <CategoryRow
          title="For Play"
          count={forPlayProducts.length}
          onClick={() => {
            onSetCategory(forPlayProducts);
          }}
        />
      </Box>
    </Stack>
  );
};

type CategoryRowProps = {
  title: string;
  count: number;
  onClick: () => void;
};

const CategoryRow = ({ title, count, onClick }: CategoryRowProps) => {
  return (
    <ButtonBase
      focusRipple
      onClick={() => {
        onClick();
      }}
      sx={{
        backgroundColor: 'white',
        position: 'relative',
        width: '100%',
        color: '#486683',
        '&:hover, &.Mui-focusVisible': {
          '& .MuiTypography-root': {
            color: '#E5745D',
          },
        },
      }}
    >
      <Stack
        direction="row"
        alignItems="baseline"
        justifyContent="space-between"
        sx={{
          my: 1,
          mx: 1,
          width: '100%',
        }}
      >
        <Typography variant="body2" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" fontWeight="semiBold">
          ({count.toString()})
        </Typography>
      </Stack>
    </ButtonBase>
  );
};
