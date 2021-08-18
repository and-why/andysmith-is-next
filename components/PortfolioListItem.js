import { H2 } from './styled-components/Headings';
import Image from 'next/image';
import Link from 'next/link';
import { Flex } from './styled-components/Flex';
import { Text } from './styled-components/Text';
import { TextBlock } from './styled-components/TextBlock';
import { motion } from 'framer-motion';

export default function PortfolioListItem({ data }) {
  console.log(data);
  return (
    <Link href={`/portfolio/${data.name}`}>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Flex>
          <motion.figure layoutId={data.image}>
            <Image
              src={`/images/${data.image}.png`}
              height='100px'
              width='100px'
              objectFit='cover'
              objectPosition='bottom'
            />
          </motion.figure>
          <TextBlock padding='1em'>
            <motion.h3 className='small' layoutId={data.id}>
              {data.title}
            </motion.h3>
            <motion.p className='small' layoutId={data.technology}>
              {data.technology}
            </motion.p>
          </TextBlock>
        </Flex>
      </motion.a>
    </Link>
  );
}
