import Layout from '../components/layout';
import styles from '../components/layout.module.css';
import Form from '../components/Form';

export default function RunningAFlightClub() {
  return (
    <Layout>
      <div className={styles.aboutPage}>
        <div className={styles.flexColumns}>
          <div className={styles.flexColumn}>
            <img src='/images/flight.jpg' alt='Flight Club' />
          </div>
          <div className={styles.flexColumn}>
            <h1 className={styles.h1}>Andy Smith's Flight Club</h1>
            <p className={styles.p}>
              Join Flight Club. The only rule is, don't talk shit about Flight Club. Flight Club is
              an app I have built as part of my Python Studies. It will go through all flights in
              the next 6 months and email you the best deals out there. For any destination.
            </p>
            <p className={styles.p}>
              Enter your name, email and local airport and each week I'll send you the best 10
              flight deals out there. This is a work in progress, so it might not be the best to
              begin with.
            </p>
            <Form />
          </div>
        </div>
      </div>
    </Layout>
  );
}
