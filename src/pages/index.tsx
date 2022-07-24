import { useEffect, useState } from 'react';
import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
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

type ProductPageProps = {
  category?: Product[];
};

const Home: NextPage<ProductPageProps> = (props) => {
  const { category } = props;

  const [showingProducts, setShowingProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (category) {
      setShowingProducts(category);
    } else {
      const products = shuffleArray([
        ...forGirlsProducts,
        ...forBoysProducts,
        ...forBabiesProducts,
        ...forHomeProducts,
        ...forPlayProducts,
      ]).slice(0, 9);
      setShowingProducts(products);
    }
  }, [category]);

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

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const categoryName = context.query.category?.toString();

  if (!categoryName) {
    return { props: {} };
  }

  if (categoryName === 'for-boys') {
    return {
      props: {
        category: forBoysProducts,
      },
    };
  }

  if (categoryName === 'for-girls') {
    return {
      props: {
        category: forGirlsProducts,
      },
    };
  }

  if (categoryName === 'for-babies') {
    return {
      props: {
        category: forGirlsProducts,
      },
    };
  }

  if (categoryName === 'for-home') {
    return {
      props: {
        category: forGirlsProducts,
      },
    };
  }

  if (categoryName === 'for-play') {
    return {
      props: {
        category: forGirlsProducts,
      },
    };
  }

  return { props: {} };
};
