import React from 'react';
import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';

import { BrandButton } from '@components/common';

export const TopSlides = () => {
  return (
    <Stack direction="row" alignItems="stretch" justifyContent="center" spacing={4}>
      <Box
        flex="1"
        sx={{
          backgroundImage: "url('/img/main/slider-1.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'noRepeat',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          p: 5,
        }}
      >
        <Typography variant="h3" color="white">
          JUMPSUITS
        </Typography>
        <Typography variant="subtitle2" color="white" sx={{ pt: 1, pb: 2 }}>
          Comfortable clothes for your little babies
        </Typography>
        <BrandButton label="Discover" backgroundColor="#FFFFFF" color="#486683" />
      </Box>
      <Stack direction="column" alignItems="center" justifyContent="center" spacing={1}>
        <Image
          src="/img/main/girls-power.jpg"
          width={340}
          height={438}
          objectFit="contain"
          alt="Girls power"
        />
        <Typography variant="h5" color="secondary" sx={{ pt: 2 }}>
          Girl Power
        </Typography>
        <Typography variant="subtitle2">For a colorful summer</Typography>
      </Stack>
    </Stack>
  );
};
