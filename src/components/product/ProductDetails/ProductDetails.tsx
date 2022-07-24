import React from 'react';
import Image from 'next/image';
import { Box, Divider, InputBase, Stack, Typography } from '@mui/material';

import { BrandButton, StarsReview } from '@components/common';

export const ProductDetails = () => {
  return (
    <Stack direction="row" alignItems="flex-start" justifyContent="center" spacing={4}>
      <Stack spacing={1} alignItems="flex-start">
        <Box
          sx={{
            width: 420,
          }}
        >
          <Image
            src="/img/for girls/girls-2-2-580x870.jpg"
            width={580}
            height={870}
            objectFit="contain"
          />
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          spacing={1}
        >
          <Box>
            <Image
              src="/img/for girls/girls-2-2-580x870.jpg"
              width={58}
              height={87}
              objectFit="contain"
            />
          </Box>
          <Box>
            <Image
              src="/img/for girls/girls-2-3-580x870.jpg"
              width={58}
              height={87}
              objectFit="contain"
            />
          </Box>
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
          $22.00
        </Typography>
        <StarsReview stars={5} />
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
          <ProductDetailRow name="SKU:" value="001" />
          <Divider />
          <ProductDetailRow name="Category:" value="For Girls" />
          <Divider />
          <ProductDetailRow name="Tags:" value="Blouse, Girls" />
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
