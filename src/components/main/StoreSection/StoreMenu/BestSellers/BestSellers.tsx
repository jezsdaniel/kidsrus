import React from 'react';
import Image from 'next/image';
import { Avatar, Box, ButtonBase, Divider, Stack, Typography } from '@mui/material';

import { StarsReview } from '@components/common';

export const BestSellers = () => {
  return (
    <Stack
      sx={{
        mt: 6,
      }}
    >
      <Typography variant="h6" color="secondary">
        BEST SELLERS
      </Typography>
      <Box sx={{ my: 3, py: 1, px: 1, border: 'dashed #b0b0b0', borderWidth: '1px' }}>
        <SellerItem
          name="Rabbit Casket"
          image="/img/main/for-home-15-300x300.jpg"
          price={17}
          reviews={4}
        />
        <SellerItem
          name="Yellow Sweatshirt"
          image="/img/main/girls-6-300x300.jpg"
          price={38}
          reviews={4}
        />
        <SellerItem
          name="Line Sweater"
          image="/img/main/boys-3-1-300x300.jpg"
          price={46}
          reviews={4}
        />
        <SellerItem
          name="Grey Suit"
          image="/img/main/boys-4-300x300.jpg"
          price={80}
          reviews={4}
        />
      </Box>
    </Stack>
  );
};

type SellerItemProps = {
  name: string;
  image: string;
  price: number;
  reviews: number;
};

const SellerItem = ({ name, image, price, reviews }: SellerItemProps) => {
  return (
    <ButtonBase
      focusRipple
      style={{
        margin: 4,
        backgroundColor: 'white',
        position: 'relative',
        width: '100%',
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        sx={{
          my: 0.5,
          mx: 0.5,
          width: '100%',
        }}
      >
        <Avatar sx={{ width: 56, height: 56 }}>
          <Image src={image} width={56} height={56} objectFit="contain" alt={name} />
        </Avatar>
        <Stack
          spacing={1}
          alignItems="flex-start"
          justifyContent="center"
          sx={{
            ml: 2,
          }}
        >
          <Typography variant="body2" fontWeight="bold" color="secondary">
            {name}
          </Typography>
          <StarsReview stars={reviews} />
          <Typography variant="body2" fontWeight="bold" color="secondary">
            ${price.toFixed(2)}
          </Typography>
        </Stack>
      </Stack>
    </ButtonBase>
  );
};
