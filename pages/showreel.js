import styles from '../styles/Showreel.module.css';
import Youtube from '../components/Youtube';
import NavBar from '../components/NavBar';
import { useInView } from 'react-intersection-observer';
import BandCamp from '../components/BandCamp';
import Spotify from '../components/Spotify';
import { showreelData } from '../data';
import ShowreelItem from '../components/ShowreelItem';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Showreel() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <>
      <NavBar inView={inView} />
      <div className={styles.container}>
 

        <div className={styles.showreel}>
      
          <div className={styles.video}>
            <Youtube youTubeLink="https://www.youtube.com/watch?v=caiPVlPHj3Q" />
          </div>
         
         
        </div>
       
       
        <div className={styles.projects}>
           <div className={styles.projectsHeader}>
           <h2 className={styles.h2}>Projects</h2>
        <p className={styles.text}>Take a deep dive into the tracks, albums and live sessions that have been produced here at Loveless Studios over the years...</p>
        </div>
          {showreelData.map((project) => (
            <ShowreelItem key={project.title} project={project} />
          ))}
        </div>

        <div className={styles.spotify}>
           
            <h3 className={styles.h3}>
              Check out the Loveless Studio Spotify playlist!
            </h3>
            <div className={styles.player}>
              <Spotify spotifyLink="https://open.spotify.com/playlist/3uur1MA6yUDzc3yeZVceCX?si=ab21da3e353148cd" />
            </div>
            <Button text={'Add the Loveless Studio playlist to your Spotify library'}/>
          </div>

      </div>
      <ContactForm />
      <Footer />
    </>
  );
}
