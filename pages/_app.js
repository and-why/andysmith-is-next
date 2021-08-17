import NProgress from 'nprogress';
import Router from 'next/router';
import '../styles/globals.css';
import '../styles/nprogress.css';
import { AnimateSharedLayout } from 'framer-motion';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout type='crossfade'>
      <Component {...pageProps} />;
    </AnimateSharedLayout>
  );
}

export default MyApp;
