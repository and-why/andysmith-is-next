import Navigation from './Navigation';
import { motion } from 'framer-motion';
import { Flex } from './styled-components/Flex';
import { Container } from './styled-components/Container';

export default function Layout({ children, page }) {
  return (
    <motion.div layout>
      <Flex justify='center' align='flex-start' direction='column' padding='1em'>
        <Navigation page={page} />
        {children}
      </Flex>
    </motion.div>
  );
}
