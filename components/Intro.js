import styles from '../styles/Intro.module.css';
import Youtube from './Youtube';
import Matt from '../public/assets/matt.jpg';
import Image from 'next/image';
import Button from './Button';
import MattPreview from './MattPreview';

export default function Intro({showreelvideo}) {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.header}>
            Loveless Studio is a fully equipped purpose built recording studio
            in Colne, Lancashire ran by local producer Matt Heap.
          </h2>
        </div>

        <div className={styles.video}>
          <Youtube youTubeLink={showreelvideo} />
        </div>
        {/* <ul className={styles.list}>
          <li>production</li>
          <li>|</li>
          <li>engineering</li>
          <li>|</li>
          <li>mixing</li>
          <li>|</li>
          <li>mastering</li>
        </ul> */}
      </section>

      {/* <MattPreview /> */}
    </>
  );
}
