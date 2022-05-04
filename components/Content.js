import Nav from './Nav';
import ShowreelPreview from './ShowreelPreview';
import styles from '../styles/Content.module.css';
import TestimonialsPreview from './TestimonialsPreview';
import Intro from './Intro';
import GearPreview from './GearPreview';
import ContactForm from './ContactForm';
import FaqPreview from './FaqPreview';
import AudioPlayer from './AudioPlayer';
import MattPreview from './MattPreview';

export default function Content({matt, showreelvideo}) {
  return (
    <>
      <Intro showreelvideo={showreelvideo}/>

      <ShowreelPreview />

      <TestimonialsPreview />

      {/* <GearPreview /> */}
      <FaqPreview />
      <MattPreview matt={matt}/>
      <ContactForm />
    </>
  );
}
