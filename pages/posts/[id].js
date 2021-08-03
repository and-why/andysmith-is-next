import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import styles from '../../components/layout.module.css';
import CodeBlock from '../../components/codeblock';

export default function Post(props) {
  const postData = props.postData;

  if (!postData.markdown) {
    return <div>Loading!</div>;
  }

  return (
    <Layout>
      <div className={styles.post}>
        <h1 className={styles.postTitle}>{postData.title}</h1>
      </div>
      <div className={styles.postContainer}>
        <div className={styles.postDate}>{postData.date}</div>
        {postData.imageSrc && (
          <Image
            src={postData.imageSrc}
            alt={postData.title}
            height={postData.height}
            width={postData.width}
            layout='responsive'
          />
        )}

        <ReactMarkdown components={{ code: ({ node, ...props }) => <CodeBlock {...props} /> }}>
          {postData.markdown}
        </ReactMarkdown>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
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
