import Image from 'next/image';
import MattHeader from '../public/assets/matt.jpg';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerImage}>
        <Image
        className={styles.matt}
          src={MattHeader}
          alt="promotional image of Loveless Studio producer Matt Heap at the studio."
          width={1267}
          height={1280}
          layout='fill'
        />
      </div>
    </header>
  );
}
