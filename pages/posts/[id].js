import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import styles from '../../components/layout.module.css';

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

export default function Post({ postData }) {
  return (
    <Layout>
      <div className={styles.post}>
        <div className={styles.flexColumns}>
          <div className={styles.flexColumn}>
            <h1 className={styles.postTitle}>{postData.title}</h1>
            <div>{postData.date}</div>
          </div>
          <div className={styles.flexColumn}>
            {postData.imageSrc && (
              <img className={styles.postImage} src={postData.imageSrc} alt={postData.title} />
            )}
          </div>
        </div>

        <div
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </div>
    </Layout>
  );
}
