import React from 'react';
import { IconButton, Stack, styled, Tab, Tabs, useTheme } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const HeaderTabs = () => {
  const theme = useTheme();

  const [value, setValue] = React.useState('home');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  interface StyledTabProps {
    label: string;
    value: string;
  }

  const StyledTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      fontFamily: 'FrancoisOne',
      fontSize: theme.typography.pxToRem(18),
      color: theme.palette.secondary.main,
      '&.Mui-selected': {
        color: theme.palette.primary.main,
      },
    }),
  );

  return (
    <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        centered
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
        sx={{
          mr: 3,
          '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
          },
          '& .MuiTabs-indicatorSpan': {
            maxWidth: 30,
            width: '100%',
            backgroundColor: theme.palette.primary.main,
          },
        }}
      >
        <StyledTab value="home" label="Home" />
        <StyledTab value="shop-features" label="Shop Features" />
        <StyledTab value="clothes" label="Clothes" />
        <StyledTab value="pages" label="Pages" />
        <StyledTab value="shortcodes" label="Shortcodes" />
        <StyledTab value="post-types" label="Post Types" />
      </Tabs>
      <IconButton onClick={() => {}}>
        <ShoppingCartOutlinedIcon color="secondary" />
      </IconButton>
      <IconButton onClick={() => {}}>
        <FavoriteBorderOutlinedIcon color="secondary" />
      </IconButton>
      <IconButton onClick={() => {}}>
        <SearchOutlinedIcon color="secondary" />
      </IconButton>
    </Stack>
  );
};
