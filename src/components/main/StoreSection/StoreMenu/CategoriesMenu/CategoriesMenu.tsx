import React from 'react';
import { Box, ButtonBase, Divider, Stack, Typography } from '@mui/material';

export const CategoriesMenu = () => {
  return (
    <Stack
      sx={{
        mt: 6,
      }}
    >
      <Typography variant="h6" color="secondary">
        CATEGORIES
      </Typography>
      <Box sx={{ my: 3, py: 1, px: 2, border: 'dashed #b0b0b0', borderWidth: '1px' }}>
        <CategoryRow title="For Babies" count={11} />
        <Divider />
        <CategoryRow title="For Boys" count={19} />
        <Divider />
        <CategoryRow title="For Girls" count={20} />
        <Divider />
        <CategoryRow title="For Home" count={14} />
        <Divider />
        <CategoryRow title="For Play" count={8} />
      </Box>
    </Stack>
  );
};

type CategoryRowProps = {
  title: string;
  count: number;
};

const CategoryRow = ({ title, count }: CategoryRowProps) => {
  return (
    <ButtonBase
      focusRipple
      style={{
        backgroundColor: 'white',
        position: 'relative',
        width: '100%',
      }}
    >
      <Stack
        direction="row"
        alignItems="baseline"
        justifyContent="space-between"
        sx={{
          my: 1,
          mx: 1,
          width: '100%',
        }}
      >
        <Typography variant="body2" fontWeight="bold" color="secondary">
          {title}
        </Typography>
        <Typography variant="body2" fontWeight="semiBold">
          ({count.toString()})
        </Typography>
      </Stack>
    </ButtonBase>
  );
};
