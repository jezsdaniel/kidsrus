import React from 'react';

import { Box, ButtonBase, Typography } from '@mui/material';

type BrandButtonProps = {
  label: string;
  backgroundColor: string;
  color: string;
  fullWidth?: boolean;
};

export const BrandButton = ({ label, backgroundColor, color, fullWidth }: BrandButtonProps) => {
  return (
    <ButtonBase
      focusRipple
      style={{
        backgroundColor: backgroundColor,
        position: 'relative',
        width: fullWidth ? '100%' : 'auto',
      }}
    >
      <Box
        sx={{
          m: 1,
          px: 2,
          py: 1,
          border: `2px dashed ${color}`,
          width: '100%',
        }}
      >
        <Typography
          component="span"
          variant="button"
          color={color}
          sx={{
            position: 'relative',
            p: 4,
          }}
        >
          {label.toUpperCase()}
        </Typography>
      </Box>
    </ButtonBase>
  );
};
