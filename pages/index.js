import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';

import AboutMe from '../components/AboutMe';
import { FullPage } from '../components/styled-components/FullPage';
import PortfolioList from '../components/PortfolioList';
import { H2 } from '../components/styled-components/Headings';
import { Container } from '../components/styled-components/Container';
import { motion } from 'framer-motion';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout page='home'>
      <AboutMe />
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.2,
        }}
      >
        Featured Work
      </motion.h2>
      <PortfolioList />
    </Layout>
  );
}
