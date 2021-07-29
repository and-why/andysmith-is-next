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
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />

          <script src='https://kit.fontawesome.com/54fd6b2cb2.js' crossOrigin='anonymous'></script>
        </Head>
        <header className={styles.header}>
          <Nav />
          {home ? (
            <div className={styles.main}>
              <h1 className={styles.h1}>Andy Smith</h1>
              <h2 className={styles.h2}>Freelance Web Developer</h2>
              <p className={styles.p}>
                I love working with new technologies and more estabilshed ones. I enjoy making
                user-friendly and performant website and applications.
              </p>
              <p className={styles.p}>
                Welcome to my website where I share what I am learning about these technologies as
                well as some of the websites and projects I have been working on.
              </p>

              <p className={styles.p}>
                <Link href={`/about`}>
                  <a>Find out more about me</a>
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
