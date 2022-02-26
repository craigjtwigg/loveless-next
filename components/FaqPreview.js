import { faqData } from "../data";
import FaqCard from "./FaqCard";
import styles from '../styles/FaqPreview.module.css';
import Map from "./Map";

export default function faqPreview() {
      const location = {
  address: 'Loveless Studio, Riverside Mill, Greenfield Road, Colne, BB8 9PE',
  lat: 53.853718305507952,
  lng: -2.1846619886016000,

   
}
  return ( <section id='faq' className={styles.container}>
      <Map location={location} zoomLevel={17}/>

  </section>
  )
}
