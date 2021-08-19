import { Text } from './styled-components/Text';
import { TextBlock } from './styled-components/TextBlock';
import { H1 } from './styled-components/Headings';
import { annotate } from 'rough-notation';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { createElement, useRef, useEffect } from 'react';

export const Highlight = styled.span`
  @keyframes slide {
    0% {
      background: linear-gradient(to right, white 50%, var(--primary) 50%);
      background-size: 200% 100%;
    }
    50% {
      background-size: 200% 100%;
    }
    100% {
      background: linear-gradient(to right, var(--primary) 34%, white 65%);
      background-size: 300% 100%;
    }
  }
  background-position: left bottom;
  transition: slide 0.3s linear;
`;

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
