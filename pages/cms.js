import Button from "../components/Button";
import styles from '../styles/404.module.css';


export default function Cms() {
  return (
    <div className={styles.container}>
        
            <a target="_blank" href="https://salty-plateau-21551.herokuapp.com/admin/" rel="noopener noreferrer">
                        <Button text='Log in to manage your content'/>
            </a>
        

    </div>

  )
}
