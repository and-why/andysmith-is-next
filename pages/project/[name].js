import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import Layout from '../../components/layout';
import { Text } from '../../components/styled-components/Text';
import { Flex } from '../../components/styled-components/Flex';
import { TextBlock } from '../../components/styled-components/TextBlock';
import { H2 } from '../../components/styled-components/Headings';
import ScrollContainer from 'react-indiana-drag-scroll';
import { projects } from '../../data';
import { LinkButton } from '../../components/styled-components/Buttons';
import { externalTag } from '../../lib/icons';

export const ProjectItemStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2em;
  width: 100%;
  div {
    padding: 1em;
  }
  h2 {
    margin: 0 0 0.5em;
  }
  p {
    margin: 0;
  }
`;
export const Gallery = styled.div`
  .scroll-container {
    height: 250px;
    display: flex;
    flex-direction: row;
    cursor: grab;
    margin-bottom: 2em;
    @media (min-width: 300px) {
      height: 400px;
    }
  }
`;
export const ImageWrap = styled.div`
  flex-shrink: 0;
  padding: 50px;
  margin: 0 0.5em;
  border-radius: 10px;
  ${(props) =>
    props.brandColor &&
    css`
      background: ${(props) => props.brandColor};
    `}
  img {
    border-radius: 2px;
    height: 300px !important;
    width: auto;
    @media (max-width: 400px) {
      height: 150px;
    }
  }
`;

export default function SingleProjectItem({ data }) {
  const router = useRouter();
  const item = data.filter((data) => data.name === router.query.name)[0];

  return (
    <Layout
      pageTitle={`${item.title} case study`}
      description={`Andy Smith portfio piece for ${item.title}. ${item.brief}`}
    >
      <ProjectItemStyle>
        <motion.figure layoutId={item.image}>
          <Image
            alt={item.title}
            src={`/images/${item.image}.png`}
            height={100}
            width={100}
            quality='100'
            placeholder='blur'
            blurDataURL='/images/placeholder.png'
            objectFit='contain'
            objectPosition='bottom'
          />
        </motion.figure>
        <Flex justify='space-between' width='100%'>
          <div>
            <motion.h2 layoutId={item.id}>{item.title}</motion.h2>
            <motion.p layoutId={item.technology}>Technology: {item.technology}</motion.p>
          </div>
        </Flex>
      </ProjectItemStyle>

      <motion.div
        className='full-width'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.2,
        }}
      >
        <H2>Gallery</H2>
        <Gallery>
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{
              delay: 0.2,
              type: 'spring',
              damping: 100,
              stiffness: 1000,
            }}
          >
            <ScrollContainer
              className='scroll-container'
              vertical='false'
              hideScrollbars='false'
              horizontal
            >
              {item.images.map((image, i) => (
                <ImageWrap key={i} brandColor={`${item.brandColor}85`}>
                  <Image
                    alt={image.alt || image.name}
                    src={`/images/${image.name}.png`}
                    height={402}
                    width={689}
                    objectFit='contain'
                    placeholder='blur'
                    blurDataURL='/images/placeholder.jpeg'
                    quality='100'
                  />
                </ImageWrap>
              ))}
            </ScrollContainer>
          </motion.div>
        </Gallery>
        <TextBlock marginBottom='2em'>
          <H2>About the project</H2>
          {item.brief.map((p, index) => (
            <Text key={index}>{p}</Text>
          ))}
        </TextBlock>
        <LinkButton href={item.website} target='_blank'>
          Visit {item.name}&apos;s website
          {externalTag}
        </LinkButton>
      </motion.div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  return {
    props: { data: projects },
  };
}

export async function getStaticPaths() {
  const paths = projects.map((p) => `/project/${p.name}`);
  return {
    paths,
    fallback: 'blocking', // See the "fallback" section below
  };
}
