import Youtube from './Youtube';
import BandCamp from '../components/BandCamp';
import Spotify from '../components/Spotify';
import styles from '../styles/ShowreelItem.module.css';
import SpotifyLogo from '../public/assets/platforms/spotify.svg'
import BandcampLogo from '../public/assets/platforms/bandcamp.svg'
import YoutubeLogo from '../public/assets/platforms/youtube.svg'
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ShowreelItem({ project }) {
  const [activePlayer, setActivePlayer] = useState();
  const [inactivePlayers, setInactivePlayers] = useState([]);

  useEffect(() => {
    project.bandcamp
      ? setActivePlayer(project.bandcamp)
      : project.youtube
      ? setActivePlayer(project.youtube)
      : setActivePlayer(project.spotify);
  }, []);
  
  useEffect(()=> {
    let filtered = players.filter((player) => player.link !== activePlayer)
    setInactivePlayers(filtered)
  }, [activePlayer])

  const togglePlayer = (player) => {
    setActivePlayer(player);
   
  };

  const players = [
    {
      platform: 'bandcamp',
      link: project.bandcamp,
      icon: BandcampLogo,
    },
     {
      platform: 'youtube',
      link: project.youtube,
      icon: YoutubeLogo,
    },
    {
      platform: 'spotify',
      link: project.spotify,
      icon: SpotifyLogo,
    },
   
  ];



  return (
    <>
      <div className={styles.container}>
        <h3
          className={styles.title}
        >{`${project.artist} - ${project.title}`}</h3>
        <h4 className={styles.label}>{project.label}</h4>
        <div className={activePlayer === project.youtube ? styles.video : styles.player}>
          {activePlayer === project.bandcamp ? (
            <BandCamp embedCode={project.bandcamp} />
          ) : activePlayer === project.youtube ? (
            <Youtube youTubeLink={project.youtube} />
          ) : (
            <Spotify spotifyLink={project.spotify} />
          )}
        </div>
        <div className={styles.icons}>
          {players.map((item) => (
              <div 
                className={styles.iconWrapper}
                key={`${item.platform}Toggle`}
                onClick={() => togglePlayer(item.link)}
              >
                <Image className={styles.icon} src={item.icon} alt={item.platform}/>
              </div>
            ))}
        </div>
            <h3 className={styles.notesTitle}>Producer notes...</h3>
            <p className={styles.notesText}>{project.notes}</p>
      </div>
    </>
  );
}
