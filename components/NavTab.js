import styles from '../styles/NavTab.module.css'
import { Link } from 'react-scroll'

export default function NavTab({section}) {

    const reference = section.toLowerCase()

    return (<>
     <Link to={reference} spy={true} smooth={true}>
                    <div className={styles.tab}>
            <p>{section}</p>
        </div>
    
        </Link>
    </>
       
    )
}
