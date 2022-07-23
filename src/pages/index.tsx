import type { NextPage } from 'next';
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

const Home: NextPage = () => {
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
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <TopSlides />
          <TopCategoriesContainer />
          <StoreSection />
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
