import Layout from '../../components/layout';
import NextImage from 'next/image';
import styles from '../../components/layout.module.css';

export default function mewsPage() {
  return (
    <Layout>
      <a href='/portfolio'>Back to portfolio</a>
      <h1>The Mews Retreat</h1>
      <p className={styles.p}>
        Website: <a href='https://themewsretreat.vercel.app'>themewsretreat.vercel.app</a>
        <br />
        Github:{' '}
        <a href='https://github.com/and-why/the-mews-retreat  '>
          github.com/and-why/the-mews-retreat
        </a>
      </p>
      <p className={styles.p}>Technology: Next.js, Sanity.io, ChakraUI, Vercel</p>
      <div className={styles.mb2}>
        <NextImage src={`/images/mews.png`} height='500px' width='500px' />
      </div>
      <h2>Brief</h2>
      <p className={styles.p}>
        The Mews Retreat is a website for an Airbnb accommodation, showcasing the space and listing
        amenities. It's a very clean and simple design built simply to showcase more of the
        accommodation.
      </p>
      <p>
        The CMS is built with Sanity.io, a powerful and hugely customisable CMS that works great
        with static websites.
      </p>

      <h2>Additional Screenshots</h2>
      <div className={styles.flex}>
        <div className={styles.halfImage}>
          <NextImage
            src={`/images/mews1.png`}
            height='500px'
            width='500px'
            objectFit='cover'
            placeholder='blur'
            blurDataURL='/images/blur.jpg'
          />
        </div>
        <div className={styles.halfImage}>
          <NextImage
            src={`/images/mews2.png`}
            height='500px'
            width='500px'
            objectFit='cover'
            placeholder='blur'
            blurDataURL='/images/blur.jpg'
          />
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.halfImage}>
          <NextImage
            src={`/images/mews3.png`}
            height='500px'
            width='500px'
            objectFit='cover'
            placeholder='blur'
            blurDataURL='/images/blur.jpg'
          />
        </div>
        <div className={styles.halfImage}>
          <NextImage
            src={`/images/mews4.png`}
            height='500px'
            width='500px'
            objectFit='cover'
            placeholder='blur'
            blurDataURL='/images/blur.jpg'
          />
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.halfImage}>
          <NextImage
            src={`/images/mews5.png`}
            height='500px'
            width='500px'
            objectFit='cover'
            placeholder='blur'
            blurDataURL='/images/blur.jpg'
          />
        </div>
        <div className={styles.halfImage}>
          <NextImage
            src={`/images/mews6.png`}
            height='500px'
            width='500px'
            objectFit='cover'
            placeholder='blur'
            blurDataURL='/images/blur.jpg'
          />
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.halfImage}>
          <NextImage
            src={`/images/mews7.png`}
            height='500px'
            width='500px'
            objectFit='cover'
            placeholder='blur'
            blurDataURL='/images/blur.jpg'
          />
        </div>
        <div className={styles.halfImage}>
          <NextImage
            src={`/images/mews8.png`}
            height='500px'
            width='500px'
            objectFit='cover'
            placeholder='blur'
            blurDataURL='/images/blur.jpg'
          />
        </div>
      </div>
    </Layout>
  );
}
