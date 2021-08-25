import { useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import { Flex } from './styled-components/Flex';
import { Container } from './styled-components/Container';
import { FullPage } from './styled-components/FullPage';

export default function Layout({ children, page, pageTitle, description }) {
  const backupDesc =
    'Portfolio site for Andy Smith - A freelance front-end engineer with a strong focus on design systems, components and website performance. ';

  const useIntro = () => {
    const storage = window.localStorage;
    const now = new Date.now();
    const timeStamp = JSON.parse(storage.getItem('timestamp' || '1000'));

    const limit = 3 * 60 * 60 * 1000; //3 hours
    const hasTimePassed = now - timeStamp > limit;

    useEffect(() => {
      hasTimePassed
        ? storage.setItem('timestamp', now.toString())
        : storage.setItem('timestamp', timeStamp.toString());
    }, []);
    return hasTimePassed;
  };

  return (
    <motion.div
      initial={useIntro ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.1,
      }}
      initial
    >
      <Head>
        <title>{pageTitle || 'Freelance Web Developer'} | Andy Smith</title>
        <meta name='description' content={description || backupDesc} />
      </Head>
      <FullPage>
        <Container>
          <motion.div layout>
            <Flex justify='center' align='flex-start' direction='column' padding='1em'>
              <Navigation page={page} />
              {children}
            </Flex>
          </motion.div>
        </Container>
      </FullPage>
    </motion.div>
  );
}
