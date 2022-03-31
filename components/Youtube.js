import styles from '../styles/Youtube.module.css'

export default function Youtube(props) {
  let videoId = props.youTubeLink ? props.youTubeLink.substring(props.youTubeLink.length - 11) : '';
  return (
    <div className={styles.videoWrapper}>
        <iframe
          className={styles.video}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          // title="loveless Studio, Lancashire Recording Studio"
          frameBorder="0"
          //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
  )
}


