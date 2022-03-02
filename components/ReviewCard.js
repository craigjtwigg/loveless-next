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
        {stars.map((star, idx) => (
          <div key={idx} className={styles.starWrapper}>
            <Image src={Star} alt={'Star rating for Loveless Studio'} />
          </div>
        ))}
      </div>
      <div className={styles.reviewAuthor}>
      {props.author}
      </div>
      <div className={styles.reviewContent}>
        {' '}
        <q>{props.content}</q>
      </div>
    </div>
  );
}
