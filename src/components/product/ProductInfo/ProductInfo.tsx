import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

import { Product } from 'data/products';

type ProductInfoProps = {
  product: Product;
};

export const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <Box
      sx={{
        mt: 4,
        mb: 8,
        p: 8,
        border: 'dashed #b0b0b0',
        borderWidth: '1px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3" fontFamily="GildaDisplay" color="secondary">
        {product.name}
      </Typography>
      <Typography
        variant="subtitle2"
        color="secondary"
        fontWeight="bold"
        sx={{
          mt: 3,
        }}
      >
        Home :{' '}
        <Link
          href={{
            pathname: '/',
            query: { category: product.category.toLowerCase().replace(' ', '-') },
          }}
        >
          <a
            style={{
              textDecoration: 'none',
              color: '#486683',
            }}
          >
            {product.category}{' '}
          </a>
        </Link>{' '}
        : <span style={{ color: '#E5745D' }}>{product.name}</span>
      </Typography>
    </Box>
  );
};
