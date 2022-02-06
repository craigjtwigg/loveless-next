import { reviewData } from '../data';
import Image from 'next/image';
import styles from '../styles/ReviewCard.module.css';
import Star from '../public/assets/star.png';

export default function Review(props) {
  let stars = Array(props.stars).fill(props.stars);

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.imgWrapper}>
        <Image
          className={styles.reviewImg}
          src={props.image}
          alt={props.author}
          layout="fill"
        />
      </div>
      <div className={styles.stars}>
        {stars.map((star) => (
          <div key={props.author} className={styles.starWrapper}>
            <Image src={Star} alt={'Star rating for Loveless Studio'} />
          </div>
        ))}
      </div>
      <div className={styles.reviewAuthor}>
        <p>{props.author}</p>
      </div>
      <div className={styles.reviewContent}>
        {' '}
        <q>{props.content}</q>
      </div>
    </div>
  );
}
