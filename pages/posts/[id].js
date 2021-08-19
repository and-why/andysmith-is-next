import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { H1 } from '../../components/styled-components/Headings';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const BlogPostWrap = styled.div`
  em {
    font-family: 'Courier New', Courier, monospace;
    background: black;
    color: white;
    padding: 0.125em 0.5em;
  }
  pre {
    max-width: 600px;
    margin: 1em auto;
    @media (max-width: 620px) {
      max-width: 550px;
    }
    @media (max-width: 570px) {
      max-width: 500px;
    }
    @media (max-width: 520px) {
      max-width: 450px;
    }
    @media (max-width: 470px) {
      max-width: 400px;
    }
    @media (max-width: 420px) {
      max-width: 350px;
    }
    @media (max-width: 370px) {
      max-width: 300px;
    }
  }
`;

export default function Post({ post }) {
  if (!post.markdown) {
    return <div>Loading!</div>;
  }

  return (
    <Layout page='blog' pageTitle={post.title} description={post.excerpt}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.2,
        }}
      >
        <BlogPostWrap>
          <H1 margin='1em 0'>{post.title}</H1>
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
            children={post.markdown}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={tomorrow}
                    language={match[1]}
                    PreTag='div'
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </BlogPostWrap>
      </motion.div>
    </Layout>
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
