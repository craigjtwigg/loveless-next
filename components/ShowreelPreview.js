import styles from '../styles/ShowreelPreview.module.css';

export default function Showreel() {
  return (
    <div className={styles.sectionWrapper}>
      <section id='showreel' className={styles.section}>

        <h2 className={styles.sectionTitle}>SHOWREEL</h2>
       

        <iframe
          className={styles.playlist}
          src="https://open.spotify.com/embed/playlist/3uur1MA6yUDzc3yeZVceCX?utm_source=generator&theme=0"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen=""
          //allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>

        <div className={styles.videoWrapper}>
          <iframe
          className={styles.video}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/caiPVlPHj3Q"
            title="YouTube video player"
            frameBorder="0"
            //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

         <div className={styles.more}>
           ... HEAR AND SEE MORE EXAMPLES FROM LOVELESS STUDIO
         </div>

      </section>
    </div>
  );
}


