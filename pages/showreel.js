import styles from '../styles/Showreel.module.css';
import Youtube from '../components/Youtube';
import NavBar from '../components/NavBar';
import { useInView } from 'react-intersection-observer';
import BandCamp from '../components/BandCamp';
import Spotify from '../components/Spotify';
import { showreelData } from '../data';
import ShowreelItem from '../components/ShowreelItem';

export default function Showreel() {
    const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
      <>
      <NavBar inView={inView} />
    <div className={styles.container}>

      {
        showreelData.map(project => (
          <ShowreelItem key={project.title} project={project}/>
        ))
      }
        
        {/* <h1 className={styles.title}>showreel</h1>
        <div className={styles.hero}> <p className={styles.text}>
        Check out some of the work we have done here at Loveless Studio.
    </p>
     <Youtube youTubeLink="https://www.youtube.com/watch?v=caiPVlPHj3Q" />
    </div>
    <Spotify spotifyLink={`https://open.spotify.com/album/16tocE1hKcCOd1XKpd72Dg?si=Qije9nozR3WsxZhDTIEC-w`} />
   <BandCamp embedCode={`<iframe style="border: 0; width: 350px; height: 442px;" src="https://bandcamp.com/EmbeddedPlayer/track=2048573592/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://infantstheband.bandcamp.com/track/apple-of-her-eye">Apple Of Her Eye by Infants</a></iframe>`}/> */}
    </div>
    </>
  )
}
