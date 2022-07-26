import React from 'react';
import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';

import { StarsReview, TitleSection } from '@components/common';
import { Product } from 'data/products';

type RelatedProductsProps = {
  products: Product[];
};

export const RelatedProducts = ({ products }: RelatedProductsProps) => {
  return (
    <Stack alignItems="center">
      <TitleSection title="Related products" />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={5}
        sx={{
          mt: 4,
          mb: 6,
        }}
      >
        {products.slice(0, 4).map((product, index) => {
          return (
            <RelatedProductItem
              key={index}
              image={product.images[0]}
              category={product.category}
              name={product.name}
              price={product.price}
              outOfStock={product.outOfStock}
              review={product.review}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

type RelatedProductItemProps = {
  name: string;
  image: string;
  price: number;
  category: string;
  review: number;
  outOfStock?: boolean;
};

const RelatedProductItem = ({
  name,
  image,
  price,
  category,
  review,
  outOfStock,
}: RelatedProductItemProps) => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={1}
      sx={{
        position: 'relative',
      }}
    >
      {outOfStock && (
        <Box
          sx={{
            position: 'absolute',
            top: 20,
            right: 20,
            zIndex: 1,
            py: 1,
            px: 2,
            borderRadius: 5,
            backgroundColor: '#FFFFFF',
          }}
        >
          <Typography variant="body2" color="secondary" fontWeight="bold">
            OUT OF STOCK
          </Typography>
        </Box>
      )}
      <Image
        src={image}
        width={580}
        height={870}
        objectFit="contain"
        style={{
          position: 'relative',
        }}
        alt={name}
      />
      <Typography variant="body2" color="primary" fontWeight="bold" sx={{ pt: 1 }}>
        {category}
      </Typography>
      <Typography
        variant="subtitle1"
        color="secondary"
        fontWeight="regular"
        fontFamily="GildaDisplay"
      >
        {name}
      </Typography>
      <Typography variant="body1" color="secondary" fontWeight="bold">
        ${price.toFixed(2)}
      </Typography>
      <StarsReview stars={review} />
    </Stack>
  );
};
