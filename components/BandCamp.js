import styles from '../styles/BandCamp.module.css';

export default function BandCamp(props) {
  let releaseID = props.embedCode ? props.embedCode.substring(96, 112) : ''
  return (
    <iframe
    //   style={{width: 350 + 'px'; height: 350px;}}
    className={styles.player}
    width="100%"
          height="120px"
          
      src={`https://bandcamp.com/EmbeddedPlayer/${releaseID}/size=large/bgcol=000000/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/`}
      seamless
    >
    </iframe>
  );
}

{/* <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=2043724660/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://infantstheband.bandcamp.com/track/i-think-im-broke-2">I Think I&#39;m Broke by Infants</a></iframe> */}