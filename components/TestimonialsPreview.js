import { reviewData } from '../data';
import { useRef } from 'react';
import styles from '../styles/TestimonialsPreview.module.css';
import ReviewCard from './ReviewCard';
import Carousel from 'react-elastic-carousel';

export default function Testimonials({reviews}) {
  const itemsPerPage = 1;

  const carouselRef = useRef(null);
  const totalPages = Math.ceil(reviews.length / itemsPerPage);
  let resetTimeout;

  return (
    <div id="testimonials" className={styles.container}>
      <h2 className={styles.title}>
        What previous clients have to say...
      </h2>
      <Carousel
        ref={carouselRef}
        enableAutoPlay={true}
        showArrows={false}
        autoPlaySpeed={6000}
        itemsToShow={itemsPerPage}
        onNextEnd={({ index }) => {
          if (index + 1 === totalPages) {
            if (carouselRef?.current?.goTo) {
              resetTimeout = setTimeout(() => {
                if (carouselRef?.current?.goTo) {
                  carouselRef.current.goTo(0);
                }
              }, 6000);
            }
          }
        }}
      >
        {reviews.map((review, idx) => (
          <>
            <ReviewCard
              key={idx}
              author={review.attributes.author}
              image={review.attributes.image.data.attributes.url}
              stars={review.attributes.rating}
              content={review.attributes.review}
            />
          </>
        ))}
      </Carousel>
    </div>
  );
}
