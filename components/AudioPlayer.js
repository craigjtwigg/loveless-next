import styles from '../styles/AudioPlayer.module.css'

export default function AudioPlayer() {
  return (
    <div className={styles.container}>
        <div className={styles.controls}><span>PREV</span> <span>PLAY</span> <span>NEXT</span></div>
        <div className={styles.trackInfo}>SONG NAME</div>
        
    </div>
  )
}
