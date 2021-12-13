import { motion } from 'framer-motion';
import Link from 'next/link';
import { NavStyles } from './styled-components/NavStyles';

export default function Navigation({ page }) {
  function clickToCopy(e) {
    navigator.clipboard.writeText(e.target.innerText);
    e.target.setAttribute('data-text', 'Copied!');
  }

  return (
    <NavStyles>
      <motion.ul layoutId='navigation'>
        <li>
          <Link href={'/'}>
            <a aria-current={page === 'home'}>home</a>
          </Link>
        </li>
        <li>
          <Link href={'/blog'}>
            <a aria-current={page === 'blog'}>blog</a>
          </Link>
        </li>
        <li>
          <Link href='https://www.github.com/and-why' external target='_blank'>
            <a>
              Github
              <svg width='15px' height='15px' viewBox='0 0 24 24'>
                <g
                  id='external_link'
                  className='icon_svg-stroke'
                  stroke='#000'
                  strokeWidth='1.5'
                  fill='none'
                  fillRule='evenodd'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polyline points='17 13.5 17 19.5 5 19.5 5 7.5 11 7.5'></polyline>
                  <path d='M14,4.5 L20,4.5 L20,10.5 M20,4.5 L11,13.5'></path>
                </g>
              </svg>
            </a>
          </Link>
        </li>
        <li>
          <a className='clickcopy' onClick={clickToCopy} data-text='click to copy'>
            contact@andysmith.is
          </a>
        </li>
        <li>
          <a href='https://cal.com/andysmith-is/short' data-text='click to copy'>
            book a call
          </a>
        </li>
      </motion.ul>
    </NavStyles>
  );
}
