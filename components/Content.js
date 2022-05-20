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

export default function Content({mapsection, overview, labels, labellogos, reviews, matt, showreelvideo}) {
  return (
    <>
      <Intro overview={overview} showreelvideo={showreelvideo}/>

      <ShowreelPreview labels={labels} labellogos={labellogos}/>

      <TestimonialsPreview reviews={reviews}/>

      {/* <GearPreview /> */}
      <FaqPreview mapsection={mapsection}/>
      <MattPreview matt={matt}/>
      <ContactForm />
    </>
  );
}
