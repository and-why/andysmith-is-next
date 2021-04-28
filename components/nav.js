import Link from 'next/link';
import styles from './layout.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.h1}>
        <Link href={'/'}>
          <a>AndySmith.is</a>
        </Link>
      </h1>
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
      </ul>
    </nav>
  );
}

// <li>
//   <Link href={'/running-a-flight-club'}>
//     <a>flight club</a>
//   </Link>
// </li>
