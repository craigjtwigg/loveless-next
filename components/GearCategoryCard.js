import styles from '../styles/GearCategoryCard.module.css';

export default function GearCategoryCard(props) {
  return (
    <div className={styles.container}>
        <div className={styles.flex}>
            <h2 className={styles.title}>{props.category}</h2></div>
      
    </div>
  );
}
