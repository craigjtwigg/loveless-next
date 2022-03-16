import styles from '../styles/GearCategoryCard.module.css';
import guitars from '../public/assets/guitars-1.jpg'
import pedals from '../public/assets/pedalimage.jpg'
import { Link } from 'react-scroll'

export default function GearCategoryCard(props) {
  return (
       <Link to={props.category} spy={true} smooth={true}>
    <div className={styles.container}>
      <div className={styles.flex}>
        <h2 className={styles.title}>{props.category}</h2>
      </div>
    </div>
    </Link>
  );
}
