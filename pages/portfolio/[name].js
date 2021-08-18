import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import useSWR from 'swr';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { fetcher } from '../../lib/fetcher';
import Layout from '../../components/layout';
import { Text } from '../../components/styled-components/Text';
import { Container } from '../../components/styled-components/Container';
import { FullPage } from '../../components/styled-components/FullPage';
import { Flex } from '../../components/styled-components/Flex';
import { TextBlock } from '../../components/styled-components/TextBlock';
import { H2 } from '../../components/styled-components/Headings';
import ScrollContainer from 'react-indiana-drag-scroll';
import { getAllPortfolios } from '../../lib/functions';
import { portfolio } from '../../data';

export const PortfolioItemStyle = styled.div`
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

  /* @media (max-width: 500px) {
    flex-wrap: wrap;
  } */
`;
export const Gallery = styled.div`
  .scroll-container {
    height: calc(300px + 5em);
    display: flex;
    direction: row;
    cursor: grab;
    margin-bottom: 2em;
    @media (max-width: 400px) {
      height: calc(150px + 5em);
    }
  }
`;
export const ImageWrap = styled.div`
  flex-shrink: 0;
  /* border: 2em solid var(--primary); */
  background: var(--primary);
  padding: 2em;
  margin: 0.5em;
  border-radius: 10px;
  img {
    border-radius: 2px;
    height: 300px;
    width: auto;
    @media (max-width: 400px) {
      height: 150px;
    }
  }
`;

export const ExternalButton = styled.a`
  position: relative;
  text-decoration: none;
  padding: 0.5em 2em;
  text-decoration: none;
  background: #e5e5e5;
  color: black;
  border-radius: 10px;
  text-align: center;
  svg {
    margin-left: 2px;
  }
  &:hover {
    background: var(--primary);
    color: white;
    svg g {
      stroke: #fff;
    }
  }
`;

export default function SinglePortfolioItem({ data }) {
  const router = useRouter();
  const item = data.filter((data) => data.name === router.query.name)[0];

  return (
    <FullPage>
      <Container width='900px'>
        <Layout>
          <PortfolioItemStyle>
            <motion.figure layoutId={item.image}>
              <Image
                src={`/images/${item.image}.png`}
                height='100px'
                width='100px'
                quality='100'
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
          </PortfolioItemStyle>

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
              <ScrollContainer className='scroll-container' vertical='false' hideScrollbars='false'>
                {item.images.map((image, i) => (
                  <ImageWrap>
                    <Image
                      src={`/images/${image}.png`}
                      height='402px'
                      width='689px'
                      objectFit='contain'
                      quality='100'
                      layoutId={item.image}
                    />
                  </ImageWrap>
                ))}
              </ScrollContainer>
            </Gallery>
            <TextBlock marginBottom='2em'>
              <H2>Brief</H2>
              {item.brief.map((p) => (
                <Text>{p}</Text>
              ))}
            </TextBlock>
            <ExternalButton href={item.website}>
              Visit
              <svg width='15px' height='15px' viewBox='0 0 24 24'>
                <g
                  id='external_link'
                  class='icon_svg-stroke'
                  stroke='#000'
                  stroke-width='1.5'
                  fill='none'
                  fill-rule='evenodd'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <polyline points='17 13.5 17 19.5 5 19.5 5 7.5 11 7.5'></polyline>
                  <path d='M14,4.5 L20,4.5 L20,10.5 M20,4.5 L11,13.5'></path>
                </g>
              </svg>
            </ExternalButton>
          </motion.div>
        </Layout>
      </Container>
    </FullPage>
  );
}

export async function getStaticProps(context) {
  const data = portfolio;
  return {
    props: { data: data },
  };
}

export async function getStaticPaths() {
  const paths = portfolio.map((p) => `/portfolio/${p.name}`);
  return {
    paths,
    fallback: 'blocking', // See the "fallback" section below
  };
}
