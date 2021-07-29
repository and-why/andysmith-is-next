import Layout from '../components/layout';
import styles from '../components/layout.module.css';

export default function About() {
  return (
    <Layout>
      <h1 className={styles.h1}>About</h1>
      <p className={styles.p}>
        I just want to build stuff. Building something from nothing. Using the latest and greatest
        web technologies, or the ones most suitable to the task at hand.
      </p>
      <p className={styles.p}>
        I am always looking to grow my skills and career in software development. I'm currently
        taking on projects as a freelancer and open to discuss opportunities with companies.
      </p>
      <p className={styles.p}>
        I keep a <a href='/blog'>blog</a> mostly about new technologies I'm learning or guides to
        things I understand.
      </p>
      <p className={styles.p}>
        If you'd like to learn more or discuss an opportunity, please contact me via email:{' '}
        <a href='mailto:contact@andysmith.is'>contact@andysmith.is</a>.
      </p>
    </Layout>
  );
}
