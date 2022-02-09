import Image from 'next/image';
import MattHeader from '../public/assets/matt.jpg';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.loveless}>
        <p className={styles.logo}>loveless studio</p>
        <h1 className={styles.heroText}>MASSIVE PRODUCTIONS FROM SONG TO MASTER</h1>
        <p className={styles.location}>matthew heap, producer and engineer</p>
        <button className={styles.cta}>RECORD AT LOVELESS STUDIO</button>
      </div>
      
      <div className={styles.headerImage}>
        <Image
        className={styles.matt}
        priority='true'
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
