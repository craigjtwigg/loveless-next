import styles from '../styles/BandCamp.module.css';

export default function BandCamp(props) {
  let releaseID = props.embedCode ? props.embedCode.substring(97, 113) : ''
  return (
    <iframe
    //   style={{width: 350 + 'px'; height: 350px;}}
    className={styles.player}
    width="350px"
          height="350px"
          
      src={`https://bandcamp.com/EmbeddedPlayer/${releaseID}/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/`}
      seamless
    >
    </iframe>
  );
}

