import Layout from '../components/layout';
import styles from '../components/layout.module.css';

export default function About() {
  return (
    <Layout>
      <div className={styles.aboutPage}>
        <div className={styles.flexColumns}>
          <div className={styles.flexColumn}>
            <img src='/images/profileRight.png' alt='' />
            <ul>
              <li>
                <a href='https://www.twitter.com/andysmith_is'>
                  <span>Twitter</span>
                  <span>@andysmith_is</span>
                </a>
              </li>
              <li>
                <a href='https://github.com/and-why'>
                  <span>Github</span>
                  <span>@and-why</span>
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/andysmith25/'>
                  <span>LinkedIn</span>
                  <span>andysmith25</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.flexColumn}>
            <h1 className={styles.h1}>About</h1>
            <p className={styles.p}>
              For many years I've dabbled in code. Since my first years in marketing, I pushed to
              learn HTML and CSS. 'To help me amend the brochure website' was my reasoning, and to
              be honest, back then I felt I needed a reason other than, I've always wanted to learn
              this.
            </p>

            <p className={styles.p}>
              I loved the course my company put me on and I explored it further until I was able to
              build static websites. I got a bit of freelance work where I built some very basic
              static websites. They weren't bad, but completely hard coded.
            </p>

            <p className={styles.p}>
              From there I learned more about building websites with CMS's like WordPress, Moustache
              and another open sourced CMS which has since folded. I also started to dabble in
              designing my own websites, and made a number of personal projects. I've since built
              many many WordPress websites, using child themes, _s (underscores) and recently
              looking at Tailwind CSS in WordPress.
            </p>

            <p className={styles.p}>
              A couple of years ago I wanted to learn more about the interactivity side of Web
              design, and learnt JavaScript, which lead me to understanding more about web apps,
              which as you can imagine lead me to become fascinated by ReactJS. I learnt React and
              built my own to do app, as everyone does, which is hosted on Netlify and uses Google's
              Firebase database. This app is functional and you can find and use it here:{' '}
              <a href='https://www.todoaf.com'> TodoAF</a>.
            </p>

            <p className={styles.p}>
              I joined a company called Appscore, as an Account Manager, with somewhat of a thought
              that I'd continue my React learning and being at an App company might lead to
              befriending devs or just give me some more of an idea of what to do to take my career
              in that direction. This didn't pan out. The Account Management part of the job, as an
              introvert, was truly exhausting. I do not get my energy from talking to people, much
              less from having hard conversations with clients. The learning before and after work
              stopped. Commuting was 1 hour each way, and I was just exhausted.
            </p>

            <p className={styles.p}>
              I moved into a Project Management role, although I also kept my Account Management
              duties, which put me closer to the development part of the company, and started to
              refresh my desire for a career in development, but again, quite tiring talking to
              people and and hard to focus on two job responsibilities and then even contemplate
              doing extra work before and after a day of work.
            </p>

            <p className={styles.p}>
              And that brings me here. I want to get back into learning programming and really give
              it a proper go.
            </p>

            <p className={styles.p}>
              I have a good history in web development, so I'm going to continue learning that side
              of things, for example this website is refreshing my memory on React and NextJS, but I
              really want more 'real' programming, so I have chosen to learn Python. I have created
              a GitHub repository to show all the Python Projects I'm building to learn the
              language, which you can see it here if you want:{' '}
              <a href='https://github.com/and-why/PythonProjects'>Python Projects</a>.
            </p>

            <p className={styles.p}>
              After building this blog, also hosted on Github and deployed through Vercel, I realise
              I need to do a bit of refresher on JavaScript, React, NextJS, Svelte, GraphQL (and all
              the other bits and pieces that touch each.)
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
