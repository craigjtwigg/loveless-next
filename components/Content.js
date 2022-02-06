import Nav from './Nav'
import ShowreelPreview from './ShowreelPreview';
import styles from '../styles/Content.module.css';
import TestimonialsPreview from './TestimonialsPreview';
import Intro from './Intro';
import GearPreview from './GearPreview';
import ContactForm from './ContactForm';


export default function Content(props) {
    return (
        <div className={styles.content}>
            <Intro />
            <ShowreelPreview showReelRef={props.showReelRef}/>
            <TestimonialsPreview />
            <GearPreview />
            <ContactForm />
        </div>
    )
}
