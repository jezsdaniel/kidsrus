import React from 'react';
import Image from 'next/image';
import { Box, Grid, Stack, Typography } from '@mui/material';

export const StoreGrid = () => {
  return (
    <Grid container rowSpacing={8} columnSpacing={3}>
      <StoreGridItem
        image="/img/for girls/girls-1-1-580x870.jpg"
        category="For Girls"
        name="Blue Blouse"
        price={22}
        outOfStock
      />
      <StoreGridItem
        image="/img/for girls/girls-1-1-580x870.jpg"
        category="For Girls"
        name="Blue Blouse"
        price={22}
      />
      <StoreGridItem
        image="/img/for girls/girls-1-1-580x870.jpg"
        category="For Girls"
        name="Blue Blouse"
        price={22}
      />
      <StoreGridItem
        image="/img/for girls/girls-1-1-580x870.jpg"
        category="For Girls"
        name="Blue Blouse"
        price={22}
      />
      <StoreGridItem
        image="/img/for girls/girls-1-1-580x870.jpg"
        category="For Girls"
        name="Blue Blouse"
        price={22}
      />
      <StoreGridItem
        image="/img/for girls/girls-1-1-580x870.jpg"
        category="For Girls"
        name="Blue Blouse"
        price={22}
      />
      <StoreGridItem
        image="/img/for girls/girls-1-1-580x870.jpg"
        category="For Girls"
        name="Blue Blouse"
        price={22}
      />
      <StoreGridItem
        image="/img/for girls/girls-1-1-580x870.jpg"
        category="For Girls"
        name="Blue Blouse"
        price={22}
      />
      <StoreGridItem
        image="/img/for girls/girls-1-1-580x870.jpg"
        category="For Girls"
        name="Blue Blouse"
        price={22}
      />
    </Grid>
  );
};

type StoreGridItemProps = {
  name: string;
  image: string;
  price: number;
  category: string;
  outOfStock?: boolean;
};

const StoreGridItem = ({
  name,
  image,
  price,
  category,
  outOfStock,
}: StoreGridItemProps) => {
  return (
    <Grid item xs={4}>
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
      </Stack>
    </Grid>
  );
};
