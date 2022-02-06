import { faqData } from "../data";
import FaqCard from "./FaqCard";
import styles from '../styles/FaqPreview.module.css';

export default function faqPreview() {
  return ( <section id='faq' className={styles.container}>
      {
          faqData.map((faq,idx) => (
              <FaqCard key={idx} question={faq.q} answer={faq.a}/>
          ))
      }
  </section>
  )
}
