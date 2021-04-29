import Head from 'next/head';
import Link from 'next/link';
import Nav from './nav';
import styles from './layout.module.css';

const name = 'AndySmith.is';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=UA-47127307-1`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-47127307-1', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content="Andy Smith's Next.js Blog" />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Chivo:wght@900&family=Merriweather&display=swap'
          rel='stylesheet'
        />
        <script src='https://kit.fontawesome.com/54fd6b2cb2.js' crossorigin='anonymous'></script>
      </Head>
      <header className={styles.header}>
        <Nav />
        {home ? (
          <div>
            <h1 className={styles.title}>WELCOME</h1>
            <div className={styles.flexColumns}>
              <div className={styles.flexColumn}>
                <h1 className={styles.h1}>Learning in the open</h1>
                <p className={styles.p}>
                  In April 2021 I'm taking a gamble on my career. Throwing in the towel for
                  Marketing and pushing hard towards a career in development. To do this, I'm going
                  to 'learn in the open'.
                </p>
                <p className={styles.p}>
                  Learning in the open will make me accountable, potentially help build a network,
                  document my progress, and also show future employment opportunities what I have
                  learnt.
                </p>
                <p className={styles.p}>
                  <Link href={`/about`}>
                    <a>Read More</a>
                  </Link>
                </p>
                <main className={styles.main}>{children}</main>
              </div>
              <div className={styles.flexColumn}>
                <img src='/images/headerImage.png' alt={name} className={styles.headerImage} />
              </div>
            </div>
          </div>
        ) : (
          <main className={styles.main}>{children}</main>
        )}
      </header>
    </div>
  );
}
