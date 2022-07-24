import React from 'react';
import Image from 'next/image';
import { Box, ButtonBase, Stack, Typography } from '@mui/material';

import {
  Product,
  forBabiesProducts,
  forGirlsProducts,
  forBoysProducts,
  forHomeProducts,
  forPlayProducts,
} from 'data/products';

type TopCategoriesContainerProps = {
  onSetCategory: (products: Product[]) => void;
};

export const TopCategoriesContainer = ({
  onSetCategory,
}: TopCategoriesContainerProps) => {
  return (
    <Box
      sx={{
        my: 8,
        width: '100%',
        p: 4,
        border: '1px dashed #b0b0b0',
        borderWidth: '1px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <CategoryContainer
        image="/img/main/baby.png"
        title="Baby & Toddler"
        onClick={() => {
          onSetCategory(forBabiesProducts);
        }}
      />
      <CategoryContainer
        image="/img/main/girl.png"
        title="For Girls"
        onClick={() => {
          onSetCategory(forGirlsProducts);
        }}
      />
      <CategoryContainer
        image="/img/main/boy.png"
        title="For Boys"
        onClick={() => {
          onSetCategory(forBoysProducts);
        }}
      />
      <CategoryContainer
        image="/img/main/toys.png"
        title="Home & Toys"
        onClick={() => {
          onSetCategory([...forHomeProducts, ...forPlayProducts]);
        }}
      />
    </Box>
  );
};

type CategoryContainerProps = {
  image: string;
  title: string;
  onClick: () => void;
};

const CategoryContainer = ({ image, title, onClick }: CategoryContainerProps) => {
  return (
    <ButtonBase
      onClick={() => {
        onClick();
      }}
      sx={{
        p: 1,
      }}
    >
      <Stack alignItems="center">
        <Image src={image} width={150} height={180} objectFit="contain" alt={title} />
        <Typography variant="subtitle2" color="secondary" sx={{ pt: 3 }}>
          {title}
        </Typography>
      </Stack>
    </ButtonBase>
  );
};
