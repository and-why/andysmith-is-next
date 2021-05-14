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
          {allPostsData.map(({ id, title, date, excerpt }, index) => (
            <li key={index}>
              <Link href={`/posts/${id}`}>
                <a>
                  <div className={styles.post_topline}>
                    <h3>{title}</h3>
                    <span className={styles.post_date}>
                      {new Date(date).toLocaleDateString().replace('/', '-').replace('/', '-')}
                    </span>
                  </div>
                  {excerpt && <div className={styles.excerpt}>{excerpt}</div>}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
