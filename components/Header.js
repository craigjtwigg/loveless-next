import styles from '../styles/Header.module.css';
import Image from 'next/image';
import MattHeader from '../public/assets/mattrear.webp';
import CabsHeader from '../public/assets/cabs.webp';
import DrumHeader from '../public/assets/liveroom.webp';
import Hero from './Hero';

export default function Header({hero}) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerImage}>
          <div className={styles.mattWrapper}>
            <Image
              className={styles.matt}
              priority="true"
              src={hero.desktopimage.data.attributes.url}
              alt="promotional image of Loveless Studio producer Matt Heap at the studio."
              width={1267}
              height={1280}
              layout="fill"
            />
          </div>

          <div className={styles.mobileWrapper}>
            <div className={styles.cabWrapper}>
              <Image
                className={styles.cabs}
                priority="true"
                src={hero.topmobileimage.data.attributes.url}
                alt="promotional image of Loveless Studio producer Matt Heap at the studio."
                width={3000}
                height={2000}
               
              />
            </div>
            <div className={styles.drumWrapper}>
              <Image
                className={styles.room}
                priority="true"
                src={hero.topmobileimage.data.attributes.url}
                alt="promotional image of Loveless Studio producer Matt Heap at the studio."
                width={1500}
                height={1000}
                
              />
            </div>
          </div>
        </div>
      </header>
      <Hero hero={hero}/>
    </>
  );
}
