import React from 'react';
import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';

type TitleSectionProps = {
  title: string;
};

export const TitleSection = ({ title }: TitleSectionProps) => {
  return (
    <Stack alignItems="center">
      <Typography variant="h5" color="secondary">
        {title.toUpperCase()}
      </Typography>
      <Box
        sx={{
          mt: 1,
        }}
      >
        <Image src='/img/main/home-8.png' width={72} height={16} objectFit="contain" alt={title} />
      </Box>
    </Stack>
  );
};
