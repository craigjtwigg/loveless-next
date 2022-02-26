import styles from '../styles/Intro.module.css';
import Youtube from './Youtube';
import Matt from '../public/assets/matt.jpg';
import Image from 'next/image';
import Button from './Button';
import MattPreview from './MattPreview';

export default function Intro() {
  return (
    <>
    <section className={styles.container}>
      <h2 className={styles.text}>
         Loveless Studio is a purpose built recording studio in Lancashire, England trusted by Artists, Record Labels and Industry Professionals for over 10 years.
      </h2>
    </section>

        <MattPreview />
      </>
  );
}

