import Link from "next/link"
import ReviewCard from "../components/ReviewCard"
import styles from '../styles/Testimonials.module.css'
import NavBar from '../components/NavBar';
import { useInView } from 'react-intersection-observer';
import { reviewData, addGoogleReview } from "../data";
import SEO from "../components/SEO";
import Footer from "../components/Footer";

export default function Testimonials({seo, header, subheader, reviews}) {
     const { ref, inView } = useInView({
    threshold: 0.5,
  });

  console.log(seo)
  return (
      <>
      <SEO seo={seo}/>
               <NavBar inView={inView} />
          <div className={styles.container}>
     
        <h1 className={styles.title}>{header}</h1>
        <p className={styles.text}>
      {subheader}
            </p>
          
        <div className={styles.testimonials}>
         {reviews.map((review, idx) => (
             <>
            <ReviewCard
              key={idx}
              author={review.attributes.author}
              image={review.attributes.image.data.attributes.url}
              stars={review.attributes.rating}
              content={review.attributes.review}
         /> 
         <div className={styles.divider}></div>
         </>))}
         </div>
           <p className={styles.google}>
                Have you made a record here at Loveless Studio??<br /><Link href={addGoogleReview}><a className={styles.a}>Tell people  about the session on Google.</a></Link>
                </p>
        </div>
        <Footer />
        </>

  )
}

export async function getStaticProps() {
  const res = await fetch('https://salty-plateau-21551.herokuapp.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query Reviews {
          testimonialspage {
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
      }
    }
  }      
  reviews {
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
          }`,
    }),
  });

  const json = await res.json();

  return {
    props: {
      reviews: json.data.reviews.data,
      header: json.data.testimonialspage.data.attributes.header,
      subheader: json.data.testimonialspage.data.attributes.subheader,
      seo: json.data.testimonialspage.data.attributes.seo[0],
    },
    revalidate: 1,
  };
}
