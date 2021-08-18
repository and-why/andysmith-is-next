import { Text } from './styled-components/Text';
import { TextBlock } from './styled-components/TextBlock';
import { H1 } from './styled-components/Headings';
import { Container } from './styled-components/Container';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.2,
      }}
    >
      <TextBlock textAlign='left' marginBottom='2em'>
        <H1 fontSize='3em'>
          Andysmith<code>.is()</code>
        </H1>
        <Text fontSize='1.6em'>
          // A freelance front-end engineer with a strong focus on design systems, components and
          website performance. An Englishman, working remotely from Melbourne, Australia.
        </Text>
      </TextBlock>
    </motion.div>
  );
}
