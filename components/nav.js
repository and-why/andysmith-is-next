import Link from 'next/link';
import styles from './layout.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.h1}>
        <a href='/'>AndySmith.is</a>
      </h1>
      <ul>
        <li>
          <a href='/'>home</a>
        </li>
        <li>
          <a href='/about'>about</a>
        </li>
      </ul>
    </nav>
  );
}
