import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import { FullPage } from '../components/styled-components/FullPage';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Flex } from '../components/styled-components/Flex';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export const BlogWrap = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    padding: 1em 0;
    &:hover {
      color: var(--primary);
    }
  }
`;

export default function Home({ allPostsData }) {
  return (
    <FullPage>
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
                    <Link href={`/posts/${id}`}>
                      <a>
                        <Flex>
                          <h3 layoutId={title}>{title}</h3>
                          <span layoutId={date}>
                            {new Date(date)
                              .toLocaleDateString()
                              .replace('/', '-')
                              .replace('/', '-')}
                          </span>
                        </Flex>
                        {excerpt && <div>{excerpt}</div>}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </BlogWrap>
        </motion.div>
      </Layout>
    </FullPage>
  );
}
