import Nav from './Nav'
import Showreel from './Showreel';
import styles from '../styles/Content.module.css';
import Review from './Review';
import Testimonials from './Testimonials';

export default function Content() {
    return (
        <div className={styles.content}>
            <Showreel />
            <Testimonials />
        </div>
    )
}
