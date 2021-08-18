import NProgress from 'nprogress';
import Router from 'next/router';
import '../styles/globals.css';
import '../styles/nprogress.css';
import { ThemeProvider } from 'styled-components';
import { theme } from '../components/styled-components/Theme';
import { AnimateSharedLayout } from 'framer-motion';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AnimateSharedLayout type='crossfade'>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </ThemeProvider>
  );
}

export default MyApp;
