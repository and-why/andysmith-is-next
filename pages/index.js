import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import styles from '../components/layout.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <div className={styles.blogList}>
        <h2>Posts</h2>
        <ul>
          {allPostsData.map(({ id, date, title, imageSrc }, index) => (
            <li key={index}>
              <Link href={`/posts/${id}`}>
                <a>
                  <span>
                    <span className={styles.bigNumber}>{index + 1}.</span> {title}
                  </span>
                  <span>{date}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
