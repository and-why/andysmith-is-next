import styles from './footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className='flexColumns'>
          <div className='flexColumn'>
            <ul className={styles.footer_ul}>
              <li>
                <a href='https://www.twitter.com/andysmith_is'>
                  <span>Twitter:</span>
                  <span>@andysmith_is</span>
                </a>
              </li>
              <li>
                <a href='https://github.com/and-why'>
                  <span>Github:</span>
                  <span>@and-why</span>
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/andysmith25/'>
                  <span>LinkedIn:</span>
                  <span>andysmith25</span>
                </a>
              </li>
            </ul>
          </div>
          <div className='flexColumn text-right'>
            <Image src='/images/headerImage.png' alt='Andy Smith' width={140} height={166} />
          </div>
        </div>
      </div>
    </footer>
  );
}
