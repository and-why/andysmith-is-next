import { H2 } from './styled-components/Headings';
import Image from 'next/image';
import Link from 'next/link';
import { Flex } from './styled-components/Flex';
import { TextBlock } from './styled-components/TextBlock';
import { motion } from 'framer-motion';

export default function PortfolioListItem({ data }) {
  const imageSrc = `/images/${data.image}.png`;

  return (
    <Link href={`/portfolio/${data.name}`}>
      <a>
        <Flex>
          <motion.figure layoutId={data.image}>
            <Image
              src={imageSrc}
              alt={`${data.title} icon`}
              height={100}
              width={100}
              // objectFit='cover'
              placeholder='blur'
              blurDataURL='/images/placeholder.png'
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
      </a>
    </Link>
  );
}
