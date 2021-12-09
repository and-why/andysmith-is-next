import { Text } from './styled-components/Text';
import { TextBlock } from './styled-components/TextBlock';
import { H1 } from './styled-components/Headings';

export default function AboutMe() {
  return (
    <TextBlock textAlign='left' marginBottom='2em'>
      <H1 fontSize='3em'>
        Andysmith<code>.is()</code>
      </H1>
      <Text fontSize='1.6em'>
        &#x2f;&#x2f; A freelance front-end engineer with a strong focus on design systems,
        components and website performance. An Englishman, working remotely from Melbourne,
        Australia.
      </Text>
    </TextBlock>
  );
}
