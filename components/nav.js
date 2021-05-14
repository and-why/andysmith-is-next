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
          <Link href={'mailto:hello@andysmith.is'}>
            <a>hello@andysmith.is</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
