import styles from '../styles/NavTab.module.css'
import Link from 'next/link'
export default function NavTab({section}) {

    const reference = section.toLowerCase()
    const id = `styles.${section}`
    return (<>
     <Link href={`/${section}`}>
                    <div className={styles.tab} style={{borderRadius: section === 'showreel'? '50px 0 0 50px' : section === 'faq'? '0 50px 50px 0' : null}}>
            <a><p>{section}</p></a>
        </div>
    
        </Link>
    </>
       
    )
}
