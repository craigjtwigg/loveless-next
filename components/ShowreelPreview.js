import styles from '../styles/ShowreelPreview.module.css';
import Spotify from './Spotify';
import Youtube from './Youtube';
import Link from 'next/link';

export default function Showreel() {
  return (
    <div className={styles.sectionWrapper}>
      <section id="showreel" className={styles.section}>
        <h2 className={styles.sectionTitle}>Playlist and Radio ready professional production</h2>
          <p>
          Loveless Studio productions have featured on major radio shows
          such as the Radio One Rock Show, BBC Introducing, XFM and Radio X as well
          as countless official Spotify playlists and have been published by labels such
          as Sony Records, Music For Nations, Society Of Losers and Scyla. 
          </p>
       <div className={styles.quoteWrapper}>
          <p className={styles.quote}>
         " Great attention to detail and fast delivery on a project we did with Matt and Sony Music / Music For Nations "
        </p>
        <p className={styles.quoteAuthor}>- Bobby Pook, <Link href="https://www.blanketofficial.com/"><a>Blanket</a></Link></p>
       </div>
       <div className={styles.videoWrapper}>
             <Youtube videoId="0ET5pQX3iXs" />
       </div>

       

       
        <div className={styles.more}>
          ... HEAR AND SEE MORE EXAMPLES FROM LOVELESS STUDIO
        </div>
      </section>
    </div>
  );
}
