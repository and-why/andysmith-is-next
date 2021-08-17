import Layout from '../../components/layout';
import NextImage from 'next/image';
import Link from 'next/link';
import styles from '../../components/layout.module.css';
import { motion } from 'framer-motion';

export default function sonderescapesPage() {
  return (
    <Layout>
      <Link href='/portfolio'>
        <a>Back to portfolio</a>
      </Link>
      <motion.h2 layoutId='title'>Sonder Escapes</motion.h2>
      <p className={styles.p}>
        Website: <a href='https://sonderescapes.vercel.app'>sonderescapes.vercel.app</a>
        <br />
        Github:{' '}
        <a href='https://github.com/and-why/luxury_hotels '>github.com/and-why/luxury_hotels</a>
      </p>
      <p className={styles.p}>Technology: Next.js, Firebase, Amadeus API, ChakraUI, Vercel</p>
      <div className={styles.mb2}>
        <motion.figure layoutId='image'>
          <NextImage src={`/images/sonderescapes.png`} height='500px' width='500px' />
        </motion.figure>
      </div>
      <h2>Brief</h2>
      <p className={styles.p}>
        SonderEscapes is currently under development and has a lot of bugs, but it is a hotel search
        and booking system powered by the Amadeus API. The design is heavily inspired by Airbnb, as
        the project is to build out the application functionality, not to focus on design.
      </p>
      <p className={styles.p}>
        A user can currently only create a free account using Github oAuth powered by Firebase. Once
        a user has an account they can favourite hotels, and view those favourites. They can also
        see their account details and add a Date of Birth and gender.
      </p>
      <p className={styles.p}>More to come.</p>
      <h2>Additional Screenshots</h2>
      <div className={styles.flex}>
        <div className={styles.halfImage}>
          <NextImage
            src={`/images/sonderescapes1.png`}
            height='500px'
            width='500px'
            objectFit='cover'
            placeholder='blur'
            blurDataURL='/images/blur.jpg'
          />
        </div>
        <div className={styles.halfImage}>
          <NextImage
            src={`/images/sonderescapes2.png`}
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
            src={`/images/sonderescapes3.png`}
            height='500px'
            width='500px'
            objectFit='cover'
            placeholder='blur'
            blurDataURL='/images/blur.jpg'
          />
        </div>
        <div className={styles.halfImage}>
          <NextImage
            src={`/images/sonderescapes4.png`}
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
            src={`/images/sonderescapes5.png`}
            height='500px'
            width='500px'
            objectFit='cover'
            placeholder='blur'
            blurDataURL='/images/blur.jpg'
          />
        </div>
        <div className={styles.halfImage}>
          <NextImage
            src={`/images/sonderescapes6.png`}
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
            src={`/images/sonderescapes7.png`}
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
