import React from 'react';
import Image from 'next/image';
import { Box, Stack } from '@mui/material';

import { TitleSection } from '@components/common';

export const Gallery = () => {
  return (
    <Stack
      sx={{
        mt: 12,
      }}
    >
      <TitleSection title="Instagram @Kidsrus" />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          mt: 4,
        }}
      >
        <Box
          sx={{
            width: 220,
            height: 220,
            '&:hover': {
              cursor: 'pointer',
              filter: 'brightness(1.1)',
            },
          }}
        >
          <Image
            src="/img/main/87339849_530805007551424_292323017375800029_nlow.jpg"
            width={220}
            height={220}
            objectFit="contain"
            alt="Instagram image"
          />
        </Box>
        <Box
          sx={{
            width: 220,
            height: 220,
            '&:hover': {
              cursor: 'pointer',
              filter: 'brightness(1.1)',
            },
          }}
        >
          <Image
            src="/img/main/87413583_2660130777540405_5722961474466513534_nlow.jpg"
            width={220}
            height={220}
            objectFit="contain"
            alt="Instagram image"
          />
        </Box>
        <Box
          sx={{
            width: 220,
            height: 220,
            '&:hover': {
              cursor: 'pointer',
              filter: 'brightness(1.1)',
            },
          }}
        >
          <Image
            src="/img/main/85069033_185901059177965_6767010623440980864_nlow.jpg"
            width={220}
            height={220}
            objectFit="contain"
            alt="Instagram image"
          />
        </Box>
        <Box
          sx={{
            width: 220,
            height: 220,
            '&:hover': {
              cursor: 'pointer',
              filter: 'brightness(1.1)',
            },
          }}
        >
          <Image
            src="/img/main/84981049_620107085435507_4260875787090681190_nlow.jpg"
            width={220}
            height={220}
            objectFit="contain"
            alt="Instagram image"
          />
        </Box>
        <Box
          sx={{
            width: 220,
            height: 220,
            '&:hover': {
              cursor: 'pointer',
              filter: 'brightness(1.1)',
            },
          }}
        >
          <Image
            src="/img/main/85051426_2060664737412512_8458893884651247910_nlow.jpg"
            width={220}
            height={220}
            objectFit="contain"
            alt="Instagram image"
          />
        </Box>
      </Stack>
    </Stack>
  );
};
