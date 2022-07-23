import React from 'react';
import { Button, ButtonBase, Stack, Typography } from '@mui/material';

export const CookiesWarning = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{
        p: 2,
      }}
    >
      <Typography variant="body1">
        This website uses cookies to improve your experience. We&apos;ll assume you&apos;
        re ok with this, but you can opt-out if you wish.
      </Typography>
      <ButtonBase
        focusRipple
        style={{
          backgroundColor: '#000000',
          position: 'relative',
          width: 'auto',
        }}
      >
        <Typography
          variant="body1"
          color="white"
          sx={{
            position: 'relative',
            px: 2,
            py: 1,
          }}
        >
          Accept
        </Typography>
      </ButtonBase>
    </Stack>
  );
};
