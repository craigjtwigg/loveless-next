import styles from '../styles/NavTab.module.css'

export default function NavTab({section}) {
    return (
        <div className={styles.tab}>
            <p>{section}</p>
        </div>
    )
}
