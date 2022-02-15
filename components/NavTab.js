import styles from '../styles/NavTab.module.css'
import { Link } from 'react-scroll'

export default function NavTab({section}) {

    const reference = section.toLowerCase()
    const id = `styles.${section}`
    return (<>
     <Link to={reference} spy={true} smooth={true}>
                    <div className={styles.tab} style={{borderRadius: section === 'showreel'? '50px 0 0 50px' : section === 'faq'? '0 50px 50px 0' : null}}>
            <p>{section}</p>
        </div>
    
        </Link>
    </>
       
    )
}
