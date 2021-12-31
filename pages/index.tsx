import type { NextPage } from 'next';
import Head from 'next/head';

import NavBar from '../components/NavBar';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Getter Hiss | React Native Developer | iOS and Android</title>
        <meta
          name="description"
          content="Entrepreneurial and driven React Native Developer."
        />
      </Head>

      <div className="max-w-6xl py-5 px-4 mx-auto lg:px-12">
        <NavBar />

        <Hero />
      </div>
    </>
  );
};

export default Home;
