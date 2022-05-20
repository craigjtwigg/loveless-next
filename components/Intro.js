import styles from '../styles/Intro.module.css';
import Youtube from './Youtube';
import Matt from '../public/assets/matt.jpg';
import Image from 'next/image';
import Button from './Button';
import MattPreview from './MattPreview';

export default function Intro({overview, showreelvideo}) {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.header}>
            {overview}
          </h2>
        </div>

        <div className={styles.video}>
          <Youtube youTubeLink={showreelvideo} />
        </div>

      </section>
    </>
  );
}
