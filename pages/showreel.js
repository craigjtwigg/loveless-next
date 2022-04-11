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
        <h1 className={styles.title}>showreel</h1>

        <div className={styles.showreel}>
          <p className={styles.text}></p>
          <div className={styles.video}>
            <Youtube youTubeLink="https://www.youtube.com/watch?v=caiPVlPHj3Q" />
          </div>
         
          <div className={styles.spotify}>
           
            <p className={styles.text}>
              I update this Spotify playlist with the latest
              projects that I have worked on, give it a whirl and consider
              adding it to your library!
            </p>
            <div className={styles.player}>
              <Spotify spotifyLink="https://open.spotify.com/playlist/3uur1MA6yUDzc3yeZVceCX?si=ab21da3e353148cd" />
            </div>
          </div>
        </div>
        <h2 className={styles.h2}>Projects</h2>
        <p className={styles.text}></p>
        <div className={styles.projects}>
          {showreelData.map((project) => (
            <ShowreelItem key={project.title} project={project} />
          ))}
        </div>

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
  );
}
