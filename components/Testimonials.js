import { reviewData } from '../data';
import { useRef } from 'react';
import styles from '../styles/Testimonials.module.css';
import Review from './Review';
import Carousel from 'react-elastic-carousel';

export default function Testimonials() {
  const itemsPerPage = 1

const carouselRef = useRef(null);
const totalPages = Math.ceil(reviewData.length / itemsPerPage)
let resetTimeout;

  return (
    <div className={styles.container}>
      <Carousel
        ref={carouselRef}
    enableAutoPlay={true}
    showArrows={false}
    autoPlaySpeed={3000}
    itemsToShow={itemsPerPage}
    onNextEnd={({ index }) => {
        
        if (index + 1 === totalPages) {
            if (carouselRef?.current?.goTo) {
                resetTimeout = setTimeout(() => {
                    if (carouselRef?.current?.goTo) {
                        carouselRef.current.goTo(0)
                    }
                }, 3000)
            }
        }
    }}
      >
        {reviewData.map((review) => (
          <>
            <Review
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
