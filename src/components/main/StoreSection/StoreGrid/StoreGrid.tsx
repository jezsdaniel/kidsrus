import React, { useState } from 'react';
import Image from 'next/image';
import { Box, ButtonBase, Grid, Stack, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';

import { Product } from 'data/products';

type StoreGridProps = {
  products: Product[];
};

export const StoreGrid = ({ products }: StoreGridProps) => {
  return (
    <Grid container rowSpacing={8} columnSpacing={3}>
      {products.map((product, index) => (
        <StoreGridItem
          key={index}
          images={product.images}
          category={product.category}
          name={product.name}
          price={product.price}
          outOfStock={product.outOfStock}
        />
      ))}
    </Grid>
  );
};

type StoreGridItemProps = {
  name: string;
  images: string[];
  price: number;
  category: string;
  outOfStock?: boolean;
};

const StoreGridItem = ({
  name,
  images,
  price,
  category,
  outOfStock,
}: StoreGridItemProps) => {
  const [hover, setHover] = useState(false);

  return (
    <Grid item xs={4}>
      <ButtonBase
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
        sx={{
          p: 1,
        }}
      >
        <Stack direction="column" alignItems="center" spacing={1}>
          <Box
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
            {hover && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  zIndex: 1,
                  backgroundColor: '#E5745D',
                }}
              >
                <Box
                  sx={{
                    m: 1,
                    px: 2,
                    py: 1,
                    border: `2px dashed #FFFFFF`,
                  }}
                >
                  {outOfStock ? (
                    <FavoriteBorderIcon
                      sx={{
                        color: '#FFFFFF',
                      }}
                    />
                  ) : (
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      spacing={1}
                    >
                      <FavoriteBorderIcon
                        sx={{
                          color: '#FFFFFF',
                        }}
                      />
                      <Typography variant="button" color="white">
                        ADD TO CART
                      </Typography>
                      <SearchIcon
                        sx={{
                          color: '#FFFFFF',
                        }}
                      />
                    </Stack>
                  )}
                </Box>
              </Box>
            )}
            <Image
              src={hover && images.length > 1 ? images[1] : images[0]}
              width={580}
              height={870}
              objectFit="contain"
              alt={name}
            />
          </Box>
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
      </ButtonBase>
    </Grid>
  );
};
