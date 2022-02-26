import Image from 'next/image';
import styles from '../styles/GearPreview.module.css';
import Button from './Button';

export default function GearPreview() {
  return (
    <section id='gear' className={styles.container}>
      <h2 className={styles.h2}>Epuipped with the perfect tools for you to expermient and craft your dream sound.</h2>
      <p className={styles.text}>
        Loveless Studio is kitted out with a wide range of carefully curated boutique and industry standard instruments, amplifiers,
        pedals, drums and the highest quality recording equiptment.
      </p>
        <Button text={'CHECK OUT OUR FULL GEAR LISTING'} />
      {/* <div className={styles.imageOneWrapper}>
        <Image
          className={styles.imageOne}
          src={LiveRoom}
          alt="Loveless Studio industry standard cabinets and amplifiers"
          layout='fill'
        />
      </div>

      <div className={styles.imageTwoWrapper}>
        <Image
          className={styles.imageTwo}
          src={Amps}
          alt="Loveless Studio industry standard cabinets and amplifiers"
          layout='fill'
        />
      </div> */}
    </section>
  );
}
