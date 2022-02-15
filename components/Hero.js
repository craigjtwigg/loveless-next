import React from 'react'
import { Link } from 'react-scroll'
import styles from '../styles/Hero.module.css';
import Youtube from './Youtube';

export default function Hero() {
  return (
         <div className={styles.loveless}>
        <p className={styles.logo}>loveless studio</p>
        <h1 className={styles.heroText}>MASSIVE PRODUCTIONS FROM SONG TO MASTER</h1>
        <div className={styles.textWrapper}>
   <Youtube videoId="caiPVlPHj3Q" />
        </div>
     
         <Link to='contact' spy={true} smooth={true}>
            <button className={styles.cta}>DISCUSS YOUR DREAM PROJECT</button>
         </Link>
      
      </div>
  )
}

        // Loveless Studio is a purpose built recording studio in Lancashire, run
        // by me - Matt Heap; a producer, musician, recording and mix engineer with 
        // <em> over 10 years experience</em> recording music across multiple genres from
        // metalcore through to folk music, pop to shoegaze and everything in between. 
