import React from 'react'
import { Link } from 'react-scroll'
import styles from '../styles/Hero.module.css';
import Youtube from './Youtube';
import Button from './Button';

export default function Hero({ref}) {
  return (
         <div className={styles.loveless}>
        <p ref={ref} className={styles.logo}>loveless studio</p>
        <h1 className={styles.heroText}>MASSIVE PRODUCTIONS FROM SONG TO MASTER</h1>
        <div className={styles.textWrapperOuter}>
           <div className={styles.textWrapper}>
               <Youtube videoId="caiPVlPHj3Q" />
           </div>
  
        </div>
     
         <Link to='contact' spy={true} smooth={true}>
             <Button text={'DISCUSS YOUR DREAM PROJECT'} />
         </Link>
      
      </div>
  )
}

