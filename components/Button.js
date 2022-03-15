import styles from '../styles/Button.module.css'

export default function Button({text, alternate, small}) {
  return (
    <button className={small ? styles.small : alternate ? styles.alt : styles.button}>{text}</button>
  )
}
