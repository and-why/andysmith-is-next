import Layout from '../components/layout';
import styles from '../components/layout.module.css';

export default function About() {
  return (
    <Layout>
      <h1 className={styles.h1}>About</h1>
      <p className={styles.p}>
        I am happiest when I am building something. Using the latest, greatest and most suitbale web
        technologies for job. I have a background in marketing and understand business practices. I
        make products and websites that are fast, user friendly and adhere to Google's wishes to
        rank well.
      </p>
      <p className={styles.p}>
        I'm currently taking on new projects as a freelancer and open to discuss opportunities with
        companies.
      </p>
      <p className={styles.p}>
        I keep a <a href='/blog'>blog</a> mostly about new technologies I'm learning or guides to
        things I understand.
      </p>
      <p className={styles.p}>
        Give me a shout at: <a href='mailto:contact@andysmith.is'>contact@andysmith.is</a>.
      </p>
    </Layout>
  );
}
