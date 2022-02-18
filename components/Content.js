import Nav from './Nav'
import ShowreelPreview from './ShowreelPreview';
import styles from '../styles/Content.module.css';
import TestimonialsPreview from './TestimonialsPreview';
import Intro from './Intro';
import GearPreview from './GearPreview';
import ContactForm from './ContactForm';
import FaqPreview from './FaqPreview';
import AudioPlayer from './AudioPlayer';


export default function Content(props) {
    return (<> 
    <Intro />
    <div className={styles.contentTop}>
            
            <ShowreelPreview/>
           
        </div>
        <div className={styles.contentGap}>
             <TestimonialsPreview />
           
            
        </div>

        <div className={styles.contentBottom}>
             <GearPreview />
            <FaqPreview />
            <ContactForm />
        </div>
        <div className={styles.audio}>
        <AudioPlayer />
      </div>
    </>
       
    )
}
