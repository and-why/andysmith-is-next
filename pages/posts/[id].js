import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import CodeBlock from '../../components/codeblock';
import { Container } from '../../components/styled-components/Container';
import { FullPage } from '../../components/styled-components/FullPage';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { H1 } from '../../components/styled-components/Headings';

export const BlogPostWrap = styled.div`
  em {
    font-family: 'Courier New', Courier, monospace;
    background: black;
    color: white;
    padding: 0.125em 0.5em;
  }
`;

export default function Post({ post }) {
  if (!post.markdown) {
    return <div>Loading!</div>;
  }

  return (
    <FullPage>
      <Container>
        <Layout>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.2,
            }}
          >
            <BlogPostWrap>
              <H1 margin='1em 0'>{post.title}</H1>
              <div>
                <div>{post.date}</div>
                {post.imageSrc && (
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    height={post.height}
                    width={post.width}
                    layout='responsive'
                  />
                )}

                <ReactMarkdown
                  components={{ code: ({ node, ...props }) => <CodeBlock {...props} /> }}
                >
                  {post.markdown}
                </ReactMarkdown>
              </div>
            </BlogPostWrap>
          </motion.div>
        </Layout>
      </Container>
    </FullPage>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
