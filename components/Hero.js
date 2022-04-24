import styles from '../styles/Hero.module.css';
import { Link } from 'react-scroll';
import Button from './Button';

export default function Hero() {
  return (
    <div className={styles.container}>
      {/* <p className={styles.logo}>loveless studio</p>
        <h1 className={styles.heroText}>MASSIVE PRODUCTIONS FROM SONG TO MASTER</h1> */}

      <h1 className={styles.text}>
        <em className={styles.em}>MASSIVE PRODUCTIONS FROM MIX TO MASTER</em> 
        Bring your music to life at the best recording studio in Lancashire trusted by Artists, Record Labels
        and Industry Professionals for over 10 years.
      </h1>
      <div className={styles.button}>
        <Link to="contact" spy={true} smooth={true}>
          <Button text={'DISCUSS YOUR DREAM PROJECT'} />
        </Link>
      </div>
    </div>
  );
}
