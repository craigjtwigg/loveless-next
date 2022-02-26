import styles from '../styles/Button.module.css'

export default function Button({text, alternate}) {
  return (
    <button className={alternate ? styles.alt : styles.button}>{text}</button>
  )
}
