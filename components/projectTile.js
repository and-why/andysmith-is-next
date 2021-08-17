import styles from './projectTile.module.css';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectTile({ detailname, name, tech }) {
  if (!detailname) {
    return null;
  }
  return (
    <NextLink href={`/portfolio/${detailname}`}>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
        }}
      >
        <div className={styles.projectBox}>
          <div className={styles.backgroundText}>{name}</div>
          <div className={styles.image}>
            <motion.figure layoutId='image'>
              <NextImage
                src={`/images/${detailname}.png`}
                height='500px'
                width='500px'
                objectFit='cover'
                // placeholder='blur'
                // blurdataurl='/images/blur.jpg'
              />
            </motion.figure>
          </div>
          <div className={styles.descriptionBox}>
            <div className={styles.contentbox}>
              <motion.h2 layoutId='title'>{name}</motion.h2>
              <p>{tech}</p>
            </div>
          </div>
        </div>
      </motion.a>
    </NextLink>
  );
}
