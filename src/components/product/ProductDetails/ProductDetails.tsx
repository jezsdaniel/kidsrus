import React, { useState } from 'react';
import Image from 'next/image';
import { Box, ButtonBase, Divider, InputBase, Stack, Typography } from '@mui/material';

import { BrandButton, StarsReview } from '@components/common';
import { Product } from 'data/products';

type ProductDetailsProps = {
  product: Product;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <Stack direction="row" alignItems="flex-start" justifyContent="center" spacing={4}>
      <Stack spacing={1} alignItems="flex-start">
        <Box
          sx={{
            width: 420,
          }}
        >
          <Image
            src={product.images[imageIndex]}
            width={580}
            height={870}
            objectFit="contain"
            alt={product.name}
          />
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          spacing={1}
        >
          {product.images.length > 1 &&
            product.images.map((image, index) => {
              return (
                <ButtonBase key={index} onClick={
                  () => {
                    setImageIndex(index);
                  }
                }>
                  <Box>
                    <Image
                      src={image}
                      width={58}
                      height={87}
                      objectFit="contain"
                      alt={product.name}
                    />
                  </Box>
                </ButtonBase>
              );
            })}
        </Stack>
      </Stack>
      <Stack
        direction="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        sx={{
          py: 3,
        }}
      >
        <Typography
          variant="subtitle2"
          color="secondary"
          sx={{
            mb: 2,
          }}
        >
          ${product.price.toFixed(2)}
        </Typography>
        <StarsReview stars={product.review} />
        <Typography
          variant="body1"
          sx={{
            my: 4,
          }}
        >
          Proin id nisl semper, elementum lacus vel, egastas nunc. Praesent id libero
          lacinia, tincidunt sapien et, ullamcorper mi. Aliquam auctor luctus ex eget
          tincidunt. Donec maximus bibendum lorem eget.
        </Typography>
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="center"
          spacing={1}
        >
          <InputBase
            sx={{
              '& .MuiInputBase-input': {
                fontFamily: 'Quicksand',
                borderRadius: 0,
                position: 'relative',
                backgroundColor: 'white',
                border: '1px dashed #b0b0b0',
                fontSize: 16,
                height: 38,
                width: 48,
                padding: '10px 12px',
              },
            }}
          />
          <BrandButton label="Add to card" color="#FFFFFF" backgroundColor="#E5745D" />
        </Stack>
        <Stack
          direction="row"
          alignItems="baseline"
          justifyContent="flex-start"
          spacing={1}
          sx={{
            my: 4,
          }}
        >
          <Typography variant="body1">Product added!</Typography>
          <Typography color="secondary" variant="body2" fontWeight="bold">
            Browse Wishlist
          </Typography>
        </Stack>
        <Box
          sx={{
            py: 1,
            px: 2,
            border: 'dashed #b0b0b0',
            borderWidth: '1px',
            width: '100%',
          }}
        >
          <ProductDetailRow name="SKU:" value={product.id} />
          <Divider />
          <ProductDetailRow name="Category:" value={product.category} />
          <Divider />
          <ProductDetailRow name="Tags:" value={`${product.category}, ${product.name}`} />
        </Box>
      </Stack>
    </Stack>
  );
};

type ProductDetailRowProps = {
  name: string;
  value: string;
};

const ProductDetailRow = ({ name, value }: ProductDetailRowProps) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      sx={{
        py: 1,
      }}
    >
      <Typography
        variant="body2"
        fontWeight="bold"
        color="secondary"
        sx={{
          width: 170,
        }}
      >
        {name}
      </Typography>
      <Typography variant="body2">{value}</Typography>
    </Stack>
  );
};
