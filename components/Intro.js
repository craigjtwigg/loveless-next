import styles from '../styles/Intro.module.css';
import Youtube from './Youtube';
import Matt from '../public/assets/matt.jpg';
import Image from 'next/image';
export default function Intro() {
  return (
    <>
    <section className={styles.container}>
      <div className={styles.text}>
         Loveless Studio is a purpose built recording studio in Lancashire, England trusted by Artists, Record Labels and Industry Professionals for over 10 years.
      </div>
     
 
    </section>

         <div className={styles.feature}>
        <div className={styles.imageWrapper}>
          <Image
          className={styles.image}
            src={Matt}
            alt={'Matt Heap, Loveless Studio owner, producer and mix engineer.'}
           />
        </div>
        <p className={styles.featureQuote}>
          <span>Hi my name is Matt Heap</span>: owner, producer and mix engineer at Lovess Studio with over a decade of experience recording music across multiple genres
      from metalcore through to folk music, pop to shoegaze and everything in
       between.
          I put the needs and tastes of each artist before my own and work with
          them to achieve the sound that suits their own original music, adding
          my own spin when requested.
        </p>
      </div>
      </>
  );
}

      // Loveless Studio is a purpose built recording studio in Lancashire, run by
      // me - Matt Heap; a producer, musician, recording and mix engineer with
      // <em> over 10 years experience</em> recording music across multiple genres
      // from metalcore through to folk music, pop to shoegaze and everything in
      // between.