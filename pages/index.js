import Layout from '../components/layout';
import AboutMe from '../components/AboutMe';
import PortfolioList from '../components/PortfolioList';
import { H2 } from '../components/styled-components/Headings';

export default function Home() {
  return (
    <Layout page='home' pageTitle='Freelance Web Engineer'>
      <AboutMe />
      <H2 marginBottom='0.5em'>Featured Work</H2>
      <PortfolioList />
    </Layout>
  );
}
