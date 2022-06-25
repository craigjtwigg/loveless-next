import styles from '../styles/Button.module.css'

export default function Button({form, text, alternate, small}) {
  return (
    <button type={form ? "submit" : `button`} className={small ? styles.small : alternate ? styles.alt : styles.button}>{text}</button>
  )
}
