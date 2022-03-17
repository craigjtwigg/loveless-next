import Link from "next/link"
import ReviewCard from "../components/ReviewCard"
import styles from '../styles/Testimonials.module.css'
import NavBar from '../components/NavBar';
import { useInView } from 'react-intersection-observer';
import { reviewData } from "../data";

export default function Testimonials() {
     const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
      <>
               <NavBar inView={inView} />
          <div className={styles.container}>
     
        <h1 className={styles.title}>testimonials</h1>
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
