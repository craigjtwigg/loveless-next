import styles from '../styles/Matt.module.css';
import SEO from "../components/SEO"
import NavBar from "../components/NavBar"
import Footer from '../components/Footer';
import ReactMarkdown from 'react-markdown'
import Image from 'next/image';
import ContactForm from '../components/ContactForm';

export default function Matt({seo, content, mattImage}) {
  console.log(mattImage)
  const MarkdownComponents = {
  p: (paragraph) => {
  const { node } = paragraph

  return <p>{paragraph.children}</p>
},

}

  return (
   <>
      <SEO seo={seo} />
      <NavBar />
      <div className={styles.container}>
          <ReactMarkdown
          children={content} 
          components={MarkdownComponents}/>
        
      </div>
      <ContactForm />
      <Footer />
    </>
  
  )
}

export async function getStaticProps() {
  const res = await fetch('https://salty-plateau-21551.herokuapp.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query Matt {
  mattsection {
    data {
      attributes {
          aboutmatt
        header
        homepageimage {
          data {
            attributes {
              width
              height
              url
            }
          }
        }
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
      }
    }
  }
}`,
    }),
  });

  const json = await res.json();

  return {
    props: { 
      content: json.data.mattsection.data.attributes.aboutmatt,
      seo: json.data.mattsection.data.attributes.seo[0],
      mattImage: json.data.mattsection.data.attributes.homepageimage.data.attributes, 
    },
    revalidate: 1,
  };
}