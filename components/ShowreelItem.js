import Youtube from './Youtube';
import BandCamp from '../components/BandCamp';
import Spotify from '../components/Spotify';
import Button from '../components/Button';
import styles from '../styles/ShowreelItem.module.css';
import SpotifyLogo from '../public/assets/platforms/spotify.svg';
import BandcampLogo from '../public/assets/platforms/bandcamp.svg';
import YoutubeLogo from '../public/assets/platforms/youtube.svg';
import Close from '../public/assets/close.svg';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ShowreelItem({ project }) {
  const [activePlayer, setActivePlayer] = useState();
  const [inactivePlayers, setInactivePlayers] = useState([]);
  const [activeNotes, setActiveNotes] = useState();

  useEffect(() => {
    project.bandcamp
      ? setActivePlayer(project.bandcamp)
      : project.youtube
      ? setActivePlayer(project.youtube)
      : setActivePlayer(project.spotify);
  }, []);

  useEffect(() => {
    let filtered = players.filter((player) => player.link !== activePlayer);
    setInactivePlayers(filtered);
  }, [activePlayer]);

  const togglePlayer = (player) => {
    setActivePlayer(player);
  };

  const toggleNotes = (option) => {
    setActiveNotes(option);
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
        <div
          className={
            activePlayer === project.youtube ? styles.video : styles.player
          }
        >
          {activePlayer === project.bandcamp ? (
            <BandCamp embedCode={project.bandcamp} />
          ) : activePlayer === project.youtube ? (
            <Youtube youTubeLink={project.youtube} />
          ) : (
            <Spotify spotifyLink={project.spotify} />
          )}
        </div>
        <div className={styles.optionsWrapper}>
          <div className={styles.icons}>
            {players.map((item) => (
              <div
                className={styles.iconWrapper}
                key={`${item.platform}Toggle`}
                onClick={() => togglePlayer(item.link)}
              >
                <Image
                  className={styles.icon}
                  src={item.icon}
                  alt={item.platform}
                />
              </div>
            ))}
          </div>
          <div className={styles.buttons}>
            <div onClick={() => toggleNotes('producer')}>
              <Button small={true} text="Producer notes" />
            </div>
            <div onClick={() => toggleNotes('artist')}>
              <Button small={true} alternate={true} text="Artist notes" />
            </div>
          </div>
        </div>
        <div className={activeNotes ? styles.notes : styles.hidden}>
          <div className={styles.notesHeader}>
          <h3 className={styles.notesTitle}>
            {activeNotes === 'producer'
              ? 'Producer notes...'
              : 'Artist notes...'}
          </h3>
          <div onClick={() => toggleNotes('')} className={styles.close}>
            <Image src={Close} alt='close notes' />
          </div>
          
          </div>
          <p className={styles.notesText}>
            {activeNotes === 'producer' ? project.notes : project.testimonial}
          </p>
        </div>
      </div>
    </>
  );
}
