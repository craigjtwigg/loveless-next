import Link from "next/link"
import ReviewCard from "../components/ReviewCard"
import styles from '../styles/Testimonials.module.css'
import NavBar from '../components/NavBar';
import { useInView } from 'react-intersection-observer';
import { reviewData, addGoogleReview } from "../data";

export default function Testimonials() {
     const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
      <>
               <NavBar inView={inView} />
          <div className={styles.container}>
     
        <h1 className={styles.title}>testimonials</h1>
        <p className={styles.text}>
       As a producer delivering unique recordings that meet the needs and tastes of each artist is the top priority - please take a moment to read what some of my clients have had to say about their experiences at the studio.
            </p>
            <p className={styles.google}>
                Have you made a record here at Loveless Studio? <Link href={addGoogleReview}><a className={styles.a}>Tell people  about the session on Google.</a></Link>
                </p>
        <div className={styles.testimonials}>
         {reviewData.map((review, idx) => (
             <>
            <ReviewCard
              key={idx}
              author={review.author}
              image={review.imageSrc}
              stars={review.stars}
              content={review.review}
         /> 
         <div className={styles.divider}></div>
         </>))}
         </div>
        </div></>

  )
}
