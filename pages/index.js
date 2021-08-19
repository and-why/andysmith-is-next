import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import AboutMe from '../components/AboutMe';
import PortfolioList from '../components/PortfolioList';
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
    <Layout page='home' pageTitle='Freelance Web Engineer'>
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
