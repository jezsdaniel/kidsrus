import React, { useState } from 'react';
import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
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
import {
  forGirlsProducts,
  forBoysProducts,
  forBabiesProducts,
  forHomeProducts,
  forPlayProducts,
  Product,
} from 'data/products';

type ProductPageProps = {
  product: Product;
  category: Product[];
};

const ProductPage: NextPage<ProductPageProps> = (props) => {
  const { product, category } = props;

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
          <ProductInfo product={product} />
        </Container>
        <Container maxWidth="lg">
          <ProductDetails product={product} />
          <ProductDescription />
          <RelatedProducts products={category}/>
        </Container>
      </main>
      <footer>
        <FooterContainer />
        <CookiesWarning />
      </footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const productId = context.query.id?.toString();

  if (!productId) {
    context.res.statusCode = 404;
    return { props: {} };
  }

  let product = forGirlsProducts.find((product) => product.id === productId);
  if (product) {
    return {
      props: {
        product,
        category: forGirlsProducts,
      },
    };
  }

  product = forBoysProducts.find((product) => product.id === productId);
  if (product) {
    return {
      props: {
        product,
        category: forBoysProducts,
      },
    };
  }

  product = forBabiesProducts.find((product) => product.id === productId);
  if (product) {
    return {
      props: {
        product,
        category: forBabiesProducts,
      },
    };
  }

  product = forHomeProducts.find((product) => product.id === productId);
  if (product) {
    return {
      props: {
        product,
        category: forHomeProducts,
      },
    };
  }

  product = forPlayProducts.find((product) => product.id === productId);
  if (product) {
    return {
      props: {
        product,
        category: forPlayProducts,
      },
    };
  }

  context.res.statusCode = 404;
  return { props: {} };
};

export default ProductPage;
