import styles from '../styles/Footer.module.css';
import Facebook from '../public/assets/platforms/facebookicon.svg'
import GMB from '../public/assets/platforms/gmbicon.svg'
import Instagram from '../public/assets/platforms/instaicon.svg'
import Spotify from '../public/assets/platforms/spotify.svg'
import NerdlingsLogo from '../public/assets/face.svg'
import Image from 'next/image'


export default function Footer() {
    const socials = [Facebook, GMB, Instagram, Spotify]
  return (
    <footer className={styles.container}>
        <div className={styles.iconWrapper}>
        {socials.map((social, idx) => (
            <div key={idx} className={styles.icon}>
                <Image src={social} alt=""/>
                </div>
        ))}
      
        </div>
          <div className={styles.nerdlings}>
              <a target="_blank" href="https://www.nerdlings.co.uk" rel="noopener noreferrer">
                  Web Development and Design by <strong className={styles.strong}>NERDLINGS</strong>.
              </a>
              {/* <div  className={styles.nerdlingslogo}>  <Image src={NerdlingsLogo} alt="Web development and design by Nerdlings" /></div> */}
            
        </div>
    </footer>
  )
}
