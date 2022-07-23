import React from 'react';
import Image from 'next/image';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export const FooterContainer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        '.wave': {
          position: 'relative',
          background: theme.palette.primary.light,
        },
        '.wave::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundRepeat: 'repeat',
          height: 10,
          backgroundSize: '20px 20px',
          backgroundImage: `radial-gradient(circle at 10px 15px, transparent 12px, #fff 13px)`,
        },
        '.wave::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundRepeat: 'repeat',
          height: '15px',
          backgroundSize: '40px 20px',
          backgroundImage: `radial-gradient(circle at 10px 0, #fff 12px, transparent 13px)`,
        },
      }}
    >
      <Box
        className="wave"
        sx={{
          width: '100%',
          pt: 10,
          pb: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Image
          src="/img/main/logo(1).png"
          width={214}
          height={74}
          objectFit="contain"
          alt="Kids R Us logo"
        />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={4}
          sx={{
            mt: 5,
          }}
        >
          <Typography variant="h6" color="white" fontWeight="bold">
            SHOP
          </Typography>
          <Typography variant="h6" color="white" fontWeight="bold">
            SALE
          </Typography>
          <Typography variant="h6" color="white" fontWeight="bold">
            GIRLS
          </Typography>
          <Typography variant="h6" color="white" fontWeight="bold">
            BOYS
          </Typography>
          <Typography variant="h6" color="white" fontWeight="bold">
            LOOKBOOK
          </Typography>
          <Typography variant="h6" color="white" fontWeight="bold">
            CONTACTS
          </Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={4}
          sx={{
            mt: 4,
          }}
        >
          <FacebookIcon
            fontSize="large"
            sx={{
              color: 'white',
            }}
          />
          <InstagramIcon
            fontSize="large"
            sx={{
              color: 'white',
            }}
          />
          <TwitterIcon
            fontSize="large"
            sx={{
              color: 'white',
            }}
          />
        </Stack>
        <Typography
          variant="body1"
          color="white"
          sx={{
            mt: 6,
          }}
        >
          <span style={{ fontWeight: 'bold' }}>Privacy Policy / </span> This is a sample
          website © 2022 / All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};
