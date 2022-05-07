import styles from '../styles/Showreel.module.css';
import SEO from '../components/SEO';
import Youtube from '../components/Youtube';
import NavBar from '../components/NavBar';
import { useInView } from 'react-intersection-observer';
import Spotify from '../components/Spotify';
import ShowreelItem from '../components/ShowreelItem';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Showreel({seo, projects, showreelvideo, spotifyplaylist, header, subheader}) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  let sortedProjects = projects.sort(function (a, b) {
  return b.attributes.year - a.attributes.year;
});

  
  return (
    <>
    <SEO seo={seo} />
      <NavBar inView={inView} />
      <div className={styles.container}>
 

        <div className={styles.showreel}>
      
          <div className={styles.video}>
            <Youtube youTubeLink={showreelvideo} />
          </div>
         
         
        </div>
       
       
        <div className={styles.projects}>
           <div className={styles.projectsHeader}>
           <h2 className={styles.h2}>{header}</h2>
        <p className={styles.text}>{subheader}</p>
        </div>
          {sortedProjects.map((project) => (
            <ShowreelItem key={project.attributes.title} project={project.attributes} />
          ))}
        </div>

        <div className={styles.spotify}>
           
            <h3 className={styles.h3}>
              Check out the Loveless Studio Spotify playlist!
            </h3>
            <div className={styles.player}>
              <Spotify spotifyLink={spotifyplaylist} />
            </div>
            <Button text={'Add the Loveless Studio playlist to your Spotify library'}/>
          </div>

      </div>
      <ContactForm />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://salty-plateau-21551.herokuapp.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query Projects {
   showreelpage {
    data {
      attributes {
         seo {
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                width
                height
                url
              }
            }
          }
          metaSocial {
            socialNetwork
            title
            description
            image {
              data {
                attributes {
                  width
                  height
                  url
                }
              }
            }
          }
        }
        header
        subheader
        spotifyplaylist
        youtubeshowreel
      }
    }
  }      
  projects {
    data {
    	attributes {
        artist
        title
        label
        year
        youtube
        spotify
        bandcamp
        producernotes
        review {
          data {
            attributes {
              author
              review
              rating
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
                }
              }
            }
          }
        }
      }
    }`,
    }),
  });

  const json = await res.json();

  return {
    props: {
      projects: json.data.projects.data,
      showreelvideo: json.data.showreelpage.data.attributes.youtubeshowreel,
      spotifyplaylist: json.data.showreelpage.data.attributes.spotifyplaylist,
      header: json.data.showreelpage.data.attributes.header,
      subheader: json.data.showreelpage.data.attributes.subheader,
      seo: json.data.showreelpage.data.attributes.seo[0],
    },
    revalidate: 1,
  };
}
