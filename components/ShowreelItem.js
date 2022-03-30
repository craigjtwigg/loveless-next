import Youtube from './Youtube';
import BandCamp from '../components/BandCamp';
import Spotify from '../components/Spotify';
import styles from '../styles/ShowreelItem.module.css';
import { useState, useEffect } from 'react';

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
    },
    {
      platform: 'spotify',
      link: project.spotify,
    },
    {
      platform: 'youtube',
      link: project.youtube,
    },
  ];



  return (
    <>
      <div className={styles.container}>
        <h3
          className={styles.title}
        >{`${project.artist} - ${project.title}`}</h3>
        <div className={styles.player}>
          {activePlayer === project.bandcamp ? (
            <BandCamp embedCode={project.bandcamp} />
          ) : activePlayer === project.youtube ? (
            <Youtube youTubeLink={project.youtube} />
          ) : (
            <Spotify spotifyLink={project.spotify} />
          )}
        </div>
        <div className={styles.icons}>
          {inactivePlayers.map((item) => (
              <span
                key={`${item.platform}Toggle`}
                onClick={() => togglePlayer(item.link)}
              >
                {item.platform}
              </span>
            ))}
        </div>

      </div>
    </>
  );
}
