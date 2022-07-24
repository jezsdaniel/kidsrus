import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Stack } from '@mui/material';

import { HeaderLogo, HeaderPromo, HeaderTabs } from '@components/header';
import { CookiesWarning, FooterContainer } from '@components/footer';
import {
  ProductDetails,
  ProductInfo,
  ProductDescription,
  RelatedProducts,
} from '@components/product';

const ProductPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>KIDS&apos;r&apos;US</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Stack>
          <HeaderPromo />
          <HeaderLogo />
          <HeaderTabs />
        </Stack>
      </header>
      <main>
        <Container maxWidth="xl">
          <ProductInfo />
        </Container>
        <Container maxWidth="lg">
          <ProductDetails />
          <ProductDescription />
          <RelatedProducts />
        </Container>
      </main>
      <footer>
        <FooterContainer />
        <CookiesWarning />
      </footer>
    </div>
  );
};

export default ProductPage;
