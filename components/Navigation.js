import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container } from './styled-components/Container';
import { NavStyles } from './styled-components/NavStyles';

export default function Navigation({ page }) {
  function clickToCopy(e) {
    navigator.clipboard.writeText(e.target.innerText);
    e.target.setAttribute('data-text', 'Copied!');
  }

  return (
    <Container>
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
            <Link href='https://www.github.com/and-why' external>
              <a>
                Github
                <svg width='15px' height='15px' viewBox='0 0 24 24'>
                  <g
                    id='external_link'
                    class='icon_svg-stroke'
                    stroke='#000'
                    stroke-width='1.5'
                    fill='none'
                    fill-rule='evenodd'
                    stroke-linecap='round'
                    stroke-linejoin='round'
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
        </motion.ul>
      </NavStyles>
    </Container>
  );
}
