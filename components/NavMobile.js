import styles from '../styles/NavMobile.module.css'
import Nav from './Nav'

export default function NavMobile(props) {
  return (
    <>
    <div className={styles.vhs}>
     <nav className={props.isActive ? styles.container : styles.hidden}>
        <Nav />
     </nav>
    </div>
    </>
  )
}
