import styles from '../styles/Hero.module.css';
import { Link } from 'react-scroll';
import Button from './Button';

export default function Hero({hero}) {
  return (
    <div className={styles.container}>
      {/* <p className={styles.logo}>loveless studio</p>
        <h1 className={styles.heroText}>MASSIVE PRODUCTIONS FROM SONG TO MASTER</h1> */}

      <h1 className={styles.text}>
        <em className={styles.em}>{hero.header}</em> 
        {hero.subheader}
      </h1>
      <div className={styles.button}>
        <Link to="contact" spy={true} smooth={true}>
          <Button text={hero.buttontext} />
        </Link>
      </div>
    </div>
  );
}
