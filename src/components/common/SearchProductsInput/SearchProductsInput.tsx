import React from 'react';
import { Box, ButtonBase, InputBase, Stack } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const SearchProductsInput = () => {
  return (
    <Stack direction="row">
      <InputBase
        fullWidth
        placeholder="Search products..."
        sx={{
          '& .MuiInputBase-input': {
            fontFamily: 'Quicksand',
            borderRadius: 0,
            position: 'relative',
            backgroundColor: 'white',
            border: 'dashed #b0b0b0',
            borderWidth: '1px 0 1px 1px',
            fontSize: 16,
            width: '100%',
            padding: '10px 12px',
          },
        }}
      />
      <ButtonBase
        focusRipple
        style={{
          position: 'relative',
          backgroundColor: '#E5745D',
          width: 44,
          color: 'white',
        }}
      >
        <Box
          sx={{
            width: '100%',
            m: 1,
            border: '2px dashed white',
          }}
        >
          <SearchOutlinedIcon fontSize="small" color="inherit" />
        </Box>
      </ButtonBase>
    </Stack>
  );
};
