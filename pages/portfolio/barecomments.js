import Layout from '../../components/layout';
import NextImage from 'next/image';
import styles from '../../components/layout.module.css';

export default function BareCommentsPage() {
  return (
    <Layout>
      <a href='/portfolio'>Back to portfolio</a>
      <h1>Bare Comments</h1>
      <p className={styles.p}>
        Website: <a href='https://barecomments.vercel.app/'>barecomments.vercel.app</a>
        <br />
        Github:{' '}
        <a href='https://github.com/and-why/barecomments'>github.com/and-why/barecomments</a>
      </p>
      <p className={styles.p}>Technology: Next.js, Firebase, ChakraUI, Vercel</p>
      <div className={styles.mb2}>
        <NextImage src={`/images/barecomments.jpg`} height='500px' width='500px' />
      </div>
      <h2>Brief</h2>
      <p className={styles.p}>
        Barecomments is a SaaS product for adding comments to a page on a staticly generated
        website. The comments run in an iFrame so they will be updated with fresh comments from the
        Barecomments server. This is a full web app backend to manage and collect comments on blog
        posts or any website.{' '}
      </p>
      <p className={styles.p}>
        A user can create a free account using Github or Google OAuth, or by using an email and
        password, and then add comments to other people's websites. Or they can add their own
        website byupgrading to a paid account. This is handled as a subscription through Stripe.
      </p>
      <p className={styles.p}>
        The commenting system works with any website that supports iframes.
      </p>
      <p className={styles.p}>
        This was built by following along with{' '}
        <a href='https://react2025.com/'>Lee Rob's React 2025</a> course.{' '}
      </p>
      <h2>Additional Screenshots</h2>
      <div className={styles.flex}>
        <div className={styles.halfImage}>
          <NextImage
            src={`/images/barecomments1.png`}
            height='500px'
            width='500px'
            objectFit='cover'
            placeholder='blur'
            blurDataURL='/images/blur.jpg'
          />
        </div>
        <div className={styles.halfImage}>
          <NextImage
            src={`/images/barecomments2.png`}
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
            src={`/images/barecomments3.png`}
            height='500px'
            width='500px'
            objectFit='cover'
            placeholder='blur'
            blurDataURL='/images/blur.jpg'
          />
        </div>
        <div className={styles.halfImage}>
          <NextImage
            src={`/images/barecomments4.png`}
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
