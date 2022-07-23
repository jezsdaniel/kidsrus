import React from 'react';
import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';

export const TopCategoriesContainer = () => {
  return (
    <Box
      sx={{
        my: 8,
        width: '100%',
        p: 5,
        border: '1px dashed #b0b0b0',
        borderWidth: '1px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <CategoryContainer image='/img/main/baby.png' title='Baby & Toddler'/>
      <CategoryContainer image='/img/main/girl.png' title='For Girls'/>
      <CategoryContainer image='/img/main/boy.png' title='For Boys'/>
      <CategoryContainer image='/img/main/toys.png' title='Home & Toys'/>
    </Box>
  );
};

type CategoryContainerProps = {
  image: string;
  title: string;
};

const CategoryContainer = ({ image, title }: CategoryContainerProps) => {
  return (
    <Stack alignItems="center">
      <Image src={image} width={150} height={180} objectFit="contain" alt={title} />
      <Typography variant="subtitle2" color="secondary" sx={{ pt: 3 }}>
        {title}
      </Typography>
    </Stack>
  );
};
