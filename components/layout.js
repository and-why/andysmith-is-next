import Head from 'next/head';
import Navigation from './Navigation';
import { motion } from 'framer-motion';
import { Flex } from './styled-components/Flex';
import { Container } from './styled-components/Container';
import { FullPage } from './styled-components/FullPage';

export default function Layout({ children, page, pageTitle, description }) {
  const backupDesc =
    'Portfolio site for Andy Smith - A freelance front-end engineer with a strong focus on design systems, components and website performance. ';
  return (
    <>
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
    </>
  );
}
