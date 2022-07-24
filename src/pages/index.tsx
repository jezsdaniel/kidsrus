import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Container, Stack } from '@mui/material';

import { HeaderLogo, HeaderPromo, HeaderTabs } from '@components/header';
import {
  Gallery,
  StoreSection,
  TopCategoriesContainer,
  TopSlides,
} from '@components/main';
import { CookiesWarning, FooterContainer } from '@components/footer';
import {
  forGirlsProducts,
  forBoysProducts,
  forBabiesProducts,
  forHomeProducts,
  forPlayProducts,
  Product,
} from 'data/products';
import { shuffleArray } from 'utils/utils';

const Home: NextPage = () => {
  const [showingProducts, setShowingProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products = shuffleArray([
      ...forGirlsProducts,
      ...forBoysProducts,
      ...forBabiesProducts,
      ...forHomeProducts,
      ...forPlayProducts,
    ]).slice(0, 9);
    setShowingProducts(products);
  }, []);

  const handleSetCategory = (products: Product[]) => {
    setShowingProducts(products);
  };

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
        <Container maxWidth="lg" sx={{ py: 8, minHeight: '100vh' }}>
          <TopSlides />
          <TopCategoriesContainer onSetCategory={handleSetCategory} />
          <StoreSection products={showingProducts} onSetCategory={handleSetCategory} />
          <Gallery />
        </Container>
      </main>
      <footer>
        <FooterContainer />
        <CookiesWarning />
      </footer>
    </div>
  );
};

export default Home;
