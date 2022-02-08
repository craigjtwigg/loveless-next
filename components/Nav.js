import NavTab from './NavTab';
import styles from '../styles/Nav.module.css';

export default function Nav(props) {
  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <NavTab reference={props.showreelRef} section="showreel" />
        <NavTab section="gear" />
        <NavTab section="testimonials" />
        <NavTab section="faq" />
      </nav>
    </div>
  );
}
