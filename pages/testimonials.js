import Link from "next/link"
import ReviewCard from "../components/ReviewCard"
import styles from '../styles/Testimonials.module.css'
import NavBar from '../components/NavBar';
import { useInView } from 'react-intersection-observer';
import { reviewData, addGoogleReview } from "../data";
import Footer from "../components/Footer";

export default function Testimonials({reviews}) {
     const { ref, inView } = useInView({
    threshold: 0.5,
  });

  console.log(reviews)
  return (
      <>
               <NavBar inView={inView} />
          <div className={styles.container}>
     
        <h1 className={styles.title}>testimonials</h1>
        <p className={styles.text}>
       As a producer delivering unique recordings that meet the needs and tastes of each artist is the top priority - please take a moment to read what some of my clients have had to say about their experiences at the studio.
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
    },
    revalidate: 1,
  };
}
