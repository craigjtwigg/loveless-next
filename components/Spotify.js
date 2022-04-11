

export default function Spotify(props) {
  
   let releaseID = props.spotifyLink ? props.spotifyLink.substring(25) : ''
  return (
  <iframe
          src={`https://open.spotify.com/embed/${releaseID}?utm_source=generator&theme=0`}
          width="100%"
          height="80px"
          frameBorder="0"
          allowFullScreen=""
          //allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
  )
}

