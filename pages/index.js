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
          {allPostsData.map(({ id, title, date }, index) => (
            <li key={index}>
              <h3>
                <Link href={`/posts/${id}`}>
                  <a>
                    <span>{title}</span>
                    <span className={styles.post_date}>
                      {new Date(date).toLocaleDateString().replace('/', '-').replace('/', '-')}
                    </span>
                  </a>
                </Link>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
