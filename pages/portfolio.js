import Layout from '../components/layout';
import styles from '../components/layout.module.css';
import ProjectTile from '../components/projectTile';

export default function About() {
  return (
    <Layout>
      <h1 className={styles.h1}>Portfolio</h1>
      <div className={styles.portfolioProjects}>
        <ProjectTile
          detailname={'barecomments'}
          name={'Bare Comments'}
          tech={'Next.js, Firebase, ChakraUI, Vercel'}
        />
        <ProjectTile
          detailname={'sonderescapes'}
          name={'SonderEscapes'}
          tech={'Next.js, Firebase, ChakraUI, Amadeus API, Vercel'}
        />
        <ProjectTile
          detailname={'mews'}
          name={'The Mews Retreat'}
          tech={'Next.js, Sanito.io CMS, ChakraUI, Vercel'}
        />
        <div>
          <h3>Other Projects</h3>
          <h4>
            TodoAF - <a href='https://todoaf.com'>visit website</a>
          </h4>
          <p>React, Firebase, Netflify.</p>
          <h4>
            Oben Racing - <a href='https://www.obenracing.com.au'>visit website</a>
          </h4>
          <p>HTML, CSS, JavaScript, WordPress, WooCommerce, AWS Lightsale.</p>
        </div>

        {/* <ProjectTile detailname={'todoaf'} name={'TodoAF'} tech={'React, Firebase, Netlify'} />
        <ProjectTile
          detailname={'obenracing'}
          name={'Oben Racing'}
          tech={'HTML, CSS, JavaScript, WordPress, AWS Lightsail'}
        /> */}
      </div>
    </Layout>
  );
}
