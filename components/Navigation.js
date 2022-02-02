import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { externalTag } from '../lib/icons';
import { NavStyles } from './styled-components/NavStyles';

export default function Navigation() {
  function clickToCopy(e) {
    navigator.clipboard.writeText(e.target.innerText);
    e.target.setAttribute('data-text', 'Copied!');
  }
  const router = useRouter();

  const navItems = [
    {
      href: '/',
      title: 'home',
      referrerpolicy: 'same-origin',
      rel: null,
      icon: null,
      className: null,
    },
    {
      href: '/blog',
      title: 'blog',
      referrerpolicy: 'same-origin',
      rel: null,
      icon: null,
      className: null,
    },
    {
      href: 'https://www.github.com/and-why',
      title: 'github',
      referrerpolicy: 'origin',
      rel: 'external',
      icon: externalTag,
      className: null,
    },
    {
      href: 'https://cal.com/andysmith-is/short',
      title: 'book a call',
      referrerpolicy: 'origin',
      rel: 'external',
      icon: null,
      className: null,
    },
  ];

  return (
    <NavStyles>
      <motion.ul layoutId='navigation'>
        {navItems.map((link, i) => {
          return (
            <li key={i}>
              <Link href={link.href}>
                <a aria-current={router.asPath === link.href}>
                  {link.title}
                  {link.icon}
                </a>
              </Link>
            </li>
          );
        })}
        <li>
          <a className='clickcopy' onClick={clickToCopy} data-text='click to copy'>
            contact@andysmith.is
          </a>
        </li>
      </motion.ul>
    </NavStyles>
  );
}
