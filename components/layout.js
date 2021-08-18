import Navigation from './Navigation';
import { motion } from 'framer-motion';
import { Flex } from './styled-components/Flex';
import { Container } from './styled-components/Container';
import { FullPage } from './styled-components/FullPage';

export default function Layout({ children, page }) {
  return (
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
  );
}
