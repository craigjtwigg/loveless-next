import styles from '../styles/AudioPlayer.module.css'
import Play from '../public/assets/audioplayer/play.svg'
import Next from '../public/assets/audioplayer/next.svg'
import Previous from '../public/assets/audioplayer/previous.svg'
import Stop from '../public/assets/audioplayer/stop.svg'
import Pause from '../public/assets/audioplayer/pause.svg'
import Image from 'next/image'

export default function AudioPlayer() {
  return (
    <div className={styles.container}>
        <div className={styles.controls}>
          <div className={styles.iconWrapper}>
          <Image className={styles.icon} src={Previous} alt='Play the previous Loveless Studio track' />
        </div>
            <div className={styles.iconWrapper}>
          <Image className={styles.icon} src={Play} alt='Play the current Loveless Studio track' />
        </div>
              <div className={styles.iconWrapper}>
          <Image className={styles.icon} src={Next} alt='Play the next Loveless Studio track' />
        </div>
        </div>
        <div className={styles.trackInfo}>SONG NAME</div>
        
    </div>
  )
}
