import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import { Flex } from './styled-components/Flex';
import { Container } from './styled-components/Container';
import { FullPage } from './styled-components/FullPage';

export default function Layout({ children, page, pageTitle, description }) {
  const router = useRouter();
  const backupDesc =
    'Portfolio site for Andy Smith - A freelance front-end engineer with a strong focus on design systems, components and website performance. ';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.1,
      }}
    >
      <Head>
        <title>{pageTitle || 'Freelance Web Developer'} | Andy Smith</title>
        <meta name='description' content={description || backupDesc} />
        <link rel='shortcut icon' type='image/jpg' href='/static/favicon.png' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@andysmith_is' />
        <meta name='twitter:title' content={pageTitle || 'Freelance Web Developer'} />
        <meta name='twitter:description' content={description || backupDesc} />
        <meta name='twitter:image' content='https://www.andysmith.is/images/andy-smith.png' />
        <meta property='og:url' content={`https://www.andysmith.is${router.pathname}`} />
        <meta property='og:site_name' content={pageTitle || 'Freelance Web Developer'} />
        <meta property='og:locale' content='en_AU' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={pageTitle || 'Freelance Web Developer'} />
        <meta property='og:description' content={description || backupDesc} />
        <meta property='og:image' content='https://www.andysmith.is/images/andy-smith.png' />
        <meta name='robots' content='index' />
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
