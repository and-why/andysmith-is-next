import styles from './projectTile.module.css';
import NextImage from 'next/image';
import NextLink from 'next/link';

export default function ProjectTile({ detailname, name, tech }) {
  return (
    <NextLink href={`/portfolio/${detailname}`}>
      <a>
        <div className={styles.projectBox}>
          <div className={styles.backgroundText}>{name}</div>
          <div className={styles.image}>
            <NextImage
              src={`/images/${detailname}.png`}
              height='500px'
              width='500px'
              objectFit='cover'
              placeholder='blur'
              blurDataURL='/images/blur.jpg'
            />
          </div>
          <div className={styles.descriptionBox}>
            <div className={styles.contentbox}>
              <h2>{name}</h2>
              <p>{tech}</p>
            </div>
          </div>
        </div>
      </a>
    </NextLink>
  );
}
