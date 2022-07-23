import React from 'react';
import { Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

type StarsReviewProps = {
  stars: number;
};

export const StarsReview = ({ stars }: StarsReviewProps) => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center">
      {[...Array(stars)].map((_, index) => (
        <StarIcon
          key={index}
          color="primary"
          sx={{
            fontSize: 16,
          }}
        />
      ))}
      {[...Array(5 - stars)].map((_, index) => (
        <StarIcon
          key={index}
          color="disabled"
          sx={{
            fontSize: 16,
          }}
        />
      ))}
    </Stack>
  );
};
