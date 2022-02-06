import Image from 'next/image';
import styles from '../styles/GearPreview.module.css';
import Amps from '../public/assets/AmpRack.jpg';
import LiveRoom from '../public/assets/LiveRoom-2.jpg';

export default function GearPreview() {
  return (
    <section id='gear' className={styles.container}>
      <p className={styles.text}>
        Loveless Studio is equipped with a wide range of instruments, amplifiers,
        pedals, drums and the highest quality recording equiptment.
      </p>
      <div className={styles.imageOneWrapper}>
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
      </div>
    </section>
  );
}
