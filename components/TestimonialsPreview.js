import { reviewData } from '../data';
import { useRef } from 'react';
import styles from '../styles/TestimonialsPreview.module.css';
import ReviewCard from './ReviewCard';
import Carousel from 'react-elastic-carousel';

export default function Testimonials() {
  const itemsPerPage = 1;

  const carouselRef = useRef(null);
  const totalPages = Math.ceil(reviewData.length / itemsPerPage);
  let resetTimeout;

  return (
    <div id="testimonials" className={styles.container}>
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
        {reviewData.map((review, idx) => (
          <>
            <ReviewCard
              key={idx}
              author={review.author}
              image={review.imageSrc}
              stars={review.stars}
              content={review.review}
            />
          </>
        ))}
      </Carousel>
    </div>
  );
}
