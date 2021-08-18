import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import { FullPage } from '../components/styled-components/FullPage';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Flex } from '../components/styled-components/Flex';
import { Grid } from '../components/styled-components/Grid';
import { Text } from '../components/styled-components/Text';
import { LinkButton } from '../components/styled-components/Buttons';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export const BlogWrap = styled.div`
  h3 {
    margin: 0 0 0.25em;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    padding: 1em 0;
    margin-bottom: 0.5em;
    /* &:hover {
      color: var(--primary);
    } */
  }
`;

export default function Home({ allPostsData }) {
  return (
    <Layout page='blog'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.2,
        }}
      >
        <BlogWrap>
          <div>
            <h2>Recent Posts</h2>
            <ul>
              {allPostsData.map(({ id, title, date, excerpt }, index) => (
                <li key={index}>
                  <Text>
                    {new Date(date).toLocaleDateString().replace('/', '-').replace('/', '-')}
                  </Text>
                  <Grid
                    // templateColumns='repeat(auto-fill, minmax(300px, 1fr))'
                    templateColumns='3fr 1fr'
                    justify='space-between'
                  >
                    <div>
                      <h3>{title}</h3>
                      {excerpt && <div>{excerpt}</div>}
                    </div>
                    <Flex justify='flex-end; @media(max-width:501px){justify-content: flex-start}'>
                      <Link href={`/posts/${id}`}>
                        <LinkButton>Read More</LinkButton>
                      </Link>
                    </Flex>
                  </Grid>
                </li>
              ))}
            </ul>
          </div>
        </BlogWrap>
      </motion.div>
    </Layout>
  );
}
