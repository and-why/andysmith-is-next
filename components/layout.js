import Head from 'next/head';
import Link from 'next/link';
import Nav from './nav';
import Footer from '../components/footer';
import styles from './layout.module.css';

const name = 'AndySmith.is';

export default function Layout({ children, home }) {
  return (
    <div>
      <div className='container'>
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
          <link rel='icon' href='/favicon.png' />
          <title>AndySmith.is | Personal Blog</title>
          <meta name='description' content="Andy Smith's Next.js Blog" />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
            rel='stylesheet'
          />

          <script src='https://kit.fontawesome.com/54fd6b2cb2.js' crossOrigin='anonymous'></script>
        </Head>
        <header className={styles.header}>
          <Nav />
          {home ? (
            <div className={styles.main}>
              <h1 className={styles.h1}>Homepage</h1>
              <p className={styles.p}>
                In April 2021, I took a gamble on my career. Throwing in the towel for the 10+ year
                career in the marketing field. I've always loved and enjoyed spending time, even
                whilst in marketing, writing code whereever I could within my roles; coding email
                templates, landing pages, automation or internal tools. I've also built a few side
                projects.
              </p>
              <p className={styles.p}>
                Therefore, you guessed it, I'm going to push hard towards a career in
                web/application development. I'm using this site as both a place to write what I
                learn and document the journey, as well as a playground for building things.
              </p>

              <p className={styles.p}>
                <Link href={`/about`}>
                  <a>Read More About Me</a>
                </Link>
              </p>
              <main className={styles.main}>{children}</main>
            </div>
          ) : (
            <main className={styles.main}>{children}</main>
          )}
        </header>
      </div>
      <Footer />
    </div>
  );
}
