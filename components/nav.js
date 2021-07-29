import Link from 'next/link';
import styles from './nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href={'/'}>
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href={'/about'}>
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href={'/blog'}>
            <a>blog</a>
          </Link>
        </li>
        <li>
          <Link href={'/portfolio'}>
            <a>portfolio</a>
          </Link>
        </li>
        <li>
          <Link href={'mailto:contact@andysmith.is'}>
            <a>contact@andysmith.is</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
