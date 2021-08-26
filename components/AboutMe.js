import { Text } from './styled-components/Text';
import { TextBlock } from './styled-components/TextBlock';
import { H1 } from './styled-components/Headings';
import { annotate } from 'rough-notation';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { createElement, useRef, useEffect } from 'react';

export default function AboutMe() {
  return (
    <TextBlock textAlign='left' marginBottom='2em'>
      <H1 fontSize='3em'>
        Andysmith<code>.is()</code>
      </H1>
      <Text fontSize='1.6em'>
        // A freelance front-end engineer with a strong focus on design systems, components and
        website performance. An Englishman, working remotely from Melbourne, Australia.
      </Text>
    </TextBlock>
  );
}
